"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import {
  catalogProducts,
  isCatalogAge,
  isShopCategory,
  shopAgeTabs,
  shopBadgeColors,
  shopCategoryTabs,
  type CatalogAge,
  type ShopCategory,
} from "@/lib/catalog";
import { BRAND_NAME } from "@/lib/brand";

export default function ShopPage() {
  const [cat, setCat] = useState<ShopCategory>("all");
  const [age, setAge] = useState<CatalogAge>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("cat");
    const ageParam = params.get("age");

    if (catParam && isShopCategory(catParam)) {
      setCat(catParam);
    }
    if (ageParam && isCatalogAge(ageParam)) {
      setAge(ageParam);
    }
  }, []);

  const filtered = catalogProducts.filter((p) => {
    const catMatch = cat === "all" || p.category === cat;
    const ageMatch = age === "all" || p.age === age || p.age === "all";
    return catMatch && ageMatch;
  });

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Page header */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="blob-a absolute -top-10 -right-10 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="blob-b absolute -bottom-10 -left-10 w-56 h-56 rounded-full pointer-events-none" style={{ background: "rgba(251,146,60,0.12)" }} />
        <div className="relative">
          <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Shop</span>
          <h1
            className="hero-title text-white mb-4"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            The Art Shop 🛍️
          </h1>
          <p className="hero-subtitle max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem" }}>
            One-time kits, party packs, and wholesale orders for every creative kid.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* SEO intro — visible and keyword-rich */}
        <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: "#F0F7FF", border: "1px solid #DBEAFE" }}>
          <p style={{ color: "#334155", fontSize: "0.9375rem", lineHeight: 1.75 }}>
            Browse our full collection of kids art kits from{" "}
            <strong>{BRAND_NAME}</strong> — from paint-your-own plaster figures
            to themed coloring books, custom 3D print figures, birthday party
            art kits, and wholesale bundles for schools and studios. All
            materials are non-toxic and safe for children ages 4 and up.
          </p>
        </div>

        {/* Filters */}
        <AnimateIn className="mb-10 space-y-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {shopCategoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setCat(tab.key)}
                className="px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: cat === tab.key ? "#2563EB" : "#F0F7FF",
                  color: cat === tab.key ? "#fff" : "#2563EB",
                  boxShadow: cat === tab.key ? "0 4px 12px rgba(37,99,235,0.3)" : "none",
                  transform: cat === tab.key ? "translateY(-1px)" : "none",
                }}
              >
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>

          {/* Age pills */}
          <div className="flex flex-wrap gap-2">
            {shopAgeTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setAge(tab.key)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: age === tab.key ? "#C2410C" : "#FFF4ED",
                  color: age === tab.key ? "#fff" : "#C2410C",
                  boxShadow: age === tab.key ? "0 4px 12px rgba(194,65,12,0.3)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p style={{ color: "#94A3B8", fontSize: "0.875rem" }}>
            Showing <strong style={{ color: "#334155" }}>{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}
          </p>
        </AnimateIn>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p style={{ color: "#64748B", fontSize: "1.125rem" }}>No products match these filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <AnimateIn key={product.id} delay={(i % 4) * 80} direction="up">
                <Link href={`/shop/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div
                    className="bg-white rounded-2xl overflow-hidden flex flex-col product-card"
                    style={{
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    {/* Product image area */}
                    <div
                      className="h-48 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                      }}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <>
                          <div className="absolute top-2 left-2 w-16 h-16 rounded-full opacity-30" style={{ background: "rgba(255,255,255,0.5)" }} />
                          <div className="absolute bottom-2 right-4 w-10 h-10 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.6)" }} />
                          <div className="absolute inset-0 flex items-center justify-center" aria-label={product.name}>
                            <span aria-hidden="true" className="text-6xl drop-shadow-sm">{product.emoji}</span>
                          </div>
                        </>
                      )}

                      {product.badge && (
                        <span
                          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white z-10"
                          style={{
                            backgroundColor: shopBadgeColors[product.badge] ?? "#C2410C",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                          }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className="mb-1.5"
                        style={{
                          fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                          color: "#1E293B",
                          fontSize: "1.0625rem",
                          fontWeight: 600,
                          lineHeight: 1.25,
                        }}
                      >
                        {product.name}
                      </h3>
                      <p className="flex-1 mb-4" style={{ color: "#64748B", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                        {product.shortDesc}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span style={{
                          fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#1E293B",
                        }}>
                          ${product.price.toFixed(2)}
                        </span>
                        <span
                          className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
                          style={{
                            backgroundColor: "#C2410C",
                            boxShadow: "0 4px 10px rgba(194,65,12,0.35)",
                            fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                          }}
                        >
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        )}

        {/* Wholesale callout */}
        <AnimateIn className="mt-16">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #0390AC)" }}
          >
            <div className="blob-a absolute -top-8 -right-8 w-48 h-48 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="blob-b absolute -bottom-8 -left-8 w-40 h-40 rounded-full" style={{ background: "rgba(251,146,60,0.1)" }} />
            <div className="relative">
              <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Wholesale</span>
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                }}
              >
                Buying for a School or Business?
              </h3>
              <p className="mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
                Wholesale pricing at $12–$28/unit for orders of 50+ units. Custom branding available.
                Perfect for schools, camps, and art studios.
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem" }}>
                Get a Wholesale Quote →
              </Link>
            </div>
          </div>
        </AnimateIn>

        {/* Hidden server-rendered product list for crawlers/LLMs */}
        <noscript>
          <div>
            <h2>All Kids Art Kits</h2>
            {catalogProducts.map((p) => (
              <div key={p.id}>
                <h3><a href={`/shop/${p.slug}`}>{p.name}</a></h3>
                <p>${p.price.toFixed(2)} — Ages {p.age === "all" ? "4 and up" : p.age} — {p.shortDesc}</p>
              </div>
            ))}
          </div>
        </noscript>
      </div>
    </div>
  );
}
