/**
 * Single source of truth for FAQ content.
 * Used by:
 *  - app/page.tsx (homepage FAQ section + JSON-LD)
 *  - app/faq/page.tsx (dedicated /faq route + JSON-LD)
 */

export type FaqEntry = {
  q: string;
  a: string;
};

export const faqs: FaqEntry[] = [
  { q: "What kind of art subscription box does Blueby Art Shop offer?", a: "Blueby Art Shop offers monthly art kits for kids ages 4 and up with three subscription tiers. Plans start at $24.99/month and focus on paint-your-own plaster figurines, themed kits, and hands-on creative activities crafted in Texas." },
  { q: "How fast does it ship?", a: "All subscriptions ship within 2–3 business days of your billing date. Standard delivery takes 5–7 business days. Expedited options are available at checkout for faster delivery." },
  { q: "What age range is this for?", a: "Our kits are designed for kids ages 4 and up. Mini Artist is the perfect first kit, Creative Explorer offers more variety and pieces, and Master Creator delivers the most premium experience. Each tier includes age-appropriate materials and instructions." },
  { q: "Are Blueby Art Shop kits non-toxic?", a: "Yes — every material in every Blueby Art Shop kit is non-toxic, child-safe, and ASTM D-4236 compliant. All paints are washable and certified safe for children ages 4 and up. We source only from eco-conscious, safety-compliant suppliers." },
  { q: "Can I cancel anytime?", a: "Absolutely — no lock-in contracts. You can pause or cancel your subscription at any time from your account dashboard. Cancellations take effect the following billing cycle with no fees or penalties." },
  { q: "Does Blueby Art Shop offer gift subscriptions?", a: "Gift subscriptions can be arranged across all three tiers. If you need help choosing the right plan or order format, contact the team and we'll point you in the right direction." },
  { q: "What is included in the Mini Artist box?", a: "Mini Artist ($24.99/month + $4.99 shipping) is the perfect start for ages 4 and up. Each box includes 6 plaster figurines to paint, 3 non-toxic acrylic paints, 1 soft-bristle brush, 2 themed stickers, an illustrated instruction card, and a monthly collectible theme card — all presented in our signature white gift box with glossy wrap." },
  { q: "What is included in the Creative Explorer box?", a: "Creative Explorer ($39.99/month + $4.99 shipping) is our most popular tier for ages 4 and up. Each box includes 8–12 plaster figurines in varied sizes, 6 non-toxic acrylic paints, 2 brushes (detail + background), 2 themed sticker sheets (4×4 in.), a technique-of-the-month guide, and a collectible monthly theme card — all in a reusable transparent bucket." },
  { q: "What is included in the Master Creator box?", a: "Master Creator ($69.99/month with FREE shipping) is our premium tier. Each box includes 10–14 plaster figurines plus an exclusive XL piece (bear, dinosaur, or unicorn depending on theme), 8 premium acrylic paints plus 2 glitter paints, 2 brushes and a texturing sponge, a canvas with pre-molded figure for framing, a mini 25-page coloring book, a complete themed sticker set, a collectible certificate with official seal, and a monthly theme card — all in a premium magnetic-closure gift box." },
  { q: "Why should I choose Creative Explorer over Mini Artist?", a: "Creative Explorer ($39.99) offers double the figurines (8–12 vs 6), double the paints (6 vs 3), two brushes for different techniques, four times the stickers, a reusable bucket, and a monthly technique guide to teach a new skill. Most Blueby families choose this tier." },
  { q: "Do you charge shipping?", a: "Mini Artist and Creative Explorer have a flat $4.99 shipping fee. Master Creator includes FREE shipping. All boxes ship via USPS Ground Advantage and arrive in 5–7 business days within the continental United States." },
  { q: "Can I change tiers later?", a: "Yes. You can upgrade or downgrade your subscription anytime from your account dashboard. Changes take effect on your next billing cycle. Many families start with Mini Artist and upgrade to Creative Explorer after a few months." },
  { q: "Can I buy Blueby Art Shop kits without a subscription?", a: "Yes. All individual themed kits are available as one-time purchases at our shop — no subscription required. Mini themed kits start at $29.99 and Creative Explorer themed kits at $49.99." },
  { q: "Can schools order Blueby Art Shop wholesale?", a: "Yes. We offer wholesale pricing for schools, art studios, camps, and event planners. Starter Pack: 50 units at $12/unit. Premium Pack: 50 units at $28/unit. Custom branding available. Contact wholesale@bluebyartshop.com for details." },
  { q: "Where does Blueby Art Shop ship to?", a: "We currently ship within the United States. All orders process within 2–3 business days. Standard delivery takes 5–7 business days. Expedited shipping options are available at checkout." },
];

/** Build a JSON-LD FAQPage object from the FAQ list. */
export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
