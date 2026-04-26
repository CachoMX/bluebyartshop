import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { MarketingImage } from "@/components/MarketingImage";
import {
  BRAND_EMAIL,
  BRAND_LOGO_PATH,
  BRAND_NAME,
  SITE_URL,
} from "@/lib/brand";

export const metadata: Metadata = {
  title: `About ${BRAND_NAME} | Kids Art Subscription Box — Our Story & Mission`,
  description:
    "Learn how Blue By Art Shop approaches kids art subscriptions, one-time creative kits, and hands-on project-based art time for ages 4 and up.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About ${BRAND_NAME} | Our Story, Mission & Team`,
    description:
      "Blue By Art Shop focuses on kids art subscriptions, one-time creative kits, and project-based art experiences for ages 4 and up.",
    url: `${SITE_URL}/about`,
    images: [{ url: BRAND_LOGO_PATH, width: 1200, height: 630, alt: `${BRAND_NAME} logo` }],
  },
};

const team = [
  { name: "Creative Planning", role: "Theme and project direction", emoji: "👩‍🎨", avatarBg: "linear-gradient(135deg,#2563EB,#0390AC)", bio: "This part of the brand focuses on the monthly themes, project ideas, and the overall creative direction behind each box and kit." },
  { name: "Product Development", role: "Kit design and assortment", emoji: "🧑‍🎨", avatarBg: "linear-gradient(135deg,#0390AC,#059669)", bio: "This work centers on selecting the mix of activities, art formats, and product categories that appear across subscriptions and one-time kits." },
  { name: "Customer Care", role: "Support and wholesale follow-up", emoji: "👩‍💼", avatarBg: "linear-gradient(135deg,#FB923C,#F97316)", bio: "This team handles support questions, wholesale conversations, and the account-side communication that keeps the storefront usable for families and partners." },
];

const values = [
  { icon: "🎨", title: "Creativity First", desc: "Every product is designed to spark imagination, not just follow instructions.", bg: "#EBF5FF", color: "#2563EB" },
  { icon: "🛡️", title: "Safety Always", desc: "We aim for kid-friendly materials and age-aware project design across the catalog.", bg: "#ECFDF5", color: "#059669" },
  { icon: "🌱", title: "Grow Together", desc: "Our tiers evolve with your child's skills — no need to switch boxes, just upgrade.", bg: "#E0F7FA", color: "#0390AC" },
  { icon: "♻️", title: "Thoughtful Packaging", desc: "We keep packaging and presentation practical so kits feel giftable without overwhelming the project itself.", bg: "#F3F0FF", color: "#7C3AED" },
];

const stats = [
  { value: "3", label: "Subscription Plans" },
  { value: "16", label: "One-Time Products" },
  { value: "4+", label: "Age Range" },
  { value: "Online", label: "Storefront Support" },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Hero */}
      <section className="hero-gradient py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="blob-a absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.07)" }} />
        <div className="blob-b absolute -bottom-10 -left-10 w-60 h-60 rounded-full pointer-events-none" style={{ background: "rgba(251,146,60,0.12)" }} />
        <div className="relative">
          <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Our Story</span>
          <h1
            className="hero-title text-white mb-4"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700 }}
          >
            About Blue By Art Shop
          </h1>
          <p className="hero-subtitle max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem" }}>
            We believe every child is an artist. Our mission is to give them the tools to prove it.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#1E293B" }}>
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 80} direction="up" className="text-center">
              <div style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "2.5rem", fontWeight: 700, color: "#C2410C" }}>
                {s.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", fontWeight: 500 }}>{s.label}</div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Brand Facts — for LLM citation and SEO entity clarity */}
      <section aria-label="Brand Facts" className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-8">
            <span className="eyebrow eyebrow-blue">By the Numbers</span>
            <h2 style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#1E293B", fontWeight: 600 }}>
              Blue By Art Shop at a Glance
            </h2>
          </AnimateIn>
          <AnimateIn>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { dt: "Age Range Served", dd: "4 and up" },
                { dt: "Subscription Plans", dd: "Mini Artist, Creative Explorer, Master Creator" },
                { dt: "Catalog Size", dd: "16 one-time products across five categories" },
                { dt: "Support Model", dd: "Online account, checkout, and contact flows" },
                { dt: "Pricing", dd: "Subscriptions from $24.99/month" },
                { dt: "Contact", dd: BRAND_EMAIL },
                { dt: "Subscription Tiers", dd: "Mini Artist, Creative Explorer, Master Creator" },
                { dt: "Policy Pages", dd: "Privacy, terms, and shipping/returns are published on-site" },
              ].map(({ dt, dd }) => (
                <div key={dt} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "#F0F7FF", border: "1px solid #DBEAFE" }}>
                  <dt className="text-sm font-semibold flex-shrink-0" style={{ color: "#2563EB", minWidth: "180px" }}>{dt}:</dt>
                  <dd style={{ color: "#334155", fontSize: "0.9375rem" }}>{dd}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section aria-label="Our Story" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <span className="eyebrow eyebrow-blue">Who We Are</span>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "#1E293B", fontWeight: 600 }}
              >
                Our Story
              </h2>
              <div className="space-y-4" style={{ color: "#334155", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                <p>
                  Blue By Art Shop was created to make it easier for families to
                  find art projects that feel fun, hands-on, and age-appropriate
                  without piecing together materials from multiple places.
                </p>
                <p>
                  The storefront brings together recurring subscription options,
                  one-time kits, party packs, and wholesale bundles so families,
                  schools, and studios can choose the format that fits the moment.
                </p>
                <p>
                  The goal is simple: give kids a clear project they can finish,
                  display, and feel proud of, while giving adults a cleaner way to
                  browse, subscribe, and get support when they need it.
                </p>
              </div>
            </AnimateIn>

            {/* Family art photo */}
            <AnimateIn direction="left" delay={150}>
              <div className="rounded-3xl relative overflow-hidden" style={{ height: "360px" }}>
                <MarketingImage
                  src="/images/about-family-art.jpg"
                  alt="Family painting together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Floating badge overlay */}
                <div
                  className="absolute bottom-5 left-5 px-4 py-3 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                >
                  <p style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#2563EB", fontSize: "1.125rem", fontWeight: 600 }}>Project-Based Kits</p>
                  <p style={{ color: "#64748B", fontSize: "0.8125rem" }}>subscriptions, one-time kits, and party formats</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section aria-label="Our Mission" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
        <AnimateIn className="max-w-3xl mx-auto text-center" direction="fade">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
            style={{ background: "linear-gradient(135deg,#2563EB,#0390AC)", boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}
          >
            💙
          </div>
          <span className="eyebrow eyebrow-blue">Mission</span>
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", color: "#1E293B", fontWeight: 600 }}
          >
            Our Mission
          </h2>
          <blockquote
            className="italic leading-relaxed mb-6"
            style={{ fontSize: "1.25rem", color: "#334155", borderLeft: "4px solid #2563EB", paddingLeft: "1.5rem", textAlign: "left" }}
          >
            &ldquo;To inspire every child to create boldly, explore freely, and grow confidently through the power of art.&rdquo;
          </blockquote>
          <p style={{ color: "#64748B", fontSize: "1rem" }}>
            We measure success not in subscriptions, but in kids who say &ldquo;Look what I made!&rdquo;
          </p>
        </AnimateIn>
      </section>

      {/* Values */}
      <section aria-label="Our Values" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <span className="eyebrow eyebrow-teal">Values</span>
            <h2 style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", color: "#1E293B", fontWeight: 600 }}>
              What We Stand For
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 100} direction="up">
                <div className="card p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                    style={{ backgroundColor: v.bg }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="text-lg mb-3"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: v.color, fontWeight: 600 }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#E0F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <span className="eyebrow eyebrow-teal">The Team</span>
            <h2 style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", color: "#1E293B", fontWeight: 600 }}>
              Meet the People Behind the Box
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", marginTop: "0.75rem" }}>
              Artists, educators, and parents building something they&apos;d be proud to send to their own kids.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 120} direction="up">
                <div className="card p-8 text-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                    style={{ background: member.avatarBg, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                  >
                    {member.emoji}
                  </div>
                  <h3
                    className="text-xl mb-1"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: "#C2410C" }}>{member.role}</p>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center hero-gradient relative overflow-hidden">
        <div className="blob-a absolute -top-10 -right-10 w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
        <AnimateIn className="relative max-w-2xl mx-auto">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700 }}
          >
            Join the Blue By Family
          </h2>
          <p className="mb-10" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem" }}>
            Start your child&apos;s creative journey today with a subscription or
            one-time kit that fits the way your family likes to create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe" className="btn-primary" style={{ fontSize: "1rem" }}>Start Subscribing →</Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "1rem" }}>Get in Touch</Link>
          </div>
        </AnimateIn>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about`,
        "url": `${SITE_URL}/about`,
        "name": `About ${BRAND_NAME}`,
        "description": `${BRAND_NAME} creates monthly art subscriptions and one-time creative kits for kids ages 4 and up.`,
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "mainEntity": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": BRAND_NAME,
          "url": SITE_URL,
          "description": `${BRAND_NAME} offers monthly art subscription boxes, one-time creative kits, party packs, and wholesale bundles for kids ages 4 and up.`,
          "email": BRAND_EMAIL,
          "slogan": "To inspire every child to create boldly, explore freely, and grow confidently through the power of art.",
          "knowsAbout": ["children's art education", "plaster figure kits", "coloring books for kids", "3D print figures", "art subscription boxes"],
        }
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` }
        ]
      }} />

    </div>
  );
}
