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
