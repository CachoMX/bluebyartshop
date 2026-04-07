"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

type Category = "all" | "plaster" | "coloring" | "3d" | "party" | "wholesale";
type AgeFilter = "all" | "5-7" | "8-10" | "11-12";

const products = [
  { id: 1, name: "Unicorn Plaster Figure Kit", price: 14.99, category: "plaster" as Category, age: "5-7" as AgeFilter, emoji: "🦄", gradientFrom: "#FFD6E0", gradientTo: "#FFC8D3", image: "/images/product-unicorn.jpg", desc: "Paint your own magical unicorn plaster figure.", badge: "Bestseller" },
  { id: 2, name: "Dinosaur Plaster Set (3-pack)", price: 19.99, category: "plaster" as Category, age: "8-10" as AgeFilter, emoji: "🦕", gradientFrom: "#D4EDDA", gradientTo: "#B8DFBE", image: "/images/product-dinosaur.jpg", desc: "Three dino figures ready to paint and display.", badge: null },
  { id: 3, name: "Space Explorer Plaster Kit", price: 17.99, category: "plaster" as Category, age: "8-10" as AgeFilter, emoji: "🚀", gradientFrom: "#CCE5FF", gradientTo: "#B0D4FF", image: "/images/product-space.jpg", desc: "Rocket, astronaut, and planet figures in one set.", badge: null },
  { id: 4, name: "Ocean Animals Plaster Set", price: 16.99, category: "plaster" as Category, age: "5-7" as AgeFilter, emoji: "🐠", gradientFrom: "#D4F7F7", gradientTo: "#B0EDED", image: "/images/product-ocean.jpg", desc: "Sea turtle, clownfish, and starfish figures.", badge: null },
  { id: 5, name: "Enchanted Forest Coloring Book", price: 9.99, category: "coloring" as Category, age: "5-7" as AgeFilter, emoji: "🌲", gradientFrom: "#E8F5E9", gradientTo: "#C8E6C9", image: "/images/product-coloring-book.jpg", desc: "32 pages of magical forest scenes for young artists.", badge: null },
  { id: 6, name: "Adventure Heroes Coloring Pack", price: 12.99, category: "coloring" as Category, age: "8-10" as AgeFilter, emoji: "🦸", gradientFrom: "#FFF3CD", gradientTo: "#FFE082", image: null, desc: "40 pages featuring original superhero characters.", badge: "New" },
  { id: 7, name: "Manga & Comics Coloring Book", price: 14.99, category: "coloring" as Category, age: "11-12" as AgeFilter, emoji: "📖", gradientFrom: "#F3E5F5", gradientTo: "#E1BEE7", image: null, desc: "Anime-style characters and comic panel layouts.", badge: "New" },
  { id: 8, name: "Mini Dragon 3D Print", price: 12.99, category: "3d" as Category, age: "8-10" as AgeFilter, emoji: "🐉", gradientFrom: "#FFE0B2", gradientTo: "#FFCC80", image: "/images/product-3d-dragon.jpg", desc: "Custom printed mini dragon figure — paint it your way.", badge: null },
  { id: 9, name: "Robot Buddy 3D Figure", price: 11.99, category: "3d" as Category, age: "8-10" as AgeFilter, emoji: "🤖", gradientFrom: "#E3F2FD", gradientTo: "#BBDEFB", image: null, desc: "Articulated robot figure ready for painting.", badge: null },
  { id: 10, name: "Mini Keychain Pack", price: 9.99, category: "3d" as Category, age: "11-12" as AgeFilter, emoji: "🔑", gradientFrom: "#F8BBD9", gradientTo: "#F48FB1", image: null, desc: "5-pack of mini keychains — paint and keep or gift.", badge: null },
  { id: 11, name: "Party Kit 15-pack", price: 89.0, category: "party" as Category, age: "5-7" as AgeFilter, emoji: "🎉", gradientFrom: "#FFFDE7", gradientTo: "#FFF9C4", image: "/images/product-party-kit.jpg", desc: "15 paint-your-own kits perfect for birthday parties.", badge: null },
  { id: 12, name: "Party Kit 25-pack", price: 139.0, category: "party" as Category, age: "8-10" as AgeFilter, emoji: "🎂", gradientFrom: "#FCE4EC", gradientTo: "#F8BBD9", image: "/images/product-party-kit.jpg", desc: "25 kits — great for classroom events and big parties.", badge: "Popular" },
  { id: 13, name: "Party Kit 50-pack", price: 249.0, category: "party" as Category, age: "11-12" as AgeFilter, emoji: "🎊", gradientFrom: "#E8EAF6", gradientTo: "#C5CAE9", image: "/images/product-party-kit.jpg", desc: "50-kit bundle for large events and school programs.", badge: "Best Value" },
  { id: 14, name: "Birthday Box", price: 34.99, category: "party" as Category, age: "5-7" as AgeFilter, emoji: "🎁", gradientFrom: "#D4F7F7", gradientTo: "#A8EDEC", image: null, desc: "Curated birthday kit with figure, paints, and ribbon.", badge: null },
  { id: 15, name: "Wholesale Starter Pack (50 units)", price: 600.0, category: "wholesale" as Category, age: "all" as AgeFilter, emoji: "📦", gradientFrom: "#F5F5F5", gradientTo: "#E0E0E0", image: "/images/shop-supplies-flatlay.jpg", desc: "50 units at $12/unit — branded kits for resellers.", badge: "Wholesale" },
  { id: 16, name: "Wholesale Premium Pack (50 units)", price: 1400.0, category: "wholesale" as Category, age: "all" as AgeFilter, emoji: "🏭", gradientFrom: "#ECEFF1", gradientTo: "#CFD8DC", image: "/images/shop-supplies-flatlay.jpg", desc: "50 premium units at $28/unit — full Master Creator set.", badge: "Wholesale" },
];

const categoryTabs: { key: Category; label: string; emoji: string }[] = [
  { key: "all", label: "All Products", emoji: "✨" },
  { key: "plaster", label: "Plaster Kits", emoji: "🪆" },
  { key: "coloring", label: "Coloring Books", emoji: "📚" },
  { key: "3d", label: "3D Figures", emoji: "🖨️" },
  { key: "party", label: "Party Kits", emoji: "🎉" },
  { key: "wholesale", label: "Wholesale", emoji: "📦" },
];

const ageTabs: { key: AgeFilter; label: string }[] = [
  { key: "all", label: "All Ages" },
  { key: "5-7", label: "Ages 5–7" },
  { key: "8-10", label: "Ages 8–10" },
  { key: "11-12", label: "Ages 11–12" },
];

const badgeColors: Record<string, string> = {
  Bestseller: "#2563EB",
  New: "#0390AC",
  Popular: "#7C3AED",
  "Best Value": "#059669",
  Wholesale: "#64748B",
};

export default function ShopPage() {
  const [cat, setCat] = useState<Category>("all");
  const [age, setAge] = useState<AgeFilter>("all");

  const filtered = products.filter((p) => {
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

        {/* Filters */}
        <AnimateIn className="mb-10 space-y-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categoryTabs.map((tab) => (
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
            {ageTabs.map((tab) => (
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
                          backgroundColor: badgeColors[product.badge] || "#C2410C",
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
                      {product.desc}
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
                      <button
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
                        style={{
                          backgroundColor: "#C2410C",
                          boxShadow: "0 4px 10px rgba(194,65,12,0.35)",
                          fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
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
              <a href="/contact" className="btn-primary" style={{ fontSize: "1rem" }}>
                Get a Wholesale Quote →
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
