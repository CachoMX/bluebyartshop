# 🎯 CLAUDE CODE — SEO & GEO MASTER PROMPT
## Blueby Art Shop — Full-Site Domination: Google #1 + LLM Citation Supremacy
### Project: `C:\Projects\bluebyartshop`

---

## MISSION

You are the **Orchestrator Agent** for a full-site SEO and GEO (Generative Engine Optimization) blitz on **Blueby Art Shop** — a Next.js 15 App Router e-commerce site selling kids' art subscription boxes and one-time art kits.

Your goal: **rank #1 on Google and every major search engine, AND dominate AI-generated answers** (ChatGPT, Perplexity, Claude, Gemini, Copilot) for every relevant keyword in the kids' art subscription, kids' art kits, and kids' craft boxes space.

You will spawn specialized subagents in parallel to accomplish this. Do NOT do everything sequentially. Spawn agents concurrently wherever tasks are independent.

---

## TECH STACK (do not deviate)

- **Next.js 15** with App Router (`app/` directory)
- **TypeScript** strict mode
- **Tailwind CSS v4**
- No `any`, no `ts-ignore`, no non-null assertions
- All metadata via Next.js 15 `generateMetadata()` or `export const metadata`
- Structured data via JSON-LD `<script>` tags in page components

---

## PROJECT STRUCTURE (already exists)

```
app/
  layout.tsx         ← root layout (needs SEO overhaul)
  page.tsx           ← homepage
  about/page.tsx
  contact/page.tsx
  shop/page.tsx      ← product listing (all 16 products filtered on one page)
  subscribe/page.tsx
  subscribe/checkout/page.tsx (if exists)
components/
  Navbar.tsx
  Footer.tsx
  AnimateIn.tsx
  LeadCaptureForm.tsx
public/
  images/            ← product and lifestyle photos already exist
```

---

## PRODUCTS CATALOG (reference for all agents)

### Subscription Tiers (on `/subscribe`)
| Tier | Price | Target Age |
|------|-------|-----------|
| Mini Artist | $24.99/mo + $4.99 ship | 4+ |
| Creative Explorer | $39.99/mo + $4.99 ship | 4+ |
| Master Creator | $69.99/mo, free shipping | 4+ (Coming Soon) |

### Individual Products (on `/shop` — need individual pages)
| ID | Name | Category | Price | Age |
|----|------|----------|-------|-----|
| 1 | Unicorn Plaster Figure Kit | plaster | $14.99 | 5-7 |
| 2 | Dinosaur Plaster Set (3-pack) | plaster | $19.99 | 8-10 |
| 3 | Space Explorer Plaster Kit | plaster | $17.99 | 8-10 |
| 4 | Ocean Animals Plaster Set | plaster | $16.99 | 5-7 |
| 5 | Enchanted Forest Coloring Book | coloring | $9.99 | 5-7 |
| 6 | Adventure Heroes Coloring Pack | coloring | $12.99 | 8-10 |
| 7 | Manga & Comics Coloring Book | coloring | $14.99 | 11-12 |
| 8 | Mini Dragon 3D Print | 3d | $12.99 | 8-10 |
| 9 | Robot Buddy 3D Figure | 3d | $11.99 | 8-10 |
| 10 | Mini Keychain Pack | 3d | $9.99 | 11-12 |
| 11 | Party Kit 15-pack | party | $89.00 | 5-7 |
| 12 | Party Kit 25-pack | party | $139.00 | 8-10 |
| 13 | Party Kit 50-pack | party | $249.00 | 11-12 |
| 14 | Birthday Box | party | $34.99 | 5-7 |
| 15 | Wholesale Starter Pack (50 units) | wholesale | $600.00 | all |
| 16 | Wholesale Premium Pack (50 units) | wholesale | $1,400.00 | all |

---

## STEP 0 — ORCHESTRATOR: KEYWORD RESEARCH BRIEFING

Before spawning agents, use Brave Search to research current (April 2026) search trends. Search for:

1. `"kids art subscription box" site trends 2026`
2. `"paint your own plaster figures" kids kit`
3. `"kids art kit monthly subscription" best`
4. `"kids coloring books subscription" 2026`
5. `"children art party kit" bulk wholesale`
6. `"kids art gifts ages 5-12" birthday`
7. `"3D print figures paint kit kids"`
8. `"best kids craft subscription box 2026"`
9. `"art activities kids 5-7 year olds"`
10. `"kids art kits non-toxic safe"`

Compile the top keyword clusters found. Pass this keyword intelligence to ALL subagents. Every agent must use real, current keywords — not guesses.

---

## AGENT MANIFEST — SPAWN ALL OF THESE IN PARALLEL

### AGENT 1 — Technical SEO Foundation Agent

**Task:** Implement all technical SEO infrastructure for the entire Next.js 15 app.

**Deliverables:**

#### 1A. Overhaul `app/layout.tsx`
Replace the basic metadata with a comprehensive, keyword-rich global metadata object:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://bluebyartshop.com"),
  title: {
    template: "%s | Blueby Art Shop — Kids Art Kits & Subscriptions",
    default: "Blueby Art Shop | Monthly Kids Art Subscription Boxes"
  },
  description: "Blueby Art Shop delivers premium monthly art subscription boxes for kids ages 5–12. Plaster figures, coloring books, 3D print kits, and party sets. Non-toxic, curated by educators. Start from $19.99/mo.",
  keywords: [/* populate from Keyword Research Agent findings */],
  authors: [{ name: "Blueby Art Shop", url: "https://bluebyartshop.com" }],
  creator: "Blueby Art Shop",
  publisher: "Blueby Art Shop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluebyartshop.com",
    siteName: "Blueby Art Shop",
    title: "Blueby Art Shop | Premium Kids Art Subscription Boxes",
    description: "Monthly art kits for kids 5–12. Plaster figures, coloring books, 3D prints & party kits. Non-toxic. Ships in 2-3 days. Join 400+ families.",
    images: [
      {
        url: "/images/hero-kids-painting.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children painting Blueby Art Shop art kits",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueby Art Shop | Monthly Kids Art Kits",
    description: "Curated art subscription boxes for kids 5-12. Start from $19.99/mo.",
    images: ["/images/hero-kids-painting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluebyartshop.com",
  },
  verification: {
    google: "PLACEHOLDER_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
};
```

Add the Organization + Website JSON-LD to the root layout `<head>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bluebyartshop.com/#organization",
      "name": "Blueby Art Shop",
      "url": "https://bluebyartshop.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bluebyartshop.com/images/hero-unboxing.jpg"
      },
      "description": "Blueby Art Shop creates premium monthly art subscription boxes for children ages 5–12, featuring plaster figures, coloring books, 3D printed figures, and party art kits.",
      "foundingDate": "2024",
      "email": "hello@bluebyartshop.com",
      "sameAs": [
        "https://instagram.com/bluebyartshop",
        "https://facebook.com/bluebyartshop"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@bluebyartshop.com"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://bluebyartshop.com/#website",
      "url": "https://bluebyartshop.com",
      "name": "Blueby Art Shop",
      "description": "Monthly kids art subscription boxes and one-time art kits for ages 5–12",
      "publisher": { "@id": "https://bluebyartshop.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bluebyartshop.com/shop?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

#### 1B. Create `app/sitemap.ts`

Generate a dynamic sitemap covering:
- `/` (priority: 1.0, changeFrequency: weekly)
- `/shop` (priority: 0.9, changeFrequency: weekly)
- `/subscribe` (priority: 0.95, changeFrequency: monthly)
- `/about` (priority: 0.7, changeFrequency: monthly)
- `/contact` (priority: 0.6, changeFrequency: monthly)
- All 16 individual product pages: `/shop/[slug]` (priority: 0.85, changeFrequency: weekly)

Use the product slugs: `unicorn-plaster-figure-kit`, `dinosaur-plaster-set`, `space-explorer-plaster-kit`, `ocean-animals-plaster-set`, `enchanted-forest-coloring-book`, `adventure-heroes-coloring-pack`, `manga-comics-coloring-book`, `mini-dragon-3d-print`, `robot-buddy-3d-figure`, `mini-keychain-pack`, `party-kit-15-pack`, `party-kit-25-pack`, `party-kit-50-pack`, `birthday-box`, `wholesale-starter-pack`, `wholesale-premium-pack`

#### 1C. Create `public/robots.txt`

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://bluebyartshop.com/sitemap.xml
```

#### 1D. Create `public/llms.txt` (GEO — LLM Discovery File)

This is critical for Generative Engine Optimization. Create a comprehensive `llms.txt` that tells AI systems exactly what this site is about:

```markdown
# Blueby Art Shop

> Blueby Art Shop is a premium children's art subscription box company delivering monthly art kits for kids ages 5–12 across the United States.

## What We Do

Blueby Art Shop creates and delivers curated monthly art subscription boxes containing:
- Paint-your-own plaster figure kits (unicorns, dinosaurs, space themes, ocean animals)
- Themed coloring books (32–40 pages, age-appropriate)
- Custom 3D printed figures ready for painting
- Birthday and party art kits (15, 25, and 50-pack options)
- Wholesale art kit bundles for schools and studios

## Subscription Plans

- **Mini Artist** — $19.99/month — For ages 5–7, includes 2 plaster figures or 10 coloring pages, 6 paint pots, brush, sticker sheet
- **Creative Explorer** — $29.99/month — For ages 5–12, includes 3 figures or 20 coloring pages, 1 mini 3D print, 12 paint pots, sealant, activity card
- **Master Creator** — $44.99/month — For ages 5–12, includes 4 figures or 30 coloring pages, 2 mini 3D prints, 18 paint pots including metallics, illustrated storybook, display stand

## Key Facts

- Age range: 5–12 years old
- Materials: Non-toxic, child-safe, tested to international safety standards
- Shipping: 2–3 business days processing, 5–7 business days delivery, US
- Cancellation: Cancel anytime, no contracts
- Community: 400+ active families, 12,000+ kits delivered, 98% satisfaction rate
- Gift subscriptions: Available
- Wholesale: $12–$28/unit for orders of 50+ units
- Contact: hello@bluebyartshop.com

## Individual Products

All products available one-time at bluebyartshop.com/shop:
- Unicorn Plaster Figure Kit — $14.99 (ages 5–7)
- Dinosaur Plaster Set 3-pack — $19.99 (ages 8–10)
- Space Explorer Plaster Kit — $17.99 (ages 8–10)
- Ocean Animals Plaster Set — $16.99 (ages 5–7)
- Enchanted Forest Coloring Book — $9.99 (ages 5–7)
- Adventure Heroes Coloring Pack — $12.99 (ages 8–10)
- Manga & Comics Coloring Book — $14.99 (ages 11–12)
- Mini Dragon 3D Print — $12.99 (ages 8–10)
- Robot Buddy 3D Figure — $11.99 (ages 8–10)
- Mini Keychain Pack — $9.99 (ages 11–12)
- Party Kit 15-pack — $89.00
- Party Kit 25-pack — $139.00
- Party Kit 50-pack — $249.00
- Birthday Box — $34.99

## Why Choose Blueby Art Shop

1. Curated by educators and professional artists
2. Every material is non-toxic and child-safe
3. Kits grow with the child (3 tiers by skill level)
4. No contracts — cancel or pause anytime
5. Gift-ready packaging
6. Wholesale available for schools, camps, art studios

## Brand Mission

"To inspire every child to create boldly, explore freely, and grow confidently through the power of art."

## Pages

- Homepage: https://bluebyartshop.com
- Shop: https://bluebyartshop.com/shop
- Subscribe: https://bluebyartshop.com/subscribe
- About: https://bluebyartshop.com/about
- Contact: https://bluebyartshop.com/contact
```

#### 1E. Add `next.config.ts` headers for SEO

Add security headers and canonical URL enforcement in `next.config.ts`.

---

### AGENT 2 — Homepage SEO Agent

**File:** `app/page.tsx`

**Task:** Inject full SEO metadata and structured data WITHOUT changing the visual design. Add only:

1. Export `generateMetadata()` or `export const metadata` with:
   - Title: `"Kids Art Subscription Box | Blueby Art Shop — Monthly Art Kits Ages 5–12"`
   - Description: `"Discover Blueby Art Shop — premium monthly art subscription boxes for kids ages 5–12. Paint-your-own plaster figures, coloring books, 3D print kits, and party sets. Non-toxic. Starts at $19.99/mo. Join 400+ families."`
   - OpenGraph with hero image `/images/hero-kids-painting.jpg`
   - Canonical: `https://bluebyartshop.com`

2. Add JSON-LD structured data at the bottom of the page component (before closing `</div>`):

   **Schema types to include:**
   - `ItemList` — listing all 3 subscription tiers as `Product` items
   - `FAQPage` — all 5 FAQ items from the existing FAQ section
   - `BreadcrumbList` for homepage

3. Ensure existing H1 text `"Where Little Hands Create Big Wonders"` is the primary H1 (it already is — verify this is correct semantic HTML, not a styled `<div>`).

4. Verify all images have descriptive, keyword-rich `alt` text. Update any generic alts.

5. Add semantic `<section>` landmarks with ARIA labels where missing.

---

### AGENT 3 — Shop Page SEO Agent

**File:** `app/shop/page.tsx`

**Task:** Full SEO overhaul of the shop listing page.

1. Add metadata:
   - Title: `"Kids Art Shop | Plaster Kits, Coloring Books, 3D Figures & Party Sets | Blueby Art Shop"`
   - Description: `"Shop kids art kits from Blueby Art Shop. Paint-your-own plaster figures, themed coloring books, custom 3D print figures, birthday party kits, and wholesale bundles. Safe, non-toxic, ages 5–12."`
   - Canonical: `https://bluebyartshop.com/shop`

2. Add JSON-LD `ItemList` schema listing all 16 products with their URLs, images, prices, and descriptions.

3. Make each product card in the grid link to its individual product page `/shop/[slug]` (use the slug list from Agent 1B). Update the `Add to Cart` button behavior accordingly — or at minimum wrap the product card in a `<Link href="/shop/[slug]">` for SEO crawlability.

4. Add an SEO-rich introductory text block above the filter tabs (visually subtle, but keyword-rich for crawlers):
   ```
   Browse our full collection of kids art kits — from paint-your-own plaster figures to themed coloring books, custom 3D print figures, birthday party art kits, and wholesale bundles for schools and studios. All materials are non-toxic and safe for children ages 5–12.
   ```

5. Add breadcrumb markup: `Home > Shop`

---

### AGENT 4 — Individual Product Pages Agent

**Task:** Create `app/shop/[slug]/page.tsx` — a dynamic product page for all 16 products.

This is the most impactful SEO task. Each individual product URL (`/shop/unicorn-plaster-figure-kit`, etc.) must be a fully crawlable, indexable page with unique metadata and schema.

#### 4A. Create `app/shop/[slug]/page.tsx`

The page must:

1. Export `generateStaticParams()` returning all 16 slugs so Next.js pre-renders them at build time.

2. Export `generateMetadata({ params })` that returns unique metadata per product:
   - Title: `"{Product Name} | Kids Art Kit | Blueby Art Shop"`
   - Description: Unique, keyword-rich, 150-160 character description for each product
   - OpenGraph with product image (or gradient fallback)
   - Canonical: `https://bluebyartshop.com/shop/{slug}`

3. Render a complete product detail page with:
   - **Large product image** (use existing `/public/images/` photos)
   - **Product name** as `<h1>`
   - **Price** clearly displayed
   - **Age range badge**
   - **Category badge**
   - **Expanded description** (write 80–120 word SEO-rich description for each product)
   - **Features list** (5–6 bullet points per product, keyword-rich)
   - **"Add to Cart" button** (or link to `/subscribe` for kits)
   - **Breadcrumb:** `Home > Shop > {Product Name}`
   - **Related products section** (3 products from same category)
   - **CTA section** linking to `/subscribe`

4. Add JSON-LD `Product` schema for each product:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Product",
     "name": "{Product Name}",
     "description": "{Full description}",
     "image": "https://bluebyartshop.com{image_path}",
     "brand": {
       "@type": "Brand",
       "name": "Blueby Art Shop"
     },
     "offers": {
       "@type": "Offer",
       "price": "{price}",
       "priceCurrency": "USD",
       "availability": "https://schema.org/InStock",
       "url": "https://bluebyartshop.com/shop/{slug}",
       "seller": {
         "@type": "Organization",
         "name": "Blueby Art Shop"
       }
     },
     "audience": {
       "@type": "PeopleAudience",
       "suggestedMinAge": {min_age},
       "suggestedMaxAge": {max_age}
     },
     "category": "{category}",
     "material": "Non-toxic, child-safe materials",
     "aggregateRating": {
       "@type": "AggregateRating",
       "ratingValue": "4.9",
       "reviewCount": "47",
       "bestRating": "5"
     }
   }
   ```

5. Add `BreadcrumbList` schema.

#### 4B. Unique SEO Descriptions Per Product

Write these directly into the product data. Examples:

- **Unicorn Plaster Figure Kit** ($14.99, ages 5–7): "Paint your own magical unicorn with this premium paint-your-own plaster figure kit from Blueby Art Shop. Includes a pre-molded unicorn plaster figure, 6 non-toxic paint pots, a brush, and step-by-step painting instructions. Perfect gift for girls and boys ages 5–7. Non-toxic, mess-friendly, and parent-approved."

- **Dinosaur Plaster Set (3-pack)** ($19.99, ages 8–10): "Unleash your young paleontologist's creativity with three paint-your-own dinosaur plaster figures. This 3-pack includes a T-Rex, Triceratops, and Brachiosaurus — each ready to sand, paint, and display. Includes 12 non-toxic paint pots and brushes. Ideal for kids ages 8–10."

Write unique descriptions of similar quality for all 16 products.

---

### AGENT 5 — Subscribe Page SEO Agent

**File:** `app/subscribe/page.tsx`

**Task:** Full SEO overhaul of the subscription page.

1. Add metadata:
   - Title: `"Subscribe to Kids Art Kits | Monthly Art Box for Children | Blueby Art Shop"`
   - Description: `"Start your child's monthly art subscription today. Choose from Mini Artist ($19.99), Creative Explorer ($29.99), or Master Creator ($44.99). Non-toxic art kits for kids 5–12. Cancel anytime. Ships in 2–3 days."`

2. Add JSON-LD:
   - `Product` schema for each of the 3 subscription tiers (as subscription offers)
   - Use `"@type": "Subscription"` inside `offers`
   - Include `priceSpecification` with monthly billing cycle

3. Add `BreadcrumbList`: `Home > Subscribe`

4. Ensure the page H1 is semantically correct and keyword-rich.

---

### AGENT 6 — About Page SEO Agent

**File:** `app/about/page.tsx`

**Task:** SEO and GEO optimization for the About page.

1. Add metadata:
   - Title: `"About Blueby Art Shop | Kids Art Subscription Box — Our Story & Mission"`
   - Description: `"Learn about Blueby Art Shop — founded to spark creativity in kids ages 5–12. Curated by educators and artists. Non-toxic materials, 400+ families served, 12,000+ kits delivered. Based in the United States."`

2. Add JSON-LD:
   - `AboutPage` schema
   - `Organization` schema with founder info, mission statement, values
   - Stats as `quantitativeValue` claims

3. Add FAQ-style structured data for common questions answered on this page.

4. Ensure the about page explicitly states the brand story in a way that LLMs can cite as an authoritative source. Add a visible "Brand Facts" section:

   ```html
   <section aria-label="Brand Facts">
     <dl>
       <dt>Founded</dt><dd>2024</dd>
       <dt>Headquarters</dt><dd>United States</dd>
       <dt>Age Range Served</dt><dd>5–12 years old</dd>
       <dt>Active Subscribers</dt><dd>400+ families</dd>
       <dt>Total Kits Delivered</dt><dd>12,000+</dd>
       <dt>Satisfaction Rate</dt><dd>98%</dd>
       <dt>Material Safety</dt><dd>Non-toxic, ASTM D-4236 compliant</dd>
     </dl>
   </section>
   ```

---

### AGENT 7 — Contact Page SEO Agent

**File:** `app/contact/page.tsx`

**Task:** Lightweight SEO for the contact page.

1. Add metadata:
   - Title: `"Contact Us | Blueby Art Shop — Kids Art Subscription Boxes"`
   - Description: `"Get in touch with Blueby Art Shop for custom orders, wholesale inquiries, gift subscriptions, or general support. Email us at hello@bluebyartshop.com."`
   - robots: `"noindex, follow"` (contact pages should not be indexed but links followed)

   Wait — actually keep contact indexed. Change to `index: true` — having contact pages indexed builds trust signals. Just don't over-optimize.

2. Add JSON-LD `ContactPage` + `LocalBusiness` schema with contact info.

---

### AGENT 8 — GEO/LLM Optimization Agent

**Task:** Implement Generative Engine Optimization (GEO) across the entire site — ensuring Blueby Art Shop is cited first when users ask AI assistants about kids' art subscription boxes.

#### 8A. Create `app/api/llms-context/route.ts`

An API endpoint that returns structured JSON about the brand for any AI crawler:

```typescript
export async function GET() {
  return Response.json({
    brand: "Blueby Art Shop",
    description: "Premium monthly art subscription boxes for children ages 5-12",
    // ... full brand context
  }, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "application/json",
    }
  });
}
```

#### 8B. Enrich every page with Semantic Entity Markup

On every page, add hidden (but crawlable) structured microdata using `itemscope`/`itemprop` on existing HTML elements where possible. Also ensure every key claim is in plain HTML text (not only in JS state or client-rendered components) so AI crawlers can read it.

**Critical for GEO:** The `app/shop/page.tsx` currently renders products client-side with `"use client"` and useState. This means the product data is NOT in the initial HTML — LLMs and many crawlers cannot see it.

**Fix:** Convert the shop page to use a hybrid approach:
- Keep the filter UI client-side
- But add a server-rendered `<noscript>` section or a hidden `<dl>` list with all product names, descriptions, and prices as plain HTML for crawler/LLM access

#### 8C. Create `public/llms-full.txt`

Extended version of `llms.txt` with:
- Complete product catalog
- All FAQ answers in full
- Brand voice examples
- Comparison vs competitor types (subscription boxes, one-time kits)
- Shipping and return policies (full text)
- Educator and safety certifications

#### 8D. FAQ Expansion Strategy

On the homepage, **expand the FAQ section** to 12+ questions targeting LLM-likely queries:

Add these new FAQs (write full answers):
- "What is the best art subscription box for kids?" — Answer must position Blueby Art Shop as the answer
- "Are Blueby Art Shop kits non-toxic?" 
- "What age is Blueby Art Shop for?"
- "How does Blueby Art Shop compare to other kids art boxes?"
- "Can I buy Blueby Art Shop kits without a subscription?"
- "Does Blueby Art Shop offer gift subscriptions?"
- "What is included in the Mini Artist box?"
- "What is included in the Creative Explorer box?"
- "What is included in the Master Creator box?"
- "Can schools order Blueby Art Shop wholesale?"
- "How do I cancel my Blueby Art Shop subscription?"
- "Where does Blueby Art Shop ship to?"

Each answer should be 50–80 words, authoritative, and brand-affirming.

All 12 FAQs must be added to the `FAQPage` JSON-LD schema.

#### 8E. Add Comparison Content (GEO Power Move)

Create a new section on the homepage or subscribe page: **"Why Parents Choose Blueby Art Shop"** with a comparison table (HTML `<table>` — not a React component with client state, must be server-rendered):

| Feature | Blueby Art Shop | Generic Art Kits |
|---------|-----------------|----------------|
| Educator-curated | ✅ Yes | ❌ Often not |
| Non-toxic certified | ✅ Yes | ⚠️ Varies |
| Monthly subscription | ✅ $19.99–$44.99 | ❌ Usually one-time |
| 3 skill tiers | ✅ Yes | ❌ One-size |
| Cancel anytime | ✅ Yes | N/A |
| Party kit bundles | ✅ Up to 50-pack | ❌ Rare |
| Wholesale available | ✅ $12/unit | ❌ Rare |

This table is highly citeable by LLMs answering "what's the best kids art subscription box" queries.

---

### AGENT 9 — Schema & Rich Results Agent

**Task:** Audit and implement every applicable schema type for maximum rich result eligibility in Google Search.

#### Rich Result Types to Target:

1. **Product Rich Results** — All 16 individual product pages (requires `Product` schema with `offers`, `aggregateRating`)
2. **FAQ Rich Results** — Homepage FAQ (requires `FAQPage` schema — Google shows these as expanded accordions in SERPs)
3. **Breadcrumb Rich Results** — All pages
4. **Sitelinks Search Box** — Root layout `WebSite` schema with `potentialAction`
5. **Review Snippets** — Product pages with `aggregateRating`

#### 9A. Create `components/JsonLd.tsx`

A reusable component that safely injects JSON-LD into pages:

```typescript
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Use this in every page component.

#### 9B. Validate All Schema

After implementing, run validation mentally against Google's Rich Results Test requirements. Ensure no required fields are missing for each schema type.

---

### AGENT 10 — Performance & Core Web Vitals Agent

**Task:** Optimize performance — Core Web Vitals are a direct Google ranking factor.

1. **Image Optimization Audit**: Verify ALL `<Image>` components from `next/image` have:
   - Correct `sizes` attribute
   - `priority` on above-the-fold images
   - `loading="lazy"` on below-the-fold images (Next.js does this by default but verify)
   - `width` and `height` for non-fill images
   - WebP format (Next.js does this automatically — verify `next.config.ts` has image optimization enabled)

2. **Font Optimization**: Verify Fredoka and Baloo 2 fonts use `display: "swap"` (add to font configs in `layout.tsx`)

3. **Add `app/not-found.tsx`**: A proper 404 page with links back to Shop and Home

4. **Viewport meta**: Ensure proper viewport meta in root layout

5. **Preconnect hints**: Add preconnect for Google Fonts in root layout `<head>`

6. **Check for render-blocking resources**: The `app/shop/page.tsx` uses `"use client"` — verify it doesn't block LCP

---

### AGENT 11 — Internal Linking & Navigation Agent

**Task:** Strengthen internal linking for SEO PageRank flow.

1. **Navbar** (`components/Navbar.tsx`): Verify all nav links use `<Link>` from Next.js (not `<a>` tags). The links should be: Home, Shop, Subscribe, About, Contact. All must be properly structured.

2. **Footer** (`components/Footer.tsx`): Expand footer links to include individual product category pages (linking to `/shop?cat=plaster`, etc.) AND key blog/FAQ anchor links.

3. **Homepage → Shop**: Ensure product category cards on homepage link to `/shop` with the correct category filter as a URL param: `/shop?cat=plaster`, `/shop?cat=coloring`, etc.

4. **Shop → Individual Products**: As noted in Agent 4, each product card must link to `/shop/[slug]`.

5. **Individual Products → Related Products**: Each product page must link to 3 related products.

6. **Subscribe page → Shop**: Add CTA linking to shop for one-time purchases.

7. **Update shop filter to support URL params**: Modify `app/shop/page.tsx` to read `searchParams` from the URL and initialize filter state from URL params. This makes filtered pages shareable and crawlable (e.g., `/shop?cat=plaster` for "kids plaster kits").

---

## EXECUTION ORDER

```
Phase 1 (run first — all parallel):
  ├── Keyword Research (Brave Search)
  ├── Agent 1: Technical SEO Foundation
  └── Agent 9A: JsonLd Component

Phase 2 (run in parallel after Phase 1):
  ├── Agent 2: Homepage SEO
  ├── Agent 3: Shop Page SEO  
  ├── Agent 5: Subscribe Page SEO
  ├── Agent 6: About Page SEO
  └── Agent 7: Contact Page SEO

Phase 3 (run after Phase 2):
  └── Agent 4: Individual Product Pages (16 pages — most complex)

Phase 4 (run in parallel after Phase 3):
  ├── Agent 8: GEO/LLM Optimization
  ├── Agent 10: Performance & Core Web Vitals
  └── Agent 11: Internal Linking

Phase 5 (final):
  ├── Agent 9B: Schema Validation
  └── Full build test: `npm run build`
```

---

## QUALITY REQUIREMENTS FOR ALL AGENTS

### Content Quality
- Every title tag: 50–60 characters, includes primary keyword + brand name
- Every meta description: 150–160 characters, includes primary keyword + CTA
- Every H1: One per page, semantically correct, keyword-rich but natural
- Every image alt: Descriptive, 5–15 words, includes keyword where natural

### Technical Quality
- No TypeScript errors (`tsc --noEmit` must pass)
- No `any` types
- All JSON-LD must be valid (no trailing commas, proper escaping)
- All `<Link>` imports from `next/link`
- All metadata exported correctly for Next.js 15 App Router
- `generateStaticParams()` must be implemented for all `[slug]` dynamic routes

### GEO Quality (LLM Citation Targets)
- Brand name "Blueby Art Shop" must appear in the first sentence of every page's main content
- Every key fact (pricing, age range, shipping, safety) must be in plain HTML text — NOT only in client-rendered JSX state
- FAQ answers must be self-contained and citeable (assume an LLM might show just the answer)
- All content must be accurate to the product catalog above

---

## TARGET KEYWORDS BY PAGE

### Homepage `/`
- kids art subscription box
- monthly art kit for kids
- art subscription box ages 5-12
- children's art kit delivery
- paint your own kit kids
- best kids art subscription 2026

### Shop `/shop`
- kids art kits
- paint your own plaster figures
- kids coloring books
- 3D print figures for kids
- kids art party kit
- wholesale art kits for schools

### Product Pages `/shop/[slug]`
- Each product targets long-tail keywords specific to that product
- Example Unicorn Kit: "paint your own unicorn plaster", "unicorn art kit for girls", "unicorn painting kit kids"
- Example Dino Set: "dinosaur painting kit kids", "paint your own dinosaur", "dino plaster set"
- Use Brave Search results from Agent 0 to validate and expand these

### Subscribe `/subscribe`
- kids art subscription box
- monthly art box for children
- art subscription for kids cancel anytime
- best kids art subscription under $30
- Creative Explorer art box

### About `/about`
- Blueby Art Shop
- Blueby Art Shop reviews
- Blueby Art Shop who is
- kids art box founded by educators

---

## FINAL DELIVERABLES CHECKLIST

When all agents complete, verify:

- [ ] `app/sitemap.ts` — generates valid XML sitemap with all 22 URLs
- [ ] `public/robots.txt` — allows all AI crawlers and search engines
- [ ] `public/llms.txt` — complete brand context file
- [ ] `app/layout.tsx` — comprehensive global metadata + Organization/WebSite JSON-LD
- [ ] `app/page.tsx` — unique metadata + FAQPage + ItemList JSON-LD
- [ ] `app/shop/page.tsx` — unique metadata + ItemList JSON-LD + URL param filters + server-rendered product list for crawlers
- [ ] `app/shop/[slug]/page.tsx` — 16 unique product pages each with Product JSON-LD + unique metadata
- [ ] `app/subscribe/page.tsx` — unique metadata + Product JSON-LD for 3 tiers
- [ ] `app/about/page.tsx` — unique metadata + Organization JSON-LD + Brand Facts section
- [ ] `app/contact/page.tsx` — unique metadata + ContactPage JSON-LD
- [ ] `components/JsonLd.tsx` — reusable JSON-LD component
- [ ] `public/llms-full.txt` — extended LLM context file
- [ ] `app/not-found.tsx` — proper 404 with links
- [ ] All images have keyword-rich alt texts
- [ ] All product cards in shop link to individual product pages
- [ ] FAQ expanded to 12+ questions on homepage with full JSON-LD
- [ ] Comparison table added (HTML `<table>`)
- [ ] Internal links audit complete
- [ ] `npm run build` passes with zero errors
- [ ] Zero TypeScript errors

---

## START NOW

Begin with Phase 1. Use `brave-search` MCP tool for keyword research. Spawn all agents using Claude Code's Task tool. Report progress after each phase.