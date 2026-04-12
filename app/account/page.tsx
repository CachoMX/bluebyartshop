import Link from "next/link";
import { PendingSubmitButton } from "@/components/PendingSubmitButton";
import { openBillingPortalAction, signOutAction } from "@/app/account/actions";
import { subscriptionTiers } from "@/lib/catalog";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isStripeConfigured } from "@/lib/stripe";
import {
  isSupabaseAdminConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase/config";
import {
  isHealthySubscriptionStatus,
  isManagedSubscriptionStatus,
  needsSubscriptionAttention,
} from "@/lib/subscriptions";

const displayDate = (value: string | null) => {
  if (!value) {
    return "Not available yet";
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(value));
};

const formatOrderAmount = (amountTotal: number | null, currency: string) => {
  if (amountTotal === null) {
    return "Pending amount";
  }

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amountTotal / 100);
  } catch {
    return `$${(amountTotal / 100).toFixed(2)}`;
  }
};

const tierNameByKey = Object.fromEntries(
  subscriptionTiers.map((tier) => [tier.key, tier.name]),
);

const billingMessageByKey: Record<string, string> = {
  missing_customer:
    "We could not find a Stripe customer record for this account yet.",
  not_configured:
    "Stripe billing or server-side customer sync is not fully configured in this environment yet.",
};

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ billing?: string }>;
}) {
  const params = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1
          className="mb-4 text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Account Setup Needed
        </h1>
        <p className="mb-6 text-base" style={{ color: "#64748B" }}>
          Add your Supabase environment variables and run the included migration
          before the customer account dashboard can go live.
        </p>
        <Link href="/subscribe" className="btn-primary">
          Back to Plans
        </Link>
      </div>
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1
          className="mb-4 text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Sign In to Manage Your Account
        </h1>
        <p className="mb-8 text-base" style={{ color: "#64748B" }}>
          View active subscriptions, recent orders, and account details in one
          place.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/account/sign-in?next=%2Faccount" className="btn-primary">
            Sign In
          </Link>
          <Link href="/account/sign-up?next=%2Faccount" className="btn-outline">
            Create an Account
          </Link>
        </div>
      </div>
    );
  }

  const [profileResult, customerResult, subscriptionsResult, ordersResult] =
    await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
      supabase.from("customers").select("*").eq("user_id", user.id).maybeSingle(),
      supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
      supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
    ]);

  const databaseError =
    profileResult.error ??
    customerResult.error ??
    subscriptionsResult.error ??
    ordersResult.error;

  if (databaseError) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1
          className="mb-4 text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Finish Database Setup
        </h1>
        <p className="mb-4 text-base" style={{ color: "#64748B" }}>
          We could not load account data yet because the Supabase schema is not
          ready in this environment.
        </p>
        <p
          className="mx-auto mb-8 max-w-2xl rounded-2xl px-4 py-3 text-sm"
          style={{ backgroundColor: "#FFF4ED", color: "#9A3412" }}
        >
          Apply `supabase/migrations/202604110001_initial_storefront.sql` and
          reload this page.
        </p>
        <Link href="/subscribe" className="btn-primary">
          Back to Plans
        </Link>
      </div>
    );
  }

  const profile = profileResult.data;
  const customer = customerResult.data;
  const subscriptions = subscriptionsResult.data ?? [];
  const orders = ordersResult.data ?? [];
  const managedSubscription =
    subscriptions.find(
      (subscription) => isManagedSubscriptionStatus(subscription.status),
    ) ?? null;
  const subscriptionNeedsAttention = needsSubscriptionAttention(
    managedSubscription?.status,
  );
  const hasHealthySubscription = isHealthySubscriptionStatus(
    managedSubscription?.status,
  );
  const canOpenBillingPortal =
    isStripeConfigured() &&
    isSupabaseAdminConfigured() &&
    Boolean(customer?.stripe_customer_id);

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}>
            Your Account
          </p>
          <h1
            className="mt-4 text-4xl"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontWeight: 700,
            }}
          >
            Welcome back, {profile?.full_name?.split(" ")[0] ?? user.email}
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,255,255,0.86)" }}>
            Manage your subscription, reopen the Stripe billing portal, and
            review recent checkout activity from one dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {params.billing && billingMessageByKey[params.billing] ? (
          <div
            className="mb-6 rounded-2xl px-4 py-3 text-sm"
            style={{ backgroundColor: "#FFF4ED", color: "#9A3412" }}
          >
            {billingMessageByKey[params.billing]}
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="card p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2
                    className="text-2xl"
                    style={{
                      color: "#1E293B",
                      fontFamily:
                        "var(--font-fredoka-one), 'Fredoka One', cursive",
                    }}
                  >
                    Subscription Status
                  </h2>
                  <p style={{ color: "#64748B" }}>
                    {managedSubscription
                      ? subscriptionNeedsAttention
                        ? "We found a Stripe subscription record that needs attention before you start a new checkout."
                        : "Your current billing details are synced from Stripe."
                      : "You do not have a current subscription yet."}
                  </p>
                </div>
                <Link href="/subscribe" className="btn-outline">
                  View Plans
                </Link>
              </div>

              {managedSubscription ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div
                    className="rounded-2xl px-5 py-4"
                    style={{
                      backgroundColor: hasHealthySubscription ? "#EFF6FF" : "#FFF7ED",
                      color: hasHealthySubscription ? "#1E3A8A" : "#9A3412",
                    }}
                  >
                    <p className="text-sm font-semibold">
                      {hasHealthySubscription ? "Current plan" : "Stripe status"}
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      {tierNameByKey[managedSubscription.tier_key ?? ""] ??
                        "Subscription"}
                    </p>
                    <p className="mt-2 text-sm">
                      Status: {managedSubscription.status}
                    </p>
                  </div>
                  <div
                    className="rounded-2xl px-5 py-4"
                    style={{
                      backgroundColor: hasHealthySubscription ? "#ECFDF5" : "#FEF3C7",
                      color: hasHealthySubscription ? "#166534" : "#92400E",
                    }}
                  >
                    <p className="text-sm font-semibold">
                      {hasHealthySubscription ? "Next renewal" : "Current period"}
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      {displayDate(managedSubscription.current_period_end)}
                    </p>
                    <p className="mt-2 text-sm">
                      Cancel at period end:{" "}
                      {managedSubscription.cancel_at_period_end ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-2xl px-5 py-4"
                  style={{ backgroundColor: "#FFF7ED", color: "#9A3412" }}
                >
                  Start with the Creative Explorer plan if you want the fastest
                  path to checkout.
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {canOpenBillingPortal ? (
                  <form action={openBillingPortalAction}>
                    <PendingSubmitButton
                      label="Manage Billing in Stripe"
                      pendingLabel="Opening Billing Portal..."
                      className="btn-primary"
                    />
                  </form>
                ) : null}
                <form action={signOutAction}>
                  <PendingSubmitButton
                    label="Sign Out"
                    pendingLabel="Signing Out..."
                    className="btn-outline"
                  />
                </form>
              </div>

              {isStripeConfigured() &&
              customer?.stripe_customer_id &&
              !isSupabaseAdminConfigured() ? (
                <p className="mt-4 text-sm" style={{ color: "#9A3412" }}>
                  Add `SUPABASE_SERVICE_ROLE_KEY` to reopen the Stripe billing
                  portal from this dashboard.
                </p>
              ) : null}
            </div>

            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Recent Orders
              </h2>

              {orders.length === 0 ? (
                <p className="mt-4" style={{ color: "#64748B" }}>
                  Orders from Stripe checkout will appear here after your first
                  successful purchase.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl border px-4 py-4"
                      style={{ borderColor: "#E2E8F0" }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold" style={{ color: "#1E293B" }}>
                            {order.order_type === "subscription"
                              ? "Subscription checkout"
                              : order.product_slug ?? "One-time order"}
                          </p>
                          <p className="text-sm" style={{ color: "#64748B" }}>
                            {displayDate(order.created_at)}
                          </p>
                        </div>
                        <div className="text-sm" style={{ color: "#475569" }}>
                        {formatOrderAmount(order.amount_total, order.currency)}{" "}
                          · {order.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Profile
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold" style={{ color: "#1E293B" }}>
                    Email
                  </dt>
                  <dd style={{ color: "#64748B" }}>{profile?.email ?? user.email}</dd>
                </div>
                <div>
                  <dt className="font-semibold" style={{ color: "#1E293B" }}>
                    Name
                  </dt>
                  <dd style={{ color: "#64748B" }}>
                    {profile?.full_name ?? "Add your name in Supabase later."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold" style={{ color: "#1E293B" }}>
                    Customer record
                  </dt>
                  <dd style={{ color: "#64748B" }}>
                    {customer?.stripe_customer_id ?? "Created on first checkout"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Need Help?
              </h2>
              <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
                If your subscription status looks wrong after checkout, contact
                support and include the email address on this account so we can
                trace the Stripe event history.
              </p>
              <Link href="/contact" className="btn-outline mt-4 inline-flex">
                Contact Support
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
