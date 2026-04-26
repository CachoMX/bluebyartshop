import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { HowItWorks } from "@/components/HowItWorks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  subscribeFaqs,
  subscriptionHowItWorks,
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

const minPrice = Math.min(...subscriptionTiers.map((t) => t.monthlyPrice));
const maxPrice = Math.max(...subscriptionTiers.map((t) => t.monthlyPrice));

export const metadata: Metadata = {
  title: "Kids Art Subscription Box from $24.99/mo — Plaster Painting Plans",
  description: `Monthly plaster painting kits for kids ages 4–10. Choose from ${tierPriceSummary}. ASTM D-4236 non-toxic, free US shipping over $50, cancel anytime.`,
  alternates: {
    canonical: `${SITE_URL}/subscribe`,
  },
  openGraph: {
    title: `Kids Art Subscription Box | ${BRAND_NAME} — Plans from $24.99/mo`,
    description:
      "Monthly plaster painting kits for kids ages 4–10. Three plans, hand-packed in Texas, ASTM D-4236 safe, ships free over $50, cancel anytime.",
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

const formatMonthlyPrice = (monthlyPrice: number) =>
  `$${monthlyPrice.toFixed(2)}`;

// ---------- JSON-LD ----------

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

const subscriptionServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${BRAND_NAME} Monthly Art Subscription`,
  serviceType: "Kids art subscription box",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 4,
    suggestedMaxAge: 12,
  },
  description: `${BRAND_NAME} delivers monthly paint-your-own plaster figurine art kits for kids ages 4 and up. Three subscription tiers from $${minPrice.toFixed(2)}/mo to $${maxPrice.toFixed(2)}/mo. Non-toxic, ASTM D-4236 certified materials, made in Texas, cancel anytime.`,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: minPrice.toFixed(2),
    highPrice: maxPrice.toFixed(2),
    offerCount: subscriptionTiers.length,
    availability: "https://schema.org/InStock",
  },
  termsOfService: `${SITE_URL}/terms`,
};

// HowTo schema — strong GEO signal: lets LLMs answer
// "how does Blueby Art Shop work?" with structured steps.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How the ${BRAND_NAME} subscription works`,
  description: `Three steps to start a monthly plaster painting subscription with ${BRAND_NAME}.`,
  totalTime: "PT5M",
  step: subscriptionHowItWorks.map((step) => ({
    "@type": "HowToStep",
    position: step.position,
    name: step.title,
    text: step.description,
  })),
};

// FAQPage built from the visible accordion — keeps schema + UI in sync.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: subscribeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

// ---------- Page ----------

export default function SubscribePage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
      >
        <div
          className="blob-a absolute -top-10 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div
          className="blob-c absolute bottom-0 -left-10 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "rgba(251,146,60,0.12)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span
            className="eyebrow"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          >
            Monthly Art Subscription
          </span>
          <h1
            className="hero-title text-white mb-4"
            style={{
              fontFamily:
                "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginTop: "1.25rem",
            }}
          >
            Plaster painting kits delivered every month to ages 4–10
          </h1>
          <p
            className="hero-subtitle max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.0625rem",
              lineHeight: 1.55,
            }}
          >
            From{" "}
            <strong style={{ color: "#fff" }}>
              ${minPrice.toFixed(2)}/month
            </strong>{" "}
            · ASTM D-4236 non-toxic · Free US shipping over $50 · Cancel
            anytime
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 mb-6"
            style={{ rowGap: "0.75rem" }}
          >
            <Link
              href="#pricing"
              className="rounded-full font-semibold text-white px-7 py-4"
              style={{
                backgroundColor: "#C2410C",
                fontFamily:
                  "var(--font-baloo-2), 'Baloo 2', sans-serif",
                boxShadow: "0 4px 14px rgba(194,65,12,0.4)",
                fontSize: "0.9375rem",
                letterSpacing: "0.02em",
              }}
            >
              Start subscription →
            </Link>
            <Link
              href="/shop"
              className="rounded-full font-semibold px-7 py-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                fontFamily:
                  "var(--font-baloo-2), 'Baloo 2', sans-serif",
                fontSize: "0.9375rem",
                letterSpacing: "0.02em",
              }}
            >
              Try one kit first
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <span>🇺🇸 Hand-packed in Texas</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>🛡️ ASTM D-4236 certified</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>🔄 Pause or cancel anytime</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PRICING CARDS */}
      <section
        id="pricing"
        aria-label="Subscription plans and pricing"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="text-center"
            style={{
              color: "#94A3B8",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Pricing
          </p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              color: "#1E293B",
              fontWeight: 700,
            }}
          >
            Choose your plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {subscriptionTiers.map((tier, i) => {
              const ageRange =
                tier.key === "mini-artist"
                  ? "4–6"
                  : tier.key === "creative-explorer"
                  ? "7–10"
                  : "8–12";
              return (
                <AnimateIn key={tier.name} delay={i * 130} direction="up">
                  <div
                    className="relative rounded-2xl p-8 flex flex-col"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: tier.popular
                        ? "2px solid #FB923C"
                        : "1px solid #E2E8F0",
                      boxShadow: tier.popular
                        ? "0 8px 40px rgba(251,146,60,0.18), 0 24px 60px rgba(0,0,0,0.08)"
                        : "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                      transform: tier.popular ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    {tier.popular && (
                      <span
                        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                        style={{
                          backgroundColor: "#C2410C",
                          boxShadow: "0 4px 12px rgba(194,65,12,0.4)",
                        }}
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

                    <h3
                      className="text-2xl mb-1"
                      style={{
                        fontFamily:
                          "var(--font-fredoka-one), 'Fredoka One', cursive",
                        color: "#1E293B",
                        fontWeight: 600,
                      }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      style={{
                        color: tier.popular ? "#C2410C" : "#2563EB",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Ages {ageRange}
                    </p>
                    <p
                      style={{
                        color: "#64748B",
                        fontSize: "0.875rem",
                        marginBottom: "1.25rem",
                        minHeight: "2.5rem",
                      }}
                    >
                      {tier.description}
                    </p>

                    <div className="flex items-end gap-1 mb-6">
                      <span
                        style={{
                          fontFamily:
                            "var(--font-fredoka-one), 'Fredoka One', cursive",
                          fontSize: "3rem",
                          fontWeight: 700,
                          color: tier.popular ? "#C2410C" : "#1E293B",
                          lineHeight: 1,
                        }}
                      >
                        {formatMonthlyPrice(tier.monthlyPrice)}
                      </span>
                      <span
                        style={{
                          color: "#94A3B8",
                          fontSize: "0.875rem",
                          paddingBottom: "4px",
                        }}
                      >
                        /month
                      </span>
                    </div>

                    <ul className="flex-1 space-y-2.5 mb-8">
                      {tier.features
                        .filter((f) => f.included)
                        .slice(0, 6)
                        .map((f) => (
                          <li
                            key={f.label}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <span
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                              style={{
                                backgroundColor: tier.popular
                                  ? "#FFF4ED"
                                  : "#EBF5FF",
                                color: tier.popular ? "#C2410C" : "#2563EB",
                                fontWeight: 700,
                              }}
                            >
                              ✓
                            </span>
                            <span style={{ color: "#334155" }}>{f.label}</span>
                          </li>
                        ))}
                    </ul>

                    <Link
                      href={`/subscribe/checkout?tier=${tier.key}`}
                      className="block text-center py-4 rounded-full font-semibold text-white"
                      style={{
                        backgroundColor: tier.popular ? "#C2410C" : "#2563EB",
                        fontFamily:
                          "var(--font-baloo-2), 'Baloo 2', sans-serif",
                        boxShadow: tier.popular
                          ? "0 4px 14px rgba(194,65,12,0.4)"
                          : "0 4px 14px rgba(37,99,235,0.3)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Choose {tier.name}
                    </Link>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <ComparisonTable />

      {/* TRUST BADGES */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F0F7FF" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-center"
            style={{
              color: "#94A3B8",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Why parents trust Blueby
          </p>
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#1E293B",
              fontWeight: 700,
            }}
          >
            Safe, small-batch, and shipped fast
          </h2>
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
                    style={{
                      fontFamily:
                        "var(--font-fredoka-one), 'Fredoka One', cursive",
                      color: "#1E293B",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ONE-TIME KIT UPSELL */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-center"
            style={{
              color: "#94A3B8",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Not ready for monthly?
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#1E293B",
              fontWeight: 700,
            }}
          >
            Try a single kit from $29.99
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "1rem",
              marginBottom: "1.75rem",
              lineHeight: 1.6,
            }}
          >
            Single mini kits ship the same day with the same ASTM D-4236
            non-toxic paints and plaster figurines. Add a subscription later
            with credit applied.
          </p>
          <Link
            href="/shop"
            className="inline-block rounded-full font-semibold text-white px-7 py-4"
            style={{
              backgroundColor: "#2563EB",
              fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
              boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              fontSize: "0.9375rem",
              letterSpacing: "0.02em",
            }}
          >
            Browse all kits →
          </Link>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <FAQAccordion />

      {/* FINAL CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
              border: "1px solid #BFDBFE",
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily:
                  "var(--font-fredoka-one), 'Fredoka One', cursive",
                fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
                color: "#1E293B",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Ready to start your child&apos;s art journey?
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: "1rem",
                marginBottom: "1.75rem",
                lineHeight: 1.6,
              }}
            >
              Pick a plan in 30 seconds. Free shipping over $50, ASTM D-4236
              certified, cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#pricing"
                className="rounded-full font-semibold text-white px-7 py-4"
                style={{
                  backgroundColor: "#C2410C",
                  fontFamily:
                    "var(--font-baloo-2), 'Baloo 2', sans-serif",
                  boxShadow: "0 4px 14px rgba(194,65,12,0.4)",
                  fontSize: "0.9375rem",
                  letterSpacing: "0.02em",
                }}
              >
                Start subscription →
              </Link>
              <Link
                href="/faq"
                className="rounded-full font-semibold px-7 py-4"
                style={{
                  backgroundColor: "transparent",
                  color: "#2563EB",
                  border: "1.5px solid #2563EB",
                  fontFamily:
                    "var(--font-baloo-2), 'Baloo 2', sans-serif",
                  fontSize: "0.9375rem",
                  letterSpacing: "0.02em",
                }}
              >
                See full FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={subscriptionItemListJsonLd} />
      <JsonLd data={subscriptionServiceJsonLd} />
      <JsonLd data={howToJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
