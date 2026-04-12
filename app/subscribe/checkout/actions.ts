"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  subscriptionTiers,
  type SubscriptionTierKey,
} from "@/lib/catalog";
import { resolveAppUrlFromHeaders } from "@/lib/app-url";
import {
  getCustomerByUserId,
  getSubscriptionsByUserId,
  upsertCustomer,
  upsertProfile,
} from "@/lib/storefront";
import {
  getStripeClient,
  getStripePriceId,
  hasStripeSubscriptionPriceConfig,
  isStripeConfigured,
} from "@/lib/stripe";
import { isManagedSubscriptionStatus } from "@/lib/subscriptions";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const subscriptionTierKeys = subscriptionTiers.map(
  (tier) => tier.key,
) as [SubscriptionTierKey, ...SubscriptionTierKey[]];

const checkoutInputSchema = z.object({
  tierKey: z.enum(subscriptionTierKeys),
});

const checkoutErrorRedirect = (tierKey: SubscriptionTierKey, reason: string) => {
  return `/subscribe/checkout?tier=${tierKey}&checkout_error=${reason}`;
};

export const startSubscriptionCheckoutAction = async (formData: FormData) => {
  const parsedInput = checkoutInputSchema.safeParse({
    tierKey: formData.get("tierKey"),
  });

  if (!parsedInput.success) {
    redirect("/subscribe?checkout_error=invalid_tier");
  }

  const { tierKey } = parsedInput.data;

  if (!isStripeConfigured() || !hasStripeSubscriptionPriceConfig()) {
    redirect(checkoutErrorRedirect(tierKey, "stripe_not_ready"));
  }

  if (!isSupabaseAdminConfigured()) {
    redirect(checkoutErrorRedirect(tierKey, "database_setup"));
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/account/sign-in?next=${encodeURIComponent(
        `/subscribe/checkout?tier=${tierKey}`,
      )}`,
    );
  }

  if (!user.email) {
    redirect(checkoutErrorRedirect(tierKey, "missing_email"));
  }

  let checkoutUrl: string | null = null;
  let hasExistingManagedSubscription = false;

  try {
    await upsertProfile({
      userId: user.id,
      email: user.email,
      fullName:
        user.user_metadata?.full_name ??
        user.user_metadata?.name ??
        user.user_metadata?.first_name ??
        null,
    });

    const existingSubscription = (
      await getSubscriptionsByUserId(user.id)
    ).find((subscription) => isManagedSubscriptionStatus(subscription.status));

    hasExistingManagedSubscription = Boolean(existingSubscription);
    if (!hasExistingManagedSubscription) {
      const stripe = getStripeClient();
      const existingCustomer = await getCustomerByUserId(user.id);
      const customer =
        existingCustomer ??
        (await (async () => {
          const stripeCustomer = await stripe.customers.create({
            email: user.email,
            metadata: {
              userId: user.id,
            },
            name:
              user.user_metadata?.full_name ??
              user.user_metadata?.name ??
              undefined,
          });

          return upsertCustomer({
            stripeCustomerId: stripeCustomer.id,
            userId: user.id,
          });
        })());

      const stripeSubscriptions = await stripe.subscriptions.list({
        customer: customer.stripe_customer_id,
        limit: 10,
        status: "all",
      });
      hasExistingManagedSubscription = stripeSubscriptions.data.some((subscription) =>
        isManagedSubscriptionStatus(subscription.status),
      );

      if (!hasExistingManagedSubscription) {
        const headerStore = await headers();
        const appUrl = resolveAppUrlFromHeaders(headerStore);
        const idempotencyWindow = Math.floor(Date.now() / (5 * 60 * 1000));
        const checkoutSession = await stripe.checkout.sessions.create({
          allow_promotion_codes: true,
          cancel_url: `${appUrl}/subscribe/cancel?tier=${tierKey}`,
          client_reference_id: user.id,
          customer: customer.stripe_customer_id,
          line_items: [
            {
              price: getStripePriceId(tierKey),
              quantity: 1,
            },
          ],
          metadata: {
            tierKey,
            userId: user.id,
          },
          mode: "subscription",
          success_url: `${appUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
          subscription_data: {
            metadata: {
              tierKey,
              userId: user.id,
            },
          },
        }, {
          idempotencyKey: `subscription-checkout:${user.id}:${tierKey}:${idempotencyWindow}`,
        });

        checkoutUrl = checkoutSession.url ?? null;
      }
    }
  } catch {
    redirect(checkoutErrorRedirect(tierKey, "session_failed"));
  }

  if (hasExistingManagedSubscription) {
    redirect(checkoutErrorRedirect(tierKey, "subscription_exists"));
  }

  if (!checkoutUrl) {
    redirect(checkoutErrorRedirect(tierKey, "session_missing_url"));
  }

  redirect(checkoutUrl);
};
