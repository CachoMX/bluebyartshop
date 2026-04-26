import { BRAND_NAME, WHOLESALE_EMAIL } from "@/lib/brand";

export type CatalogCategory =
  | "plaster"
  | "coloring"
  | "3d"
  | "party"
  | "wholesale";

export type ShopCategory = "all" | CatalogCategory;
export type CatalogAge = "all" | "5-7" | "8-10" | "11-12";

export interface CatalogProduct {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: CatalogCategory;
  age: CatalogAge;
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
}

export interface SubscriptionFeature {
  label: string;
  included: boolean;
}

export type SubscriptionTierKey =
  | "mini-artist"
  | "creative-explorer"
  | "master-creator";

export interface SubscriptionTier {
  key: SubscriptionTierKey;
  name: string;
  monthlyPrice: number;
  shippingPrice: number;
  comingSoon?: boolean;
  emoji: string;
  iconBg: string;
  popular: boolean;
  description: string;
  features: SubscriptionFeature[];
  schemaDescription: string;
  suggestedMinAge: number;
  suggestedMaxAge: number;
}

export interface SubscriptionTrustItem {
  icon: string;
  title: string;
  desc: string;
}

export const categoryLabels: Record<CatalogCategory, string> = {
  plaster: "Plaster Kits",
  coloring: "Coloring Books",
  "3d": "3D Figures",
  party: "Party Kits",
  wholesale: "Wholesale",
};

export const shopCategoryTabs: Array<{
  key: ShopCategory;
  label: string;
  emoji: string;
}> = [
  { key: "all", label: "All Products", emoji: "✨" },
  { key: "plaster", label: "Plaster Kits", emoji: "🪆" },
  { key: "coloring", label: "Coloring Books", emoji: "📚" },
  { key: "3d", label: "3D Figures", emoji: "🖨️" },
  { key: "party", label: "Party Kits", emoji: "🎉" },
  { key: "wholesale", label: "Wholesale", emoji: "📦" },
];

export const shopAgeTabs: Array<{ key: CatalogAge; label: string }> = [
  { key: "all", label: "All Ages" },
  { key: "5-7", label: "Ages 5-7" },
  { key: "8-10", label: "Ages 8-10" },
  { key: "11-12", label: "Ages 11-12" },
];

export const shopBadgeColors: Record<string, string> = {
  Bestseller: "#2563EB",
  New: "#0390AC",
  Popular: "#7C3AED",
  "Best Value": "#059669",
  Wholesale: "#64748B",
};

export const validShopCategories: ShopCategory[] = [
  "all",
  "plaster",
  "coloring",
  "3d",
  "party",
  "wholesale",
];

export const validShopAges: CatalogAge[] = ["all", "5-7", "8-10", "11-12"];

export const isShopCategory = (value: string): value is ShopCategory => {
  return validShopCategories.includes(value as ShopCategory);
};

export const isCatalogAge = (value: string): value is CatalogAge => {
  return validShopAges.includes(value as CatalogAge);
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    slug: "unicorn-plaster-figure-kit",
    name: "Unicorn Plaster Figure Kit",
    price: 14.99,
    category: "plaster",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: null,
    gradientFrom: "#FFD6E0",
    gradientTo: "#FFC8D3",
    emoji: "🦄",
    badge: "Bestseller",
    shortDesc: "Paint your own magical unicorn plaster figure.",
    description: `Paint your own magical unicorn with this premium plaster figure kit from ${BRAND_NAME}. Includes a pre-molded unicorn plaster figure, 6 non-toxic paint pots, a brush, and step-by-step painting instructions. Perfect gift for girls and boys ages 5-7. Non-toxic, mess-friendly, and parent-approved.`,
    features: [
      "1 pre-molded unicorn plaster figure - ready to paint",
      "6 non-toxic, washable paint pots in vibrant colors",
      "1 child-safe painting brush",
      "Step-by-step illustrated painting guide",
      "Sticker sheet for extra decoration",
      "ASTM D-4236 compliant - safe for ages 5 and up",
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
    image: null,
    gradientFrom: "#D4EDDA",
    gradientTo: "#B8DFBE",
    emoji: "🦕",
    badge: null,
    shortDesc: "Three dino figures ready to paint and display.",
    description:
      "Unleash your young paleontologist's creativity with three paint-your-own dinosaur plaster figures. This 3-pack includes a T-Rex, Triceratops, and Brachiosaurus - each pre-molded and ready to sand, paint, and display. Includes 12 non-toxic paint pots, two brushes, and a dino fact card. Ideal for kids ages 8-10.",
    features: [
      "3 pre-molded plaster dinosaur figures: T-Rex, Triceratops, Brachiosaurus",
      "12 non-toxic paint pots in earth and primary tones",
      "2 child-safe brushes (fine and medium)",
      "Illustrated painting guide with dino facts",
      "Display-ready bases for each figure",
      "ASTM D-4236 compliant - safe for ages 5 and up",
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
    image: null,
    gradientFrom: "#CCE5FF",
    gradientTo: "#B0D4FF",
    emoji: "🚀",
    badge: null,
    shortDesc: "Rocket, astronaut, and planet figures in one set.",
    description: `Blast off into creativity with the Space Explorer Plaster Kit from ${BRAND_NAME}. This cosmic set includes three pre-molded plaster figures - a rocket ship, an astronaut, and a ringed planet - ready for painting. Includes a glow-in-the-dark paint pot, cosmic color palette, and space facts card. For kids ages 8-10 who love science and art.`,
    features: [
      "3 pre-molded plaster figures: rocket, astronaut, ringed planet",
      "10 non-toxic paint pots including 1 glow-in-the-dark",
      "2 child-safe brushes (fine and medium)",
      "Space facts activity card",
      "Step-by-step cosmic painting guide",
      "ASTM D-4236 compliant - safe for ages 5 and up",
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
    image: null,
    gradientFrom: "#D4F7F7",
    gradientTo: "#B0EDED",
    emoji: "🐠",
    badge: null,
    shortDesc: "Sea turtle, clownfish, and starfish figures.",
    description: `Dive into creativity with the Ocean Animals Plaster Set from ${BRAND_NAME}. This underwater-themed kit includes three pre-molded plaster sea creatures - a sea turtle, a clownfish, and a starfish - ready to paint in ocean blues, tropical greens, and coral pinks. Includes 8 non-toxic paint pots and an ocean facts card. Perfect for young ocean lovers ages 5-7.`,
    features: [
      "3 pre-molded plaster sea creatures: sea turtle, clownfish, starfish",
      "8 non-toxic paint pots in ocean and tropical colors",
      "1 child-safe painting brush",
      "Ocean animals fact card with coloring prompts",
      "Illustrated step-by-step painting guide",
      "ASTM D-4236 compliant - safe for ages 5 and up",
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
    image: null,
    gradientFrom: "#E8F5E9",
    gradientTo: "#C8E6C9",
    emoji: "🌲",
    badge: null,
    shortDesc: "32 pages of magical forest scenes for young artists.",
    description: `Step into a magical world with the Enchanted Forest Coloring Book from ${BRAND_NAME}. Featuring 32 beautifully illustrated pages of fairies, woodland creatures, mushroom villages, and enchanted castles, this coloring book is designed for young artists ages 5-7. Thick pages hold up to crayons, colored pencils, and washable markers without bleed-through.`,
    features: [
      "32 original illustrated coloring pages",
      "Fairy-tale themes: fairies, woodland animals, castles, forests",
      "Thick paper - works with crayons, pencils, and markers",
      "Large, simple designs perfect for ages 5-7",
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
    description: `Unleash your young hero's imagination with the Adventure Heroes Coloring Pack from ${BRAND_NAME}. Featuring 40 pages of original superhero characters, action sequences, and epic battle scenes, this coloring pack was designed specifically for kids ages 8-10 who love comics and cartoons. Bold line art and action-packed compositions make every page exciting to color.`,
    features: [
      "40 original superhero and adventure coloring pages",
      "Bold, comic-style line art designed for ages 8-10",
      "Original characters - not licensed, infinitely customizable",
      "Thick paper - works with markers, colored pencils, and gel pens",
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
    description: `Perfect for pre-teen artists, the Manga & Comics Coloring Book from ${BRAND_NAME} features 36 pages of anime-style characters, dynamic comic panel layouts, and manga-inspired scenes designed for ages 11-12. Whether your child is a budding mangaka or just loves anime aesthetics, this book encourages expression, storytelling, and artistic exploration.`,
    features: [
      "36 original manga and anime-style coloring pages",
      "Comic panel layouts teach visual storytelling",
      "Designed specifically for pre-teens ages 11-12",
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
    image: null,
    gradientFrom: "#FFE0B2",
    gradientTo: "#FFCC80",
    emoji: "🐉",
    badge: null,
    shortDesc: "Custom printed mini dragon figure - paint it your way.",
    description: `Custom-printed and ready for painting, the Mini Dragon 3D Print from ${BRAND_NAME} is a detailed miniature dragon figure designed for kids ages 8-10. With sculpted scales, outstretched wings, and a fierce expression, this figure begs to be painted in any color scheme your child imagines - from classic fantasy green to glowing neon to metallic gold.`,
    features: [
      "Custom 3D printed mini dragon figure - detailed scales and wings",
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
    description: `Build, paint, and display your very own robot with the Robot Buddy 3D Figure from ${BRAND_NAME}. This custom-printed articulated robot figure has moveable arm joints and a posable head, making it both a painting project and a display toy. Kids ages 8-10 can personalize every panel, antenna, and gear in any color combination they dream up.`,
    features: [
      "Custom 3D printed articulated robot - moveable arms and posable head",
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
    shortDesc: "5-pack of mini keychains - paint and keep or gift.",
    description: `Create personalized accessories with the Mini Keychain Pack from ${BRAND_NAME}. This set of 5 custom 3D printed mini keychains comes in a mix of fun shapes - star, heart, paw, lightning bolt, and flower - all pre-primed and ready to paint. Kids ages 11-12 can paint, seal, and attach them to their bags, keys, or backpacks, or gift them to friends.`,
    features: [
      "5 custom 3D printed mini keychains: star, heart, paw, lightning bolt, flower",
      "Pre-primed and ready to paint - no prep needed",
      "6 non-toxic paint pots including metallic and neon colors",
      "Keychain rings and clasps included for all 5 pieces",
      "Sealant included to protect finished artwork",
      "Great gift idea - make for yourself or a friend",
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
    price: 89,
    category: "party",
    age: "5-7",
    minAge: 5,
    maxAge: 7,
    image: null,
    gradientFrom: "#FFFDE7",
    gradientTo: "#FFF9C4",
    emoji: "🎉",
    badge: null,
    shortDesc: "15 paint-your-own kits perfect for birthday parties.",
    description: `Make your next birthday party unforgettable with the ${BRAND_NAME} Party Kit 15-pack. Each of the 15 individual paint-your-own kits includes a plaster figure, paint pots, and a brush - everything a young guest needs to create their own masterpiece to take home. Setup takes under 5 minutes and cleanup is a breeze. Perfect for kids ages 5-7.`,
    features: [
      "15 individual paint-your-own art kits for party guests",
      "Each kit includes 1 plaster figure, 4 paint pots, and 1 brush",
      "Non-toxic, washable paints - mess-friendly for parties",
      "Setup in under 5 minutes - no prep work needed",
      "Each guest takes home their creation as a party favor",
      "Suitable for ages 5-7, with parental supervision for under 5",
    ],
    relatedSlugs: ["party-kit-25-pack", "party-kit-50-pack", "birthday-box"],
  },
  {
    id: 12,
    slug: "party-kit-25-pack",
    name: "Party Kit 25-pack",
    price: 139,
    category: "party",
    age: "8-10",
    minAge: 8,
    maxAge: 10,
    image: null,
    gradientFrom: "#FCE4EC",
    gradientTo: "#F8BBD9",
    emoji: "🎂",
    badge: "Popular",
    shortDesc: "25 kits - great for classroom events and big parties.",
    description: `Perfect for classroom events, school parties, and larger birthday celebrations, the ${BRAND_NAME} Party Kit 25-pack includes 25 individual paint-your-own art kits. Each kit is self-contained with a plaster figure, paints, and a brush. Activities are designed for ages 8-10, making this ideal for school-age birthday parties and classroom art days.`,
    features: [
      "25 individual paint-your-own art kits for party guests",
      "Each kit includes 1 plaster figure, 6 paint pots, and 1 brush",
      "Non-toxic, washable, ASTM D-4236 compliant paints",
      "Includes activity guide and setup instructions",
      "Each guest takes home their painted creation",
      "Suitable for ages 8-10; ideal for classroom and school events",
    ],
    relatedSlugs: ["party-kit-15-pack", "party-kit-50-pack", "birthday-box"],
  },
  {
    id: 13,
    slug: "party-kit-50-pack",
    name: "Party Kit 50-pack",
    price: 249,
    category: "party",
    age: "11-12",
    minAge: 11,
    maxAge: 12,
    image: null,
    gradientFrom: "#E8EAF6",
    gradientTo: "#C5CAE9",
    emoji: "🎊",
    badge: "Best Value",
    shortDesc: "50-kit bundle for large events and school programs.",
    description: `The best value party kit from ${BRAND_NAME} - the 50-pack is designed for large events, school art programs, summer camps, and studio activities. Each of the 50 individual kits is self-contained with a plaster figure, 6 paint pots, and a brush. At just $4.98 per kit, this is the most cost-effective way to run a large-scale art activity for ages 11-12.`,
    features: [
      "50 individual paint-your-own art kits - best value at $4.98/kit",
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
    description: `The perfect birthday gift for young artists ages 5-7 - the ${BRAND_NAME} Birthday Box is a premium curated kit with a plaster figure, metallic and pastel paint set, ribbon, and a personalized birthday card. Ships in gift-ready packaging with a bow. Makes the birthday child feel truly special while giving them an activity they'll love.`,
    features: [
      "1 premium plaster figure (unicorn, dragon, or seasonal - surprise!)",
      "10 non-toxic paint pots including metallic and pastel colors",
      "1 premium brush and 1 sealant pot",
      "Gift-ready box with ribbon and bow",
      "Personalized birthday card (write your message at checkout)",
      "Ships within 2-3 business days - arrives gift-ready",
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
    price: 600,
    category: "wholesale",
    age: "all",
    minAge: 5,
    maxAge: 12,
    image: null,
    gradientFrom: "#F5F5F5",
    gradientTo: "#E0E0E0",
    emoji: "📦",
    badge: "Wholesale",
    shortDesc: "50 units at $12/unit - branded kits for resellers.",
    description: `The ${BRAND_NAME} Wholesale Starter Pack gives schools, art studios, camps, and retailers access to 50 premium Mini Artist tier kits at just $12/unit - a 20% savings over retail. Custom branding is available on request. Ideal for gift shops, school supply stores, and art studios looking to offer quality kids' art kits at a competitive price point.`,
    features: [
      "50 Mini Artist tier art kits at $12/unit ($600 total)",
      "20% discount off retail pricing",
      "Custom branding and logo placement available on request",
      "Ships in bulk retail-ready packaging",
      "Ideal for schools, art studios, gift shops, and resellers",
      `Contact ${WHOLESALE_EMAIL} for custom orders`,
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
    price: 1400,
    category: "wholesale",
    age: "all",
    minAge: 5,
    maxAge: 12,
    image: null,
    gradientFrom: "#ECEFF1",
    gradientTo: "#CFD8DC",
    emoji: "🏭",
    badge: "Wholesale",
    shortDesc: "50 premium units at $28/unit - full Master Creator set.",
    description: `The ${BRAND_NAME} Wholesale Premium Pack delivers 50 full Master Creator tier kits at $28/unit - the ultimate wholesale offering for premium retailers, high-end gift shops, and corporate gifting programs. Each kit includes the complete Master Creator contents: 4 plaster figures, 18 paint pots with metallics, storybook, display stand, and resell kit. Full customization available.`,
    features: [
      "50 Master Creator tier art kits at $28/unit ($1,400 total)",
      "Includes full Master Creator contents per kit",
      "Custom branding, logo, and color scheme available",
      "Premium retail-ready packaging per unit",
      "Ideal for gift shops, premium retailers, corporate gifting",
      `Contact ${WHOLESALE_EMAIL} for custom quotes`,
    ],
    relatedSlugs: [
      "wholesale-starter-pack",
      "party-kit-50-pack",
      "mini-dragon-3d-print",
    ],
  },
];

export const getCatalogProduct = (slug: string): CatalogProduct | undefined => {
  return catalogProducts.find((product) => product.slug === slug);
};

export const getCatalogProductsBySlugs = (slugs: string[]): CatalogProduct[] => {
  return slugs
    .map((slug) => getCatalogProduct(slug))
    .filter((product): product is CatalogProduct => product !== undefined);
};

export const subscriptionTiers: SubscriptionTier[] = [
  {
    key: "mini-artist",
    name: "Mini Artist",
    monthlyPrice: 24.99,
    shippingPrice: 4.99,
    emoji: "🎨",
    iconBg: "#EBF5FF",
    popular: false,
    description: "The perfect start for your mini artist.",
    features: [
      { label: "6 plaster figurines to paint", included: true },
      { label: "3 non-toxic acrylic paint pots", included: true },
      { label: "1 soft-bristle brush", included: true },
      { label: "2 themed stickers", included: true },
      { label: "Step-by-step instruction card", included: true },
      { label: "Monthly collectible theme card", included: true },
      { label: "Premium white gift box with glossy wrap", included: true },
      { label: "Reusable transparent bucket", included: false },
      { label: "Technique-of-the-month guide", included: false },
      { label: "Exclusive XL piece + canvas", included: false },
    ],
    schemaDescription:
      "Monthly art subscription box for kids ages 4 and up. Includes 6 plaster figurines to paint, 3 non-toxic acrylic paints, 1 brush, 2 themed stickers, instruction card, and a monthly collectible theme card. Presented in a premium white gift box. Cancel anytime.",
    suggestedMinAge: 4,
    suggestedMaxAge: 12,
  },
  {
    key: "creative-explorer",
    name: "Creative Explorer",
    monthlyPrice: 39.99,
    shippingPrice: 4.99,
    emoji: "🖌️",
    iconBg: "#FFF4ED",
    popular: true,
    description:
      "More colors, more pieces, more room to explore.",
    features: [
      { label: "8–12 plaster figurines (varied sizes)", included: true },
      { label: "6 non-toxic acrylic paint pots", included: true },
      { label: "2 brushes (detail + background)", included: true },
      { label: "2 themed sticker sheets (4×4 in.)", included: true },
      { label: "Technique-of-the-month guide", included: true },
      { label: "Monthly collectible theme card", included: true },
      { label: "Reusable transparent bucket", included: true },
      { label: "Premium white gift box", included: false },
      { label: "Exclusive XL piece + canvas", included: false },
      { label: "Glitter paints + magnetic gift box", included: false },
    ],
    schemaDescription:
      "Most popular monthly art subscription box for kids ages 4 and up. Includes 8–12 plaster figurines, 6 non-toxic acrylic paints, 2 brushes, 2 themed sticker sheets, technique-of-the-month guide, and a monthly collectible theme card. Presented in a reusable transparent bucket. Cancel anytime.",
    suggestedMinAge: 4,
    suggestedMaxAge: 12,
  },
  {
    key: "master-creator",
    name: "Master Creator",
    monthlyPrice: 69.99,
    shippingPrice: 0,
    comingSoon: true,
    emoji: "🏆",
    iconBg: "#ECFDF5",
    popular: false,
    description:
      "When art becomes a craft.",
    features: [
      { label: "10–14 plaster figurines + 1 exclusive XL piece", included: true },
      { label: "8 premium acrylic paints + 2 glitter paints", included: true },
      { label: "2 brushes + texturing sponge", included: true },
      { label: "Canvas with pre-molded figure", included: true },
      { label: "Mini 25-page coloring book", included: true },
      { label: "Complete themed sticker set", included: true },
      { label: "Collectible certificate with official seal", included: true },
      { label: "Monthly collectible theme card", included: true },
      { label: "Premium magnetic-closure gift box", included: true },
      { label: "Free shipping included", included: true },
    ],
    schemaDescription:
      "Premium monthly art subscription box for kids ages 4 and up. Includes 10–14 plaster figurines plus an exclusive XL piece, 8 premium acrylic paints plus 2 glitter paints, brushes and texturing sponge, canvas, 25-page coloring book, sticker set, collectible certificate, and monthly theme card. Presented in a premium magnetic-closure gift box. Free shipping included. Cancel anytime.",
    suggestedMinAge: 4,
    suggestedMaxAge: 12,
  },
];

export const subscriptionTrustItems: SubscriptionTrustItem[] = [
  {
    icon: "🛡️",
    title: "ASTM D-4236 certified",
    desc: "Non-toxic acrylic paints safe for kids 4 and up.",
  },
  {
    icon: "🇺🇸",
    title: "Hand-packed in Texas",
    desc: "Small-batch quality control on every single box.",
  },
  {
    icon: "📦",
    title: "Ships in 2–3 days",
    desc: "Free over $50, USPS tracked, cancel anytime.",
  },
];

export interface SubscriptionHowToStep {
  position: number;
  emoji: string;
  title: string;
  description: string;
}

export const subscriptionHowItWorks: SubscriptionHowToStep[] = [
  {
    position: 1,
    emoji: "📋",
    title: "Pick a plan",
    description:
      "Choose Mini Artist, Creative Explorer or Master Creator — switch tiers any month.",
  },
  {
    position: 2,
    emoji: "📦",
    title: "Your box ships",
    description:
      "Hand-packed in Texas with USPS tracking. Arrives in 2–3 business days.",
  },
  {
    position: 3,
    emoji: "🎨",
    title: "Paint, smile, repeat",
    description:
      "A new themed box arrives every month. Pause or cancel anytime from your account.",
  },
];

export interface SubscriptionComparisonRow {
  feature: string;
  miniArtist: string;
  creativeExplorer: string;
  masterCreator: string;
}

export const subscriptionComparisonRows: SubscriptionComparisonRow[] = [
  {
    feature: "Monthly price",
    miniArtist: "$24.99",
    creativeExplorer: "$39.99",
    masterCreator: "$69.99",
  },
  {
    feature: "Recommended ages",
    miniArtist: "4–6",
    creativeExplorer: "7–10",
    masterCreator: "8–12",
  },
  {
    feature: "Plaster figurines per box",
    miniArtist: "6",
    creativeExplorer: "8–12",
    masterCreator: "10–14 + XL piece",
  },
  {
    feature: "Acrylic paint pots",
    miniArtist: "3 non-toxic",
    creativeExplorer: "6 non-toxic",
    masterCreator: "8 premium + 2 glitter",
  },
  {
    feature: "Brushes",
    miniArtist: "1 soft-bristle",
    creativeExplorer: "2 (detail + background)",
    masterCreator: "2 + texturing sponge",
  },
  {
    feature: "Themed stickers",
    miniArtist: "2 stickers",
    creativeExplorer: "2 sticker sheets (4×4 in.)",
    masterCreator: "Complete themed set",
  },
  {
    feature: "Coloring book",
    miniArtist: "—",
    creativeExplorer: "—",
    masterCreator: "25-page mini",
  },
  {
    feature: "Canvas with pre-molded figure",
    miniArtist: "—",
    creativeExplorer: "—",
    masterCreator: "✓",
  },
  {
    feature: "Technique-of-the-month guide",
    miniArtist: "—",
    creativeExplorer: "✓",
    masterCreator: "✓",
  },
  {
    feature: "Reusable transparent bucket",
    miniArtist: "—",
    creativeExplorer: "✓",
    masterCreator: "—",
  },
  {
    feature: "Premium magnetic gift box",
    miniArtist: "White glossy",
    creativeExplorer: "—",
    masterCreator: "Magnetic-closure",
  },
  {
    feature: "Free shipping",
    miniArtist: "Over $50",
    creativeExplorer: "Over $50",
    masterCreator: "Always",
  },
  {
    feature: "Cancel or pause anytime",
    miniArtist: "✓",
    creativeExplorer: "✓",
    masterCreator: "✓",
  },
];

export interface SubscribeFaqItem {
  q: string;
  a: string;
}

// 8 questions specifically tuned to subscribe-page conversion intent.
// These are also rendered into FAQPage JSON-LD on /subscribe.
export const subscribeFaqs: SubscribeFaqItem[] = [
  {
    q: "How does the Blueby Art Shop subscription work?",
    a: "Pick a plan, your first box ships within 2–3 business days, then a new themed box arrives the first week of every month. You can change tiers, swap themes, pause or cancel anytime from your account dashboard. Subscriptions renew on the same day each month and you are billed before the box ships.",
  },
  {
    q: "When does my box ship?",
    a: "Your first box ships within 2–3 business days of checkout. After that, monthly boxes are packed and shipped during the first week of every calendar month. All shipments use USPS with tracking. You will receive an email with the tracking number the moment your box leaves our Texas studio.",
  },
  {
    q: "Can I change the theme each month?",
    a: "Yes. Themes (animals, dinosaurs, holidays, vehicles, garden, etc.) can be swapped from your account dashboard up to 5 days before your renewal date. If you do nothing, you get the current monthly theme by default.",
  },
  {
    q: "Are the paints and plaster non-toxic?",
    a: "Yes. Every paint, brush and plaster figure ships ASTM D-4236 certified and CPSIA compliant — the U.S. standards for art-material safety required by federal law (LHAMA). All paints are water-based acrylics with no heavy metals, lead, or solvents. Suitable for kids ages 4 and up.",
  },
  {
    q: "Can I cancel or pause anytime?",
    a: "Absolutely. There is no contract, no cancellation fee and no minimum number of months. From your account dashboard you can pause for 1–3 months, switch tiers, or cancel completely with one click. Anything you cancel before your renewal date will not be charged.",
  },
  {
    q: "Do you ship outside the United States?",
    a: "Right now we only ship within the 50 U.S. states. We are evaluating Canada and Mexico for late 2026. If you have a U.S. forwarding address, our boxes ship there normally.",
  },
  {
    q: "Can I buy this as a gift subscription?",
    a: "Yes — gift subscriptions are one of our most popular options. Pick a 3-month or 6-month fixed plan (these do not auto-renew, so the recipient is never surprised by a charge), add a custom message card at checkout, and we will time the first box to arrive 1–2 days before the birthday or holiday you specify.",
  },
  {
    q: "What if my child outgrows the box?",
    a: "Two options: switch to the next tier with one click in your account, or pause and resume later. Mini Artist tends to fit best for ages 4–6, Creative Explorer for 7–10, and Master Creator for 8–12. Many families upgrade once their child finishes 3–4 boxes comfortably without help.",
  },
];
