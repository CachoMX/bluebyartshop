import type { MetadataRoute } from "next";
import { catalogProducts } from "@/lib/catalog";
import { SITE_URL } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();

  const productPages: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
    url: `${SITE_URL}/shop/${product.slug}`,
    lastModified: generatedAt,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/subscribe`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/shop`,
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/shipping-returns`,
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...productPages,
  ];
}
