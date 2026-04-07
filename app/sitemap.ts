import type { MetadataRoute } from "next";

const BASE_URL = "https://bluebyartshop.com";

const productSlugs = [
  "unicorn-plaster-figure-kit",
  "dinosaur-plaster-set",
  "space-explorer-plaster-kit",
  "ocean-animals-plaster-set",
  "enchanted-forest-coloring-book",
  "adventure-heroes-coloring-pack",
  "manga-comics-coloring-book",
  "mini-dragon-3d-print",
  "robot-buddy-3d-figure",
  "mini-keychain-pack",
  "party-kit-15-pack",
  "party-kit-25-pack",
  "party-kit-50-pack",
  "birthday-box",
  "wholesale-starter-pack",
  "wholesale-premium-pack",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/shop/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/subscribe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...productPages,
  ];
}
