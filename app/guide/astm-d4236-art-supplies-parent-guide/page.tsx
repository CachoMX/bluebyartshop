import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_NAME, SITE_URL, BRAND_LOGO_PATH } from "@/lib/brand";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("astm-d4236-art-supplies-parent-guide")!;
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
  articleSection: "Parent Safety Guide",
  wordCount: 3500,
  inLanguage: "en-US",
  keywords:
    "ASTM D-4236, ACMI AP seal, LHAMA, CPSIA, kids art supplies safety, non-toxic paint kids, FHSA art materials",
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
      name: "ASTM D-4236 Art Supplies — Parent's Safety Guide",
      item: url,
    },
  ],
};

// ---------- FAQ ----------
const faqs: { q: string; a: string }[] = [
  {
    q: "What does \"Conforms to ASTM D-4236\" actually mean on a paint label?",
    a: "It means the manufacturer or importer has had the product's formula reviewed by a qualified toxicologist to identify any ingredients that could cause chronic (long-term) health effects — such as cancer, organ damage or reproductive harm — and that the product is labeled accordingly. The phrase is a federally mandated conformance statement required under LHAMA, codified at 16 CFR § 1500.14(b)(8). It does not guarantee a product is chemical-free, but it guarantees transparency.",
  },
  {
    q: "Are kids paints safe if they only say \"non-toxic\" and have no ASTM seal?",
    a: "Not necessarily. \"Non-toxic\" is an unregulated marketing term — a manufacturer can print it without any toxicological review. The legally meaningful phrase is \"Conforms to ASTM D-4236,\" which requires a credentialed toxicologist to review the formula under federal law. If you see only \"non-toxic\" with no ASTM conformance statement or ACMI AP seal, treat the claim as unverified marketing and look for a more transparent product.",
  },
  {
    q: "What is the ACMI AP seal, and is it different from ASTM D-4236?",
    a: "Yes — related but distinct. ASTM D-4236 conformance is the federal legal baseline, requiring chronic hazard review and labeling. The ACMI AP (Approved Product) seal is voluntary and goes further: a board-certified toxicologist confirms no ingredients exist in quantities sufficient to harm humans, including children, for both acute and chronic hazards. ACMI has certified over 60,000 formulations. For children ages 4–10, the AP seal is the gold standard.",
  },
  {
    q: "What age should kids be before using art supplies without AP certification?",
    a: "ACMI recommends that children in grade 6 (roughly age 12) and younger use only ACMI AP-certified or ASTM D-4236-compliant products with no hazard warnings. Children under 3 face additional small-parts risks per 16 CFR § 1500.14(b)(8). Young children's developing nervous systems absorb toxins more readily and hand-to-mouth behavior raises ingestion risk. Products with the ACMI CL (Cautionary Labeling) seal should be reserved for grade 7 and above.",
  },
  {
    q: "How do I know if a kids art supply has too much lead?",
    a: "You cannot visually detect lead. Federal law (CPSIA) sets the limit at 90 ppm in paint or surface coatings and 100 ppm total lead in accessible parts. CPSIA-compliant products must be third-party tested by a CPSC-accepted lab. Red flags include: no ASTM D-4236 statement, no U.S. importer name, or product appearing on the CPSC recall list. Check cpsc.gov/Recalls and subscribe to email recall alerts.",
  },
  {
    q: "My child put paint in their mouth. What should I do?",
    a: "If the product carries the ACMI AP seal, AP certification means no ingredients at levels expected to harm humans even with incidental ingestion. Regardless, call the Poison Control hotline at 1-800-222-1222 for guidance. Have the packaging handy — they will ask for label and ingredient details. Do not induce vomiting unless specifically instructed by Poison Control or emergency services.",
  },
  {
    q: "Do all art supplies sold on Amazon have to comply with ASTM D-4236?",
    a: "Yes — federal law requires compliance regardless of sales channel. However, CPSC enforcement is typically reactive, occurring after a complaint rather than before a product ships. Third-party marketplace sellers, including overseas importers, may lack proper certification. Both the 2026 TheKiddoSpace Fingerpainting Kit recall and handwriting kit recall involved Amazon-sold products. Always verify compliance before purchasing.",
  },
  {
    q: "What is LHAMA, and why should I care as a parent?",
    a: "LHAMA stands for the Labeling of Hazardous Art Materials Act, passed by Congress in 1988. It amended the Federal Hazardous Substances Act to make ASTM D-4236 toxicological review mandatory for every art material sold in the U.S. It also requires manufacturers to re-evaluate products every 5 years and update labels within 12 months of discovering new hazards, per 16 CFR § 1500.14(b)(8). LHAMA is what gives the phrase \"Conforms to ASTM D-4236\" its legal weight and enforceability.",
  },
  {
    q: "Can plaster painting kits for kids have hidden hazards?",
    a: "Plaster itself (calcium sulfate hemihydrate) is generally low-hazard when hardened. However, risks can arise from: paints with non-compliant pigments; mold release agents in the plaster mix; and fine plaster dust if pieces are sanded or broken, which young children should avoid. Kits carrying ASTM D-4236 conformance and ACMI AP certification for all included paints have had these components specifically reviewed. Always verify that every item in a kit — not just the paints — is covered by the certification.",
  },
  {
    q: "How often does a manufacturer have to re-check their art supply safety?",
    a: "Under LHAMA, manufacturers and importers must re-evaluate formulas with a qualified toxicologist at least every 5 years, per 16 CFR § 1500.14(b)(8)(i)(C)(6). Re-evaluation is also triggered by any formula change — including switching a single ingredient supplier. New hazard information must be incorporated into labels within 12 months of discovery. ACMI-certified products face additional random testing between scheduled reviews, providing an extra layer of ongoing assurance.",
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
    label: "ASTM International — ASTM D4236-94(2016) Standard Practice",
    url: "https://www.astm.org/d4236-94r16.html",
  },
  {
    label: "CPSC — Art Materials Business Guidance (LHAMA / FHSA / CPSIA)",
    url: "https://www.cpsc.gov/business--manufacturing/business-education/business-guidance/art-materials",
  },
  {
    label: "CPSC — Art Materials FAQ",
    url: "https://www.cpsc.gov/FAQ/art-materials",
  },
  {
    label: "ACMI — AP and CL Seal Definitions",
    url: "https://www.acmiart.org/acmi-seals",
  },
  {
    label: "ACMI — Materials Safety",
    url: "https://www.acmiart.org/materials-safety",
  },
  {
    label: "CPSC Recall — TheKiddoSpace Fingerpainting Kits (2026)",
    url: "https://www.cpsc.gov/Recalls/2026/TheKiddoSpace-Recalls-Childrens-Fingerpainting-Kits-Due-to-Risk-of-Injury-from-Hazardous-Substances-and-Phthalate-Exposure-Violates-Federal-Hazardous-Substances-Act-and-Phthalates-Ban",
  },
  {
    label:
      "CPSC Recall — Dixon Ticonderoga Creativity Street Foam Pattern Rollers (2024)",
    url: "https://www.cpsc.gov/Recalls/2024/Dixon-Ticonderoga-Recalls-Creativity-Street-Foam-Pattern-Rollers-Due-to-Violation-of-Federal-Lead-Content-Ban",
  },
  {
    label:
      "Pediatrics journal — CDC review of recent lead-related children's product recalls",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11895665/",
  },
  {
    label: "Cornell Law — 15 U.S.C. § 1277 (LHAMA statute)",
    url: "https://www.law.cornell.edu/uscode/text/15/1277",
  },
  {
    label: "eCFR — 16 CFR § 1500.14(b)(8)",
    url: "https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1500/section-1500.14",
  },
  {
    label: "California OEHHA — Proposition 65",
    url: "https://oehha.ca.gov/proposition-65",
  },
  {
    label: "Green America — Are Your Art Supplies Toxic?",
    url: "https://greenamerica.org/green-living/toxic-art-supplies",
  },
  {
    label: "H2 Compliance — LHAMA Art Materials Safety Requirements",
    url: "https://h2compliance.com/lhama-art-materials-safety-requirements/",
  },
  {
    label: "CPSC Recalls (search)",
    url: "https://www.cpsc.gov/Recalls",
  },
];

// ---------- Page ----------
export default function AstmGuidePage() {
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
            ASTM D-4236 Art Supplies: A Parent&apos;s Safety Guide for Kids Art
            Materials (2026)
          </h1>
          <p
            className="mt-4 max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.86)" }}
          >
            What &quot;Conforms to ASTM D-4236&quot; really means on a kids
            paint label, plus LHAMA, the ACMI AP seal, CPSIA lead and phthalate
            limits, recent recalls, and a 9-point checklist parents can save
            before buying.
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
            <li>• What ASTM D-4236 actually means on a label</li>
            <li>• LHAMA and FHSA — why ASTM D-4236 is U.S. federal law</li>
            <li>• ACMI AP and CL seals — bonus certifications explained</li>
            <li>• CPSIA lead and phthalate limits for kids products</li>
            <li>• 5 things to check on every art supply label</li>
            <li>• 7 red flags on cheap imported kids art kits (with recall examples)</li>
            <li>• Printable 9-point parent checklist</li>
            <li>• 10 questions parents ask about art supply safety</li>
          </ul>
        </div>
      </section>

      {/* TL;DR */}
      <Section heading="The 30-second answer">
        <p>
          Every art supply sold in the United States must display the phrase{" "}
          <strong>&quot;Conforms to ASTM D-4236&quot;</strong> by federal law.
          That phrase means a qualified toxicologist has reviewed the
          product&apos;s formula for chronic health hazards, and any dangerous
          ingredients are disclosed on the label. It does <strong>not</strong>{" "}
          by itself mean a product is 100% free of all chemicals — but a
          product without that statement is legally non-compliant and should
          be avoided. For children ages 4–10, also look for the{" "}
          <strong>ACMI AP seal</strong>, which goes one step further and
          confirms the product contains no ingredients at levels harmful to
          kids. All {BRAND_NAME} paints carry ASTM D-4236 conformance and
          ACMI AP certification.
        </p>
      </Section>

      {/* What is ASTM */}
      <Section heading="What is ASTM D-4236? Definition, what it tests, who issues it">
        <p>
          ASTM D-4236 is formally titled{" "}
          <em>
            Standard Practice for Labeling Art Materials for Chronic Health
            Hazards
          </em>
          , published by{" "}
          <a
            href="https://www.astm.org/d4236-94r16.html"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            ASTM International
          </a>
          , a globally recognized standards body. The current version is ASTM
          D4236-94(2016).
        </p>
        <p>
          <strong>What it covers.</strong> The standard establishes a procedure
          for developing precautionary labels for art materials — paints,
          inks, glazes, dyes, fixatives, adhesives, and similar products —
          packaged in sizes intended for individual use. It applies to any
          product marketed as suitable for creating visual or graphic art.
        </p>
        <p>
          <strong>What it assesses.</strong> ASTM D-4236 focuses on{" "}
          <em>chronic health hazards</em> — health effects that develop over
          time from repeated exposure: organ toxicity, cancer, reproductive
          harm, allergic sensitization. Examples include heavy metals (lead,
          cadmium, chromium) in pigments, solvents that may cause nerve damage
          with long-term inhalation, and reproductive toxins at meaningful
          concentrations.
        </p>
        <p>
          <strong>What it does not do.</strong> The standard does not specify
          test methods for individual chemicals. Each product&apos;s formula
          must be submitted to a qualified <strong>toxicologist</strong> —
          defined by{" "}
          <a
            href="https://www.cpsc.gov/FAQ/art-materials"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            CPSC regulations
          </a>{" "}
          as &quot;an individual who, through education, training, and
          experience, has expertise in the field of toxicology as it relates
          to human exposure.&quot; The toxicologist reviews ingredients and
          concentrations, then determines whether chronic hazard warnings are
          needed.
        </p>
        <p>
          <strong>Who issues it.</strong> ASTM International publishes the
          standard. The U.S. Consumer Product Safety Commission (CPSC)
          enforces it through federal law. Compliance may also be certified by
          the{" "}
          <a
            href="https://www.acmiart.org/acmi-seals"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            Art and Creative Materials Institute (ACMI)
          </a>
          .
        </p>
      </Section>

      {/* Why it's the law */}
      <Section heading="Why ASTM D-4236 is the law in the U.S. (LHAMA + FHSA)">
        <p>
          &quot;Conforms to ASTM D-4236&quot; sounds like a voluntary marketing
          claim. It is not. It is a <strong>federal legal requirement</strong>{" "}
          with this chain of law:
        </p>
        <ol style={olStyle}>
          <li>
            <strong>Federal Hazardous Substances Act (FHSA), 1960</strong> —
            the foundational consumer protection law governing labeling of
            hazardous household products (15 U.S.C. § 1261 et seq.).
          </li>
          <li>
            <strong>
              Labeling of Hazardous Art Materials Act (LHAMA), 1988
            </strong>{" "}
            — Congress passed LHAMA specifically to protect artists and
            children from art supply hazards. Per the{" "}
            <a
              href="https://www.cpsc.gov/business--manufacturing/business-education/business-guidance/art-materials"
              target="_blank"
              rel="noopener"
              className="link-primary"
            >
              CPSC&apos;s official business guidance
            </a>
            , the requirements are codified at{" "}
            <strong>16 CFR § 1500.14(b)(8)</strong>.
          </li>
          <li>
            <strong>ASTM D-4236 incorporated by reference</strong> — LHAMA
            incorporates ASTM D-4236&apos;s methodology directly into federal
            regulation, giving the standard the force of law for any art
            material sold in the U.S.
          </li>
        </ol>
        <p>
          <strong>What manufacturers must do under LHAMA</strong> (
          <a
            href="https://www.cpsc.gov/FAQ/art-materials"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            CPSC FAQ on Art Materials
          </a>
          ):
        </p>
        <ul style={ulStyle}>
          <li>
            Submit every formula for a chronic hazard toxicological review,
            repeated <strong>at least every 5 years</strong>.
          </li>
          <li>
            Submit the review criteria and a list of hazardous products to
            the CPSC&apos;s Division of Regulatory Enforcement.
          </li>
          <li>
            Place a conformance statement (&quot;Conforms to ASTM D-4236&quot;)
            on the product, package, or point-of-purchase signage.
          </li>
          <li>
            Update labels within <strong>12 months</strong> of discovering any
            new hazard information.
          </li>
        </ul>
        <p>
          <strong>The penalty.</strong> A product without ASTM D-4236
          conformance labeling is considered a &quot;misbranded hazardous
          substance&quot; under the FHSA, exposing the importer or
          manufacturer to civil or criminal enforcement.
        </p>
      </Section>

      {/* ACMI seals */}
      <Section heading="ACMI AP and CL seals — bonus certifications explained">
        <p>
          ASTM D-4236 conformance gets a product to the legal baseline. The{" "}
          <a
            href="https://www.acmiart.org/acmi-seals"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            Art and Creative Materials Institute (ACMI)
          </a>{" "}
          offers a voluntary certification program that goes significantly
          further. ACMI has certified over <strong>60,000</strong> art, craft,
          and creative material formulations.
        </p>

        <h3 style={h3Style}>AP seal — the gold standard for kids</h3>
        <p>
          The <strong>AP seal</strong> is what parents should look for when
          buying art supplies for children in grade 6 or below. According to{" "}
          <a
            href="https://www.acmiart.org/materials-safety"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            ACMI&apos;s materials safety page
          </a>
          , an AP-sealed product:
        </p>
        <ul style={ulStyle}>
          <li>Has been evaluated by a board-certified toxicologist.</li>
          <li>
            Contains no materials in sufficient quantities to be toxic or
            injurious to humans, including children.
          </li>
          <li>
            Will not cause acute or chronic health problems as defined by ASTM
            D-4236, LHAMA and the FHSA.
          </li>
          <li>
            Avoids chemicals at or above{" "}
            <a
              href="https://oehha.ca.gov/proposition-65"
              target="_blank"
              rel="noopener"
              className="link-primary"
            >
              California&apos;s Proposition 65
            </a>{" "}
            thresholds.
          </li>
        </ul>

        <h3 style={h3Style}>CL seal — adults and older students only</h3>
        <p>
          The <strong>CL seal</strong> appears on materials that contain
          ingredients requiring cautionary warnings — for example, solvents in
          oil-based paints. CL-labeled products{" "}
          <strong>are not appropriate for children in grade 6 or below</strong>
          .
        </p>

        <h3 style={h3Style}>Side-by-side comparison</h3>
        <div className="overflow-x-auto" style={{ marginTop: 8 }}>
          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: "#EFF6FF" }}>
                <Th>Feature</Th>
                <Th>ASTM D-4236</Th>
                <Th>ACMI AP</Th>
                <Th>ACMI CL</Th>
              </tr>
            </thead>
            <tbody>
              <Tr>
                <Td>Legally required</Td>
                <Td>Yes</Td>
                <Td>No (voluntary)</Td>
                <Td>No (voluntary)</Td>
              </Tr>
              <Tr>
                <Td>Chronic hazard review</Td>
                <Td>Yes</Td>
                <Td>Yes</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Acute hazard review</Td>
                <Td>No</Td>
                <Td>Yes</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Safe for kids grade 6 and under</Td>
                <Td>Not guaranteed</Td>
                <Td>Yes</Td>
                <Td>No</Td>
              </Tr>
              <Tr>
                <Td>Independent lab testing</Td>
                <Td>No</Td>
                <Td>Yes</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Review frequency</Td>
                <Td>Every 5 years</Td>
                <Td>Every 5 years + random</Td>
                <Td>Every 5 years + random</Td>
              </Tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Bottom line.</strong> ASTM D-4236 conformance = meets the
          law. ACMI AP seal = meets the law <em>and</em> a medical expert has
          independently verified the product is safe for children.
        </p>
      </Section>

      {/* CPSIA */}
      <Section heading="CPSIA: the other safety law for kids art supplies (lead, phthalates)">
        <p>
          If an art supply is intended for children under 12, a second federal
          law applies: the{" "}
          <strong>Consumer Product Safety Improvement Act of 2008 (CPSIA)</strong>
          . CPSIA was passed after a wave of lead-contaminated toy recalls
          involving imports from China.
        </p>
        <p>
          Under CPSIA, any &quot;children&apos;s product&quot; (designed for
          children age 12 and under) that qualifies as an art supply or toy
          must meet these requirements (
          <a
            href="https://www.cpsc.gov/FAQ/art-materials"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            CPSC Art Materials FAQ
          </a>
          ):
        </p>
        <ul style={ulStyle}>
          <li>
            <strong>Lead in paint or surface coatings:</strong> must not exceed{" "}
            <strong>0.009% (90 ppm)</strong>.
          </li>
          <li>
            <strong>Total lead in any accessible component:</strong> must not
            exceed <strong>100 ppm</strong>.
          </li>
          <li>
            <strong>Phthalate limits:</strong> children&apos;s toys and child
            care articles must not contain more than{" "}
            <strong>0.1% (1,000 ppm)</strong> of any regulated phthalate (DEHP,
            DBP, BBP, DINP, DIDP, DnOP).
          </li>
          <li>
            <strong>Third-party testing:</strong> manufacturers and importers
            must have products tested by a CPSC-accepted lab and issue a{" "}
            <strong>Children&apos;s Product Certificate (CPC)</strong>.
          </li>
        </ul>
        <p>
          <strong>Why this matters.</strong> A 2024 CDC review found that
          among 30 lead-related children&apos;s product recalls from June
          2022–April 2024, <strong>86%</strong> of recalled products were
          manufactured in China and had been on the market an average of 25
          months before recall (
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11895665/"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            Pediatrics journal report
          </a>
          ). Lead is a developmental neurotoxin with no safe exposure level in
          children.
        </p>
        <p>
          In 2026 the CPSC recalled the{" "}
          <a
            href="https://www.cpsc.gov/Recalls/2026/TheKiddoSpace-Recalls-Childrens-Fingerpainting-Kits-Due-to-Risk-of-Injury-from-Hazardous-Substances-and-Phthalate-Exposure-Violates-Federal-Hazardous-Substances-Act-and-Phthalates-Ban"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            TheKiddoSpace Fingerpainting Kits
          </a>{" "}
          (about 9,400 units sold on Amazon and TheKiddoSpaceStore.com from
          June 2023–February 2025) because they contained{" "}
          <strong>methanol, ethylene glycol, and a regulated phthalate</strong>
          .
        </p>
      </Section>

      {/* Read a label */}
      <Section heading="How to read an art supply label like a pro (5 things to check)">
        <ol style={olStyle}>
          <li>
            <strong>The ASTM D-4236 conformance statement.</strong> Look for
            the exact phrase &quot;Conforms to ASTM D-4236.&quot; If you
            cannot find it anywhere on the product, package or accompanying
            documentation — walk away.
          </li>
          <li>
            <strong>The ACMI AP seal.</strong> A round mark with &quot;AP&quot;
            and the words &quot;Certified&quot; or &quot;Non-Toxic.&quot; This
            is the strongest single indicator of child safety.
          </li>
          <li>
            <strong>A U.S. manufacturer or importer name and address.</strong>{" "}
            Federal law (FHSA) requires a U.S. responsible party to be
            identified.
          </li>
          <li>
            <strong>A U.S. consumer phone number or website.</strong> Products
            requiring chronic hazard labeling must include a 24-hour emergency
            or toll-free number.
          </li>
          <li>
            <strong>Age appropriateness.</strong> &quot;Non-toxic&quot; alone
            is an unregulated marketing term — unlike &quot;Conforms to ASTM
            D-4236,&quot; which is legally defined and enforced.
          </li>
        </ol>
      </Section>

      {/* Red flags */}
      <Section heading="7 red flags on cheap imported kids art kits">
        <ol style={olStyle}>
          <li>
            <strong>No ASTM D-4236 statement anywhere.</strong> The most basic
            legal non-compliance.
          </li>
          <li>
            <strong>&quot;Non-toxic&quot; claim with no certification seal.</strong>{" "}
            &quot;Non-toxic&quot; has no regulated definition in art supply law.
          </li>
          <li>
            <strong>
              Bright pigments from unverifiable brands at unusually low prices.
            </strong>{" "}
            Reds, yellows and oranges have historically used cadmium or lead
            compounds.
          </li>
          <li>
            <strong>No U.S. responsible party on the label.</strong> CPSIA
            requires children&apos;s products to have tracking labels.
          </li>
          <li>
            <strong>
              Soft plastic components with no phthalate disclosure.
            </strong>{" "}
            The 2026 TheKiddoSpace fingerpainting kit recall involved a
            regulated phthalate plus methanol and ethylene glycol.
          </li>
          <li>
            <strong>Established brand at random discount listings.</strong> In
            May 2024, Dixon Ticonderoga recalled about 2,880 Creativity Street
            Foam Pattern Rollers because the handles{" "}
            <a
              href="https://www.cpsc.gov/Recalls/2024/Dixon-Ticonderoga-Recalls-Creativity-Street-Foam-Pattern-Rollers-Due-to-Violation-of-Federal-Lead-Content-Ban"
              target="_blank"
              rel="noopener"
              className="link-primary"
            >
              contained lead exceeding the federal ban
            </a>
            . Always check{" "}
            <a
              href="https://www.cpsc.gov/Recalls"
              target="_blank"
              rel="noopener"
              className="link-primary"
            >
              CPSC.gov/Recalls
            </a>
            .
          </li>
          <li>
            <strong>Pen, marker or writing-kit nibs without lead testing.</strong>{" "}
            In February 2026 the CPSC recalled approximately 19,700
            TheKiddoSpace Print and Cursive Handwriting Kits because the pen
            nibs contained lead exceeding the federal ban.
          </li>
        </ol>
      </Section>

      {/* What Blueby ships */}
      <Section heading={`What ${BRAND_NAME} ships (our certified materials)`}>
        <p>
          Every paint included in a {BRAND_NAME} plaster painting kit or
          monthly art subscription box is{" "}
          <strong>ASTM D-4236 certified</strong> — each formula reviewed by a
          qualified toxicologist and confirmed safe for chronic-hazard
          labeling standards. Our subscription is designed for ages 4–10 and
          we intentionally source only water-based, washable paints that carry{" "}
          <strong>ACMI AP certification</strong> alongside ASTM D-4236
          conformance. We do not carry any product with a CL (Cautionary
          Labeling) seal. When your child opens a {BRAND_NAME} box, you can
          focus on the painting, not the label.
        </p>
      </Section>

      {/* Checklist */}
      <Section heading="Quick checklist parents can save">
        <p>Before buying any kids art supply, run through this list:</p>
        <ul style={{ ...ulStyle, listStyle: "none", paddingLeft: 0 }}>
          {[
            'Label says "Conforms to ASTM D-4236" (or equivalent wording)',
            "ACMI AP seal is visible (for children grade 6 and under)",
            "No ACMI CL seal present (CL = adults only)",
            "U.S. manufacturer or importer name and address listed",
            "U.S. consumer phone number or website present",
            "Age range matches your child's age",
            "No methanol, ethylene glycol, or regulated phthalates (DEHP, DBP, BBP) in ingredients",
            "Not on the current CPSC recall list",
            "Purchased from a verifiable U.S. retailer, not an unvetted marketplace listing",
          ].map((item) => (
            <li
              key={item}
              style={{
                padding: "8px 0",
                borderBottom: "1px dashed #E2E8F0",
                color: "#334155",
              }}
            >
              ☐ {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 12, fontSize: 14, color: "#64748B" }}>
          Tip: bookmark{" "}
          <a
            href="https://www.cpsc.gov/Recalls"
            target="_blank"
            rel="noopener"
            className="link-primary"
          >
            cpsc.gov/Recalls
          </a>{" "}
          and subscribe to email recall alerts.
        </p>
      </Section>

      {/* Related guides */}
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
                href="/guide/birthday-party-craft-kits-for-kids"
                className="link-primary"
              >
                Best Birthday Party Craft Kits for Kids (Ages 5–10) →
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
            Skip the label-reading
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl text-sm"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Every {BRAND_NAME} kit ships with paints that are ASTM D-4236
            certified and ACMI AP certified — already vetted for ages 4–10.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="btn-secondary">
              Shop one-time kits
            </Link>
            <Link href="/subscribe" className="btn-primary">
              Start a monthly subscription
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
const ulStyle: React.CSSProperties = {
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

function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}
