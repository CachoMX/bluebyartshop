import { NextResponse } from "next/server";
import type Stripe from "stripe";
import type { SubscriptionTierKey } from "@/lib/catalog";
import {
  getCustomerByStripeCustomerId,
  getSubscriptionByStripeSubscriptionId,
  upsertCustomer,
  upsertOrder,
  upsertSubscription,
} from "@/lib/storefront";
import {
  getStripeClient,
  getStripeWebhookSecret,
  isStripeConfigured,
  isStripeWebhookConfigured,
} from "@/lib/stripe";

const isSubscriptionTierKey = (
  value: string | undefined,
): value is SubscriptionTierKey => {
  return (
    value === "mini-artist" ||
    value === "creative-explorer" ||
    value === "master-creator"
  );
};

type StripeObjectWithId = {
  id: string;
};

type StripeInvoiceWithLegacySubscription = Stripe.Invoice & {
  subscription?: string | StripeObjectWithId | null;
};

const resolveStripeId = (
  value: string | StripeObjectWithId | null,
) => {
  return typeof value === "string" ? value : value?.id ?? null;
};

const resolveInvoiceSubscriptionId = (invoice: Stripe.Invoice) => {
  return (
    resolveStripeId(invoice.parent?.subscription_details?.subscription ?? null) ??
    resolveStripeId(
      (invoice as StripeInvoiceWithLegacySubscription).subscription ?? null,
    )
  );
};

const toIso = (value: number | null | undefined) =>
  value ? new Date(value * 1000).toISOString() : null;

const getTierKeyFromMetadata = (metadata: Record<string, string> | null | undefined) => {
  const tierKey = metadata?.tierKey;
  return isSubscriptionTierKey(tierKey) ? tierKey : null;
};

const getUserIdForCustomer = async (customerId: string | null) => {
  if (!customerId) {
    return null;
  }

  const customer = await getCustomerByStripeCustomerId(customerId);
  return customer?.user_id ?? null;
};

const resolveAuthoritativeUserId = async ({
  customerId,
  fallbackUserId,
}: {
  customerId: string | null;
  fallbackUserId?: string | null;
}) => {
  const linkedUserId = await getUserIdForCustomer(customerId);
  return linkedUserId ?? fallbackUserId ?? null;
};

const syncSubscriptionRecord = async (
  subscription: Stripe.Subscription,
  fallbackUserId: string | null = null,
) => {
  const customerId = resolveStripeId(subscription.customer);
  const primaryItem = subscription.items.data[0];
  const existingSubscription = await getSubscriptionByStripeSubscriptionId(
    subscription.id,
  );
  const userId = await resolveAuthoritativeUserId({
    customerId,
    fallbackUserId: fallbackUserId ?? existingSubscription?.user_id ?? null,
  });

  return upsertSubscription({
    user_id: userId,
    stripe_subscription_id: subscription.id,
    stripe_customer_id: customerId,
    stripe_price_id: subscription.items.data[0]?.price.id ?? null,
    tier_key: getTierKeyFromMetadata(subscription.metadata),
    status: subscription.status,
    current_period_start: toIso(primaryItem?.current_period_start),
    current_period_end: toIso(primaryItem?.current_period_end),
    cancel_at_period_end: subscription.cancel_at_period_end,
    canceled_at: toIso(subscription.canceled_at),
    metadata: {
      collection_method: subscription.collection_method,
      price_count: subscription.items.data.length,
    },
  });
};

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return new NextResponse("Stripe is not configured.", { status: 503 });
  }

  if (!isStripeWebhookConfigured()) {
    return new NextResponse("Stripe webhook is not configured.", { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new NextResponse("Missing Stripe signature.", { status: 400 });
  }

  const body = await request.text();
  const stripe = getStripeClient();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      getStripeWebhookSecret(),
    );
  } catch {
    return new NextResponse("Invalid Stripe signature.", { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "subscription") {
          break;
        }

        const customerId = resolveStripeId(session.customer);
        const sessionUserId = session.metadata?.userId ?? session.client_reference_id ?? null;
        const userId = await resolveAuthoritativeUserId({
          customerId,
          fallbackUserId: sessionUserId,
        });

        if (sessionUserId && customerId && userId === sessionUserId) {
          await upsertCustomer({
            stripeCustomerId: customerId,
            userId: sessionUserId,
          });
        }

        await upsertOrder({
          amount_total: session.amount_total ?? null,
          currency: session.currency ?? "usd",
          metadata: {
            payment_status: session.payment_status,
            tier_key: session.metadata?.tierKey ?? null,
          },
          order_type: "subscription",
          status: session.payment_status || session.status || "completed",
          stripe_checkout_session_id: session.id,
          stripe_customer_id: customerId,
          user_id: userId,
        });

        const subscriptionId = resolveStripeId(session.subscription);
        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          await syncSubscriptionRecord(subscription, userId);
        }
        break;
      }

      case "invoice.paid":
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = resolveInvoiceSubscriptionId(invoice);
        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          await syncSubscriptionRecord(subscription);
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await syncSubscriptionRecord(subscription);
        break;
      }

      case "customer.updated": {
        const customer = event.data.object as Stripe.Customer;
        const userId = await getUserIdForCustomer(customer.id);

        if (userId) {
          await upsertCustomer({
            stripeCustomerId: customer.id,
            userId,
          });
        }
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.error("Stripe webhook handling failed.", error);
    return new NextResponse("Stripe webhook handling failed.", { status: 500 });
  }

  return NextResponse.json({ received: true });
}
