import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import {
  subscriptionTiers,
  subscriptionTrustItems,
} from "@/lib/catalog";
import {
  BRAND_LOGO_ALT,
  BRAND_NAME,
  SITE_URL,
  SUBSCRIPTION_OG_IMAGE_PATH,
} from "@/lib/brand";

const tierPriceSummary = subscriptionTiers
  .map((tier) => `${tier.name} ($${tier.monthlyPrice.toFixed(2)})`)
  .join(", ");

export const metadata: Metadata = {
  title: "Subscribe to Kids Art Kits | Monthly Art Box for Children",
  description: `Start your child's monthly art subscription today. Choose from ${tierPriceSummary}. Non-toxic art kits for kids 5–12. Cancel anytime. Ships in 2–3 days.`,
  alternates: {
    canonical: `${SITE_URL}/subscribe`,
  },
  openGraph: {
    title: `Kids Art Subscription Box | ${BRAND_NAME} - Choose Your Plan`,
    description:
      "Monthly art boxes for kids 5–12 starting at $19.99/mo. Plaster figures, coloring books, 3D projects, and flexible monthly plans.",
    url: `${SITE_URL}/subscribe`,
    images: [
      {
        url: SUBSCRIPTION_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: BRAND_LOGO_ALT,
      },
    ],
  },
};

const formatMonthlyPrice = (monthlyPrice: number) => {
  return `$${monthlyPrice.toFixed(2)}`;
};

const subscriptionItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${BRAND_NAME} Subscription Plans`,
  itemListElement: subscriptionTiers.map((tier, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: `${tier.name} Monthly Art Subscription Box`,
      description: tier.schemaDescription,
      url: `${SITE_URL}/subscribe`,
      image: `${SITE_URL}${SUBSCRIPTION_OG_IMAGE_PATH}`,
      brand: { "@type": "Brand", name: BRAND_NAME },
      offers: {
        "@type": "Offer",
        price: tier.monthlyPrice.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: BRAND_NAME },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: tier.monthlyPrice.toFixed(2),
          priceCurrency: "USD",
          billingIncrement: 1,
          unitCode: "MON",
        },
      },
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: tier.suggestedMinAge,
        suggestedMaxAge: tier.suggestedMaxAge,
      },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Subscribe",
      item: `${SITE_URL}/subscribe`,
    },
  ],
};

export default function SubscribePage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Header */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="blob-a absolute -top-10 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="blob-c absolute bottom-0 -left-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(251,146,60,0.12)" }} />
        <div className="relative">
          <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Subscription Plans</span>
          <h1
            className="hero-title text-white mb-4"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            Choose Your Art Adventure
          </h1>
          <p className="hero-subtitle max-w-xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem" }}>
            Monthly art boxes for kids 5–12. Safe materials, expert-curated, no contracts.
          </p>
          <div className="hero-trust flex flex-wrap justify-center gap-6">
            {["✓ Free shipping on all plans", "✓ Cancel or pause anytime", "✓ Gift subscriptions available"].map((t) => (
              <span key={t} style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section aria-label="Subscription plans and pricing" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {subscriptionTiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={i * 130} direction="up">
                <div
                  className="relative rounded-2xl p-8 flex flex-col"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: tier.popular ? "2px solid #FB923C" : "1px solid #E2E8F0",
                    boxShadow: tier.popular
                      ? "0 8px 40px rgba(251,146,60,0.18), 0 24px 60px rgba(0,0,0,0.08)"
                      : "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                    transform: tier.popular ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  {tier.popular && (
                    <span
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                      style={{ backgroundColor: "#C2410C", boxShadow: "0 4px 12px rgba(194,65,12,0.4)" }}
                    >
                      ⭐ Most Popular — Best Value
                    </span>
                  )}

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                    style={{ backgroundColor: tier.iconBg }}
                  >
                    {tier.emoji}
                  </div>

                  <h2
                    className="text-2xl mb-1"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    {tier.name}
                  </h2>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", marginBottom: "1.25rem" }}>{tier.description}</p>

                  <div className="flex items-end gap-1 mb-6">
                    <span style={{
                      fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                      fontSize: "3rem", fontWeight: 700,
                      color: tier.popular ? "#C2410C" : "#1E293B",
                      lineHeight: 1,
                    }}>{formatMonthlyPrice(tier.monthlyPrice)}</span>
                    <span style={{ color: "#94A3B8", fontSize: "0.875rem", paddingBottom: "4px" }}>/month</span>
                  </div>

                  <ul className="flex-1 space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                          style={{
                            backgroundColor: f.included ? (tier.popular ? "#FFF4ED" : "#EBF5FF") : "#F1F5F9",
                            color: f.included ? (tier.popular ? "#C2410C" : "#2563EB") : "#CBD5E1",
                            fontWeight: 700,
                          }}
                        >
                          {f.included ? "✓" : "–"}
                        </span>
                        <span style={{ color: f.included ? "#334155" : "#94A3B8" }}>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/subscribe/checkout?tier=${tier.key}`}
                    className="pricing-cta block text-center py-4 rounded-full font-semibold text-white"
                    style={{
                      backgroundColor: tier.popular ? "#C2410C" : "#2563EB",
                      fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                      boxShadow: tier.popular ? "0 4px 14px rgba(194,65,12,0.4)" : "0 4px 14px rgba(37,99,235,0.3)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Get Started — {formatMonthlyPrice(tier.monthlyPrice)}/mo
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTrustItems.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 100} direction="up">
                <div className="card p-7 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >
                    {item.icon}
                  </div>
                  <h4
                    className="text-lg mb-2"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* One-time purchase CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto">
          <p style={{ color: "#64748B", fontSize: "1rem", marginBottom: "1rem" }}>
            Not ready for a subscription? Browse our one-time art kits — no subscription required.
          </p>
          <Link href="/shop" className="btn-outline" style={{ fontSize: "0.9375rem" }}>
            Browse the Shop →
          </Link>
        </div>
      </section>

      <JsonLd data={subscriptionItemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

    </div>
  );
}
