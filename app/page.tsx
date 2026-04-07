import Link from "next/link";

const tiers = [
  {
    name: "Mini Artist",
    price: "$19.99",
    emoji: "🎨",
    bgColor: "#D4F7F7",
    textColor: "#2563EB",
    features: [
      "2 plaster figures OR 10 coloring pages",
      "6 paint pots or colored pencils",
      "1 brush or pencil",
      "Step-by-step instructions",
      "Fun sticker sheet",
    ],
    cta: "Get Mini Artist",
    popular: false,
  },
  {
    name: "Creative Explorer",
    price: "$29.99",
    emoji: "🖌️",
    bgColor: "#0390AC",
    textColor: "#fff",
    features: [
      "3 plaster figures OR 20 coloring pages",
      "1 mini 3D print figure",
      "12 paint pots or color set",
      "Sealant to protect artwork",
      "Activity card + digital banner template",
    ],
    cta: "Get Creative Explorer",
    popular: true,
  },
  {
    name: "Master Creator",
    price: "$44.99",
    emoji: "🏆",
    bgColor: "#FB923C",
    textColor: "#fff",
    features: [
      "4 plaster figures OR 30 coloring pages",
      "2 mini 3D prints + 1 banner template",
      "18 paint pots + metallics + full color set",
      "Illustrated storybook",
      "Display stand + Resell kit",
    ],
    cta: "Get Master Creator",
    popular: false,
  },
];

const steps = [
  {
    icon: "📦",
    title: "Choose Your Tier",
    desc: "Pick the plan that fits your little artist — Mini, Explorer, or Master Creator.",
  },
  {
    icon: "🚚",
    title: "We Ship It",
    desc: "Your curated art kit arrives at your door every month, ready to unbox.",
  },
  {
    icon: "🌟",
    title: "Create & Share",
    desc: "Kids create, parents brag. Tag us on social and join our art community!",
  },
];

const categories = [
  { emoji: "🪆", label: "Plaster Figures", desc: "Paint-your-own 3D figures kids love" },
  { emoji: "📚", label: "Coloring Books", desc: "Themed pages for all skill levels" },
  { emoji: "🖨️", label: "3D Prints", desc: "Custom mini figures to decorate" },
  { emoji: "🎉", label: "Party Kits", desc: "Perfect for birthdays & group events" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mom of two, ages 6 & 9",
    text: "My kids literally run to the mailbox on delivery day! The plaster figures are such high quality and the instructions are clear enough that even my 6-year-old can follow along independently.",
    stars: 5,
  },
  {
    name: "David R.",
    role: "Dad of Mia, age 8",
    text: "We got the Creative Explorer box and Mia hasn't stopped painting since. The digital banner template was a sweet bonus — she designed her own art gallery wall. 10/10 would recommend.",
    stars: 5,
  },
  {
    name: "Jessica T.",
    role: "Mom of three",
    text: "Blue By Art Shop saved our weekends. Instead of screen time, all three of my kids sit at the table creating together. The Master Creator tier is absolutely worth every penny.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "How fast does it ship?",
    a: "All subscriptions ship within 2-3 business days of your billing date. Standard delivery takes 5-7 business days. Expedited options available at checkout.",
  },
  {
    q: "What age range is this for?",
    a: "Our kits are designed for kids ages 5-12. Each tier includes age-appropriate materials and instructions. For younger children, we recommend the Mini Artist tier with parental supervision.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely — no lock-in contracts. You can pause or cancel your subscription at any time from your account dashboard, effective the following billing cycle.",
  },
  {
    q: "Do you offer custom orders?",
    a: "Yes! We do custom party kits and wholesale orders. Contact us at hello@bluebyartshop.com or fill out the contact form for a custom quote.",
  },
  {
    q: "Is wholesale available?",
    a: "We offer wholesale pricing starting at $12-$28/unit for orders of 50+ units. Perfect for schools, studios, and event planners. Reach out via our contact page.",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden hero-gradient"
        style={{ minHeight: "90vh" }}
      >
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "#D4F7F7" }}
        />
        <div
          className="absolute bottom-20 left-5 w-40 h-40 rounded-full opacity-10"
          style={{ backgroundColor: "#FB923C" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-28">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#FB923C", color: "#fff" }}
          >
            🎨 Monthly Art Kits for Kids 5-12
          </span>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Where Little Hands
            <br />
            <span style={{ color: "#D4F7F7" }}>Create Big Wonders.</span>
          </h1>

          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Curated art subscription boxes packed with safe, premium materials — plaster figures,
            coloring books, 3D prints, and more. Delivered to your door every month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/subscribe"
              className="px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#FB923C", color: "#fff" }}
            >
              Start Creating
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 rounded-full text-lg font-bold border-2 border-white text-white transition-all duration-200"
              style={{ transition: "background-color 0.2s, color 0.2s" }}
              onMouseEnter={undefined}
            >
              Browse the Shop
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
            {[
              "No contracts — cancel anytime",
              "Ships in 2-3 business days",
              "Gift subscriptions available",
            ].map((item) => (
              <span key={item} className="font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{
              color: "#2563EB",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Getting started is as easy as 1-2-3. No art experience needed!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-8 rounded-3xl shadow-sm border bg-white"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-5"
                style={{ backgroundColor: "#D4F7F7" }}
              >
                {step.icon}
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                style={{ backgroundColor: "#FB923C" }}
              >
                {i + 1}
              </div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "#2563EB",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#D4F7F7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl sm:text-5xl mb-4"
              style={{
                color: "#2563EB",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Pick Your Art Adventure
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Three tiers designed to grow with your little artist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-3xl shadow-lg overflow-hidden flex flex-col"
                style={{ backgroundColor: tier.bgColor }}
              >
                {tier.popular && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#FB923C", color: "#fff" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-1">
                  <div className="text-5xl mb-4">{tier.emoji}</div>
                  <h3
                    className="text-3xl mb-1"
                    style={{
                      color: tier.textColor,
                      fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-4xl font-bold mb-1" style={{ color: tier.textColor }}>
                    {tier.price}
                    <span className="text-base font-normal opacity-70">/mo</span>
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: tier.textColor }}
                      >
                        <span className="mt-0.5 opacity-80">✓</span>
                        <span className="opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/subscribe"
                    className="block text-center py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:opacity-90"
                    style={{
                      backgroundColor: tier.popular ? "#FB923C" : "#2563EB",
                      color: "#fff",
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{
              color: "#2563EB",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            What&apos;s in the Box?
          </h2>
          <p className="text-gray-500 text-lg">Explore our product categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              href="/shop"
              key={cat.label}
              className="flex flex-col items-center text-center p-6 rounded-3xl border-2 hover:shadow-md transition-all duration-200 bg-white"
              style={{ borderColor: "#e2e8f0" }}
            >
              <span className="text-5xl mb-3">{cat.emoji}</span>
              <h4
                className="text-lg font-semibold mb-1"
                style={{
                  color: "#2563EB",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {cat.label}
              </h4>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#D4F7F7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl sm:text-5xl mb-4"
              style={{
                color: "#2563EB",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Parents Love It
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "#0390AC" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{
              color: "#2563EB",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl p-6 shadow-sm border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <h4
                className="text-lg font-semibold mb-2"
                style={{
                  color: "#2563EB",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {faq.q}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center hero-gradient"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Ready to Create Something Amazing?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of families already creating together. First box ships within 48 hours.
          </p>
          <Link
            href="/subscribe"
            className="inline-block px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "#FB923C", color: "#fff" }}
          >
            Start Your Subscription
          </Link>
        </div>
      </section>
    </div>
  );
}
