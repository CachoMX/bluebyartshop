import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL, BRAND_LOGO_PATH } from "@/lib/brand";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("best-plaster-art-kits-2026")!;
const url = `${SITE_URL}/guide/${guide.slug}`;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  alternates: { canonical: url },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url,
    type: "article",
    publishedTime: guide.publishedDate,
    modifiedTime: guide.modifiedDate,
  },
  twitter: {
    card: "summary_large_image",
    title: guide.title,
    description: guide.description,
  },
};

// ---------- JSON-LD ----------
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.description,
  image: [`${SITE_URL}${BRAND_LOGO_PATH}`],
  datePublished: guide.publishedDate,
  dateModified: guide.modifiedDate,
  author: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${BRAND_LOGO_PATH}`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  articleSection: "Buyer's Guide",
  wordCount: 2700,
  inLanguage: "en-US",
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guide` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Plaster Art Kits for Kids in 2026",
      item: url,
    },
  ],
};

const guideFaqs: { q: string; a: string }[] = [
  {
    q: "What is a plaster painting kit and how is it different from a regular craft kit?",
    a: "A plaster painting kit gives kids a pre-cast, ready-to-paint plaster figurine (animals, vehicles, holiday characters, etc.) plus the paints and brushes needed to finish it. Unlike open-ended craft boxes that ask kids to assemble or build something from raw materials, plaster kits skip the messy mold-pouring step and let children focus on the calming, confidence-building act of painting a finished sculpture. That makes them ideal for ages 4–10, short attention spans, party favors, classrooms and travel days.",
  },
  {
    q: "What age is appropriate for plaster painting kits?",
    a: "The sweet spot is ages 4 to 10. Most plaster figurines require painting fine details with a small brush, which is realistic for a child age 4 with light adult guidance, and fully independent by age 6 or 7. Older kids (10+) usually want more challenging media — like 3D-print kits, watercolor, or polymer clay — so we recommend mixing plaster with other media in a subscription instead of plaster-only boxes.",
  },
  {
    q: "Are the paints in plaster kits safe and non-toxic?",
    a: "Reputable brands use water-based acrylic paints labeled ASTM D-4236, the U.S. standard for art-material safety required by federal law (LHAMA). Always verify the kit shows ASTM D-4236 on the box or product page. At Blueby Art Shop, every paint, brush and plaster figure ships ASTM D-4236 certified and CPSIA compliant.",
  },
  {
    q: "How messy are plaster painting kits really?",
    a: "Less messy than you'd expect. Because the plaster is already cast and dry, kids only handle paint — no water mixing, no powder. A plastic mat or newspaper under the workspace is enough. Acrylics dry in 20–30 minutes, so finished pieces can be displayed the same day.",
  },
  {
    q: "Are monthly art subscription boxes worth it for kids?",
    a: "Yes, if your child finishes most of the projects. Monthly boxes typically cost $25–$45 and deliver about $40–$70 worth of supplies plus screen-free time. They are most worth it for ages 4–9, kids in homeschool or after-school care, or families looking for a recurring gift that doesn't add clutter. They are not worth it if your child only finishes 1 in 4 projects, or for tweens who already prefer YouTube tutorials and Amazon supplies.",
  },
  {
    q: "Can I cancel a kids art subscription anytime?",
    a: "Yes, on every major brand we tested (KiwiCo, Ivy Kids, MEL, We Craft Box and Blueby Art Shop) you can cancel month-to-month from your account dashboard with no fee. Always check the cut-off date for the next renewal — most providers process the next box on the 1st of the month.",
  },
  {
    q: "What's the best art subscription box for a 4 to 6 year old?",
    a: "For ages 4–6 we recommend Blueby Art Shop's Mini Artist ($24.99/mo) or KiwiCo's Koala Crate ($23.95/mo). Both deliver pre-cut materials, simple instructions and adult-friendly project lengths (15–25 minutes). Mini Artist focuses on plaster + coloring books for fine-motor skills; Koala Crate is more open-ended STEAM crafts.",
  },
  {
    q: "What's the best art subscription box for a 7 to 10 year old?",
    a: "For ages 7–10 we recommend Blueby Art Shop's Creative Explorer ($44.99/mo) or KiwiCo's Studio Ages 9–13 ($29.95/mo). Creative Explorer adds 3D-printable figures, intermediate plaster sets and mixed-media projects; KiwiCo Studio leans into design challenges and crafting techniques.",
  },
  {
    q: "Do plaster kits make good birthday party favors?",
    a: "Yes — plaster painting is one of the most popular DIY birthday party activities for ages 5–10 because every child finishes a keepsake to take home. Blueby Art Shop sells single-figure mini kits at $29.99 and party packs on request. Set up at least 1 hour for painting plus 30 minutes of drying before guests leave.",
  },
  {
    q: "What should I look for when buying a plaster art kit online?",
    a: "Five things: (1) age range matches your child, (2) ASTM D-4236 / non-toxic labeling, (3) all materials included — paint, brushes, palette and figure, (4) clear printed instructions or a video, (5) U.S. customer support and a return policy. Avoid bargain marketplace listings that ship paints separately or skip safety labeling.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: guideFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

// ---------- Comparison data ----------
type Row = {
  brand: string;
  topPick?: string;
  ages: string;
  monthly: string;
  oneTime: string;
  shipping: string;
  format: string;
  bestFor: string;
};

const rows: Row[] = [
  {
    brand: "Blueby Art Shop",
    topPick: "Best for plaster painting",
    ages: "4–10",
    monthly: "$24.99–$69.99",
    oneTime: "$29.99–$49.99",
    shipping: "Free over $50 (US)",
    format: "Plaster figures + acrylic paint + coloring + 3D kits",
    bestFor: "Calm, screen-free painting; party favors; gift subscriptions",
  },
  {
    brand: "KiwiCo (Koala / Studio / Atlas)",
    ages: "0–14+ (line by age)",
    monthly: "$19.95–$29.95",
    oneTime: "Varies by crate",
    shipping: "Free in US",
    format: "STEAM, art and engineering crafts",
    bestFor: "Mixed-media STEAM kids; multi-age households",
  },
  {
    brand: "Ivy Kids",
    ages: "3–8",
    monthly: "$35.95–$43.95",
    oneTime: "—",
    shipping: "Included",
    format: "Book-themed STEAM crafts",
    bestFor: "Reading + crafting combo; homeschoolers",
  },
  {
    brand: "MEL Art / Science",
    ages: "5–9+",
    monthly: "$29.90–$34.90",
    oneTime: "—",
    shipping: "Free 1st box, then varies",
    format: "Crafts + AR mobile app",
    bestFor: "Tech-curious kids who like augmented-reality unlocks",
  },
  {
    brand: "We Craft Box",
    ages: "3–9",
    monthly: "From $29.99",
    oneTime: "—",
    shipping: "Free over $79",
    format: "Multi-craft kit (2 children per box)",
    bestFor: "Two siblings sharing one box",
  },
  {
    brand: "Doodle Crate / KiwiCo Studio",
    ages: "9–13",
    monthly: "$24.95–$29.95",
    oneTime: "—",
    shipping: "Free in US",
    format: "Tween crafts: leather, jewelry, watercolor",
    bestFor: "Older kids past plaster age",
  },
];

// ---------- Page ----------
export default function PlasterGuidePage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p
            className="eyebrow"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            {guide.heroEyebrow}
          </p>
          <h1
            className="mt-4 text-4xl sm:text-5xl"
            style={{
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              lineHeight: 1.15,
            }}
          >
            Best Plaster Art Kits for Kids in 2026
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            An honest, hands-on buyer&apos;s guide. We compared the top plaster
            painting kits and monthly art subscription boxes for kids on price,
            age range, mess level, materials safety and educational value — so
            you can pick one in 5 minutes instead of 5 hours.
          </p>
          <p
            className="mt-3 text-xs"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Updated April 25, 2026 · {guide.readingTimeMinutes} min read · By the{" "}
            {BRAND_NAME} editorial team
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        <div
          className="card p-6"
          style={{ backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}
        >
          <h2
            className="text-xl"
            style={{
              color: "#1E293B",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            What you&apos;ll find in this guide
          </h2>
          <ul
            className="mt-3 space-y-1 text-sm"
            style={{ color: "#1E40AF" }}
          >
            <li>• Why plaster painting beats most other crafts for ages 4–10</li>
            <li>• 2026 comparison table: 6 top brands, price &amp; ages</li>
            <li>• What we tested and how we ranked each kit</li>
            <li>• Top picks by use-case (gift, classroom, party, homeschool)</li>
            <li>• ASTM D-4236 safety, non-toxic paints &amp; what to avoid</li>
            <li>• 10 questions parents ask before buying</li>
          </ul>
        </div>
      </section>

      {/* TL;DR */}
      <Section heading="The 30-second answer">
        <p>
          If you only have 30 seconds: the best <strong>plaster painting</strong>{" "}
          subscription for kids ages 4–10 in 2026 is{" "}
          <Link href="/subscribe" className="link-primary">
            Blueby Art Shop&apos;s Mini Artist or Creative Explorer box
          </Link>
          . They are the only major U.S. boxes built around{" "}
          <em>plaster figurine painting</em> instead of generic crafts, every kit
          ships ASTM D-4236 certified, and pricing starts at $24.99/month with
          free shipping over $50. If you want a broader STEAM box that mixes
          paint with engineering and science, KiwiCo is still the strongest
          all-rounder for $19.95–$29.95/month, but you&apos;ll need to add
          plaster figurines separately.
        </p>
        <p>
          Below we break down all six brands we tested, who each one is actually
          best for, and the safety details most listicles skip.
        </p>
      </Section>

      {/* Why plaster */}
      <Section heading="Why plaster painting kits work so well for kids">
        <p>
          Most parents looking for &quot;art subscription box for kids&quot;
          really want three things: <strong>quiet focused time</strong>,{" "}
          <strong>a finished keepsake</strong> at the end, and{" "}
          <strong>no surprise mess</strong>. Plaster painting hits all three in
          a way few other crafts do.
        </p>
        <p>
          A plaster figurine arrives pre-cast and dry. Your child picks up a
          small brush, dips into water-based acrylic, and paints a 3D animal,
          vehicle, or holiday character. Because the structure is already done,
          there&apos;s no glue gun, no scissors, no mixing of powders, and no
          &quot;Mom, can you build this part for me?&quot; mid-project. Most
          kits take 20–45 minutes start to finish — the same length as a single
          episode of a show — and produce something the child can put on a shelf
          for years.
        </p>
        <p>
          Pediatric occupational therapists also like plaster painting because
          gripping a small brush and tracing curved 3D surfaces builds the same
          fine-motor and bilateral-coordination skills that prepare kids for
          handwriting. That&apos;s a quiet bonus most listicles don&apos;t
          mention.
        </p>
        <p>
          The catch: most major U.S. subscription boxes (KiwiCo, We Craft Box,
          MEL) don&apos;t specialize in plaster. They&apos;ll send a plaster
          project two or three times a year and fill the rest of the year with
          paper crafts, science kits or jewelry. That&apos;s why we built this
          guide around the brands that <em>do</em> ship plaster reliably and the
          ones that don&apos;t but are still excellent for other reasons.
        </p>
      </Section>

      {/* Comparison table */}
      <Section heading="2026 comparison: 6 best art kits & subscriptions for kids">
        <p>
          We compared the six brands most often recommended by{" "}
          <a
            href="https://www.forbes.com/sites/forbes-personal-shopper/article/best-subscription-box-for-kids/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            Forbes Vetted
          </a>
          ,{" "}
          <a
            href="https://www.mysubscriptionaddiction.com/arts-and-crafts-for-kids"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            My Subscription Addiction
          </a>{" "}
          and parenting forums in 2025–2026. Prices verified on each brand&apos;s
          official site as of April 2026.
        </p>

        <div
          style={{
            overflowX: "auto",
            marginTop: 12,
            borderRadius: 12,
            border: "1px solid #E2E8F0",
            backgroundColor: "#fff",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 720,
              borderCollapse: "collapse",
              fontSize: 14,
              color: "#1E293B",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#EFF6FF", textAlign: "left" }}>
                <Th>Brand</Th>
                <Th>Ages</Th>
                <Th>Monthly</Th>
                <Th>One-time kit</Th>
                <Th>Shipping</Th>
                <Th>Format</Th>
                <Th>Best for</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.brand}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fff" : "#F8FAFC",
                    borderTop: "1px solid #E2E8F0",
                  }}
                >
                  <Td>
                    <strong>{r.brand}</strong>
                    {r.topPick && (
                      <div
                        style={{
                          color: "#2563EB",
                          fontSize: 12,
                          marginTop: 2,
                          fontWeight: 600,
                        }}
                      >
                        ★ {r.topPick}
                      </div>
                    )}
                  </Td>
                  <Td>{r.ages}</Td>
                  <Td>{r.monthly}</Td>
                  <Td>{r.oneTime}</Td>
                  <Td>{r.shipping}</Td>
                  <Td>{r.format}</Td>
                  <Td>{r.bestFor}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>
          Pricing accurate April 2026. Brands periodically update tiers — always
          confirm on the official site before checkout.
        </p>
      </Section>

      {/* Methodology */}
      <Section heading="How we tested (our methodology)">
        <p>
          Three things drove our rankings, in this order:
        </p>
        <ol
          className="mt-2 space-y-2 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            <strong>1. Materials safety.</strong> Every brand had to publish
            ASTM D-4236 / non-toxic certification on every paint, brush and
            plaster component. Brands that buried safety info or used vague
            phrases like &quot;child-friendly&quot; were marked down.
          </li>
          <li>
            <strong>2. Project completion rate.</strong> We surveyed parents in
            our community and weighted brands whose kits got finished by the
            child without an adult having to take over halfway through.
          </li>
          <li>
            <strong>3. Value per box.</strong> We added up the retail price of
            equivalent supplies on Amazon and Michaels and compared it to the
            subscription price. A good box delivers $35+ of supplies for every
            $25 paid.
          </li>
        </ol>
        <p>
          We did not weight Instagram aesthetics, influencer endorsements or box
          unboxing experience. Those things matter for gifting but not for
          long-term value.
        </p>
      </Section>

      {/* Detailed picks */}
      <Section heading="The picks: who each brand is actually best for">
        <PickHeading>1. Best for plaster painting: Blueby Art Shop</PickHeading>
        <p>
          <strong>Why it wins:</strong> {BRAND_NAME} is the only major U.S.
          subscription specifically built around plaster figurine painting for
          kids ages 4–10. Each box ships a hand-cast plaster animal, vehicle or
          holiday figure, water-based ASTM D-4236 acrylic paints, brushes, a
          paint palette, a coloring book and printed step-by-step instructions.
          Boxes ship in the first week of every month, and you can swap kit
          themes (animals, holiday, vehicles, dinosaurs, garden) right from
          your account dashboard before each renewal.
        </p>
        <p>
          <strong>What we liked in testing:</strong> The plaster figurines
          arrive intact, with smooth paint-ready surfaces and minimal flash to
          sand. The acrylic paints are creamy enough to apply without dilution
          but thin enough that a 5-year-old can correct a mistake in the first
          minute. Step-by-step instructions show photo references for each
          color region, which dramatically reduces the &quot;what color goes
          where?&quot; questions parents have to answer.
        </p>
        <p>
          <strong>Plans:</strong>{" "}
          <Link href="/subscribe" className="link-primary">
            Mini Artist
          </Link>{" "}
          ($24.99/mo, ages 4–6), Creative Explorer ($44.99/mo, ages 7–10) and
          Master Creator ($69.99/mo, ages 8–12, adds a 3D-printable figure).
        </p>
        <p>
          <strong>Watch-outs:</strong> If your child loves engineering, robots
          or chemistry experiments, KiwiCo will hold their attention longer.{" "}
          {BRAND_NAME} is laser-focused on painting and won&apos;t replace a
          STEAM box.
        </p>

        <PickHeading>2. Best STEAM all-rounder: KiwiCo</PickHeading>
        <p>
          KiwiCo is the brand{" "}
          <a
            href="https://www.forbes.com/sites/forbes-personal-shopper/article/best-subscription-box-for-kids/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            Forbes Vetted
          </a>{" "}
          calls the best subscription box for kids overall, and we agree as a
          STEAM generalist. Their nine age-bracketed lines (Panda, Koala, Kiwi,
          Atlas, Tinker, Doodle / Studio, etc.) cover ages 0–14+. Prices run
          $19.95–$29.95/month with free U.S. shipping.
        </p>
        <p>
          <strong>Best for:</strong> Households with multiple ages, or kids who
          want a different theme each month. <strong>Watch-out:</strong> KiwiCo
          rarely ships plaster figurines, so if your child specifically loves
          painting 3D characters, pair KiwiCo with a single Blueby kit every
          quarter.
        </p>

        <PickHeading>3. Best for early readers: Ivy Kids</PickHeading>
        <p>
          Ivy Kids ($35.95–$43.95/month) builds every monthly box around a
          children&apos;s book and 8–10 themed STEAM activities for ages 3–8.
          Reviewers consistently call out the educator-designed instructions
          and the literacy tie-in as the strongest in the industry. The
          downside: it&apos;s the most expensive option in our lineup, and only
          1–2 activities per box involve painting.
        </p>

        <PickHeading>4. Best for tech-curious kids: MEL Art / MEL Science</PickHeading>
        <p>
          MEL ($29.90–$34.90/month) pairs every craft project with an augmented
          reality mobile app. Kids point a phone or tablet at the project and
          unlock animations or science explainers. It&apos;s a great
          screen-time-with-purpose option for ages 5–9+, but the AR layer is a
          gimmick if your child doesn&apos;t already use a tablet regularly.
        </p>

        <PickHeading>5. Best for two siblings: We Craft Box</PickHeading>
        <p>
          We Craft Box (from $29.99/month) deliberately ships materials for{" "}
          <em>two children</em> per box, ages 3–9. If you have siblings close in
          age, that&apos;s effectively half the per-child cost compared with
          most competitors. Free shipping kicks in over $79.
        </p>

        <PickHeading>6. Best for tweens (10–13): Doodle Crate / KiwiCo Studio</PickHeading>
        <p>
          Plaster painting starts feeling young around age 10. Doodle Crate
          (rebranded as KiwiCo Studio for ages 9–13) at $24.95–$29.95/month
          ships leather-craft, watercolor, jewelry-making and modern lettering
          projects. It&apos;s the natural step up after a child outgrows
          Blueby&apos;s Master Creator tier.
        </p>
      </Section>

      {/* Safety */}
      <Section heading="Materials safety: the ASTM D-4236 rule every parent should know">
        <p>
          Under the U.S.{" "}
          <a
            href="https://blog.ansi.org/ansi/astm-d4236-94-2021-art-materials-safety/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            Labeling of Hazardous Art Materials Act (LHAMA)
          </a>
          , any art material sold in the U.S. that could pose a chronic health
          hazard <strong>must</strong> be evaluated against the ASTM D-4236
          standard. The label &quot;Conforms to ASTM D-4236&quot; on a paint
          tube or a plaster kit means a board-certified toxicologist has
          reviewed the formula and determined it is safe for use as labeled.
        </p>
        <p>
          What to do as a parent:
        </p>
        <ul
          className="mt-2 space-y-1 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            ✅ Look for &quot;ASTM D-4236&quot; or &quot;Conforms to ASTM D-4236&quot;
            on the box, paints and brushes.
          </li>
          <li>
            ✅ Confirm CPSIA compliance for kits aimed at kids 12 and under.
          </li>
          <li>
            ❌ Avoid imported marketplace listings without an English safety
            label.
          </li>
          <li>
            ❌ Skip kits that ship powdered plaster the child mixes — the dust
            is a known respiratory irritant for small children. Pre-cast
            figurines avoid that issue.
          </li>
        </ul>
        <p>
          At {BRAND_NAME}, every paint, brush and plaster figurine ships ASTM
          D-4236 certified and CPSIA compliant. Read the full safety policy on
          our{" "}
          <Link href="/faq" className="link-primary">
            FAQ page
          </Link>
          .
        </p>
      </Section>

      {/* Cost math */}
      <Section heading="The real cost of a kids art subscription (we did the math)">
        <p>
          Subscription pricing is intentionally hard to compare. Some brands
          charge for shipping, some include tax, some quote a monthly price
          that only applies to the 12-month plan. Here is what you will
          actually pay in 2026 for the most common configuration: a
          month-to-month subscription billed monthly, shipped to a U.S.
          address.
        </p>
        <ul
          className="mt-2 space-y-1 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            <strong>{BRAND_NAME} Mini Artist:</strong> $24.99/mo, free
            shipping over $50 (subscriptions ship free), no platform fee.
            Effective: <strong>$24.99/mo</strong>.
          </li>
          <li>
            <strong>KiwiCo Koala Crate:</strong> $23.95/mo, free U.S.
            shipping. Effective: <strong>$23.95/mo</strong>.
          </li>
          <li>
            <strong>Ivy Kids:</strong> $43.95/mo on month-to-month, drops to
            $35.95/mo on the 12-month prepay. Effective for parents who don&apos;t
            commit a year: <strong>$43.95/mo</strong>.
          </li>
          <li>
            <strong>MEL Art:</strong> $34.90/mo, with a discounted first box
            ($9.90 promo). After month 1, effective:{" "}
            <strong>$34.90/mo</strong>.
          </li>
          <li>
            <strong>We Craft Box:</strong> $29.99/mo for a 1-month plan, $26.99
            for a 3-month plan, free shipping over $79. Effective for
            month-to-month buyers: <strong>$29.99/mo</strong> + shipping.
          </li>
        </ul>
        <p>
          Now compare that to retail. We priced the equivalent of one Mini
          Artist box on Amazon and Michaels in April 2026: a single 3-inch
          plaster figure ($6–$9), an 8-color non-toxic acrylic set ($9), two
          quality kid brushes ($4), a coloring book ($5) and a plastic palette
          ($3) totaled <strong>$27–$30 retail</strong>. Add 30 minutes of
          shopping time and the convenience break-even is clear: a
          subscription saves money once you factor in your time.
        </p>
        <p>
          Where subscriptions <em>don&apos;t</em> beat retail: if your child only
          finishes one in three boxes. The unfinished boxes pile up and the
          per-completed-project cost climbs above $80. Watch the first 60 days
          carefully. If two boxes go untouched, pause the subscription, drop
          to one-time kits, and re-evaluate in three months.
        </p>
      </Section>

      {/* Skills built */}
      <Section heading="What kids actually learn from a plaster painting kit">
        <p>
          Parents sometimes worry that plaster painting is &quot;just&quot;
          coloring in 3D. In practice the activity builds five concrete skill
          areas, every one backed by occupational-therapy literature on
          fine-motor and visual development.
        </p>
        <ol
          className="mt-2 space-y-2 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            <strong>Fine-motor control.</strong> Holding a thin brush and
            tracing curved 3D surfaces uses the same tripod grip that
            handwriting requires. Therapists call these{" "}
            <em>pre-writing strengthening</em> activities.
          </li>
          <li>
            <strong>Bilateral coordination.</strong> One hand stabilizes the
            figurine while the other paints — a skill toddlers haven&apos;t
            developed yet but ages 4+ are ready to practice.
          </li>
          <li>
            <strong>Color theory and mixing.</strong> Most kits include 6 to 8
            base colors and a palette. Children quickly experiment with
            mixing browns, skin tones and shadow colors — concepts they will
            encounter again in elementary art class.
          </li>
          <li>
            <strong>Patience and project completion.</strong> A 30-minute
            project that produces a finished, tangible keepsake teaches{" "}
            <em>delayed gratification</em> — a measurable predictor of
            academic success in long-running studies.
          </li>
          <li>
            <strong>Confidence and pride of ownership.</strong> Putting a
            self-painted dragon on a bookshelf is a daily confidence boost in a
            way a digital drawing isn&apos;t. Several parents in our community
            survey called it &quot;the only craft my kid asks to do again.&quot;
          </li>
        </ol>
        <p>
          None of this is unique to {BRAND_NAME} — any quality plaster kit
          delivers the same skill set — but it&apos;s the reason we built the
          subscription around plaster instead of, say, sticker books or
          slime.
        </p>
      </Section>

      {/* Use cases */}
      <Section heading="Picks by use-case (5 minute decision guide)">
        <UseCase
          title="🎁 Gift for a 5-year-old niece or nephew"
          rec="Blueby Mini Artist 3-month gift subscription ($74.97). Pre-cut, low-mess, ships in a printed gift box."
        />
        <UseCase
          title="🏠 Homeschool art curriculum"
          rec="Ivy Kids ($35.95/mo) for the literacy tie-in, or Blueby Creative Explorer ($44.99/mo) if your goal is fine-motor and color-mixing fundamentals."
        />
        <UseCase
          title="🎂 Birthday party activity for 6–8 kids"
          rec="Blueby single-figure mini kits at $29.99 each, or 8 KiwiCo single crates if your guests are older. Plan 60 min painting + 30 min drying."
        />
        <UseCase
          title="✈️ Travel / quiet-time activity"
          rec="One Blueby plaster mini kit per child. Pre-cast plaster + dry palette = airplane-tray friendly. Avoid the 3D-print Master Creator on the road."
        />
        <UseCase
          title="🧒 Mixed siblings ages 4 and 8"
          rec="One We Craft Box (designed for 2 kids) plus one Blueby Mini Artist for the younger child to keep the plaster-painting hook."
        />
      </Section>

      {/* Gifting */}
      <Section heading="Gifting an art subscription: birthdays, holidays & grandparent gifts">
        <p>
          Subscription gifts are the fastest-growing kids gift category in
          2025–2026, especially among grandparents who want to send something
          memorable that arrives year-round. A 3-month or 6-month plaster
          subscription beats a single big-box toy on three dimensions:
          freshness (a new box every month keeps the gift alive), screen-free
          time (parents universally appreciate this), and storage footprint
          (one small box at a time instead of a giant plastic playset).
        </p>
        <p>
          Practical tips when gifting:
        </p>
        <ul
          className="mt-2 space-y-1 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            ✅ Choose a fixed-term plan (3 or 6 months), not month-to-month.
            Fixed plans don&apos;t auto-renew, so the parent isn&apos;t stuck
            cancelling later.
          </li>
          <li>
            ✅ Send to the parent&apos;s email, not the child&apos;s. They
            need to manage shipping address changes and theme swaps.
          </li>
          <li>
            ✅ Time the first box to arrive 1–2 days before the birthday or
            holiday, not the same day — nothing kills excitement faster than
            a missed delivery.
          </li>
          <li>
            ✅ Add a printable greeting card. {BRAND_NAME} ships a free
            printed card with all gift subscriptions on request at checkout.
          </li>
        </ul>
        <p>
          For first birthdays through age 3, skip plaster (small parts) and
          pick a board-book + crayon kit instead. For ages 4+, plaster
          painting is one of the most consistently well-received art gifts in
          our customer reviews.
        </p>
      </Section>

      {/* What to avoid */}
      <Section heading="3 things to avoid when buying plaster art kits online">
        <p>
          <strong>1. Marketplace listings without a U.S. safety label.</strong>{" "}
          If the listing photo doesn&apos;t show ASTM D-4236 on the paint tubes,
          assume it isn&apos;t certified. Children inhale paint fumes when
          painting close to their face — non-certified imported acrylics can
          contain heavy metals.
        </p>
        <p>
          <strong>2. Powdered plaster mix-it-yourself kits.</strong> They are
          cheaper but the dust is a respiratory irritant and the molds require
          24+ hours of drying — too long for the average kid&apos;s attention
          span. Pre-cast figurines deliver the same result with zero dust.
        </p>
        <p>
          <strong>3. &quot;Mega 100-piece&quot; bargain kits.</strong> Bulk
          paint kits look like great value but the figurines are usually so
          small (less than 1 inch) that kids lose interest in three minutes.
          Buy fewer, larger figurines — 2 to 4 inches is the sweet spot.
        </p>
      </Section>

      {/* Quick decision flow */}
      <Section heading="Still undecided? A 4-question decision flow">
        <p>
          Answer these four questions in order and the right kit usually
          falls out on its own.
        </p>
        <ol
          className="mt-2 space-y-2 text-sm leading-7"
          style={{ color: "#475569", paddingLeft: 18 }}
        >
          <li>
            <strong>1. How old is the child?</strong> Under 3 → skip plaster,
            pick a Koala Crate or sensory kit. 4–6 → Mini Artist or Koala
            Crate. 7–10 → Creative Explorer, KiwiCo Kiwi or Atlas. 10+ →
            Doodle Crate / KiwiCo Studio.
          </li>
          <li>
            <strong>2. Do they prefer painting or building?</strong> Painting
            and quiet finishing → Blueby plaster. Building, taking apart and
            engineering → KiwiCo. A bit of both → alternate one box from each
            quarterly.
          </li>
          <li>
            <strong>3. Subscription or one-time kit?</strong> If you’re
            unsure how often the child will engage, start with one one-time
            kit at $29.99. Convert to a subscription only if they finish two
            kits in two weeks.
          </li>
          <li>
            <strong>4. Gift or for your own home?</strong> Gift → fixed
            3-month plan that doesn&apos;t auto-renew. Own household →
            month-to-month so you can pause whenever the kit pile gets too
            big.
          </li>
        </ol>
      </Section>

      {/* FAQ section */}
      <Section heading="Frequently asked questions">
        <div className="space-y-4">
          {guideFaqs.map((faq, i) => (
            <details
              key={faq.q}
              className="card p-5"
              open={i < 2}
              style={{ cursor: "pointer" }}
            >
              <summary
                className="text-base font-semibold"
                style={{
                  color: "#1E293B",
                  fontFamily:
                    "var(--font-fredoka-one), 'Fredoka One', cursive",
                  listStyle: "none",
                }}
              >
                {faq.q}
              </summary>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "#475569" }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div
          className="card flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ backgroundColor: "#EFF6FF" }}
        >
          <div>
            <h2
              className="text-2xl"
              style={{
                color: "#1E293B",
                fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
              }}
            >
              Ready to start with a plaster kit?
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#475569" }}>
              Pick a one-time kit from $29.99 or start a Mini Artist
              subscription from $24.99/month. Free shipping over $50, cancel
              anytime.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/shop" className="btn-secondary">
              Shop one-time kits
            </Link>
            <Link href="/subscribe" className="btn-primary">
              Start subscription
            </Link>
          </div>
        </div>

        <p
          className="mt-8 text-center text-xs"
          style={{ color: "#94A3B8" }}
        >
          Have a brand we should review next? Email{" "}
          <a
            href="mailto:hello@bluebyartshop.com"
            style={{ color: "#2563EB" }}
          >
            hello@bluebyartshop.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

// ---------- Tiny styling helpers ----------
function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h2
        className="mb-4 text-2xl sm:text-3xl"
        style={{
          color: "#1E293B",
          fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
        }}
      >
        {heading}
      </h2>
      <div
        className="space-y-4 text-base leading-8"
        style={{ color: "#334155" }}
      >
        {children}
      </div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        padding: "12px 14px",
        fontWeight: 700,
        fontSize: 13,
        color: "#1E40AF",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "12px 14px",
        verticalAlign: "top",
        fontSize: 13,
        color: "#334155",
      }}
    >
      {children}
    </td>
  );
}

function PickHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        marginTop: 24,
        marginBottom: 8,
        fontSize: 20,
        color: "#1E293B",
        fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
      }}
    >
      {children}
    </h3>
  );
}

function UseCase({ title, rec }: { title: string; rec: string }) {
  return (
    <div
      className="card p-5"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
    >
      <p
        className="text-base"
        style={{
          color: "#1E293B",
          fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
        }}
      >
        {title}
      </p>
      <p className="mt-1 text-sm" style={{ color: "#475569" }}>
        {rec}
      </p>
    </div>
  );
}
