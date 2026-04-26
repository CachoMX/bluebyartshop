import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL } from "@/lib/brand";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Buyer's Guides — Kids Art Kits & Subscriptions",
  description:
    "Honest, hands-on buyer's guides to the best plaster painting kits and monthly art subscription boxes for kids in 2026, written by the Blueby Art Shop editorial team.",
  alternates: { canonical: `${SITE_URL}/guide` },
  openGraph: {
    title: `Buyer's Guides — ${BRAND_NAME}`,
    description:
      "Compare the best kids art subscriptions and plaster painting kits — buyer's guides updated for 2026.",
    url: `${SITE_URL}/guide`,
    type: "website",
  },
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guide` },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blueby Art Shop Buyer's Guides",
  url: `${SITE_URL}/guide`,
  hasPart: guides.map((g) => ({
    "@type": "Article",
    headline: g.title,
    url: `${SITE_URL}/guide/${g.slug}`,
    datePublished: g.publishedDate,
  })),
};

export default function GuideIndexPage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={collectionJsonLd} />

      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p
            className="eyebrow"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            Buyer&apos;s Guides
          </p>
          <h1
            className="mt-4 text-4xl"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Honest guides to kids art kits & subscriptions
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            Hands-on comparisons, age recommendations and safety checks from
            the {BRAND_NAME} editorial team. No affiliate fluff — just the
            answers parents and gift-givers actually need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="card p-6"
              style={{ display: "block" }}
            >
              <p
                className="text-xs uppercase tracking-wider"
                style={{ color: "#2563EB", fontWeight: 700 }}
              >
                {g.heroEyebrow}
              </p>
              <h2
                className="mt-2 text-xl"
                style={{
                  color: "#1E293B",
                  fontFamily:
                    "var(--font-fredoka-one), 'Fredoka One', cursive",
                  lineHeight: 1.25,
                }}
              >
                {g.title}
              </h2>
              <p
                className="mt-3 text-sm"
                style={{ color: "#475569", lineHeight: 1.6 }}
              >
                {g.description}
              </p>
              <p
                className="mt-3 text-xs"
                style={{ color: "#94A3B8" }}
              >
                {g.readingTimeMinutes} min read · Updated{" "}
                {new Date(g.modifiedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
