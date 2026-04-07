import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Kids Art Subscription Box | Blue By Art Shop — Monthly Art Kits Ages 5–12",
  description:
    "Discover Blue By Art Shop — premium monthly art subscription boxes for kids ages 5–12. Paint-your-own plaster figures, coloring books, 3D print kits, and party sets. Non-toxic. Starts at $19.99/mo. Join 400+ families.",
  alternates: {
    canonical: "https://bluebyartshop.com",
  },
  openGraph: {
    title: "Kids Art Subscription Box | Blue By Art Shop — Monthly Art Kits Ages 5–12",
    description:
      "Discover Blue By Art Shop — premium monthly art subscription boxes for kids ages 5–12. Paint-your-own plaster figures, coloring books, 3D print kits, and party sets. Non-toxic. Starts at $19.99/mo. Join 400+ families.",
    url: "https://bluebyartshop.com",
    images: [
      {
        url: "/images/hero-kids-painting.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children painting Blue By Art Shop art kits",
      },
    ],
  },
};

const tiers = [
  {
    name: "Mini Artist",
    price: "$19.99",
    emoji: "🎨",
    iconBg: "#EBF5FF",
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
    iconBg: "#FFF4ED",
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
    iconBg: "#ECFDF5",
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

const howItWorks = [
  {
    num: "1",
    image: "/images/hero-unboxing.jpg",
    alt: "Blue By Art Shop kit contents laid out",
    title: "Choose Your Tier",
    desc: "Pick the plan that fits your little artist — Mini, Explorer, or Master Creator. New themes every month.",
    color: "#2563EB",
    bg: "#EBF5FF",
  },
  {
    num: "2",
    image: "/images/hero-kids-painting.jpg",
    alt: "Happy children painting plaster figures",
    title: "Unbox & Create",
    desc: "Your curated art kit arrives every month, packed with safe premium materials and step-by-step guides.",
    color: "#C2410C",
    bg: "#FFF4ED",
  },
  {
    num: "3",
    image: "/images/about-kids-artwork.jpg",
    alt: "Child proudly showing finished artwork",
    title: "Show Off & Share",
    desc: "Kids create, parents brag. Tag us on social and join our growing community of young artists!",
    color: "#0390AC",
    bg: "#E0F7FA",
  },
];

const categories = [
  { image: "/images/product-unicorn.jpg", label: "Plaster Figures", desc: "Paint-your-own 3D figures", href: "/shop?cat=plaster" },
  { image: "/images/product-coloring-book.jpg", label: "Coloring Books", desc: "Themed pages for all levels", href: "/shop?cat=coloring" },
  { image: "/images/product-3d-dragon.jpg", label: "3D Print Figures", desc: "Custom minis to decorate", href: "/shop?cat=3d" },
  { image: "/images/product-party-kit.jpg", label: "Party Kits", desc: "Perfect for birthdays & events", href: "/shop?cat=party" },
];

const testimonials = [
  { name: "Sarah M.", role: "Mom of two, ages 6 & 9", avatar: "/images/testimonial-mom.jpg", text: "My kids literally run to the mailbox on delivery day! The plaster figures are such high quality and the instructions are clear enough that even my 6-year-old can follow along independently.", stars: 5 },
  { name: "David R.", role: "Dad of Mia, age 8", avatar: "/images/testimonial-dad.jpg", text: "We got the Creative Explorer box and Mia hasn't stopped painting since. The digital banner template was a sweet bonus — she designed her own art gallery wall. 10/10 would recommend.", stars: 5 },
  { name: "Jessica T.", role: "Mom of three", avatar: "/images/testimonial-mom2.jpg", text: "Blue By Art Shop saved our weekends. Instead of screen time, all three of my kids sit at the table creating together. The Master Creator tier is absolutely worth every penny.", stars: 5 },
];

const faqs = [
  { q: "What is the best art subscription box for kids?", a: "Blue By Art Shop is one of the best kids art subscription boxes for ages 5–12. Educator-curated, non-toxic monthly kits start at just $19.99/month. With three skill tiers, cancel-anytime flexibility, and a 98% parent satisfaction rate, it stands out from generic alternatives for its quality and developmental focus." },
  { q: "How fast does it ship?", a: "All subscriptions ship within 2–3 business days of your billing date. Standard delivery takes 5–7 business days. Expedited options are available at checkout for faster delivery." },
  { q: "What age range is this for?", a: "Our kits are designed for kids ages 5–12. Each tier includes age-appropriate materials and instructions. The Mini Artist tier is optimized for ages 5–7, while Creative Explorer and Master Creator work great for ages 5–12." },
  { q: "Are Blue By Art Shop kits non-toxic?", a: "Yes — every material in every Blue By Art Shop kit is non-toxic, child-safe, and ASTM D-4236 compliant. All paints are washable and certified safe for children ages 5 and up. We source only from eco-conscious, safety-compliant suppliers." },
  { q: "Can I cancel anytime?", a: "Absolutely — no lock-in contracts. You can pause or cancel your subscription at any time from your account dashboard. Cancellations take effect the following billing cycle with no fees or penalties." },
  { q: "Does Blue By Art Shop offer gift subscriptions?", a: "Yes! Gift subscriptions are available for all three tiers. A custom message card can be included, and every gift ships in beautiful, ready-to-give packaging within 2–3 business days. Perfect for birthdays and holidays." },
  { q: "What is included in the Mini Artist box?", a: "Mini Artist ($19.99/month, ages 5–7) includes: 2 paint-your-own plaster figures OR 10 coloring pages, 6 non-toxic paint pots, 1 brush, step-by-step illustrated instructions, and a fun themed sticker sheet." },
  { q: "What is included in the Creative Explorer box?", a: "Creative Explorer ($29.99/month, ages 5–12) includes: 3 plaster figures OR 20 coloring pages, 1 mini 3D print figure, 12 paint pots, full brush set, sealant to protect artwork, activity card, and a digital banner template." },
  { q: "What is included in the Master Creator box?", a: "Master Creator ($44.99/month, ages 5–12) includes: 4 plaster figures OR 30 coloring pages, 2 mini 3D print figures, 18 paint pots including metallics, premium brush set, sealant, illustrated storybook, display stand, and resell kit." },
  { q: "Can I buy Blue By Art Shop kits without a subscription?", a: "Yes! All 16 individual products are available as one-time purchases at our shop — no subscription required. From plaster figure kits starting at $14.99 to party kits and wholesale bundles, you can buy exactly what you need." },
  { q: "Can schools order Blue By Art Shop wholesale?", a: "Yes. We offer wholesale pricing for schools, art studios, camps, and event planners. Starter Pack: 50 units at $12/unit. Premium Pack: 50 units at $28/unit. Custom branding available. Contact wholesale@bluebyartshop.com for details." },
  { q: "Where does Blue By Art Shop ship to?", a: "We currently ship within the United States. All orders process within 2–3 business days. Standard delivery takes 5–7 business days. Expedited shipping options are available at checkout." },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      {/* ── HERO — Full-bleed photo background ──────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        {/* Background photo — fills the whole section */}
        <Image
          src="/images/hero-kids-painting.jpg"
          alt="Happy children painting art kits"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Left-to-right gradient: dark left for text, transparent right to show kids */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,20,65,0.95) 0%, rgba(30,80,180,0.85) 35%, rgba(3,100,150,0.50) 62%, rgba(0,0,0,0.08) 100%)" }} />

        {/* Animated blobs (subtle on top of image) */}
        <div className="blob-a absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="blob-c absolute bottom-0 left-1/3 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(251,146,60,0.07)" }} />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: "90vh" }}>
          <div className="w-full max-w-2xl py-20 lg:py-28">

            <span className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
              style={{ backgroundColor: "#C2410C", color: "#fff", boxShadow: "0 4px 14px rgba(194,65,12,0.4)" }}>
              🎨 Monthly Art Kits for Kids 5–12
            </span>

            <h1 className="hero-title text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}>
              Where Little Hands<br />
              <span style={{ color: "#D4F7F7" }}>Create Big Wonders.</span>
            </h1>

            <p className="hero-subtitle mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "clamp(1.0625rem, 2vw, 1.25rem)", fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif", maxWidth: "540px" }}>
              Curated art subscription boxes packed with safe, premium materials — plaster figures, coloring books, 3D prints, and more. Delivered every month.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/subscribe" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "16px 38px" }}>
                Start Creating →
              </Link>
              <Link href="/shop" className="btn-outline" style={{ fontSize: "1.0625rem" }}>
                Browse the Shop
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap gap-6">
              {["✓ No contracts", "✓ Ships in 2–3 days", "✓ Gift subscriptions"].map((t) => (
                <span key={t} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Floating cards — visible on desktop over the right side of the photo */}
          {/* Unboxing image — big card, right side */}
          <div className="hidden lg:block absolute right-10 top-20 w-80 h-60 rounded-3xl overflow-hidden"
            style={{ border: "4px solid rgba(255,255,255,0.95)", boxShadow: "0 16px 48px rgba(0,0,0,0.32)" }}>
            <Image src="/images/hero-unboxing.jpg" alt="Art kit contents" fill className="object-cover" sizes="320px" />
          </div>

          {/* Rating badge — top-left of the unboxing card */}
          <div className="hidden lg:block absolute right-72 top-24 bg-white rounded-2xl px-4 py-3"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map(i => <span key={i} aria-hidden="true" style={{ color: "#C2410C", fontSize: "0.875rem" }}>★</span>)}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 600 }}>98% satisfaction</div>
          </div>

          {/* Families stat — bottom of unboxing card */}
          <div className="hidden lg:flex absolute right-16 bottom-20 bg-white rounded-2xl px-5 py-3.5 items-center gap-3"
            style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.22)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: "#EBF5FF" }}>🎨</div>
            <div>
              <div style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "1.25rem", fontWeight: 700, color: "#2563EB", lineHeight: 1 }}>400+</div>
              <div style={{ fontSize: "0.75rem", color: "#64748B" }}>Happy families</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE — Email opt-in ──────────────────────── */}
      <section style={{ backgroundColor: "#1E293B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow" style={{ backgroundColor: "#C2410C", color: "#fff" }}>Limited Offer</span>
          <h2 className="mt-4 mb-3 text-white"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
            Get 10% Off Your First Box
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}>
            Drop your email and we&apos;ll send your discount code instantly. No spam, cancel anytime.
          </p>
          <LeadCaptureForm />
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8125rem" }}>
            🔒 Your info is safe. We hate spam as much as you do.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS — Photo cards ──────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <span className="eyebrow eyebrow-blue">How It Works</span>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              Three Steps to Creative Joy
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.0625rem", maxWidth: "480px", margin: "0 auto" }}>
              Getting started is as easy as 1-2-3. No art experience needed!
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 130} direction="up">
                <div className="bg-white rounded-3xl overflow-hidden flex flex-col" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.06)" }}>
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <Image src={step.image} alt={step.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)" }} />
                    {/* Step number badge */}
                    <span className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white z-10"
                      style={{ backgroundColor: step.color, boxShadow: "0 4px 12px rgba(0,0,0,0.25)" }}>
                      {step.num}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="p-7">
                    <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}>{step.title}</h3>
                    <p style={{ color: "#64748B", lineHeight: 1.65, fontSize: "0.9375rem" }}>{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES — Full photo cards with overlay ──────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <span className="eyebrow eyebrow-teal">Our Products</span>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              What&apos;s in the Box?
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.0625rem" }}>Explore our curated product categories</p>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <AnimateIn key={cat.label} delay={i * 100} direction="up">
                <Link href={cat.href} className="category-card group block rounded-2xl overflow-hidden relative" style={{ height: "260px", textDecoration: "none" }}>
                  {/* Photo */}
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,25,47,0.80) 0%, rgba(10,25,47,0.3) 55%, transparent 100%)" }} />
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="font-bold mb-1" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#fff", fontSize: "1.0625rem" }}>
                      {cat.label}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8125rem" }}>{cat.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAMILY FEATURE BANNER — Full-bleed photo ────────── */}
      <AnimateIn>
        <section className="relative overflow-hidden" style={{ height: "500px" }}>
          <Image
            src="/images/about-family-art.jpg"
            alt="Family painting together at home"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient left overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,41,59,0.88) 0%, rgba(37,99,235,0.65) 50%, rgba(0,0,0,0.1) 100%)" }} />
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div style={{ maxWidth: "560px" }}>
                <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Art That Grows</span>
                <h2 className="text-white mt-4 mb-5"
                  style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}>
                  Quality Time That Kids Actually Want
                </h2>
                <p className="mb-8" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
                  Every kit is thoughtfully curated by educators and artists. Non-toxic, premium materials designed to spark creativity — and memories that last a lifetime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-primary" style={{ fontSize: "1rem" }}>
                    Our Story →
                  </Link>
                  <Link href="/subscribe" className="btn-outline" style={{ fontSize: "1rem" }}>
                    Start Subscribing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* ── PRICING ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <span className="eyebrow eyebrow-orange">Pricing Plans</span>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              Pick Your Art Adventure
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.0625rem", maxWidth: "480px", margin: "0 auto" }}>
              Three tiers designed to grow with your little artist.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={i * 130} direction="up">
                <div className="relative rounded-2xl p-8 flex flex-col" style={{
                  backgroundColor: "#FFFFFF",
                  border: tier.popular ? "2px solid #FB923C" : "1px solid #E2E8F0",
                  boxShadow: tier.popular ? "0 8px 40px rgba(251,146,60,0.18), 0 24px 60px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                  transform: tier.popular ? "scale(1.03)" : "scale(1)",
                }}>
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                      style={{ backgroundColor: "#C2410C", boxShadow: "0 4px 12px rgba(194,65,12,0.4)" }}>
                      ⭐ Most Popular
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 mx-auto" style={{ backgroundColor: tier.iconBg }}>{tier.emoji}</div>
                  <h3 className="text-2xl mb-1" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}>{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-6">
                    <span style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "3rem", fontWeight: 700, color: tier.popular ? "#C2410C" : "#1E293B", lineHeight: 1 }}>{tier.price}</span>
                    <span style={{ color: "#94A3B8", fontSize: "0.9375rem", paddingBottom: "4px" }}>/mo</span>
                  </div>
                  <ul className="flex-1 space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#334155" }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                          style={{ backgroundColor: tier.popular ? "#FFF4ED" : "#EBF5FF", color: tier.popular ? "#C2410C" : "#2563EB", fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/subscribe" className="pricing-cta block text-center py-3.5 rounded-full font-semibold text-sm"
                    style={{ backgroundColor: tier.popular ? "#C2410C" : "#2563EB", color: "#fff", fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif", letterSpacing: "0.02em", boxShadow: tier.popular ? "0 4px 14px rgba(194,65,12,0.4)" : "0 4px 14px rgba(37,99,235,0.3)" }}>
                    {tier.cta}
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLIES FLATLAY BANNER ──────────────────────────── */}
      <section className="py-0 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="rounded-3xl overflow-hidden relative" style={{ height: "320px" }}>
              <Image
                src="/images/shop-supplies-flatlay.jpg"
                alt="Colorful art supplies from Blue By Art Shop"
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(37,99,235,0.78) 0%, rgba(3,144,172,0.5) 45%, rgba(0,0,0,0) 100%)" }} />
              <div className="absolute inset-0 flex items-center px-12">
                <div style={{ maxWidth: "420px" }}>
                  <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Premium Materials</span>
                  <h3 className="text-white mt-3 mb-3"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}>
                    Everything in the Box is Chosen With Love
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Non-toxic, child-safe, and tested to international standards. Over 12,000 kits delivered — and kids keep coming back for more.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS — with real photos ──────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <span className="eyebrow eyebrow-teal">Testimonials</span>
            <h2 className="mb-2" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              Parents Love It
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.0625rem" }}>Real families, real creativity</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 120} direction="up">
                <div className="relative bg-white rounded-2xl p-8" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)" }}>
                  <div className="absolute top-5 right-6 select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "5rem", lineHeight: 1, color: "rgba(37,99,235,0.07)", fontWeight: 700 }}>&ldquo;</div>
                  <div className="flex gap-0.5 mb-4">
                    <span aria-label={`${t.stars} out of 5 stars`} className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => <span key={j} aria-hidden="true" style={{ color: "#C2410C", fontSize: "1.125rem" }}>★</span>)}
                    </span>
                  </div>
                  <p className="italic leading-relaxed mb-6" style={{ color: "#334155", fontSize: "0.9375rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                      <Image src={t.avatar} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#1E293B" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "#94A3B8" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE — Why Parents Choose Blue By Art Shop ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }} aria-label="Why Parents Choose Blue By Art Shop">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <span className="eyebrow eyebrow-blue">Why Blue By Art Shop</span>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              Why Parents Choose Blue By Art Shop
            </h2>
            <p style={{ color: "#64748B", fontSize: "1.0625rem" }}>See how we compare to generic art kits on the market</p>
          </AnimateIn>
          <AnimateIn>
            <div style={{ overflowX: "auto", borderRadius: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", fontSize: "0.9375rem" }}>
                <thead>
                  <tr style={{ backgroundColor: "#2563EB", color: "#fff" }}>
                    <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontWeight: 600 }}>Feature</th>
                    <th style={{ padding: "16px 20px", textAlign: "center", fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontWeight: 600 }}>Blue By Art Shop</th>
                    <th style={{ padding: "16px 20px", textAlign: "center", fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontWeight: 600 }}>Generic Art Kits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Educator-curated content", us: "✅ Yes", them: "❌ Often not" },
                    { feature: "Non-toxic certified (ASTM D-4236)", us: "✅ Yes", them: "⚠️ Varies" },
                    { feature: "Monthly subscription", us: "✅ $19.99–$44.99/mo", them: "❌ Usually one-time" },
                    { feature: "3 skill tiers for growth", us: "✅ Yes", them: "❌ One-size-fits-all" },
                    { feature: "Cancel anytime, no contracts", us: "✅ Yes", them: "N/A" },
                    { feature: "3D print figures included", us: "✅ Explorer & Master tiers", them: "❌ Rare" },
                    { feature: "Party kit bundles (up to 50)", us: "✅ Yes", them: "❌ Rare" },
                    { feature: "Wholesale for schools", us: "✅ $12–$28/unit", them: "❌ Rare" },
                    { feature: "Gift subscriptions", us: "✅ Yes", them: "Sometimes" },
                    { feature: "Parent satisfaction rate", us: "✅ 98%", them: "Unknown" },
                  ].map((row, i) => (
                    <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#F8FAFC" : "#fff", borderBottom: "1px solid #E2E8F0" }}>
                      <td style={{ padding: "14px 20px", color: "#334155", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 20px", textAlign: "center", color: "#059669", fontWeight: 600 }}>{row.us}</td>
                      <td style={{ padding: "14px 20px", textAlign: "center", color: "#64748B" }}>{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <span className="eyebrow eyebrow-blue">FAQ</span>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1E293B", fontWeight: 600 }}>
              Frequently Asked Questions
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.q} delay={i * 80} direction="left">
                <div className="rounded-2xl p-7" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <h3 className="text-base mb-2.5 flex items-start gap-2"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#2563EB", fontWeight: 600, fontSize: "1.0625rem" }}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs mt-0.5"
                      style={{ backgroundColor: "#EBF5FF", color: "#2563EB", fontWeight: 700 }}>Q</span>
                    {faq.q}
                  </h3>
                  <p className="leading-relaxed pl-8" style={{ color: "#64748B", fontSize: "0.9375rem" }}>{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — with art photo background ──────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <Image
          src="/images/about-kids-artwork.jpg"
          alt="Child proudly showing her painted artwork"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.90) 0%, rgba(3,144,172,0.80) 100%)" }} />
        <AnimateIn className="relative h-full flex items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="blob-a absolute -top-12 -right-12 w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Join 400+ Families</span>
            <h2 className="text-white mb-4 mt-4"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
              Ready to Create Something Amazing?
            </h2>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem" }}>
              Join hundreds of families already creating together. First box ships within 48 hours.
            </p>
            <Link href="/subscribe" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "16px 40px" }}>
              Start Your Subscription →
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* ── JSON-LD STRUCTURED DATA ──────────────────────────── */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the best art subscription box for kids?", "acceptedAnswer": { "@type": "Answer", "text": "Blue By Art Shop is one of the best kids art subscription boxes for ages 5–12. Educator-curated, non-toxic monthly kits start at just $19.99/month. With three skill tiers, cancel-anytime flexibility, and a 98% parent satisfaction rate, it stands out from generic alternatives for its quality and developmental focus." } },
          { "@type": "Question", "name": "How fast does it ship?", "acceptedAnswer": { "@type": "Answer", "text": "All subscriptions ship within 2–3 business days of your billing date. Standard delivery takes 5–7 business days. Expedited options are available at checkout." } },
          { "@type": "Question", "name": "What age range is this for?", "acceptedAnswer": { "@type": "Answer", "text": "Our kits are designed for kids ages 5–12. The Mini Artist tier is optimized for ages 5–7, while Creative Explorer and Master Creator work great for ages 5–12." } },
          { "@type": "Question", "name": "Are Blue By Art Shop kits non-toxic?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — every material is non-toxic, child-safe, and ASTM D-4236 compliant. All paints are washable and certified safe for children ages 5 and up." } },
          { "@type": "Question", "name": "Can I cancel anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — no lock-in contracts. You can pause or cancel your subscription at any time. Cancellations take effect the following billing cycle with no fees." } },
          { "@type": "Question", "name": "Does Blue By Art Shop offer gift subscriptions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Gift subscriptions are available for all three tiers with custom message cards, in gift-ready packaging, shipping within 2–3 business days." } },
          { "@type": "Question", "name": "What is included in the Mini Artist box?", "acceptedAnswer": { "@type": "Answer", "text": "Mini Artist ($19.99/month, ages 5–7) includes: 2 plaster figures OR 10 coloring pages, 6 non-toxic paint pots, 1 brush, instructions, and sticker sheet." } },
          { "@type": "Question", "name": "What is included in the Creative Explorer box?", "acceptedAnswer": { "@type": "Answer", "text": "Creative Explorer ($29.99/month, ages 5–12) includes: 3 plaster figures OR 20 coloring pages, 1 mini 3D print, 12 paint pots, brush set, sealant, activity card, and digital banner template." } },
          { "@type": "Question", "name": "What is included in the Master Creator box?", "acceptedAnswer": { "@type": "Answer", "text": "Master Creator ($44.99/month, ages 5–12) includes: 4 plaster figures OR 30 coloring pages, 2 mini 3D prints, 18 paint pots including metallics, storybook, display stand, and resell kit." } },
          { "@type": "Question", "name": "Can I buy Blue By Art Shop kits without a subscription?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all 16 individual products are available as one-time purchases at our shop with no subscription required, starting from $9.99." } },
          { "@type": "Question", "name": "Can schools order Blue By Art Shop wholesale?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Wholesale pricing available: Starter Pack 50 units at $12/unit, Premium Pack 50 units at $28/unit. Contact wholesale@bluebyartshop.com." } },
          { "@type": "Question", "name": "Where does Blue By Art Shop ship to?", "acceptedAnswer": { "@type": "Answer", "text": "We ship within the United States. Processing takes 2–3 business days, standard delivery 5–7 business days. Expedited options available." } },
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Blue By Art Shop Subscription Plans",
        "description": "Monthly art subscription boxes for kids ages 5-12",
        "numberOfItems": 3,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@type": "Product", "name": "Mini Artist Subscription Box", "description": "Monthly art kit for kids ages 5-7. Includes 2 plaster figures or 10 coloring pages, 6 paint pots, brush, and sticker sheet.", "url": "https://bluebyartshop.com/subscribe", "brand": { "@type": "Brand", "name": "Blue By Art Shop" }, "offers": { "@type": "Offer", "price": "19.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "19.99", "priceCurrency": "USD", "billingIncrement": 1, "unitCode": "MON" } }, "audience": { "@type": "PeopleAudience", "suggestedMinAge": 5, "suggestedMaxAge": 7 } } },
          { "@type": "ListItem", "position": 2, "item": { "@type": "Product", "name": "Creative Explorer Subscription Box", "description": "Monthly art kit for kids ages 5-12. Includes 3 plaster figures or 20 coloring pages, 1 mini 3D print, 12 paint pots, brush set, sealant, and activity card.", "url": "https://bluebyartshop.com/subscribe", "brand": { "@type": "Brand", "name": "Blue By Art Shop" }, "offers": { "@type": "Offer", "price": "29.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29.99", "priceCurrency": "USD", "billingIncrement": 1, "unitCode": "MON" } }, "audience": { "@type": "PeopleAudience", "suggestedMinAge": 5, "suggestedMaxAge": 12 } } },
          { "@type": "ListItem", "position": 3, "item": { "@type": "Product", "name": "Master Creator Subscription Box", "description": "Premium monthly art kit for kids ages 5-12. Includes 4 plaster figures or 30 coloring pages, 2 mini 3D prints, 18 paint pots with metallics, storybook, and display stand.", "url": "https://bluebyartshop.com/subscribe", "brand": { "@type": "Brand", "name": "Blue By Art Shop" }, "offers": { "@type": "Offer", "price": "44.99", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "44.99", "priceCurrency": "USD", "billingIncrement": 1, "unitCode": "MON" } }, "audience": { "@type": "PeopleAudience", "suggestedMinAge": 5, "suggestedMaxAge": 12 } } },
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluebyartshop.com" }
        ]
      }} />

    </div>
  );
}
