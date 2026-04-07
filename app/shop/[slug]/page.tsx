import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";

// ── Product catalog ────────────────────────────────────────────────────────────

type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  age: string;
  minAge: number;
  maxAge: number;
  image: string | null;
  gradientFrom: string;
  gradientTo: string;
  emoji: string;
  badge: string | null;
  shortDesc: string;
  description: string;
  features: string[];
  relatedSlugs: string[];
};

const products: Product[] = [
  {
    id: 1,
    slug: "unicorn-plaster-figure-kit",
    name: "Unicorn Plaster Figure Kit",
    price: 14.99,
    category: "plaster",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: "/images/product-unicorn.jpg",
    gradientFrom: "#FFD6E0",
    gradientTo: "#FFC8D3",
    emoji: "🦄",
    badge: "Bestseller",
    shortDesc: "Paint your own magical unicorn plaster figure.",
    description:
      "Paint your own magical unicorn with this premium plaster figure kit from Blue By Art Shop. Includes a pre-molded unicorn plaster figure, 6 non-toxic paint pots, a brush, and step-by-step painting instructions. Perfect gift for girls and boys ages 5–7. Non-toxic, mess-friendly, and parent-approved.",
    features: [
      "1 pre-molded unicorn plaster figure — ready to paint",
      "6 non-toxic, washable paint pots in vibrant colors",
      "1 child-safe painting brush",
      "Step-by-step illustrated painting guide",
      "Sticker sheet for extra decoration",
      "ASTM D-4236 compliant — safe for ages 5 and up",
    ],
    relatedSlugs: [
      "dinosaur-plaster-set",
      "space-explorer-plaster-kit",
      "ocean-animals-plaster-set",
    ],
  },
  {
    id: 2,
    slug: "dinosaur-plaster-set",
    name: "Dinosaur Plaster Set (3-pack)",
    price: 19.99,
    category: "plaster",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: "/images/product-dinosaur.jpg",
    gradientFrom: "#D4EDDA",
    gradientTo: "#B8DFBE",
    emoji: "🦕",
    badge: null,
    shortDesc: "Three dino figures ready to paint and display.",
    description:
      "Unleash your young paleontologist's creativity with three paint-your-own dinosaur plaster figures. This 3-pack includes a T-Rex, Triceratops, and Brachiosaurus — each pre-molded and ready to sand, paint, and display. Includes 12 non-toxic paint pots, two brushes, and a dino fact card. Ideal for kids ages 8–10.",
    features: [
      "3 pre-molded plaster dinosaur figures: T-Rex, Triceratops, Brachiosaurus",
      "12 non-toxic paint pots in earth and primary tones",
      "2 child-safe brushes (fine and medium)",
      "Illustrated painting guide with dino facts",
      "Display-ready bases for each figure",
      "ASTM D-4236 compliant — safe for ages 5 and up",
    ],
    relatedSlugs: [
      "unicorn-plaster-figure-kit",
      "space-explorer-plaster-kit",
      "ocean-animals-plaster-set",
    ],
  },
  {
    id: 3,
    slug: "space-explorer-plaster-kit",
    name: "Space Explorer Plaster Kit",
    price: 17.99,
    category: "plaster",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: "/images/product-space.jpg",
    gradientFrom: "#CCE5FF",
    gradientTo: "#B0D4FF",
    emoji: "🚀",
    badge: null,
    shortDesc: "Rocket, astronaut, and planet figures in one set.",
    description:
      "Blast off into creativity with the Space Explorer Plaster Kit from Blue By Art Shop. This cosmic set includes three pre-molded plaster figures — a rocket ship, an astronaut, and a ringed planet — ready for painting. Includes a glow-in-the-dark paint pot, cosmic color palette, and space facts card. For kids ages 8–10 who love science and art.",
    features: [
      "3 pre-molded plaster figures: rocket, astronaut, ringed planet",
      "10 non-toxic paint pots including 1 glow-in-the-dark",
      "2 child-safe brushes (fine and medium)",
      "Space facts activity card",
      "Step-by-step cosmic painting guide",
      "ASTM D-4236 compliant — safe for ages 5 and up",
    ],
    relatedSlugs: [
      "dinosaur-plaster-set",
      "unicorn-plaster-figure-kit",
      "mini-dragon-3d-print",
    ],
  },
  {
    id: 4,
    slug: "ocean-animals-plaster-set",
    name: "Ocean Animals Plaster Set",
    price: 16.99,
    category: "plaster",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: "/images/product-ocean.jpg",
    gradientFrom: "#D4F7F7",
    gradientTo: "#B0EDED",
    emoji: "🐠",
    badge: null,
    shortDesc: "Sea turtle, clownfish, and starfish figures.",
    description:
      "Dive into creativity with the Ocean Animals Plaster Set from Blue By Art Shop. This underwater-themed kit includes three pre-molded plaster sea creatures — a sea turtle, a clownfish, and a starfish — ready to paint in ocean blues, tropical greens, and coral pinks. Includes 8 non-toxic paint pots and an ocean facts card. Perfect for young ocean lovers ages 5–7.",
    features: [
      "3 pre-molded plaster sea creatures: sea turtle, clownfish, starfish",
      "8 non-toxic paint pots in ocean and tropical colors",
      "1 child-safe painting brush",
      "Ocean animals fact card with coloring prompts",
      "Illustrated step-by-step painting guide",
      "ASTM D-4236 compliant — safe for ages 5 and up",
    ],
    relatedSlugs: [
      "unicorn-plaster-figure-kit",
      "enchanted-forest-coloring-book",
      "dinosaur-plaster-set",
    ],
  },
  {
    id: 5,
    slug: "enchanted-forest-coloring-book",
    name: "Enchanted Forest Coloring Book",
    price: 9.99,
    category: "coloring",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: "/images/product-coloring-book.jpg",
    gradientFrom: "#E8F5E9",
    gradientTo: "#C8E6C9",
    emoji: "🌲",
    badge: null,
    shortDesc: "32 pages of magical forest scenes for young artists.",
    description:
      "Step into a magical world with the Enchanted Forest Coloring Book from Blue By Art Shop. Featuring 32 beautifully illustrated pages of fairies, woodland creatures, mushroom villages, and enchanted castles, this coloring book is designed for young artists ages 5–7. Thick pages hold up to crayons, colored pencils, and washable markers without bleed-through.",
    features: [
      "32 original illustrated coloring pages",
      "Fairy-tale themes: fairies, woodland animals, castles, forests",
      "Thick paper — works with crayons, pencils, and markers",
      "Large, simple designs perfect for ages 5–7",
      "Printed on sustainably sourced paper",
      "Great for car trips, rainy days, and quiet time",
    ],
    relatedSlugs: [
      "adventure-heroes-coloring-pack",
      "manga-comics-coloring-book",
      "unicorn-plaster-figure-kit",
    ],
  },
  {
    id: 6,
    slug: "adventure-heroes-coloring-pack",
    name: "Adventure Heroes Coloring Pack",
    price: 12.99,
    category: "coloring",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: null,
    gradientFrom: "#FFF3CD",
    gradientTo: "#FFE082",
    emoji: "🦸",
    badge: "New",
    shortDesc: "40 pages featuring original superhero characters.",
    description:
      "Unleash your young hero's imagination with the Adventure Heroes Coloring Pack from Blue By Art Shop. Featuring 40 pages of original superhero characters, action sequences, and epic battle scenes, this coloring pack was designed specifically for kids ages 8–10 who love comics and cartoons. Bold line art and action-packed compositions make every page exciting to color.",
    features: [
      "40 original superhero and adventure coloring pages",
      "Bold, comic-style line art designed for ages 8–10",
      "Original characters — not licensed, infinitely customizable",
      "Thick paper — works with markers, colored pencils, and gel pens",
      "Double-sided printing with bold outlines to prevent bleed",
      "Includes 2 blank 'create your own hero' pages",
    ],
    relatedSlugs: [
      "enchanted-forest-coloring-book",
      "manga-comics-coloring-book",
      "mini-dragon-3d-print",
    ],
  },
  {
    id: 7,
    slug: "manga-comics-coloring-book",
    name: "Manga & Comics Coloring Book",
    price: 14.99,
    category: "coloring",
    age: "11-12",
    minAge: 11,
    maxAge: 12,
    image: null,
    gradientFrom: "#F3E5F5",
    gradientTo: "#E1BEE7",
    emoji: "📖",
    badge: "New",
    shortDesc: "Anime-style characters and comic panel layouts.",
    description:
      "Perfect for pre-teen artists, the Manga & Comics Coloring Book from Blue By Art Shop features 36 pages of anime-style characters, dynamic comic panel layouts, and manga-inspired scenes designed for ages 11–12. Whether your child is a budding mangaka or just loves anime aesthetics, this book encourages expression, storytelling, and artistic exploration.",
    features: [
      "36 original manga and anime-style coloring pages",
      "Comic panel layouts teach visual storytelling",
      "Designed specifically for pre-teens ages 11–12",
      "Fine-line art ideal for gel pens, fine-tip markers, and colored pencils",
      "Includes character design sheets for creating original manga characters",
      "Printed on thick, bleed-resistant paper",
    ],
    relatedSlugs: [
      "adventure-heroes-coloring-pack",
      "mini-keychain-pack",
      "enchanted-forest-coloring-book",
    ],
  },
  {
    id: 8,
    slug: "mini-dragon-3d-print",
    name: "Mini Dragon 3D Print",
    price: 12.99,
    category: "3d",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: "/images/product-3d-dragon.jpg",
    gradientFrom: "#FFE0B2",
    gradientTo: "#FFCC80",
    emoji: "🐉",
    badge: null,
    shortDesc: "Custom printed mini dragon figure — paint it your way.",
    description:
      "Custom-printed and ready for painting, the Mini Dragon 3D Print from Blue By Art Shop is a detailed miniature dragon figure designed for kids ages 8–10. With sculpted scales, outstretched wings, and a fierce expression, this figure begs to be painted in any color scheme your child imagines — from classic fantasy green to glowing neon to metallic gold.",
    features: [
      "Custom 3D printed mini dragon figure — detailed scales and wings",
      "Pre-primed and ready to paint without sanding",
      "6 non-toxic paint pots including metallic gold",
      "1 fine-tip child-safe brush",
      "Display stand included",
      "Compatible with acrylic, gouache, and non-toxic enamel paints",
    ],
    relatedSlugs: [
      "robot-buddy-3d-figure",
      "mini-keychain-pack",
      "space-explorer-plaster-kit",
    ],
  },
  {
    id: 9,
    slug: "robot-buddy-3d-figure",
    name: "Robot Buddy 3D Figure",
    price: 11.99,
    category: "3d",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: null,
    gradientFrom: "#E3F2FD",
    gradientTo: "#BBDEFB",
    emoji: "🤖",
    badge: null,
    shortDesc: "Articulated robot figure ready for painting.",
    description:
      "Build, paint, and display your very own robot with the Robot Buddy 3D Figure from Blue By Art Shop. This custom-printed articulated robot figure has moveable arm joints and a posable head, making it both a painting project and a display toy. Kids ages 8–10 can personalize every panel, antenna, and gear in any color combination they dream up.",
    features: [
      "Custom 3D printed articulated robot — moveable arms and posable head",
      "Pre-primed and ready to paint without priming",
      "8 non-toxic paint pots in metallic and primary colors",
      "1 flat and 1 fine-tip child-safe brush",
      "Gear-shaped display base included",
      "Compatible with acrylic and non-toxic enamel paints",
    ],
    relatedSlugs: [
      "mini-dragon-3d-print",
      "mini-keychain-pack",
      "space-explorer-plaster-kit",
    ],
  },
  {
    id: 10,
    slug: "mini-keychain-pack",
    name: "Mini Keychain Pack",
    price: 9.99,
    category: "3d",
    age: "11-12",
    minAge: 11,
    maxAge: 12,
    image: null,
    gradientFrom: "#F8BBD9",
    gradientTo: "#F48FB1",
    emoji: "🔑",
    badge: null,
    shortDesc: "5-pack of mini keychains — paint and keep or gift.",
    description:
      "Create personalized accessories with the Mini Keychain Pack from Blue By Art Shop. This set of 5 custom 3D printed mini keychains comes in a mix of fun shapes — star, heart, paw, lightning bolt, and flower — all pre-primed and ready to paint. Kids ages 11–12 can paint, seal, and attach them to their bags, keys, or backpacks, or gift them to friends.",
    features: [
      "5 custom 3D printed mini keychains: star, heart, paw, lightning bolt, flower",
      "Pre-primed and ready to paint — no prep needed",
      "6 non-toxic paint pots including metallic and neon colors",
      "Keychain rings and clasps included for all 5 pieces",
      "Sealant included to protect finished artwork",
      "Great gift idea — make for yourself or a friend",
    ],
    relatedSlugs: [
      "mini-dragon-3d-print",
      "robot-buddy-3d-figure",
      "manga-comics-coloring-book",
    ],
  },
  {
    id: 11,
    slug: "party-kit-15-pack",
    name: "Party Kit 15-pack",
    price: 89.0,
    category: "party",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: "/images/product-party-kit.jpg",
    gradientFrom: "#FFFDE7",
    gradientTo: "#FFF9C4",
    emoji: "🎉",
    badge: null,
    shortDesc: "15 paint-your-own kits perfect for birthday parties.",
    description:
      "Make your next birthday party unforgettable with the Blue By Art Shop Party Kit 15-pack. Each of the 15 individual paint-your-own kits includes a plaster figure, paint pots, and a brush — everything a young guest needs to create their own masterpiece to take home. Setup takes under 5 minutes and cleanup is a breeze. Perfect for kids ages 5–7.",
    features: [
      "15 individual paint-your-own art kits for party guests",
      "Each kit includes 1 plaster figure, 4 paint pots, and 1 brush",
      "Non-toxic, washable paints — mess-friendly for parties",
      "Setup in under 5 minutes — no prep work needed",
      "Each guest takes home their creation as a party favor",
      "Suitable for ages 5–7, with parental supervision for under 5",
    ],
    relatedSlugs: ["party-kit-25-pack", "party-kit-50-pack", "birthday-box"],
  },
  {
    id: 12,
    slug: "party-kit-25-pack",
    name: "Party Kit 25-pack",
    price: 139.0,
    category: "party",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: "/images/product-party-kit.jpg",
    gradientFrom: "#FCE4EC",
    gradientTo: "#F8BBD9",
    emoji: "🎂",
    badge: "Popular",
    shortDesc: "25 kits — great for classroom events and big parties.",
    description:
      "Perfect for classroom events, school parties, and larger birthday celebrations, the Blue By Art Shop Party Kit 25-pack includes 25 individual paint-your-own art kits. Each kit is self-contained with a plaster figure, paints, and a brush. Activities are designed for ages 8–10, making this ideal for school-age birthday parties and classroom art days.",
    features: [
      "25 individual paint-your-own art kits for party guests",
      "Each kit includes 1 plaster figure, 6 paint pots, and 1 brush",
      "Non-toxic, washable, ASTM D-4236 compliant paints",
      "Includes activity guide and setup instructions",
      "Each guest takes home their painted creation",
      "Suitable for ages 8–10; ideal for classroom and school events",
    ],
    relatedSlugs: ["party-kit-15-pack", "party-kit-50-pack", "birthday-box"],
  },
  {
    id: 13,
    slug: "party-kit-50-pack",
    name: "Party Kit 50-pack",
    price: 249.0,
    category: "party",
    age: "11-12",
    minAge: 11,
    maxAge: 12,
    image: "/images/product-party-kit.jpg",
    gradientFrom: "#E8EAF6",
    gradientTo: "#C5CAE9",
    emoji: "🎊",
    badge: "Best Value",
    shortDesc: "50-kit bundle for large events and school programs.",
    description:
      "The best value party kit from Blue By Art Shop — the 50-pack is designed for large events, school art programs, summer camps, and studio activities. Each of the 50 individual kits is self-contained with a plaster figure, 6 paint pots, and a brush. At just $4.98 per kit, this is the most cost-effective way to run a large-scale art activity for ages 11–12.",
    features: [
      "50 individual paint-your-own art kits — best value at $4.98/kit",
      "Each kit includes 1 plaster figure, 6 paint pots, and 1 brush",
      "Non-toxic, washable, ASTM D-4236 compliant paints",
      "Includes bulk activity guide and facilitator instructions",
      "Custom activity booklet with age-appropriate instructions",
      "Ideal for schools, studios, summer camps, and large events",
    ],
    relatedSlugs: [
      "party-kit-25-pack",
      "party-kit-15-pack",
      "wholesale-starter-pack",
    ],
  },
  {
    id: 14,
    slug: "birthday-box",
    name: "Birthday Box",
    price: 34.99,
    category: "party",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: null,
    gradientFrom: "#D4F7F7",
    gradientTo: "#A8EDEC",
    emoji: "🎁",
    badge: null,
    shortDesc: "Curated birthday kit with figure, paints, and ribbon.",
    description:
      "The perfect birthday gift for young artists ages 5–7 — the Blue By Art Shop Birthday Box is a premium curated kit with a plaster figure, metallic and pastel paint set, ribbon, and a personalized birthday card. Ships in gift-ready packaging with a bow. Makes the birthday child feel truly special while giving them an activity they'll love.",
    features: [
      "1 premium plaster figure (unicorn, dragon, or seasonal — surprise!)",
      "10 non-toxic paint pots including metallic and pastel colors",
      "1 premium brush and 1 sealant pot",
      "Gift-ready box with ribbon and bow",
      "Personalized birthday card (write your message at checkout)",
      "Ships within 2–3 business days — arrives gift-ready",
    ],
    relatedSlugs: [
      "party-kit-15-pack",
      "unicorn-plaster-figure-kit",
      "party-kit-25-pack",
    ],
  },
  {
    id: 15,
    slug: "wholesale-starter-pack",
    name: "Wholesale Starter Pack (50 units)",
    price: 600.0,
    category: "wholesale",
    age: "all",
    minAge: 5,
    maxAge: 12,
    image: "/images/shop-supplies-flatlay.jpg",
    gradientFrom: "#F5F5F5",
    gradientTo: "#E0E0E0",
    emoji: "📦",
    badge: "Wholesale",
    shortDesc: "50 units at $12/unit — branded kits for resellers.",
    description:
      "The Blue By Art Shop Wholesale Starter Pack gives schools, art studios, camps, and retailers access to 50 premium Mini Artist tier kits at just $12/unit — a 20% savings over retail. Custom branding is available on request. Ideal for gift shops, school supply stores, and art studios looking to offer quality kids' art kits at a competitive price point.",
    features: [
      "50 Mini Artist tier art kits at $12/unit ($600 total)",
      "20% discount off retail pricing",
      "Custom branding and logo placement available on request",
      "Ships in bulk retail-ready packaging",
      "Ideal for schools, art studios, gift shops, and resellers",
      "Contact wholesale@bluebyartshop.com for custom orders",
    ],
    relatedSlugs: [
      "wholesale-premium-pack",
      "party-kit-50-pack",
      "party-kit-25-pack",
    ],
  },
  {
    id: 16,
    slug: "wholesale-premium-pack",
    name: "Wholesale Premium Pack (50 units)",
    price: 1400.0,
    category: "wholesale",
    age: "all",
    minAge: 5,
    maxAge: 12,
    image: "/images/shop-supplies-flatlay.jpg",
    gradientFrom: "#ECEFF1",
    gradientTo: "#CFD8DC",
    emoji: "🏭",
    badge: "Wholesale",
    shortDesc: "50 premium units at $28/unit — full Master Creator set.",
    description:
      "The Blue By Art Shop Wholesale Premium Pack delivers 50 full Master Creator tier kits at $28/unit — the ultimate wholesale offering for premium retailers, high-end gift shops, and corporate gifting programs. Each kit includes the complete Master Creator contents: 4 plaster figures, 18 paint pots with metallics, storybook, display stand, and resell kit. Full customization available.",
    features: [
      "50 Master Creator tier art kits at $28/unit ($1,400 total)",
      "Includes full Master Creator contents per kit",
      "Custom branding, logo, and color scheme available",
      "Premium retail-ready packaging per unit",
      "Ideal for gift shops, premium retailers, corporate gifting",
      "Contact wholesale@bluebyartshop.com for custom quotes",
    ],
    relatedSlugs: [
      "wholesale-starter-pack",
      "party-kit-50-pack",
      "mini-dragon-3d-print",
    ],
  },
];

function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// ── Static generation ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  const title = `${product.name} | Kids Art Kit | Blue By Art Shop`;
  const description = `${product.description.slice(0, 155).trimEnd()}…`;

  return {
    title,
    description,
    alternates: { canonical: `https://bluebyartshop.com/shop/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://bluebyartshop.com/shop/${slug}`,
      images: product.image
        ? [{ url: product.image, width: 800, height: 600, alt: product.name }]
        : [
            {
              url: "/images/hero-kids-painting.jpg",
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ],
    },
  };
}

// ── Category labels ────────────────────────────────────────────────────────────

const categoryLabels: Record<string, string> = {
  plaster: "Plaster Kits",
  coloring: "Coloring Books",
  "3d": "3D Figures",
  party: "Party Kits",
  wholesale: "Wholesale",
};

// ── Page component ─────────────────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedProducts = product.relatedSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => p !== undefined);

  const isWholesale = product.category === "wholesale";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image
      ? `https://bluebyartshop.com${product.image}`
      : "https://bluebyartshop.com/images/hero-kids-painting.jpg",
    brand: { "@type": "Brand", name: "Blue By Art Shop" },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://bluebyartshop.com/shop/${product.slug}`,
      seller: { "@type": "Organization", name: "Blue By Art Shop" },
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: product.minAge,
      suggestedMaxAge: product.maxAge,
    },
    category: categoryLabels[product.category] ?? product.category,
    material: "Non-toxic, child-safe materials, ASTM D-4236 compliant",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bluebyartshop.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://bluebyartshop.com/shop",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://bluebyartshop.com/shop/${product.slug}`,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-6 lg:px-8 py-4"
        style={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <ol
          className="max-w-6xl mx-auto flex items-center gap-2 text-sm"
          style={{ color: "#64748B" }}
        >
          <li>
            <Link href="/" style={{ color: "#2563EB", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ color: "#CBD5E1" }}>›</li>
          <li>
            <Link
              href="/shop"
              style={{ color: "#2563EB", textDecoration: "none" }}
            >
              Shop
            </Link>
          </li>
          <li style={{ color: "#CBD5E1" }}>›</li>
          <li style={{ color: "#334155", fontWeight: 500 }}>{product.name}</li>
        </ol>
      </nav>

      {/* Product detail */}
      <section
        aria-label={`${product.name} product details`}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                height: "460px",
                background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
              }}
            >
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} — kids art kit from Blue By Art Shop`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontSize: "8rem" }}>{product.emoji}</span>
                </div>
              )}
              {product.badge && (
                <span
                  className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold text-white"
                  style={{
                    backgroundColor: "#2563EB",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Category + Age badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#EBF5FF", color: "#2563EB" }}
                >
                  {categoryLabels[product.category] ?? product.category}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#FFF4ED", color: "#FB923C" }}
                >
                  Ages {product.age === "all" ? "5–12" : product.age}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#ECFDF5", color: "#059669" }}
                >
                  ✓ Non-toxic
                </span>
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily:
                    "var(--font-fredoka-one), 'Fredoka One', cursive",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#1E293B",
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span
                  style={{
                    fontFamily:
                      "var(--font-fredoka-one), 'Fredoka One', cursive",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      style={{ color: "#FB923C", fontSize: "1.125rem" }}
                    >
                      ★
                    </span>
                  ))}
                  <span
                    className="ml-1 text-sm"
                    style={{ color: "#64748B" }}
                  >
                    (4.9)
                  </span>
                </div>
              </div>

              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                {product.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-2.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#334155" }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                      style={{
                        backgroundColor: "#EBF5FF",
                        color: "#2563EB",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                {isWholesale ? (
                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{
                      fontSize: "1rem",
                      padding: "14px 32px",
                      textAlign: "center",
                    }}
                  >
                    Get a Wholesale Quote →
                  </Link>
                ) : (
                  <Link
                    href="/subscribe"
                    className="btn-primary"
                    style={{
                      fontSize: "1rem",
                      padding: "14px 32px",
                      textAlign: "center",
                    }}
                  >
                    Get This in a Box →
                  </Link>
                )}
                <Link
                  href="/shop"
                  className="btn-outline"
                  style={{ fontSize: "1rem", textAlign: "center" }}
                >
                  ← Back to Shop
                </Link>
              </div>

              {/* Trust signals */}
              <div
                className="flex flex-wrap gap-4 mt-6 pt-6"
                style={{ borderTop: "1px solid #E2E8F0" }}
              >
                {[
                  "🚚 Ships in 2–3 days",
                  "🔒 Non-toxic certified",
                  "↩️ 30-day returns",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium"
                    style={{ color: "#64748B" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section
          aria-label="Related products"
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F0F7FF" }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-center mb-10"
              style={{
                fontFamily:
                  "var(--font-fredoka-one), 'Fredoka One', cursive",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#1E293B",
                fontWeight: 600,
              }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/shop/${rel.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)",
                      transition: "box-shadow 0.2s ease",
                    }}
                  >
                    <div
                      className="h-40 relative overflow-hidden flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${rel.gradientFrom}, ${rel.gradientTo})`,
                      }}
                    >
                      {rel.image ? (
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <span style={{ fontSize: "3.5rem" }}>{rel.emoji}</span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily:
                            "var(--font-fredoka-one), 'Fredoka One', cursive",
                          color: "#1E293B",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {rel.name}
                      </h3>
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: "0.8125rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {rel.shortDesc}
                      </p>
                      <span
                        style={{
                          fontFamily:
                            "var(--font-fredoka-one), 'Fredoka One', cursive",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#2563EB",
                        }}
                      >
                        ${rel.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section
        aria-label="Subscribe to get this in a monthly box"
        className="py-16 px-4 sm:px-6 lg:px-8 text-center hero-gradient relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto relative">
          <span
            className="eyebrow"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}
          >
            Monthly Subscription
          </span>
          <h2
            className="text-white mb-4 mt-4"
            style={{
              fontFamily:
                "var(--font-fredoka-one), 'Fredoka One', cursive",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            Get This and More Every Month
          </h2>
          <p
            className="mb-8"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem" }}
          >
            Subscribe to Blue By Art Shop and receive a curated monthly art kit
            — including products like this — starting at just $19.99/month.
            Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe"
              className="btn-primary"
              style={{ fontSize: "1rem" }}
            >
              Start Subscribing →
            </Link>
            <Link
              href="/shop"
              className="btn-outline"
              style={{ fontSize: "1rem" }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
