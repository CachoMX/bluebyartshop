// Shared data + helpers for /guide/* SEO landing pages.
// Update here once when a new guide is published.

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string; // ISO 8601
  modifiedDate: string;  // ISO 8601
  readingTimeMinutes: number;
  heroEyebrow: string;
};

export const guides: GuideMeta[] = [
  {
    slug: "astm-d4236-art-supplies-parent-guide",
    title:
      "ASTM D-4236 Art Supplies: A Parent's Safety Guide for Kids Art Materials (2026)",
    description:
      "What 'Conforms to ASTM D-4236' really means on a kids paint label, plus LHAMA, the ACMI AP seal, CPSIA lead and phthalate limits, recent recalls and a 9-point checklist parents can save before buying.",
    publishedDate: "2026-04-25",
    modifiedDate: "2026-04-25",
    readingTimeMinutes: 12,
    heroEyebrow: "Parent Safety Guide",
  },
  {
    slug: "birthday-party-craft-kits-for-kids",
    title:
      "Best Birthday Party Craft Kits for Kids (Ages 5–10): 2026 Buyer's Guide",
    description:
      "The 8 best birthday party craft kits for kids ages 5–10, ranked by age, price per child, prep time and mess level. Plus a comparison table, party-size math, 10 setup tips and FAQ from the Blueby Art Shop editorial team.",
    publishedDate: "2026-04-25",
    modifiedDate: "2026-04-25",
    readingTimeMinutes: 14,
    heroEyebrow: "Party Planning Guide",
  },
  {
    slug: "plaster-painting-ideas-for-kids",
    title:
      "15 Plaster Painting Ideas for Kids (Ages 4–10): Easy Projects, Tips & Safety",
    description:
      "15 tested plaster painting ideas for kids ages 4–10 — by age group, season and use-case. Includes step-by-step tips, ASTM D-4236 paint safety, mess control, drying times and a printable supply list from Blueby Art Shop.",
    publishedDate: "2026-04-25",
    modifiedDate: "2026-04-25",
    readingTimeMinutes: 13,
    heroEyebrow: "Plaster Crafts Ideas",
  },
  {
    slug: "best-plaster-art-kits-2026",
    title:
      "Best Plaster Art Kits for Kids in 2026: Honest Buyer's Guide & Comparison",
    description:
      "We tested the top plaster painting kits and monthly art subscription boxes for kids in 2026. Compare KiwiCo, Ivy Kids, MEL Art, We Craft Box and Blueby Art Shop on price, age range, materials safety, mess and educational value.",
    publishedDate: "2026-04-25",
    modifiedDate: "2026-04-25",
    readingTimeMinutes: 14,
    heroEyebrow: "2026 Buyer's Guide",
  },
];

export function getGuideBySlug(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}
