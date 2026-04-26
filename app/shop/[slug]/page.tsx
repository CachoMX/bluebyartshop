import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  categoryLabels,
  catalogProducts,
  getCatalogProduct,
  getCatalogProductsBySlugs,
} from "@/lib/catalog";
import { BRAND_NAME, DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/brand";

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) return { title: "Product Not Found" };

  const title = `${product.name} | Kids Art Kit`;
  const description = `${product.description.slice(0, 155).trimEnd()}…`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/shop/${slug}` },
    openGraph: {
      title: `${product.name} | Kids Art Kit | ${BRAND_NAME}`,
      description,
      url: `${SITE_URL}/shop/${slug}`,
      images: product.image
        ? [{ url: product.image, width: 800, height: 600, alt: product.name }]
        : [
            {
              url: DEFAULT_OG_IMAGE_PATH,
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getCatalogProduct(slug);
  if (!product) notFound();

  const relatedProducts = getCatalogProductsBySlugs(product.relatedSlugs);

  const isWholesale = product.category === "wholesale";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image
      ? `${SITE_URL}${product.image}`
      : `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`,
    brand: { "@type": "Brand", name: BRAND_NAME },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/shop/${product.slug}`,
      seller: { "@type": "Organization", name: BRAND_NAME },
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: product.minAge,
      suggestedMaxAge: product.maxAge,
    },
    category: categoryLabels[product.category] ?? product.category,
    material: "Non-toxic, child-safe materials, ASTM D-4236 compliant",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${SITE_URL}/shop`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/shop/${product.slug}`,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-6 lg:px-8 py-4"
        style={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <ol
          className="max-w-6xl mx-auto flex items-center gap-2 text-sm"
          style={{ color: "#64748B" }}
        >
          <li>
            <Link href="/" style={{ color: "#2563EB", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ color: "#CBD5E1" }}>›</li>
          <li>
            <Link
              href="/shop"
              style={{ color: "#2563EB", textDecoration: "none" }}
            >
              Shop
            </Link>
          </li>
          <li style={{ color: "#CBD5E1" }}>›</li>
          <li style={{ color: "#334155", fontWeight: 500 }}>{product.name}</li>
        </ol>
      </nav>

      {/* Product detail */}
      <section
        aria-label={`${product.name} product details`}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                height: "460px",
                background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
              }}
            >
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} - kids art kit from ${BRAND_NAME}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontSize: "8rem" }}>{product.emoji}</span>
                </div>
              )}
              {product.badge && (
                <span
                  className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold text-white"
                  style={{
                    backgroundColor: "#2563EB",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Category + Age badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#EBF5FF", color: "#2563EB" }}
                >
                  {categoryLabels[product.category] ?? product.category}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#FFF4ED", color: "#FB923C" }}
                >
                  Ages {product.age === "all" ? "4 and up" : product.age}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#ECFDF5", color: "#059669" }}
                >
                  ✓ Non-toxic
                </span>
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily:
                    "var(--font-fredoka-one), 'Fredoka One', cursive",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#1E293B",
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span
                  style={{
                    fontFamily:
                      "var(--font-fredoka-one), 'Fredoka One', cursive",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  ${product.price.toFixed(2)}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-sm font-semibold"
                  style={{ backgroundColor: "#EFF6FF", color: "#1D4ED8" }}
                >
                  One-time kit
                </span>
              </div>

              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                {product.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-2.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#334155" }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                      style={{
                        backgroundColor: "#EBF5FF",
                        color: "#2563EB",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                {isWholesale ? (
                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{
                      fontSize: "1rem",
                      padding: "14px 32px",
                      textAlign: "center",
                    }}
                  >
                    Get a Wholesale Quote →
                  </Link>
                ) : (
                  <Link
                    href="/subscribe/checkout?tier=creative-explorer"
                    className="btn-primary"
                    style={{
                      fontSize: "1rem",
                      padding: "14px 32px",
                      textAlign: "center",
                    }}
                  >
                    Get This in a Box →
                  </Link>
                )}
                <Link
                  href="/shop"
                  className="btn-outline"
                  style={{ fontSize: "1rem", textAlign: "center" }}
                >
                  ← Back to Shop
                </Link>
              </div>

              {/* Trust signals */}
              <div
                className="flex flex-wrap gap-4 mt-6 pt-6"
                style={{ borderTop: "1px solid #E2E8F0" }}
              >
                {[
                  "🚚 Ships in 2–3 days",
                  "🔒 Non-toxic certified",
                  "✉️ Email support available",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium"
                    style={{ color: "#64748B" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section
          aria-label="Related products"
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F0F7FF" }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-center mb-10"
              style={{
                fontFamily:
                  "var(--font-fredoka-one), 'Fredoka One', cursive",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#1E293B",
                fontWeight: 600,
              }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/shop/${rel.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                      transition: "box-shadow 0.2s ease",
                    }}
                  >
                    <div
                      className="h-40 relative overflow-hidden flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${rel.gradientFrom}, ${rel.gradientTo})`,
                      }}
                    >
                      {rel.image ? (
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <span style={{ fontSize: "3.5rem" }}>{rel.emoji}</span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily:
                            "var(--font-fredoka-one), 'Fredoka One', cursive",
                          color: "#1E293B",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {rel.name}
                      </h3>
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: "0.8125rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {rel.shortDesc}
                      </p>
                      <span
                        style={{
                          fontFamily:
                            "var(--font-fredoka-one), 'Fredoka One', cursive",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#2563EB",
                        }}
                      >
                        ${rel.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section
        aria-label="Subscribe to get this in a monthly box"
        className="py-16 px-4 sm:px-6 lg:px-8 text-center hero-gradient relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto relative">
          <span
            className="eyebrow"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}
          >
            Monthly Subscription
          </span>
          <h2
            className="text-white mb-4 mt-4"
            style={{
              fontFamily:
                "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            Get This and More Every Month
          </h2>
          <p
            className="mb-8"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem" }}
          >
            Subscribe to {BRAND_NAME} and receive a curated monthly art kit
            — including products like this — starting at just $24.99/month.
            Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe/checkout?tier=creative-explorer"
              className="btn-primary"
              style={{ fontSize: "1rem" }}
            >
              Start Subscribing →
            </Link>
            <Link
              href="/shop"
              className="btn-outline"
              style={{ fontSize: "1rem" }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
