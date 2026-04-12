import Link from "next/link";
import { GtagFire } from "@/components/GtagFire";
import { PendingSubmitButton } from "@/components/PendingSubmitButton";
import { startSubscriptionCheckoutAction } from "@/app/subscribe/checkout/actions";
import { subscriptionTiers } from "@/lib/catalog";
import {
  isSupabaseAdminConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  hasStripeSubscriptionPriceConfig,
  isStripeConfigured,
} from "@/lib/stripe";
import {
  isHealthySubscriptionStatus,
  isManagedSubscriptionStatus,
  needsSubscriptionAttention,
} from "@/lib/subscriptions";

const authMessageByKey: Record<string, string> = {
  callback_failed:
    "Your email link was valid, but we could not finish the account sign-in flow. Please try again.",
  missing_code: "The sign-in link was incomplete. Please request a fresh email.",
};

const checkoutMessageByKey: Record<string, string> = {
  database_setup:
    "Apply the included Supabase migration before live checkout can create customer records.",
  missing_email:
    "Your account is missing an email address. Sign out and use a magic-link sign-in again.",
  session_failed:
    "We could not create your Stripe checkout session just now. Please try again.",
  session_missing_url:
    "Stripe did not return a hosted checkout URL. Please try again.",
  stripe_not_ready:
    "Stripe is not fully configured in this environment yet.",
  subscription_exists:
    "This account already has a Stripe subscription record. Open your account before starting another checkout.",
};

const resolveTier = (tierKey?: string | null) =>
  subscriptionTiers.find((tier) => tier.key === tierKey) ??
  subscriptionTiers.find((tier) => tier.popular) ??
  subscriptionTiers[0];

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{
    auth_error?: string;
    checkout_error?: string;
    tier?: string;
  }>;
}) {
  const params = await searchParams;
  const tier = resolveTier(params.tier);
  const checkoutPath = `/subscribe/checkout?tier=${tier.key}`;
  const setupIssues = [
    !isSupabaseConfigured()
      ? "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      : null,
    !isSupabaseAdminConfigured()
      ? "Add SUPABASE_SERVICE_ROLE_KEY for server-side data sync."
      : null,
    !isStripeConfigured() ? "Add STRIPE_SECRET_KEY." : null,
    !hasStripeSubscriptionPriceConfig()
      ? "Add the STRIPE_PRICE_* environment variables for all subscription tiers."
      : null,
  ].filter(Boolean) as string[];

  const supabase =
    isSupabaseConfigured() ? await createSupabaseServerClient() : null;
  const user = supabase
    ? (await supabase.auth.getUser()).data.user
    : null;

  const subscriptionsResult =
    supabase && user
      ? await supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
      : null;

  const databaseError = subscriptionsResult?.error ?? null;
  const managedSubscription =
    subscriptionsResult?.data?.find(
      (subscription) => isManagedSubscriptionStatus(subscription.status),
    ) ?? null;
  const subscriptionNeedsAttention = needsSubscriptionAttention(
    managedSubscription?.status,
  );
  const hasHealthySubscription = isHealthySubscriptionStatus(
    managedSubscription?.status,
  );

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}>
            Secure Checkout
          </p>
          <h1
            className="mt-4 text-4xl"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontWeight: 700,
            }}
          >
            Complete Your {tier.name} Plan
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,255,255,0.86)" }}>
            Sign in with email, create your Stripe-hosted checkout session, and
            manage future billing from your account dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
        <div className="card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: "#2563EB" }}>
            Selected Plan
          </p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-5xl">{tier.emoji}</span>
            <div>
              <h2
                className="text-3xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {tier.name}
              </h2>
              <p style={{ color: "#64748B" }}>{tier.description}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl px-5 py-4" style={{ backgroundColor: "#EFF6FF" }}>
            <p className="text-sm font-semibold" style={{ color: "#1D4ED8" }}>
              Monthly total
            </p>
            <p
              className="mt-2 text-4xl"
              style={{
                color: "#1E293B",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              ${tier.monthlyPrice.toFixed(2)}
              <span className="ml-2 text-base" style={{ color: "#64748B" }}>
                / month
              </span>
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {tier.features
              .filter((feature) => feature.included)
              .map((feature) => (
                <li key={feature.label} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#334155" }}>{feature.label}</span>
                </li>
              ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 text-sm" style={{ color: "#64748B" }}>
            <span>Stripe-hosted checkout</span>
            <span>Cancel anytime in your billing portal</span>
            <span>Email receipts included</span>
          </div>
        </div>

        <div className="space-y-6">
          {params.auth_error && authMessageByKey[params.auth_error] ? (
            <div
              className="rounded-2xl px-4 py-3 text-sm"
              style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
            >
              {authMessageByKey[params.auth_error]}
            </div>
          ) : null}

          {params.checkout_error && checkoutMessageByKey[params.checkout_error] ? (
            <div
              className="rounded-2xl px-4 py-3 text-sm"
              style={{ backgroundColor: "#FFF4ED", color: "#9A3412" }}
            >
              {checkoutMessageByKey[params.checkout_error]}
            </div>
          ) : null}

          {setupIssues.length > 0 ? (
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Finish Environment Setup
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                The checkout flow is wired, but this environment still needs:
              </p>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "#334155" }}>
                {setupIssues.map((issue) => (
                  <li key={issue}>• {issue}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                After that, apply `supabase/migrations/202604110001_initial_storefront.sql`.
              </p>
            </div>
          ) : databaseError ? (
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Apply the Storefront Migration
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                We could not read subscription records yet because the Supabase
                tables have not been created in this environment.
              </p>
              <p
                className="mt-4 rounded-2xl px-4 py-3 text-sm"
                style={{ backgroundColor: "#FFF4ED", color: "#9A3412" }}
              >
                Run `supabase/migrations/202604110001_initial_storefront.sql`
                and reload checkout.
              </p>
            </div>
          ) : !user ? (
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Sign In Before Checkout
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                We use your account to connect the Stripe checkout session back
                to your subscription dashboard.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/account/sign-in?next=${encodeURIComponent(checkoutPath)}`}
                  className="btn-primary"
                >
                  Sign In
                </Link>
                <Link
                  href={`/account/sign-up?next=${encodeURIComponent(checkoutPath)}`}
                  className="btn-outline"
                >
                  Create Account
                </Link>
              </div>
            </div>
          ) : managedSubscription ? (
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {hasHealthySubscription
                  ? "Subscription Already Active"
                  : "Subscription Needs Attention"}
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                {subscriptionNeedsAttention
                  ? "Your account already has a Stripe subscription record that should be reviewed before starting another checkout."
                  : "Your account already has an active Stripe subscription."}{" "}
                Current status: `{managedSubscription.status}`.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/account" className="btn-primary">
                  Open My Account
                </Link>
                <Link href="/subscribe" className="btn-outline">
                  Compare Plans Again
                </Link>
              </div>
            </div>
          ) : (
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Ready to Pay
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                Signed in as <strong>{user.email}</strong>. Stripe will take
                care of the secure payment step next.
              </p>

              <GtagFire event="beginCheckout" value={tier.monthlyPrice} />
              <form action={startSubscriptionCheckoutAction} className="mt-6">
                <input type="hidden" name="tierKey" value={tier.key} />
                <PendingSubmitButton
                  label={`Continue to Stripe for $${tier.monthlyPrice.toFixed(2)}/mo`}
                  pendingLabel="Creating Secure Checkout..."
                  className="btn-primary w-full justify-center"
                />
              </form>

              <p className="mt-4 text-xs" style={{ color: "#64748B" }}>
                Your order confirmation page is for display only. Subscription
                records are finalized from Stripe webhooks.
              </p>
            </div>
          )}

          <div className="card p-6">
            <h2
              className="text-2xl"
              style={{
                color: "#1E293B",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Need a Different Option?
            </h2>
            <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
              Wholesale and party-kit orders still route through our contact
              team so we can quote the right package size.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-outline">
                Contact Sales
              </Link>
              <Link href="/subscribe" className="btn-outline">
                Back to Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
