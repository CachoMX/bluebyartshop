import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL } from "@/lib/brand";
import { faqs, buildFaqJsonLd } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ — Subscriptions, Shipping & Materials",
  description:
    "Answers to the most common questions about Blueby Art Shop kids art subscriptions, plaster painting kits, shipping, age range, materials safety (ASTM D-4236), gifts, and wholesale.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: `FAQ — ${BRAND_NAME}`,
    description:
      "Subscription, shipping, age range, materials safety, and wholesale answers for Blueby Art Shop.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

const faqJsonLd = buildFaqJsonLd();

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      {/* Hero */}
      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p
            className="eyebrow"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            Help Center
          </p>
          <h1
            className="mt-4 text-4xl"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            Everything you need to know about {BRAND_NAME} subscriptions, shipping,
            age range, materials safety, and one-time kits.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className="card p-6"
              open={i < 3}
              style={{ cursor: "pointer" }}
            >
              <summary
                className="text-lg font-semibold"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                  listStyle: "none",
                }}
              >
                {faq.q}
              </summary>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "#475569" }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="card mt-10 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ backgroundColor: "#EFF6FF" }}
        >
          <div>
            <h2
              className="text-2xl"
              style={{
                color: "#1E293B",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Still have a question?
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#475569" }}>
              Email{" "}
              <a
                href="mailto:hello@bluebyartshop.com"
                style={{ color: "#2563EB", fontWeight: 600 }}
              >
                hello@bluebyartshop.com
              </a>{" "}
              and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
