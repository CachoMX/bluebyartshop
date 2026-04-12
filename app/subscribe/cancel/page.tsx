import Link from "next/link";
import { subscriptionTiers } from "@/lib/catalog";

const resolveTier = (tierKey?: string | null) =>
  subscriptionTiers.find((tier) => tier.key === tierKey) ??
  subscriptionTiers.find((tier) => tier.popular) ??
  subscriptionTiers[0];

export default async function SubscribeCancelPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const params = await searchParams;
  const tier = resolveTier(params.tier);

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-6 text-7xl">🧾</div>
        <h1
          className="text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Checkout Was Canceled
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "#64748B" }}>
          No charge was made. You can return to checkout for the {tier.name} at
          any time, or compare the other subscription tiers first.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`/subscribe/checkout?tier=${tier.key}`}
            className="btn-primary"
          >
            Try Checkout Again
          </Link>
          <Link href="/subscribe" className="btn-outline">
            Compare Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
