import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

const tiers = [
  {
    name: "Mini Artist",
    price: "$19.99",
    emoji: "🎨",
    iconBg: "#EBF5FF",
    popular: false,
    description: "Perfect for beginners discovering their creative spark.",
    features: [
      { label: "2 plaster figures OR 10 coloring pages", included: true },
      { label: "6 paint pots or colored pencils", included: true },
      { label: "1 brush or pencil", included: true },
      { label: "Step-by-step instructions", included: true },
      { label: "Fun sticker sheet", included: true },
      { label: "Mini 3D print figure", included: false },
      { label: "Sealant + activity card", included: false },
      { label: "Digital banner template", included: false },
      { label: "Illustrated storybook", included: false },
      { label: "Display stand + Resell kit", included: false },
    ],
  },
  {
    name: "Creative Explorer",
    price: "$29.99",
    emoji: "🖌️",
    iconBg: "#FFF4ED",
    popular: true,
    description: "Our most popular tier — packed with variety for growing artists.",
    features: [
      { label: "3 plaster figures OR 20 coloring pages", included: true },
      { label: "12 paint pots or color set", included: true },
      { label: "Full brush set included", included: true },
      { label: "Step-by-step instructions", included: true },
      { label: "Fun sticker sheet", included: true },
      { label: "1 mini 3D print figure", included: true },
      { label: "Sealant + activity card", included: true },
      { label: "1 digital banner template", included: true },
      { label: "Illustrated storybook", included: false },
      { label: "Display stand + Resell kit", included: false },
    ],
  },
  {
    name: "Master Creator",
    price: "$44.99",
    emoji: "🏆",
    iconBg: "#ECFDF5",
    popular: false,
    description: "The ultimate kit for serious young artists who create and share.",
    features: [
      { label: "4 plaster figures OR 30 coloring pages", included: true },
      { label: "18 pots + metallics + full color set", included: true },
      { label: "Premium brush set", included: true },
      { label: "Step-by-step instructions", included: true },
      { label: "Fun sticker sheet", included: true },
      { label: "2 mini 3D print figures", included: true },
      { label: "Sealant + activity card", included: true },
      { label: "Digital banner template", included: true },
      { label: "Illustrated storybook", included: true },
      { label: "Display stand + Resell kit", included: true },
    ],
  },
];

const trustItems = [
  { icon: "🔒", title: "No Commitment", desc: "Cancel or pause anytime — no questions asked." },
  { icon: "🚚", title: "Fast Shipping", desc: "Boxes ship within 2-3 business days of your billing date." },
  { icon: "🎁", title: "Gift Options", desc: "Buy as a gift with a custom message card included." },
];

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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
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
                    }}>{tier.price}</span>
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
                    href="/subscribe/checkout"
                    className="pricing-cta block text-center py-4 rounded-full font-semibold text-white"
                    style={{
                      backgroundColor: tier.popular ? "#C2410C" : "#2563EB",
                      fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                      boxShadow: tier.popular ? "0 4px 14px rgba(194,65,12,0.4)" : "0 4px 14px rgba(37,99,235,0.3)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Get Started — {tier.price}/mo
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
            {trustItems.map((item, i) => (
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

    </div>
  );
}
