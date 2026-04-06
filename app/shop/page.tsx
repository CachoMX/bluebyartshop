"use client";

import { useState } from "react";

type Category = "all" | "plaster" | "coloring" | "3d" | "party" | "wholesale";
type AgeFilter = "all" | "5-7" | "8-10" | "11-12";

const products = [
  // Plaster Kits
  {
    id: 1,
    name: "Unicorn Plaster Figure Kit",
    price: 14.99,
    category: "plaster" as Category,
    age: "5-7" as AgeFilter,
    emoji: "🦄",
    color: "#FFD6E0",
    desc: "Paint your own magical unicorn plaster figure.",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Dinosaur Plaster Set (3-pack)",
    price: 19.99,
    category: "plaster" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🦕",
    color: "#D4EDDA",
    desc: "Three dino figures ready to paint and display.",
    badge: null,
  },
  {
    id: 3,
    name: "Space Explorer Plaster Kit",
    price: 17.99,
    category: "plaster" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🚀",
    color: "#CCE5FF",
    desc: "Rocket, astronaut, and planet figures in one set.",
    badge: null,
  },
  {
    id: 4,
    name: "Ocean Animals Plaster Set",
    price: 16.99,
    category: "plaster" as Category,
    age: "5-7" as AgeFilter,
    emoji: "🐠",
    color: "#CCF5F0",
    desc: "Sea turtle, clownfish, and starfish figures.",
    badge: null,
  },
  // Coloring Books
  {
    id: 5,
    name: "Enchanted Forest Coloring Book",
    price: 9.99,
    category: "coloring" as Category,
    age: "5-7" as AgeFilter,
    emoji: "🌲",
    color: "#E8F5E9",
    desc: "32 pages of magical forest scenes for young artists.",
    badge: null,
  },
  {
    id: 6,
    name: "Adventure Heroes Coloring Pack",
    price: 12.99,
    category: "coloring" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🦸",
    color: "#FFF3CD",
    desc: "40 pages featuring original superhero characters.",
    badge: "New",
  },
  {
    id: 7,
    name: "Manga & Comics Coloring Book",
    price: 14.99,
    category: "coloring" as Category,
    age: "11-12" as AgeFilter,
    emoji: "📖",
    color: "#F3E5F5",
    desc: "Anime-style characters and comic panel layouts.",
    badge: "New",
  },
  // 3D Figures
  {
    id: 8,
    name: "Mini Dragon 3D Print",
    price: 12.99,
    category: "3d" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🐉",
    color: "#FFE0B2",
    desc: "Custom printed mini dragon figure — paint it your way.",
    badge: null,
  },
  {
    id: 9,
    name: "Robot Buddy 3D Figure",
    price: 11.99,
    category: "3d" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🤖",
    color: "#E3F2FD",
    desc: "Articulated robot figure ready for painting.",
    badge: null,
  },
  {
    id: 10,
    name: "Mini Keychain Pack",
    price: 9.99,
    category: "3d" as Category,
    age: "11-12" as AgeFilter,
    emoji: "🔑",
    color: "#F8BBD9",
    desc: "5-pack of mini keychains — paint and keep or gift.",
    badge: null,
  },
  // Party Kits
  {
    id: 11,
    name: "Party Kit 15-pack",
    price: 89.0,
    category: "party" as Category,
    age: "5-7" as AgeFilter,
    emoji: "🎉",
    color: "#FFFDE7",
    desc: "15 paint-your-own kits perfect for birthday parties.",
    badge: null,
  },
  {
    id: 12,
    name: "Party Kit 25-pack",
    price: 139.0,
    category: "party" as Category,
    age: "8-10" as AgeFilter,
    emoji: "🎂",
    color: "#FCE4EC",
    desc: "25 kits — great for classroom events and big parties.",
    badge: "Popular",
  },
  {
    id: 13,
    name: "Party Kit 50-pack",
    price: 249.0,
    category: "party" as Category,
    age: "11-12" as AgeFilter,
    emoji: "🎊",
    color: "#E8EAF6",
    desc: "50-kit bundle for large events and school programs.",
    badge: "Best Value",
  },
  {
    id: 14,
    name: "Birthday Box",
    price: 34.99,
    category: "party" as Category,
    age: "5-7" as AgeFilter,
    emoji: "🎁",
    color: "#E0F7FA",
    desc: "Curated birthday kit with figure, paints, and ribbon.",
    badge: null,
  },
  // Wholesale
  {
    id: 15,
    name: "Wholesale Starter Pack (50 units)",
    price: 600.0,
    category: "wholesale" as Category,
    age: "all" as AgeFilter,
    emoji: "📦",
    color: "#F5F5F5",
    desc: "50 units at $12/unit — branded kits for resellers.",
    badge: "Wholesale",
  },
  {
    id: 16,
    name: "Wholesale Premium Pack (50 units)",
    price: 1400.0,
    category: "wholesale" as Category,
    age: "all" as AgeFilter,
    emoji: "🏭",
    color: "#ECEFF1",
    desc: "50 premium units at $28/unit — full Master Creator set.",
    badge: "Wholesale",
  },
];

const categoryTabs: { key: Category; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "✨" },
  { key: "plaster", label: "Plaster Kits", emoji: "🪆" },
  { key: "coloring", label: "Coloring Books", emoji: "📚" },
  { key: "3d", label: "3D Figures", emoji: "🖨️" },
  { key: "party", label: "Party Kits", emoji: "🎉" },
  { key: "wholesale", label: "Wholesale", emoji: "📦" },
];

const ageTabs: { key: AgeFilter; label: string }[] = [
  { key: "all", label: "All Ages" },
  { key: "5-7", label: "5-7 years" },
  { key: "8-10", label: "8-10 years" },
  { key: "11-12", label: "11-12 years" },
];

export default function ShopPage() {
  const [cat, setCat] = useState<Category>("all");
  const [age, setAge] = useState<AgeFilter>("all");

  const filtered = products.filter((p) => {
    const catMatch = cat === "all" || p.category === cat;
    const ageMatch = age === "all" || p.age === age || p.age === "all";
    return catMatch && ageMatch;
  });

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2d4fc0 100%)" }}
      >
        <h1
          className="text-5xl text-white mb-4"
          style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
        >
          The Art Shop
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          One-time kits, party packs, and wholesale orders for every creative kid.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCat(tab.key)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: cat === tab.key ? "#1E3A8A" : "#fff",
                color: cat === tab.key ? "#fff" : "#1E3A8A",
                border: "2px solid #1E3A8A",
              }}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Age Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {ageTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setAge(tab.key)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: age === tab.key ? "#FF9F1C" : "#fff",
                color: age === tab.key ? "#fff" : "#64748b",
                border: "2px solid",
                borderColor: age === tab.key ? "#FF9F1C" : "#e2e8f0",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🎨</p>
            <p className="text-gray-500 text-lg">No products match these filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-md transition-all duration-200 flex flex-col"
                style={{ borderColor: "#e2e8f0" }}
              >
                {/* Image placeholder */}
                <div
                  className="h-44 flex items-center justify-center text-7xl relative"
                  style={{ backgroundColor: product.color }}
                >
                  {product.emoji}
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#FF9F1C" }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{
                      color: "#1E3A8A",
                      fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold" style={{ color: "#1E3A8A" }}>
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      className="px-4 py-2 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: "#FF9F1C" }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wholesale callout */}
        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{ backgroundColor: "#1E3A8A" }}
        >
          <h3
            className="text-3xl text-white mb-3"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Buying for a School or Business?
          </h3>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            We offer wholesale pricing at $12-$28/unit for orders of 50+ units. Custom branding
            available. Perfect for schools, camps, and art studios.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "#FF9F1C" }}
          >
            Get a Wholesale Quote
          </a>
        </div>
      </div>
    </div>
  );
}
