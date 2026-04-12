"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { resolveAppUrlFromHeaders } from "@/lib/app-url";
import { getCustomerByUserId } from "@/lib/storefront";
import { getStripeClient, isStripeConfigured } from "@/lib/stripe";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const openBillingPortalAction = async () => {
  if (!isStripeConfigured() || !isSupabaseAdminConfigured()) {
    redirect("/account?billing=not_configured");
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account/sign-in?next=%2Faccount");
  }

  const customer = await getCustomerByUserId(user.id);
  if (!customer) {
    redirect("/account?billing=missing_customer");
  }

  const headerStore = await headers();
  const returnUrl = resolveAppUrlFromHeaders(headerStore);
  const stripe = getStripeClient();
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customer.stripe_customer_id,
    return_url: `${returnUrl}/account`,
  });

  redirect(portalSession.url);
};

export const signOutAction = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/");
};
