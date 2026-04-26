import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL, BRAND_LOGO_PATH } from "@/lib/brand";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("birthday-party-craft-kits-for-kids")!;
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
    logo: { "@type": "ImageObject", url: `${SITE_URL}${BRAND_LOGO_PATH}` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  articleSection: "Party Planning Guide",
  wordCount: 3800,
  inLanguage: "en-US",
  keywords:
    "birthday party craft kits for kids, kids birthday party crafts, party craft favors, plaster painting birthday party, party craft activities ages 5 to 10",
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Birthday Party Craft Kits for Kids",
      item: url,
    },
  ],
};

// ---------- Top 8 ideas ----------
type Pick = {
  num: number;
  title: string;
  topPick?: boolean;
  ages: string;
  pricePerChild: string;
  prep: string;
  mess: string;
  duration: string;
  what: string;
  proTip: string;
};

const picks: Pick[] = [
  {
    num: 1,
    title: "Pre-cast plaster painting kits",
    topPick: true,
    ages: "4–10",
    pricePerChild: "$3–$8",
    prep: "Low (10–15 min)",
    mess: "Low–Medium",
    duration: "30–60 min",
    what:
      "Pre-molded plaster figures (animals, dinosaurs, unicorns, characters, letters) with paints and a brush. Kids paint and take the dry figure home.",
    proTip:
      "Order figures matching the party theme (dinosaur party → dinosaur figures). For a no-prep option, Blueby Art Shop offers party packs that include everything in one box for groups of 10+.",
  },
  {
    num: 2,
    title: "Friendship bracelet & bead kits",
    ages: "7–10",
    pricePerChild: "$3–$6",
    prep: "Low (15 min)",
    mess: "Very Low",
    duration: "20–40 min",
    what:
      "Kids string elastic or cord with letter beads and charms to make personalized bracelets. Many kits include name beads.",
    proTip:
      "Pre-tie a stopper knot at one end of each cord before the party. This single step prevents 15 minutes of frustrated 7-year-olds who can't get started.",
  },
  {
    num: 3,
    title: "Canvas painting (pre-drawn or freeform)",
    ages: "6–10",
    pricePerChild: "$9–$18",
    prep: "Medium (20 min)",
    mess: "Medium",
    duration: "45–90 min",
    what:
      "Each child paints a small (8×10 or 11×14) canvas, often with a pre-drawn outline. Sets up like a paint-and-sip but for kids.",
    proTip:
      "Pre-draw a simple design with pencil on each canvas, or buy pre-printed canvases. This prevents blank-canvas paralysis in younger kids.",
  },
  {
    num: 4,
    title: "Slime-making kits",
    ages: "6–10",
    pricePerChild: "$6–$10",
    prep: "Medium-High",
    mess: "High",
    duration: "30–45 min",
    what:
      "Kids mix glue, activator, glitter and color to create slime. Results go home in a small container.",
    proTip:
      "Pre-measure glue and activator into individual cups. Slime fails when ratios are off — pre-measuring solves this. Avoid carpeted spaces.",
  },
  {
    num: 5,
    title: "Tie-dye t-shirt kits",
    ages: "6–10",
    pricePerChild: "$4–$8 + shirt",
    prep: "High",
    mess: "Very High",
    duration: "30–45 min (sets overnight)",
    what:
      "Kids rubber-band white cotton tees and squirt dye from squeeze bottles. The shirt sets overnight and goes home in a bag.",
    proTip:
      "Pre-rubber-band shirts before guests arrive and label each shirt with the child's name to prevent mix-ups at pickup. Outdoor only.",
  },
  {
    num: 6,
    title: "Rock painting kits",
    ages: "5–10",
    pricePerChild: "$3–$7",
    prep: "Low",
    mess: "Low–Medium",
    duration: "20–40 min",
    what:
      "Kids paint smooth river rocks to create faces, animals or patterns — a take-home decoration or garden art piece.",
    proTip:
      "Apply a quick coat of Mod Podge to finished rocks before kids leave. It takes seconds per rock and makes the colors pop.",
  },
  {
    num: 7,
    title: "DIY snow globe kits",
    ages: "7–10",
    pricePerChild: "$5–$10",
    prep: "Medium",
    mess: "Medium",
    duration: "20–30 min",
    what:
      "Kids place a small figure into a shatterproof acrylic globe, add glitter and seal it to create a magical take-home keepsake.",
    proTip:
      "Use shatterproof acrylic globes (never glass) and seal lids with waterproof glue before kids carry them around.",
  },
  {
    num: 8,
    title: "KiwiCo party supply packs (STEM-craft hybrid)",
    ages: "5–10",
    pricePerChild: "$9–$17",
    prep: "Low",
    mess: "Low",
    duration: "30–45 min",
    what:
      "Curated party activity packs from KiwiCo — cape-making, paper doll design, wrap rockets — that blend craft and STEM.",
    proTip:
      "Use a KiwiCo pack as a secondary station alongside a main craft (e.g., plaster painting at the main table, KiwiCo assembly off to the side).",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top 8 Birthday Party Craft Kits for Kids 2026",
  numberOfItems: picks.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: picks.map((p) => ({
    "@type": "ListItem",
    position: p.num,
    name: p.title,
  })),
};

// ---------- Comparison table rows ----------
type Row = {
  brand: string;
  ages: string;
  pricePerChild: string;
  prep: string;
  mess: string;
  bestFor: string;
};

const rows: Row[] = [
  {
    brand: "Plaster painting (Etsy / Blueby Art Shop)",
    ages: "4–10",
    pricePerChild: "$3–$8",
    prep: "Low",
    mess: "Low–Medium",
    bestFor: "All-ages parties, themed figures, guaranteed keepsake",
  },
  {
    brand: "Canvas painting (Oriental Trading / Paint Parties LLC)",
    ages: "6–10",
    pricePerChild: "$9–$18",
    prep: "Medium",
    mess: "Medium",
    bestFor: "Older kids, artistic themes, paint-party vibe",
  },
  {
    brand: "Friendship bracelet kits (Etsy / Oriental Trading)",
    ages: "7–10",
    pricePerChild: "$3–$6",
    prep: "Low",
    mess: "Very Low",
    bestFor: "Sleepover add-on, wearable favor",
  },
  {
    brand: "Slime kits (Messy Play Kits / Etsy)",
    ages: "6–10",
    pricePerChild: "$6–$10",
    prep: "Medium-High",
    mess: "High",
    bestFor: "Outdoor parties, science-themed parties",
  },
  {
    brand: "KiwiCo party supply packs",
    ages: "5–10",
    pricePerChild: "$9–$17",
    prep: "Low",
    mess: "Low",
    bestFor: "STEM-themed parties, structured activity, smaller groups",
  },
  {
    brand: "Tie-dye t-shirt kits (Tulip / ProChemical)",
    ages: "6–10",
    pricePerChild: "$4–$8 + shirt",
    prep: "High",
    mess: "Very High",
    bestFor: "Outdoor summer parties, fashion-themed parties",
  },
];

// ---------- FAQ ----------
const faqs: { q: string; a: string }[] = [
  {
    q: "What is the best craft activity for a 5-year-old birthday party?",
    a: "Pre-cast plaster painting is the top choice for age 5. Figures are pre-molded, so there's no cutting or assembly — kids sit down and paint immediately. Wide brushes and chunky figures accommodate developing fine motor skills, the activity takes 20–30 minutes (well-matched to this age's attention span), and every child finishes with a keepsake. Avoid kits with small beads, thread, or multi-step assembly at this age.",
  },
  {
    q: "How long should a craft activity last at a kids' birthday party?",
    a: "Plan for 30–45 minutes of craft time for ages 5–8, and 45–60 minutes for ages 9–10. Most professional plaster painting studios structure 90-minute party slots as 60 minutes of painting plus 30 minutes for food and cake — a reliable format to copy at home parties. Add a 15-minute buffer for arrivals.",
  },
  {
    q: "How much should I budget per child for party crafts?",
    a: "Budget $4–$12 per child for quality kits. Plaster painting on Etsy costs $3–$8/child; canvas painting kits from Oriental Trading run $9–$18/child; friendship bracelet kits fall at $3–$6/child. At the lower end, the craft activity often costs less than a traditional party favor bag — and kids actually want the keepsake, so it does double duty as the take-home gift.",
  },
  {
    q: "Are plaster painting kits safe for young children?",
    a: "Yes, when sourced from reputable sellers. Plaster (calcium sulfate) is non-toxic, and quality kits use water-based, washable, ASTM D-4236 certified paint. Always verify safety labeling on both plaster and paints. These kits are not appropriate for children who still mouth objects, as wet plaster should not be ingested. For a deeper dive on certifications, see our companion guide on ASTM D-4236.",
  },
  {
    q: "Can I do a craft activity outside at a birthday party?",
    a: "Yes, and for some crafts it's strongly recommended. Tie-dye must be done outside — dye stains permanently. Slime-making also benefits from outdoor space. Plaster painting and bracelet-making work equally well indoors or outdoors; just ensure a flat surface and keep painted pieces sheltered from wind until dry. Tape down table covers so they don't blow.",
  },
  {
    q: "What craft works best for a mixed-age party with kids ages 5 to 10?",
    a: "Plaster painting scales naturally with ability. A 5-year-old covers their figure in three colors; a 10-year-old works on intricate blending. Both kids are doing the same activity, nobody feels out of place, and there's no 'right' result. Canvas painting also works for 6–10, but younger fives often find a blank canvas less engaging than a figure with pre-defined areas to fill in.",
  },
  {
    q: "How do I prevent a mess at a craft birthday party?",
    a: "Cover surfaces with disposable table covers before guests arrive. Use small pre-poured paint cups instead of open bottles. Put wet wipes at each seat — not just at a central cleanup corner. Designate a separate drying table so finished wet pieces don't get bumped. For plaster painting, acrylic and tempera paints wash off skin and most fabrics with warm water.",
  },
  {
    q: "Do I need to hire a professional to run a craft birthday party?",
    a: "Not for most kits. Plaster painting, bracelet kits, and rock painting are parent-manageable with 1–2 adult helpers per 10–12 kids. For larger parties (15+), canvas painting with guided instruction benefits from a designated adult leading the demo. Full-service vendors typically charge around $355–$499 for 10 kids, including setup, instruction and cleanup.",
  },
  {
    q: "How many craft kits should I order for a birthday party?",
    a: "Multiply confirmed RSVPs by 1.2 and round up. For 10 kids, order 12 kits. The buffer covers unexpected guests, kits damaged during setup, and the birthday child wanting a second piece. For plaster figures specifically, add 2 more beyond the 1.2 buffer — plaster can crack if dropped before paint dries.",
  },
  {
    q: "What is the difference between a plaster painting kit and a pottery studio party?",
    a: "Pottery studios use fired clay (bisqueware) that gets glazed and kiln-fired after the party — kids don't take home their piece that day, and costs run $20–$45 per child. Plaster painting kits use pre-cast figurines that dry within an hour and leave with each child the same day. At $4–$8/child, plaster kits are dramatically more affordable and logistically simpler.",
  },
  {
    q: "What craft should I avoid at a birthday party for kids ages 5–7?",
    a: "Avoid activities requiring fine motor precision — threading small beads, tying knots, cutting detailed shapes. Tie-dye with open dye bottles is too risky (permanent stains on party clothes). Slime-making requires close adult supervision and generates significant mess. For ages 5–7, choose activities where every child reaches a satisfying result independently: plaster painting, rock painting, and large-format sticker art are all reliable choices.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ---------- Sources ----------
const sources: { label: string; url: string }[] = [
  {
    label: "Etsy — Plaster Painting Kit Party Favors (price benchmarks)",
    url: "https://www.etsy.com/market/plaster_painting_kit_party_favor",
  },
  {
    label: "Etsy — Friendship Bracelet Kit Party Favors",
    url: "https://www.etsy.com/market/friendship_bracelet_kit_party_favor",
  },
  {
    label: "Oriental Trading — Birthday Party Craft Kits",
    url: "https://www.orientaltrading.com/craft-and-hobby-supplies/craft-kits/birthday-a1-560142+1512-1.fltr",
  },
  {
    label: "KiwiCo — Party Supply Packs",
    url: "https://www.kiwico.com/us/store/cp/party-supply-pack",
  },
  {
    label: "A Sprinkle of Fun — Plaster Party Packages",
    url: "https://www.asprinkleoffun.com/plaster-party/",
  },
  {
    label: "Plaster Funcraft — Party Packages (90-min format)",
    url: "https://www.plasterfuncraft.com/parties.html",
  },
  {
    label: "ParentMap — 14 Birthday Craft Activities That Double as Favors",
    url: "https://www.parentmap.com/article/birthday-party-craft-and-party-favor-ideas",
  },
  {
    label: "ARTBAR — Arts and Crafts Birthday Party for Kids",
    url: "https://www.artbarblog.com/arts-and-crafts-birthday-party-for-kids-my-20-best-ideas/",
  },
  {
    label: "Messy Play Kits — Slime Party Pack",
    url: "https://messyplaykits.com/products/slime-party-pack",
  },
  {
    label: "ProChemical and Dye — Tie-Dye Party Pack Kits",
    url: "https://prochemicalanddye.com/product/tie-dye-party-pack-kits-25-50-100-people/",
  },
  {
    label: "Tulip Color Crafts — Tie-Dye Party Kit",
    url: "https://tulipcolor.com/products/tulip-tie-dye-party-kit",
  },
  {
    label: "Colorations — Create Your Own Snow Globe (12-pack)",
    url: "https://www.discountschoolsupply.com/arts-crafts/arts-crafts-supplies/decorate-your-own-crafts/colorations-create-your-own-snow-globe---set-of-12/p/31843",
  },
  {
    label: "Pretty Prudent — Party Craft Stations Four Ways",
    url: "https://www.prettyprudent.com/party-craft-stations-four-ways-ole-2/",
  },
];

// ---------- Page ----------
export default function PartyGuidePage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={itemListJsonLd} />
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
            Best Birthday Party Craft Kits for Kids (Ages 5–10)
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            The 8 best birthday party craft kits for kids ages 5–10, ranked by
            age, price per child, prep time and mess level. Plus a comparison
            table, party-size math, 10 setup tips and FAQ from the{" "}
            {BRAND_NAME} editorial team.
          </p>
          <p
            className="mt-3 text-xs"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Updated April 25, 2026 · {guide.readingTimeMinutes} min read · By
            the {BRAND_NAME} editorial team
          </p>
        </div>
      </section>

      {/* TOC */}
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
          <ul className="mt-3 space-y-1 text-sm" style={{ color: "#1E40AF" }}>
            <li>• Why crafts beat games for ages 5–10 birthdays</li>
            <li>• How to pick the right craft for the age (5–6, 7–8, 9–10)</li>
            <li>• Top 8 craft kit ideas with price per child + mess level</li>
            <li>• Comparison table of 6 popular brands</li>
            <li>• Party-size math (the 1.2 buffer rule)</li>
            <li>• 10 setup tips for a smooth craft station</li>
            <li>• 11 FAQ — questions parents ask before booking</li>
          </ul>
        </div>
      </section>

      {/* TL;DR */}
      <Section heading="The 30-second answer">
        <p>
          If you want one craft activity that works for every kid at the
          table, ages 5 through 10,{" "}
          <strong>pre-cast plaster painting kits are the top pick</strong>.
          Each child gets a ready-to-paint figure, paints and a brush — no
          drying disasters, no waiting for glue to set, and every single kid
          walks away with a finished keepsake. Budget around $4–$8 per child
          for individual plaster paint kits, or request a party pack from{" "}
          {BRAND_NAME} for groups of 10 or more.
        </p>
        <p>
          Two strong runners-up:{" "}
          <strong>friendship bracelet kits</strong> (best for ages 7–10, very
          low mess, $3–$6/child) and{" "}
          <strong>canvas painting sets</strong> (best for ages 6+,
          $9–$17/child).
        </p>
      </Section>

      {/* Why crafts */}
      <Section heading="Why crafts make the best birthday party activity">
        <p>
          Birthday parties for 5–10-year-olds need something that keeps every
          kid engaged without creating chaos. Crafts solve all three classic
          party-planning problems at once.
        </p>
        <p>
          <strong>The 10-minute sit-still factor.</strong> Young children
          ages 5–7 have short attention spans for passive entertainment, but
          hands-on craft stations extend engagement naturally because kids
          are <em>doing</em>, not watching. Studios like{" "}
          <a
            href="https://www.asprinkleoffun.com/plaster-party/"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            A Sprinkle of Fun
          </a>{" "}
          routinely run 60–90 minute plaster painting sessions with children
          as young as 4 without significant attention drop-off.
        </p>
        <p>
          <strong>Every kid finishes a keepsake.</strong> Craft activities
          are self-paced. A 5-year-old who covers their figure in three colors
          is just as &quot;finished&quot; as a 9-year-old who spent 40 minutes
          on intricate details. The result goes home in their bag — replacing
          cheap plastic favors that end up in the trash by Monday.
        </p>
        <p>
          <strong>No winners, no losers — no tears.</strong> Competitive games
          at mixed-age parties almost always produce at least one upset
          child. Crafts sidestep this entirely. Everyone creates something
          unique, everyone is &quot;right,&quot; and the creative output
          naturally sparks conversation between kids.
        </p>
      </Section>

      {/* Pick by age */}
      <Section heading="How to pick the right craft for the age">
        <p>
          Not all craft activities work equally well across the full 5–10 age
          range. Match the activity to the developmental stage of the
          majority of your guests.
        </p>

        <h3 style={h3Style}>Ages 5–6: simple, fast, sensory-friendly</h3>
        <p>
          Five- and six-year-olds are still developing fine motor skills.
          They work best with large brushes, big surfaces, and activities
          that don&apos;t require cutting, threading, or reading multi-step
          instructions. Aim for a 20–30 minute window. Avoid friendship
          bracelet kits (too fussy), tie-dye (coordination required), and
          snow globes (small parts).
        </p>
        <p>
          <strong>Best picks:</strong> pre-cast plaster painting, rock
          painting, sticker mosaic kits.
        </p>

        <h3 style={h3Style}>Ages 7–8: ready for a challenge</h3>
        <p>
          Seven- and eight-year-olds can follow multi-step instructions, use
          scissors confidently, and care about how their finished piece
          looks. Kits with a wearable result (bracelets, tote bags) are a
          hit. Budget 30–45 minutes. Avoid slime at tables with party
          clothes.
        </p>
        <p>
          <strong>Best picks:</strong> plaster painting, friendship bracelet
          kits, canvas painting, decorated tote bags.
        </p>

        <h3 style={h3Style}>Ages 9–10: creative independence</h3>
        <p>
          Nine- and ten-year-olds want something that feels sophisticated.
          They handle detail work, intentional color mixing, and written
          instructions. Frame it as an &quot;art studio&quot; activity.
          Budget 45–60 minutes and invest in quality materials — this age
          group will notice if paints are cheap.
        </p>
        <p>
          <strong>Best picks:</strong> canvas painting, plaster painting with
          fine-detail figures, friendship bracelet kits, tie-dye (outdoor).
        </p>
      </Section>

      {/* Top 8 ideas */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h2
          className="mb-2 text-2xl sm:text-3xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Top 8 birthday party craft kit ideas in 2026
        </h2>
        <p className="mb-6 text-sm" style={{ color: "#64748B" }}>
          Ranked by recommendation. Plaster painting is #1 because it
          genuinely works for the entire 5–10 age range without modification.
        </p>

        <div className="space-y-6">
          {picks.map((p) => (
            <article
              key={p.num}
              className="card p-6"
              style={{
                backgroundColor: p.topPick ? "#FFFBEB" : "#FFFFFF",
                borderColor: p.topPick ? "#FCD34D" : "#E2E8F0",
                borderWidth: p.topPick ? 2 : 1,
              }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span
                  style={{
                    backgroundColor: p.topPick ? "#FCD34D" : "#EFF6FF",
                    color: p.topPick ? "#78350F" : "#1E40AF",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {p.topPick ? "★ Top pick" : `#${p.num}`}
                </span>
                <h3
                  style={{
                    color: "#1E293B",
                    fontFamily:
                      "var(--font-fredoka-one), 'Fredoka One', cursive",
                    fontSize: 22,
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
              </div>

              <div
                className="mt-3 grid gap-2 text-xs sm:grid-cols-2 md:grid-cols-4"
                style={{ color: "#475569" }}
              >
                <Stat label="Ages" value={p.ages} />
                <Stat label="Per child" value={p.pricePerChild} />
                <Stat label="Prep" value={p.prep} />
                <Stat label="Mess" value={p.mess} />
              </div>

              <p
                className="mt-4 text-base"
                style={{ color: "#334155", lineHeight: 1.7 }}
              >
                <strong>What it is.</strong> {p.what}
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "#64748B" }}
              >
                <strong>Activity time:</strong> {p.duration}
              </p>
              <p
                className="mt-3 text-base"
                style={{
                  color: "#0F172A",
                  lineHeight: 1.7,
                  backgroundColor: p.topPick ? "#FEF3C7" : "#F1F5F9",
                  padding: "10px 14px",
                  borderRadius: 8,
                }}
              >
                <strong>Pro tip.</strong> {p.proTip}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <Section heading="Comparison: 6 popular party craft kits & types">
        <div className="overflow-x-auto" style={{ marginTop: 8 }}>
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#EFF6FF" }}>
                <Th>Brand / Kit type</Th>
                <Th>Best ages</Th>
                <Th>Per child</Th>
                <Th>Prep</Th>
                <Th>Mess</Th>
                <Th>Best for</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i === 0 ? "#FFFBEB" : "transparent",
                  }}
                >
                  <Td>
                    <strong>{r.brand}</strong>
                  </Td>
                  <Td>{r.ages}</Td>
                  <Td>{r.pricePerChild}</Td>
                  <Td>{r.prep}</Td>
                  <Td>{r.mess}</Td>
                  <Td>{r.bestFor}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* How many kits */}
      <Section heading="How many kits to order (the 1.2 buffer rule)">
        <p>
          Ordering exactly the number of RSVPs is almost always a mistake.
          Kids show up with a sibling in tow, a friend brings their cousin,
          or three extra kids arrive because the invite got forwarded.
        </p>
        <p
          style={{
            backgroundColor: "#EFF6FF",
            padding: "14px 18px",
            borderRadius: 10,
            color: "#1E40AF",
            fontWeight: 700,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Kits to order = (Expected attendees) × 1.2
        </p>
        <div className="overflow-x-auto" style={{ marginTop: 8 }}>
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#EFF6FF" }}>
                <Th>Kids expected</Th>
                <Th>Kits to order</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["8", "10"],
                ["10", "12"],
                ["12", "15"],
                ["15", "18"],
                ["20", "24"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <Td>{a}</Td>
                  <Td>{b}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Why 1.2?</strong> A 20% buffer accounts for unexpected
          arrivals, kits that get damaged during setup, and the birthday
          child wanting to make a second piece. Leftover kits become
          rainy-day activity supplies.
        </p>
        <p>
          <strong>For plaster kits specifically:</strong> order at least 2
          extra figures beyond your 1.2 buffer. Plaster figurines are
          fragile, and having a spare prevents tears if a child drops their
          piece before it dries.
        </p>
      </Section>

      {/* 10 setup tips */}
      <Section heading="10 setup tips for a smooth party craft station">
        <ol style={olStyle}>
          <li>
            <strong>Cover every surface before opening any kit.</strong>{" "}
            Disposable paper covers, taped down. This single step cuts
            cleanup in half (
            <a
              href="https://www.prettyprudent.com/party-craft-stations-four-ways-ole-2/"
              target="_blank"
              rel="noopener"
              className="link-primary"
            >
              Pretty Prudent
            </a>
            ).
          </li>
          <li>
            <strong>Pre-stage individual stations, not communal piles.</strong>{" "}
            One figure, one paint palette, one brush, one water cup, one paper
            towel per seat.
          </li>
          <li>
            <strong>Use small paint cups, not open bottles.</strong> Tipped
            cups cause far smaller spills than tipped bottles.
          </li>
          <li>
            <strong>Wet wipes at every station, not just a central corner.</strong>{" "}
            Kids won&apos;t walk; they&apos;ll keep painting with paint-covered
            hands.
          </li>
          <li>
            <strong>Designate a drying area away from the main table.</strong>{" "}
            A card table or windowsill prevents wet pieces from getting bumped
            during cake.
          </li>
          <li>
            <strong>Give a 90-second demo before anyone starts.</strong> Show
            (not just tell) how to rinse the brush, how much paint to use,
            where the drying area is.
          </li>
          <li>
            <strong>Set a timer and announce it.</strong> Mental framework
            makes kids work efficiently, not stressed.
          </li>
          <li>
            <strong>Have a simple &quot;extra&quot; activity for early
            finishers.</strong> Stickers, coloring sheets, stampers prevent
            the &quot;I&apos;m done, now what?&quot; spiral.
          </li>
          <li>
            <strong>Recruit one adult helper per 6 kids.</strong> Designate
            them specifically to the craft table to open paint caps, rinse
            brushes, maintain energy.
          </li>
          <li>
            <strong>Give the birthday child a slightly larger or more
            detailed figure.</strong> Makes them feel special without making
            guests feel shortchanged.
          </li>
        </ol>
      </Section>

      {/* What Blueby offers */}
      <Section heading={`What ${BRAND_NAME} offers for parties`}>
        <p>
          {BRAND_NAME} plaster painting kits were designed with exactly this
          use case in mind. Mini kits start at $24.99 and include pre-cast
          plaster figures, ASTM D-4236 certified non-toxic paints, and a
          brush — everything a child needs to sit down and paint from the
          moment the box opens. No adult assembly required, no separate
          supply run, no mystery ingredient list.
        </p>
        <p>
          For birthday parties, <strong>{BRAND_NAME} offers party packs</strong>{" "}
          tailored to groups of 10 or more. Party packs can be themed to match
          your party (ask about available figure themes when you place your
          request), include extra paints to account for mixing and sharing,
          and arrive in a single organized package so setup is simple.
          Pricing is available on request — email{" "}
          <a
            href="mailto:hello@bluebyartshop.com"
            className="link-primary"
          >
            hello@bluebyartshop.com
          </a>{" "}
          with your party date, expected headcount, and preferred theme.
        </p>
      </Section>

      {/* Related */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="card p-6"
          style={{ backgroundColor: "#FEF3C7", borderColor: "#FCD34D" }}
        >
          <p
            className="text-base"
            style={{
              color: "#92400E",
              fontWeight: 700,
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Companion guides
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: "#78350F" }}>
            <li>
              <Link
                href="/guide/best-plaster-art-kits-2026"
                className="link-primary"
              >
                Best Plaster Art Kits for Kids in 2026 →
              </Link>
            </li>
            <li>
              <Link
                href="/guide/plaster-painting-ideas-for-kids"
                className="link-primary"
              >
                15 Plaster Painting Ideas for Kids (Ages 4–10) →
              </Link>
            </li>
            <li>
              <Link
                href="/guide/astm-d4236-art-supplies-parent-guide"
                className="link-primary"
              >
                ASTM D-4236 Art Supplies — Parent&apos;s Safety Guide →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <Section heading="Frequently asked questions">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="card p-5"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
              open={i === 0}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 700,
                  color: "#1E293B",
                  fontFamily:
                    "var(--font-fredoka-one), 'Fredoka One', cursive",
                  fontSize: 17,
                  lineHeight: 1.4,
                  listStyle: "none",
                }}
              >
                {f.q}
              </summary>
              <p
                className="mt-3 text-base"
                style={{ color: "#475569", lineHeight: 1.7 }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section heading="Sources">
        <ol style={{ ...olStyle, fontSize: 13 }}>
          {sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="link-primary"
                style={{ wordBreak: "break-word" }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <div
          className="card p-8 text-center"
          style={{
            backgroundColor: "#1E293B",
            borderColor: "#1E293B",
            color: "#fff",
          }}
        >
          <h2
            className="text-2xl sm:text-3xl"
            style={{
              color: "#fff",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Planning a birthday party?
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {BRAND_NAME} party packs ship pre-organized for groups of 10+
            with themed plaster figures, ASTM D-4236 certified paints and
            brushes — one box, zero extra shopping.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@bluebyartshop.com?subject=Party%20pack%20request"
              className="btn-secondary"
            >
              Request a party pack
            </a>
            <Link href="/shop" className="btn-primary">
              Shop individual kits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- helpers ----------
const olStyle: React.CSSProperties = {
  paddingLeft: 18,
  color: "#334155",
  lineHeight: 1.9,
};
const h3Style: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 6,
  fontSize: 19,
  color: "#1E293B",
  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
};
const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #E2E8F0",
  borderRadius: 8,
  overflow: "hidden",
  fontSize: 13,
};

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
        padding: "10px 12px",
        textAlign: "left",
        fontWeight: 700,
        fontSize: 13,
        color: "#1E40AF",
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
        padding: "10px 12px",
        verticalAlign: "top",
        fontSize: 13,
        color: "#334155",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      {children}
    </td>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "#F1F5F9",
        padding: "8px 10px",
        borderRadius: 8,
      }}
    >
      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          color: "#64748B",
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 14,
          color: "#1E293B",
          fontWeight: 600,
          marginTop: 2,
        }}
      >
        {value}
      </div>
    </div>
  );
}
