import Link from "next/link";

const tiers = [
  {
    name: "Mini Artist",
    price: "$19.99",
    period: "/mo",
    emoji: "🎨",
    bgColor: "#fff",
    headerColor: "#A8E6CF",
    textColor: "#1E3A8A",
    popular: false,
    description: "Perfect for beginners and kids just discovering their creative spark.",
    features: [
      { label: "Plaster figures OR coloring pages", value: "2 figures OR 10 pages", included: true },
      { label: "Paint pots or colored pencils", value: "6 pots or pencils", included: true },
      { label: "Brush or pencil", value: "1 included", included: true },
      { label: "Step-by-step instructions", value: "Yes", included: true },
      { label: "Sticker sheet", value: "Yes", included: true },
      { label: "Mini 3D print figure", value: "—", included: false },
      { label: "Sealant + activity card", value: "—", included: false },
      { label: "Digital banner template", value: "—", included: false },
      { label: "Illustrated storybook", value: "—", included: false },
      { label: "Display stand", value: "—", included: false },
      { label: "Resell kit", value: "—", included: false },
    ],
  },
  {
    name: "Creative Explorer",
    price: "$29.99",
    period: "/mo",
    emoji: "🖌️",
    bgColor: "#1E3A8A",
    headerColor: "#1E3A8A",
    textColor: "#fff",
    popular: true,
    description: "Our most popular tier — packed with variety and extras for growing artists.",
    features: [
      { label: "Plaster figures OR coloring pages", value: "3 figures OR 20 pages", included: true },
      { label: "Paint pots or colored pencils", value: "12 pots or color set", included: true },
      { label: "Brush or pencil", value: "Brush set included", included: true },
      { label: "Step-by-step instructions", value: "Yes", included: true },
      { label: "Sticker sheet", value: "Yes", included: true },
      { label: "Mini 3D print figure", value: "1 included", included: true },
      { label: "Sealant + activity card", value: "Yes", included: true },
      { label: "Digital banner template", value: "1 template", included: true },
      { label: "Illustrated storybook", value: "—", included: false },
      { label: "Display stand", value: "—", included: false },
      { label: "Resell kit", value: "—", included: false },
    ],
  },
  {
    name: "Master Creator",
    price: "$44.99",
    period: "/mo",
    emoji: "🏆",
    bgColor: "#fff",
    headerColor: "#FF9F1C",
    textColor: "#1E3A8A",
    popular: false,
    description: "The ultimate kit for serious young artists who want to create and share their work.",
    features: [
      { label: "Plaster figures OR coloring pages", value: "4 figures OR 30 pages", included: true },
      { label: "Paint pots or colored pencils", value: "18 pots + metallics + full set", included: true },
      { label: "Brush or pencil", value: "Premium brush set", included: true },
      { label: "Step-by-step instructions", value: "Yes", included: true },
      { label: "Sticker sheet", value: "Yes", included: true },
      { label: "Mini 3D print figure", value: "2 included", included: true },
      { label: "Sealant + activity card", value: "Yes", included: true },
      { label: "Digital banner template", value: "1 banner template", included: true },
      { label: "Illustrated storybook", value: "Yes", included: true },
      { label: "Display stand", value: "Yes", included: true },
      { label: "Resell kit", value: "Yes", included: true },
    ],
  },
];

export default function SubscribePage() {
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
          Choose Your Art Adventure
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          Monthly art subscription boxes for kids 5-12. Cancel anytime, no contracts.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
          <span>Free shipping on all subscriptions</span>
          <span>•</span>
          <span>Cancel or pause anytime</span>
          <span>•</span>
          <span>Gift subscriptions available</span>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative rounded-3xl overflow-hidden shadow-lg flex flex-col"
              style={{
                backgroundColor: tier.bgColor,
                border: tier.popular ? `3px solid #FF9F1C` : "3px solid #e2e8f0",
              }}
            >
              {tier.popular && (
                <div
                  className="text-center py-2 text-sm font-bold text-white"
                  style={{ backgroundColor: "#FF9F1C" }}
                >
                  ⭐ Most Popular — Best Value
                </div>
              )}

              {/* Tier header */}
              <div
                className="p-8 text-center"
                style={{ backgroundColor: tier.headerColor }}
              >
                <div className="text-5xl mb-3">{tier.emoji}</div>
                <h2
                  className="text-3xl mb-2"
                  style={{
                    color: tier.popular ? "#fff" : "#1E3A8A",
                    fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                  }}
                >
                  {tier.name}
                </h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: tier.popular ? "#fff" : "#1E3A8A" }}
                  >
                    {tier.price}
                  </span>
                  <span style={{ color: tier.popular ? "#dbeafe" : "#64748b" }}>{tier.period}</span>
                </div>
                <p
                  className="mt-3 text-sm opacity-80"
                  style={{ color: tier.popular ? "#dbeafe" : "#64748b" }}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-8 flex-1 flex flex-col" style={{ backgroundColor: "#F8FAFC" }}>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 text-base flex-shrink-0"
                        style={{ color: f.included ? "#10b981" : "#d1d5db" }}
                      >
                        {f.included ? "✓" : "✗"}
                      </span>
                      <span style={{ color: f.included ? "#374151" : "#9ca3af" }}>
                        <strong>{f.label}</strong>
                        {f.included && f.value !== "Yes" && (
                          <span className="font-normal"> — {f.value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/subscribe/checkout"
                  className="mt-8 block text-center py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: tier.popular ? "#FF9F1C" : "#1E3A8A" }}
                >
                  Get Started — {tier.price}/mo
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Trust */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔒",
              title: "No Commitment",
              desc: "Cancel or pause your subscription anytime — no questions asked.",
            },
            {
              icon: "🚚",
              title: "Fast Shipping",
              desc: "Boxes ship within 2-3 business days of your billing date.",
            },
            {
              icon: "🎁",
              title: "Gift Options",
              desc: "Buy a subscription as a gift with a custom message card included.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#1E3A8A",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
