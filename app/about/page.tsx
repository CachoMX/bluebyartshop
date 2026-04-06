import Link from "next/link";

const team = [
  {
    name: "Sofia V.",
    role: "Founder & Creative Director",
    emoji: "👩‍🎨",
    bio: "Former art teacher turned entrepreneur. Sofia started Blue By Art Shop after seeing firsthand how much kids flourish when given quality art materials and the freedom to create.",
  },
  {
    name: "Marco L.",
    role: "Head of Product Design",
    emoji: "🧑‍🎨",
    bio: "3D design and product development specialist. Marco curates every kit with an eye for educational value, safety, and pure fun factor.",
  },
  {
    name: "Priya N.",
    role: "Community & Partnerships",
    emoji: "👩‍💼",
    bio: "Priya builds relationships with schools, studios, and families. She's the heart of the Blue By community and runs our social presence.",
  },
];

const values = [
  { icon: "🎨", title: "Creativity First", desc: "Every product is designed to spark imagination, not just follow instructions." },
  { icon: "🛡️", title: "Safety Always", desc: "All materials are non-toxic, child-safe, and tested to international standards." },
  { icon: "🌱", title: "Grow Together", desc: "Our tiers evolve with your child's skills — no need to switch boxes, just upgrade." },
  { icon: "♻️", title: "Eco-Conscious", desc: "Packaging is 100% recyclable. We partner with eco-friendly suppliers wherever possible." },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2d4fc0 100%)" }}
      >
        <h1
          className="text-5xl sm:text-6xl text-white mb-4"
          style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
        >
          About Blue By Art Shop
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          We believe every child is an artist. Our mission is to give them the tools to prove it.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl mb-6"
              style={{
                color: "#1E3A8A",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Blue By Art Shop was born inside the <strong>VIXI</strong> family of brands — a company
                built around creating meaningful experiences for kids and families. The name{" "}
                <strong>&ldquo;Blue By&rdquo;</strong> comes from the idea that every great artwork starts
                with a single stroke — and that first stroke is always a brave one.
              </p>
              <p>
                We noticed a gap: parents wanted quality art activities for their kids, but most
                kits on the market were either too simple, used cheap materials, or didn&apos;t grow
                with the child. So we built something better.
              </p>
              <p>
                Every Blue By kit is thoughtfully curated by educators and artists. We source
                non-toxic, premium materials and design projects that challenge kids just enough
                to feel proud of what they make — without frustrating them.
              </p>
              <p>
                Today, thousands of families across the country unbox their Blue By kit every
                month — and that little moment of excitement when the package arrives? That&apos;s
                exactly why we do this.
              </p>
            </div>
          </div>
          <div
            className="rounded-3xl flex items-center justify-center p-12 text-9xl shadow-sm"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            🎨
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">💙</div>
          <h2
            className="text-4xl mb-6"
            style={{
              color: "#1E3A8A",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Our Mission
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed italic font-medium">
            &ldquo;To inspire every child to create boldly, explore freely, and grow confidently
            through the power of art.&rdquo;
          </p>
          <p className="mt-6 text-gray-500 text-lg">
            We measure success not in subscriptions, but in kids who say &ldquo;Look what I made!&rdquo;
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{
              color: "#1E3A8A",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            What We Stand For
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-3xl p-8 text-center shadow-sm border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="text-5xl mb-4">{v.icon}</div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#1E3A8A",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl sm:text-5xl mb-4"
              style={{
                color: "#1E3A8A",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Meet the Team
            </h2>
            <p className="text-gray-500 text-lg">
              Artists, educators, and parents building something they&apos;d be proud to send to their own kids.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-5"
                  style={{ backgroundColor: "#EFF6FF" }}
                >
                  {member.emoji}
                </div>
                <h3
                  className="text-2xl mb-1"
                  style={{
                    color: "#1E3A8A",
                    fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "#FF9F1C" }}>
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2d4fc0 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Join the Blue By Family
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Start your child&apos;s creative journey today. First box ships within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe"
              className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "#FF9F1C" }}
            >
              Start Subscribing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
