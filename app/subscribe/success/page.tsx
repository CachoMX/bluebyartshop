import Link from "next/link";
import { subscriptionTiers } from "@/lib/catalog";
import { getStripeClient, isStripeConfigured } from "@/lib/stripe";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const tierNameByKey = Object.fromEntries(
  subscriptionTiers.map((tier) => [tier.key, tier.name]),
);

export default async function SubscribeSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id ?? null;
  const supabase =
    isSupabaseConfigured() ? await createSupabaseServerClient() : null;
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;
  const session =
    sessionId && user && isStripeConfigured()
      ? await getStripeClient()
          .checkout.sessions.retrieve(sessionId)
          .then((checkoutSession) => {
            const ownerUserId =
              checkoutSession.metadata?.userId ??
              checkoutSession.client_reference_id ??
              null;

            return ownerUserId === user.id ? checkoutSession : null;
          })
          .catch(() => null)
      : null;
  const hasVerifiedSession = Boolean(session);

  const tierName =
    (session?.metadata?.tierKey
      ? tierNameByKey[session.metadata.tierKey]
      : null) ?? "subscription";
  const signInHref = sessionId
    ? `/account/sign-in?next=${encodeURIComponent(
        `/subscribe/success?session_id=${sessionId}`,
      )}`
    : "/account/sign-in?next=%2Faccount";

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-6 text-7xl">{hasVerifiedSession ? "🎉" : "🧾"}</div>
        <h1
          className="text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          {hasVerifiedSession
            ? "Your Checkout Was Successful"
            : "We Received Your Checkout Return"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "#64748B" }}>
          {hasVerifiedSession
            ? `Thanks for choosing the ${tierName}. Your account dashboard will update as soon as the Stripe webhook finishes syncing your subscription.`
            : sessionId && !user
              ? "Sign in with the same email you used at checkout to confirm your subscription status from your account dashboard."
              : sessionId
                ? "We could not confirm this checkout session for the signed-in account. Open your account dashboard to verify your current subscription status."
                : "Open your account dashboard to confirm your subscription status. Detailed checkout confirmations appear here after a verified Stripe return."}
        </p>

        {hasVerifiedSession && user?.email ? (
          <p
            className="mx-auto mt-6 inline-flex rounded-full px-4 py-2 text-sm"
            style={{ backgroundColor: "#ECFDF5", color: "#166534" }}
          >
            Signed in as {user.email}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={user ? "/account" : signInHref} className="btn-primary">
            {user ? "Open My Account" : "Sign In to Confirm"}
          </Link>
          <Link href="/shop" className="btn-outline">
            Keep Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
