import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { catalogProducts } from "@/lib/catalog";
import {
  BRAND_LOGO_ALT,
  BRAND_LOGO_PATH,
  BRAND_NAME,
  SITE_URL,
} from "@/lib/brand";

const productCount = catalogProducts.length;

export const metadata: Metadata = {
  title: "Kids Art Shop | Plaster Kits, Coloring Books, 3D Figures & Party Sets",
  description:
    `Shop kids art kits from ${BRAND_NAME}. Paint-your-own plaster figures, themed coloring books, custom 3D print figures, birthday party kits, and wholesale bundles. Safe, non-toxic, ages 5–12.`,
  alternates: {
    canonical: `${SITE_URL}/shop`,
  },
  openGraph: {
    title: `Kids Art Shop | ${BRAND_NAME} — Plaster Kits, Coloring Books & More`,
    description: `Browse ${productCount} kids art kits: plaster figures, coloring books, 3D print figures, party kits & wholesale. Non-toxic. Ages 5–12. Free shipping on subscriptions.`,
    url: `${SITE_URL}/shop`,
    images: [
      {
        url: BRAND_LOGO_PATH,
        width: 1200,
        height: 630,
        alt: BRAND_LOGO_ALT,
      },
    ],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${BRAND_NAME} - Kids Art Kits`,
  description:
    "Complete collection of kids art kits including plaster figures, coloring books, 3D print figures, party kits and wholesale bundles",
  numberOfItems: catalogProducts.length,
  itemListElement: catalogProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/shop/${product.slug}`,
    name: product.name,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Shop", item: `${SITE_URL}/shop` },
  ],
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
