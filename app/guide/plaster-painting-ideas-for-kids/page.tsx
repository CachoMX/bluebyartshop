import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL, BRAND_LOGO_PATH } from "@/lib/brand";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("plaster-painting-ideas-for-kids")!;
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
  articleSection: "Crafts & Activities",
  wordCount: 2900,
  inLanguage: "en-US",
  keywords:
    "plaster painting ideas for kids, plaster of paris crafts, kids art projects, plaster figurine painting, party craft ideas",
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
      name: "Plaster Painting Ideas for Kids",
      item: url,
    },
  ],
};

// ---------- 15 ideas ----------
type Idea = {
  num: number;
  title: string;
  ageRange: string;
  time: string; // active painting time
  difficulty: "Easy" | "Medium" | "Advanced";
  what: string;
  how: string;
  pro: string;
};

const ideas: Idea[] = [
  {
    num: 1,
    title: "Rainbow Animal Figurines",
    ageRange: "4–6",
    time: "20 min",
    difficulty: "Easy",
    what:
      "Pre-cast plaster animals (cat, dog, owl, dinosaur) painted in bold rainbow blocks instead of realistic colors.",
    how: "Give the child 4–5 paint colors on a palette. Tape the figure to a paper plate so it doesn't slide. Let them paint each section a different color — head, legs, tail, ears. No pressure to stay realistic.",
    pro: "Bold blocks hide brush wobble. This is the best first project for ages 4–5 because it celebrates the act of covering the figure, not the precision.",
  },
  {
    num: 2,
    title: "Galaxy Unicorns & Dinosaurs",
    ageRange: "5–8",
    time: "30 min",
    difficulty: "Easy",
    what: "A nighttime galaxy effect on a unicorn, dinosaur or dragon figurine.",
    how:
      "Base coat the figure dark blue or black. Once dry (20 min), dab pink, purple and white paint with a sponge or fingertip. Add tiny white dots with the brush handle for stars.",
    pro: "Acrylic dries fast, so the layered look works without bleeding. Save this for a child who has done one or two solid-color figures already.",
  },
  {
    num: 3,
    title: "Glow-in-the-Dark Sea Creatures",
    ageRange: "5–8",
    time: "25 min",
    difficulty: "Medium",
    what:
      "Octopus, jellyfish, shark or whale figurines painted with glow-in-the-dark acrylic over a colored base.",
    how:
      "Paint the figure a regular color first (turquoise, orange, purple). Once dry, add a top layer of non-toxic glow paint on the eyes, fins or stripes. Charge under a lamp for 5 minutes before lights out.",
    pro: "Always verify the glow paint is ASTM D-4236 certified — that's the U.S. art-material safety standard. We include certified glow paint in select Blueby Art Shop kits.",
  },
  {
    num: 4,
    title: "Pet Portraits (Paint Your Own Dog or Cat)",
    ageRange: "7–10",
    time: "45 min",
    difficulty: "Medium",
    what:
      "A plaster dog or cat figurine painted to look like the family pet — same fur color, markings and collar.",
    how:
      "Print a photo of the pet for reference. Mix base coat (white + brown + black) on a palette before starting. Paint largest areas first, then markings, eyes and nose last with a fine brush.",
    pro: "Adds emotional value: the finished piece becomes a keepsake parents actually display. A great Mother's Day or Father's Day gift idea for ages 7+.",
  },
  {
    num: 5,
    title: "Mini Garden Gnomes & Mushrooms",
    ageRange: "5–8",
    time: "30 min",
    difficulty: "Easy",
    what:
      "Tiny plaster gnomes, toadstools and snails painted in classic red-and-white toadstool palette plus pastel gnomes.",
    how:
      "Use 4 colors max: red, white, brown, sky blue. Tape a toothpick into the bottom of each piece for outdoor display in plant pots.",
    pro: "Seal with non-toxic acrylic spray (adult only) if displayed outside, or keep them indoors on a windowsill for kids' rooms.",
  },
  {
    num: 6,
    title: "Holiday Ornaments (Christmas, Halloween, Easter)",
    ageRange: "All ages",
    time: "20 min",
    difficulty: "Easy",
    what:
      "Pre-cast plaster shapes — snowflakes, ghosts, pumpkins, eggs, hearts — with a hanging hole or pre-glued ribbon loop.",
    how:
      "Paint solid color first. Add details: glitter while paint is wet for snowflakes, drip-effect black on white pumpkins for ghost faces, polka dots on Easter eggs.",
    pro: "Holiday plaster painting is one of the highest-engagement projects we sell. Kids paint 2–3 ornaments in one session and decorate a whole tree or mantel.",
  },
  {
    num: 7,
    title: "Birthday Party Mini Plaster Painting Station",
    ageRange: "5–10",
    time: "45 min",
    difficulty: "Easy",
    what:
      "A take-home craft station for a birthday party. Each guest paints a unicorn, dinosaur, race car or mermaid figurine.",
    how:
      "Set up 1 figure per child plus a paint plate (4 colors), one brush, a cup of water and a paper plate as a tray. Cover the table with butcher paper. Allow 30 min painting + 15 min drying.",
    pro: "Plaster painting is the #1 birthday party craft for ages 5–10 because every child finishes a keepsake and there's no winner/loser dynamic. Order kits 2 weeks ahead.",
  },
  {
    num: 8,
    title: "Underwater Coral Reef Scene",
    ageRange: "7–10",
    time: "60 min",
    difficulty: "Advanced",
    what:
      "A small wooden box or shoebox lid painted blue, with several small plaster sea creatures glued in to make a 3D diorama.",
    how:
      "Paint the box bright blue inside. Paint each plaster fish, turtle, octopus, seahorse and starfish separately. Once dry, glue with white craft glue. Add cotton-ball waves on top.",
    pro: "Multi-day project — paint figures Day 1, build scene Day 2. Great rainy-weekend activity that makes a finished display piece.",
  },
  {
    num: 9,
    title: "Friendship Plaster Pendants",
    ageRange: "7–10",
    time: "25 min",
    difficulty: "Medium",
    what:
      "Small flat plaster shapes (heart, star, moon) with a hole for thread, painted as matching friendship necklaces or bracelets.",
    how:
      "Two friends each paint half of a matching pair (one paints the heart, the other paints the star). Add their initials in fine brush. Thread cord through the hole when dry.",
    pro: "Excellent emotional-skill project for ages 7+. Use waterproof varnish if they want to wear the pendants outside the house.",
  },
  {
    num: 10,
    title: "Calm-Down Color Palette (Single Color Practice)",
    ageRange: "4–6",
    time: "15 min",
    difficulty: "Easy",
    what:
      "A simple plaster animal painted with just one color in 4 different shades (light to dark blue, pink, green).",
    how:
      "Mix base color + white in 4 cups: pure color, +1 drop white, +3 drops white, +5 drops white. Paint the figure section by section using lightest to darkest, or vice versa.",
    pro: "Doubles as a color-mixing science lesson. Calming for sensory-sensitive kids because there are no surprises — every shade is in the same family.",
  },
  {
    num: 11,
    title: "Glow Solar System Planets",
    ageRange: "7–10",
    time: "45 min",
    difficulty: "Medium",
    what:
      "8 small plaster spheres painted as the planets of the solar system, plus glow stars on the back of a cardboard backdrop.",
    how:
      "Reference real planet colors (red Mars, banded Jupiter, blue Earth, ringed Saturn). Use the brush handle for tiny dots. Dry on egg cartons so all sides paint.",
    pro: "Educational tie-in: have the child label each planet with a sticker. Pairs with a homeschool astronomy unit.",
  },
  {
    num: 12,
    title: "Race Cars & Rocket Ships",
    ageRange: "5–8",
    time: "30 min",
    difficulty: "Easy",
    what:
      "Plaster vehicles painted with custom team colors, racing numbers and flames or tail fire.",
    how:
      "Paint the body solid first. Add stripes with masking tape (peel before paint dries). Use a fine brush for numbers on the door or fuselage.",
    pro: "Top pick for kids who normally avoid 'arts and crafts' — vehicles let them feel like designers, not painters.",
  },
  {
    num: 13,
    title: "Fairy Garden Stones",
    ageRange: "5–8",
    time: "30 min",
    difficulty: "Easy",
    what:
      "Flat plaster stones painted with mushrooms, doors, ladybugs or tiny windows for an outdoor fairy garden.",
    how:
      "Paint a base color. Add a 'door' (rectangle with arched top), windows, tiny vines. Seal with outdoor acrylic varnish (adult only) before placing in a plant pot.",
    pro: "Combines well with a child's existing imaginative play setup. Keep an eye on rain — even sealed plaster softens after weeks of soaking.",
  },
  {
    num: 14,
    title: "Family Handprint Plaster Plaque",
    ageRange: "All ages",
    time: "20 min painting (adult casts the plaque)",
    difficulty: "Easy",
    what:
      "A pre-cast plaster plaque with the child's handprint pressed in by an adult, then painted by the child.",
    how:
      "Adult mixes plaster, presses hand or foot into damp plaster, lets cure (24 hr). Child paints the print in their favorite color, paints the background in a contrast.",
    pro: "Memory keepsake — date and age go on the back. Common Mother's Day, Father's Day and grandparent gift project.",
  },
  {
    num: 15,
    title: "DIY Magnet Set (Mini Plaster Shapes)",
    ageRange: "5–10",
    time: "20 min",
    difficulty: "Easy",
    what:
      "Tiny plaster shapes (stars, hearts, bees, fruit) painted and glued to magnet discs for the fridge.",
    how:
      "Paint shapes in a single afternoon. Once dry, an adult glues a small magnet disc on the back with E6000 or hot glue. Display the kid's full collection on the fridge.",
    pro: "Functional art — kids see their work used every day. Replace stick-figure crayon drawings with a curated plaster magnet wall.",
  },
];

// ---------- ItemList JSON-LD ----------
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "15 Plaster Painting Ideas for Kids",
  numberOfItems: ideas.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: ideas.map((i) => ({
    "@type": "ListItem",
    position: i.num,
    name: i.title,
  })),
};

// ---------- FAQs ----------
const guideFaqs: { q: string; a: string }[] = [
  {
    q: "What age can kids start plaster painting?",
    a: "Most kids can start plaster painting at age 4 with light adult help, and become fully independent by age 6 or 7. The key is to start with bold, blocky designs (like rainbow animals) before moving to detailed projects (like pet portraits or galaxy unicorns). Children younger than 4 often try to put paint or plaster figurines in their mouth, so wait until they reliably understand 'paint goes on the figure, not in the mouth.'",
  },
  {
    q: "Are plaster painting kits safe for kids?",
    a: "Yes, when the materials are ASTM D-4236 certified — the U.S. standard for art-material safety required by federal law (LHAMA). Always look for ASTM D-4236 on the box or product page. Avoid generic marketplace kits that ship paints from overseas without safety labeling. At Blueby Art Shop every paint, brush and plaster figurine ships ASTM D-4236 certified and CPSIA compliant.",
  },
  {
    q: "What kind of paint works best on plaster?",
    a: "Water-based acrylic paint. It dries in 20–30 minutes, sticks to plaster without primer, washes off skin and most clothes, and comes in non-toxic ASTM D-4236 formulations. Avoid oil paints (toxic, slow-drying) and tempera (chips off plaster). For glow effects use ASTM-certified non-toxic glow acrylic.",
  },
  {
    q: "How long does plaster paint take to dry?",
    a: "About 20–30 minutes between layers and 1–2 hours to be fully touch-dry. If you add a sealant or varnish on top, allow 24 hours of additional cure time before handling. For party events, plan 30 minutes of painting plus 30 minutes of drying before guests leave.",
  },
  {
    q: "Do I need to seal plaster paintings?",
    a: "Indoor display: optional. Acrylic paint on plaster is durable enough for shelves, mantels and bookcases without sealing. Outdoor display (fairy gardens, pots): yes — use a non-toxic acrylic spray sealant after the child's paint is fully dry. An adult should apply sealant in a ventilated space.",
  },
  {
    q: "How do I prevent paint mess?",
    a: "Three-layer mess setup: (1) butcher paper or a wipeable tablecloth on the table, (2) a paper plate under each child as a personal tray, (3) wipeable smock or oversized t-shirt on the kid. Half-fill water cups so they don't tip. Acrylic paint washes out of most cotton when fresh — pre-treat any spills before drying.",
  },
  {
    q: "Can I make plaster figurines at home or do I need a kit?",
    a: "Both work. DIY plaster of Paris is cheap (about $1 per figurine) but adds a 24-hour mold-and-cure step before kids can paint, plus mixing dust risk. Pre-cast kits cost more ($8–$15 per figurine) but let kids start painting in 2 minutes. For kids under 6, party events, classrooms or sensory-sensitive children, pre-cast kits are almost always easier and safer.",
  },
  {
    q: "How many plaster painting ideas can a child finish in one sitting?",
    a: "Ages 4–6 typically finish 1 figurine in 20 minutes before attention drops. Ages 7–10 can finish 2 to 3 small figurines or one detailed project (like pet portraits or solar system planets) in 45–60 minutes. Plan 1 figurine per 20 minutes of expected attention span.",
  },
  {
    q: "What's the best plaster painting idea for a birthday party?",
    a: "A mini plaster painting station with one figurine per guest (unicorn, dinosaur, race car, mermaid). Allow 30 minutes painting plus 15 minutes drying. Each guest takes home their painted keepsake — no winners, no losers. This is the most-requested craft activity we ship for ages 5–10 birthday parties.",
  },
  {
    q: "Where can I get good plaster painting kits?",
    a: "Blueby Art Shop ships pre-cast plaster figurines plus ASTM D-4236 certified paints, brushes and instructions to your door. Individual kits start at $24.99, and a monthly subscription delivers 1–3 new figurines every month. Free U.S. shipping over $50. See our buyer's guide comparing the top 6 kids art subscription brands.",
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

// ---------- Page ----------
export default function PlasterIdeasGuidePage() {
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
            15 Plaster Painting Ideas for Kids (Ages 4–10)
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            From rainbow animals to galaxy unicorns, glow-in-the-dark sea
            creatures and birthday party stations — 15 plaster painting ideas
            kids ages 4 to 10 will actually finish, with step-by-step tips,
            mess-control tricks and ASTM D-4236 paint safety from the{" "}
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
          <ul
            className="mt-3 space-y-1 text-sm"
            style={{ color: "#1E40AF" }}
          >
            <li>• Quick supply list (everything you need on one page)</li>
            <li>• 15 plaster painting ideas, ranked by age and difficulty</li>
            <li>• Painting tips that actually work (from real test sessions)</li>
            <li>• ASTM D-4236 paint safety &amp; what to avoid</li>
            <li>• Mess control: 3-layer setup that contains 95% of spills</li>
            <li>• 10 questions parents ask before starting</li>
          </ul>
        </div>
      </section>

      {/* TL;DR */}
      <Section heading="The 30-second answer">
        <p>
          Plaster painting is the calmest, most-finished kids art project
          we&apos;ve tested. Pre-cast plaster figures (animals, ornaments, race
          cars, ornaments) skip the mixing-and-mold step, so kids ages 4 to 10
          go straight to the part they love — choosing colors and decorating.
          The setup takes 5 minutes, the active painting runs 20–45 minutes per
          figure, drying takes 20 minutes between layers, and every project
          ends with a keepsake the child can show off. Use ASTM D-4236
          certified water-based acrylic paints, set up a 3-layer mess station,
          and start with bold solid-color projects before moving to detailed
          ones.
        </p>
        <p>
          Below are <strong>15 plaster painting ideas for kids</strong> we use
          ourselves, organized by age group and difficulty. Every idea includes
          what it is, how to do it, and one pro-level tip from our shop floor.
        </p>
      </Section>

      {/* Supply list */}
      <Section heading="Quick supply list (everything you need)">
        <p>
          You need just six categories of supplies. Most plaster painting kits
          (including ours) include 1, 2, 3 and 4 in a single box.
        </p>
        <ol
          style={{
            paddingLeft: 18,
            color: "#334155",
            lineHeight: 1.8,
          }}
        >
          <li>
            <strong>Pre-cast plaster figurines</strong> — animals, ornaments,
            shapes; 1 per child per project.
          </li>
          <li>
            <strong>Water-based acrylic paint</strong>, ASTM D-4236 certified,
            in 6+ colors.
          </li>
          <li>
            <strong>Brushes</strong> — at least one thick (size 4–8) and one
            fine (size 0–2) per child.
          </li>
          <li>
            <strong>Paper plate</strong> as a palette plus a personal tray.
          </li>
          <li>
            <strong>Half-filled water cup</strong> for rinsing.
          </li>
          <li>
            <strong>Wipeable surface cover</strong> — butcher paper, vinyl
            tablecloth, or a Blueby Art Shop activity mat.
          </li>
        </ol>
        <p>
          Optional bonuses for advanced ideas: glitter (for ornaments), small
          magnets (for fridge magnet sets), masking tape (for clean stripes),
          fine point markers (for outlining details), non-toxic acrylic spray
          sealer (for outdoor display — adult only).
        </p>
      </Section>

      {/* The 15 ideas */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h2
          className="mb-2 text-2xl sm:text-3xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          15 Plaster Painting Ideas for Kids
        </h2>
        <p
          className="mb-6 text-sm"
          style={{ color: "#64748B" }}
        >
          Ranked roughly by age (youngest first). Every idea includes age
          range, painting time, difficulty and one pro tip.
        </p>

        <div className="space-y-6">
          {ideas.map((idea) => (
            <article
              key={idea.num}
              className="card p-6"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span
                  style={{
                    backgroundColor: "#EFF6FF",
                    color: "#1E40AF",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  #{idea.num}
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
                  {idea.title}
                </h3>
              </div>
              <div
                className="mt-3 flex flex-wrap gap-3 text-xs"
                style={{ color: "#475569" }}
              >
                <Badge label={`Ages ${idea.ageRange}`} />
                <Badge label={`${idea.time} active`} />
                <Badge label={idea.difficulty} />
              </div>
              <p
                className="mt-4 text-base"
                style={{ color: "#334155", lineHeight: 1.7 }}
              >
                <strong>What it is.</strong> {idea.what}
              </p>
              <p
                className="mt-3 text-base"
                style={{ color: "#334155", lineHeight: 1.7 }}
              >
                <strong>How to do it.</strong> {idea.how}
              </p>
              <p
                className="mt-3 text-base"
                style={{
                  color: "#0F172A",
                  lineHeight: 1.7,
                  backgroundColor: "#FEF3C7",
                  padding: "10px 14px",
                  borderRadius: 8,
                }}
              >
                <strong>Pro tip.</strong> {idea.pro}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Tips that work */}
      <Section heading="6 painting tips that actually work">
        <p>
          We&apos;ve tested these projects with hundreds of kids in store and
          at parties. These six tips make the difference between a frustrated
          5-minute attempt and a 30-minute calm session.
        </p>
        <ol
          style={{
            paddingLeft: 18,
            color: "#334155",
            lineHeight: 1.9,
          }}
        >
          <li>
            <strong>Tape the figure to a paper plate.</strong> Plaster
            figurines slide and tip when little hands push the brush. A loop of
            painters&apos; tape under the base solves it instantly.
          </li>
          <li>
            <strong>Half-fill the water cup.</strong> A full cup tips. Half
            full almost never does, and it&apos;s plenty for rinsing brushes.
          </li>
          <li>
            <strong>Paint largest areas first.</strong> Body, then head, then
            ears, then eyes. Small details over large blocks always look
            cleaner than the reverse.
          </li>
          <li>
            <strong>Let each layer dry 20 minutes.</strong> Acrylic skin-dries
            in 5 minutes but bleeds if you paint on top too soon. For
            multi-color projects, work on a second figure while the first one
            dries.
          </li>
          <li>
            <strong>Use the brush handle for tiny dots.</strong> Stars, eyes,
            spots — dipping the wooden handle in paint gives a perfect circle
            every time. No fine motor stress.
          </li>
          <li>
            <strong>Stop before they&apos;re tired.</strong> A finished simple
            piece beats a half-finished detailed one. Set a 20-minute timer for
            ages 4–6, 30 minutes for 7–8, and 45 minutes for 9–10.
          </li>
        </ol>
      </Section>

      {/* Safety */}
      <Section heading="Paint safety: ASTM D-4236 explained">
        <p>
          The U.S. requires all art materials sold for children to comply with
          the Labeling of Hazardous Art Materials Act (LHAMA), which references
          the ASTM D-4236 standard. Look for{" "}
          <strong>&quot;Conforms to ASTM D-4236&quot;</strong> on the paint label or
          product page. That single line confirms the formula has been
          reviewed by a toxicologist and meets U.S. safety expectations for
          chronic-hazard labeling.
        </p>
        <p>What to avoid:</p>
        <ul
          style={{
            paddingLeft: 18,
            color: "#334155",
            lineHeight: 1.9,
          }}
        >
          <li>
            Generic acrylic paint imported with no safety statement on the
            packaging.
          </li>
          <li>
            Oil-based paints — slow drying, fumes, hard to wash. Not for kids.
          </li>
          <li>
            Glow paint without a non-toxic certification — some glow pigments
            contain compounds you don&apos;t want on a child&apos;s hands.
          </li>
          <li>
            Spray paints, varnishes, sealers — all adult-only because of fumes.
          </li>
        </ul>
        <p>
          Every Blueby Art Shop kit ships with paints that are{" "}
          <strong>ASTM D-4236 certified and CPSIA compliant</strong>, plaster
          figures hand-cast in Texas, and brushes safe for ages 3+. Read more
          on our{" "}
          <Link href="/about" className="link-primary">
            safety standards page
          </Link>
          .
        </p>
      </Section>

      {/* Mess control */}
      <Section heading="Mess control: the 3-layer setup">
        <p>
          We use this exact setup at in-store events and birthday parties.
          It contains about 95% of typical spills with no special equipment.
        </p>
        <ol
          style={{
            paddingLeft: 18,
            color: "#334155",
            lineHeight: 1.9,
          }}
        >
          <li>
            <strong>Layer 1 — Table cover.</strong> Butcher paper, a wipeable
            vinyl tablecloth or an old shower curtain. Tape the corners so
            it doesn&apos;t lift.
          </li>
          <li>
            <strong>Layer 2 — Personal tray.</strong> A paper plate per child
            holds the figurine, the brush and any drips. The figure can move
            between rooms (kitchen ↔ drying area) on the plate without spilling.
          </li>
          <li>
            <strong>Layer 3 — On the kid.</strong> Smock, painting apron, or
            an oversized old t-shirt. Acrylic paint washes out of cotton when
            fresh — pre-treat any drops with cold water before they dry.
          </li>
        </ol>
        <p>
          If a drop hits the floor: blot, don&apos;t rub. A damp cloth lifts
          fresh acrylic from tile, wood and most laminate. For carpet, blot
          with cold water plus a drop of dish soap before it dries.
        </p>
      </Section>

      {/* Internal link to other guide */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="card p-6"
          style={{
            backgroundColor: "#FEF3C7",
            borderColor: "#FCD34D",
          }}
        >
          <p
            className="text-base"
            style={{
              color: "#92400E",
              fontWeight: 700,
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Want a kit instead of buying every supply separately?
          </p>
          <p className="mt-2 text-sm" style={{ color: "#78350F" }}>
            We compared the top 6 kids art subscription brands — KiwiCo, Ivy
            Kids, MEL Art, We Craft Box, Doodle Crate and Blueby Art Shop — on
            price, age range, materials safety, mess and educational value.
          </p>
          <Link
            href="/guide/best-plaster-art-kits-2026"
            className="mt-3 inline-block link-primary"
          >
            Read the 2026 buyer&apos;s guide →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <Section heading="Frequently asked questions">
        <div className="space-y-4">
          {guideFaqs.map((f, i) => (
            <details
              key={i}
              className="card p-5"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
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
            Ready to try one of these ideas?
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Every Blueby Art Shop kit ships pre-cast plaster figurines plus
            ASTM D-4236 certified paints and brushes — so you can start any
            idea in this list in under 5 minutes.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="btn-secondary">
              Shop one-time kits
            </Link>
            <Link href="/subscribe" className="btn-primary">
              Start a monthly subscription
            </Link>
          </div>
          <p
            className="mt-4 text-xs"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            From $24.99/month · Free U.S. shipping over $50 · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}

// ---------- helpers ----------
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

function Badge({ label }: { label: string }) {
  return (
    <span
      style={{
        backgroundColor: "#F1F5F9",
        color: "#475569",
        padding: "4px 10px",
        borderRadius: 999,
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}
