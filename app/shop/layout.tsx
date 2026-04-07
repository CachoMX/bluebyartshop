import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Kids Art Shop | Plaster Kits, Coloring Books, 3D Figures & Party Sets",
  description:
    "Shop kids art kits from Blue By Art Shop. Paint-your-own plaster figures, themed coloring books, custom 3D print figures, birthday party kits, and wholesale bundles. Safe, non-toxic, ages 5–12.",
  alternates: {
    canonical: "https://bluebyartshop.com/shop",
  },
  openGraph: {
    title: "Kids Art Shop | Blue By Art Shop — Plaster Kits, Coloring Books & More",
    description:
      "Browse 16 kids art kits: plaster figures, coloring books, 3D print figures, party kits & wholesale. Non-toxic. Ages 5–12. Free shipping on subscriptions.",
    url: "https://bluebyartshop.com/shop",
    images: [
      {
        url: "/images/shop-supplies-flatlay.jpg",
        width: 1200,
        height: 630,
        alt: "Blue By Art Shop kids art kits collection",
      },
    ],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blue By Art Shop — Kids Art Kits",
  description:
    "Complete collection of kids art kits including plaster figures, coloring books, 3D print figures, party kits and wholesale bundles",
  numberOfItems: 16,
  itemListElement: [
    { "@type": "ListItem", position: 1, url: "https://bluebyartshop.com/shop/unicorn-plaster-figure-kit", name: "Unicorn Plaster Figure Kit" },
    { "@type": "ListItem", position: 2, url: "https://bluebyartshop.com/shop/dinosaur-plaster-set", name: "Dinosaur Plaster Set (3-pack)" },
    { "@type": "ListItem", position: 3, url: "https://bluebyartshop.com/shop/space-explorer-plaster-kit", name: "Space Explorer Plaster Kit" },
    { "@type": "ListItem", position: 4, url: "https://bluebyartshop.com/shop/ocean-animals-plaster-set", name: "Ocean Animals Plaster Set" },
    { "@type": "ListItem", position: 5, url: "https://bluebyartshop.com/shop/enchanted-forest-coloring-book", name: "Enchanted Forest Coloring Book" },
    { "@type": "ListItem", position: 6, url: "https://bluebyartshop.com/shop/adventure-heroes-coloring-pack", name: "Adventure Heroes Coloring Pack" },
    { "@type": "ListItem", position: 7, url: "https://bluebyartshop.com/shop/manga-comics-coloring-book", name: "Manga & Comics Coloring Book" },
    { "@type": "ListItem", position: 8, url: "https://bluebyartshop.com/shop/mini-dragon-3d-print", name: "Mini Dragon 3D Print" },
    { "@type": "ListItem", position: 9, url: "https://bluebyartshop.com/shop/robot-buddy-3d-figure", name: "Robot Buddy 3D Figure" },
    { "@type": "ListItem", position: 10, url: "https://bluebyartshop.com/shop/mini-keychain-pack", name: "Mini Keychain Pack" },
    { "@type": "ListItem", position: 11, url: "https://bluebyartshop.com/shop/party-kit-15-pack", name: "Party Kit 15-pack" },
    { "@type": "ListItem", position: 12, url: "https://bluebyartshop.com/shop/party-kit-25-pack", name: "Party Kit 25-pack" },
    { "@type": "ListItem", position: 13, url: "https://bluebyartshop.com/shop/party-kit-50-pack", name: "Party Kit 50-pack" },
    { "@type": "ListItem", position: 14, url: "https://bluebyartshop.com/shop/birthday-box", name: "Birthday Box" },
    { "@type": "ListItem", position: 15, url: "https://bluebyartshop.com/shop/wholesale-starter-pack", name: "Wholesale Starter Pack (50 units)" },
    { "@type": "ListItem", position: 16, url: "https://bluebyartshop.com/shop/wholesale-premium-pack", name: "Wholesale Premium Pack (50 units)" },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bluebyartshop.com" },
    { "@type": "ListItem", position: 2, name: "Shop", item: "https://bluebyartshop.com/shop" },
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
