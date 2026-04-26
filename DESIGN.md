# Design System: Blueby Art Shop

## 1. Visual Theme & Atmosphere

Blueby Art Shop is a warm, playful children's art subscription service. The design should feel like a premium children's brand — inviting, trustworthy, and joyful without being chaotic. Think "art studio meets boutique gift shop": clean white and warm off-white surfaces with pops of vibrant blue and coral-orange, photography and illustration driven, with generous whitespace that lets products breathe.

The visual system is built on **depth through layers**: subtle card shadows, soft section gradients, and a clear surface hierarchy that guides the eye from hero → features → pricing → trust. This is not a flat design. Every section has a distinct background treatment to create rhythm and forward motion.

**Key Characteristics:**
- Warm white (`#FFFFFF`) and soft blue-tinted canvas (`#F0F7FF`) as alternating section backgrounds
- Primary blue (`#2563EB`) for trust, CTAs, and headings — deep and confident, not harsh
- Teal accent (`#0390AC`) for secondary interactive elements and illustrations
- Coral/orange (`#FB923C`) as the conversion accent — used sparingly on primary CTAs and badges
- `Fredoka` (rounded, friendly) for display headings; `Baloo 2` for body — both have the warm, approachable personality of a children's brand
- Card shadows are soft and multi-layered, giving a lifted, tactile quality
- Generous border-radius: 12px cards, 16px feature blocks, 999px pills, 8px buttons
- No borders on cards — shadow creates the boundary
- Illustrations and icon backgrounds use pastel tints (`#EBF5FF`, `#FFF4ED`, `#E0F7FA`)

## 2. Color Palette & Roles

### Primary Brand
- **Ocean Blue** (`#2563EB`): Primary CTA, headings, active nav, trust elements
- **Sky Blue** (`#3B82F6`): Hover state of primary blue, secondary headings
- **Deep Blue** (`#1D4ED8`): Pressed state, dark emphasis
- **Teal** (`#0390AC`): Secondary CTAs, icon tints, illustration accents

### Accent / Conversion
- **Coral Orange** (`#FB923C`): Primary action CTA buttons ("Start Creating"), sale badges, pricing highlight borders
- **Warm Orange** (`#F97316`): Hover state of coral, warm accents

### Background Surfaces
- **Pure White** (`#FFFFFF`): Primary card surface, default section background
- **Blue Tint** (`#F0F7FF`): Alternating section backgrounds (How It Works, FAQ)
- **Mint Tint** (`#E0F7FA`): Testimonials background
- **Warm Cream** (`#FFFBF5`): Pricing section background

### Semantic
- **Near Black** (`#1E293B`): Primary text — slate, not black, warmer and easier to read
- **Dark Gray** (`#334155`): Section headings
- **Mid Gray** (`#64748B`): Subtext, captions, secondary labels
- **Light Gray** (`#CBD5E1`): Dividers, borders on inputs
- **Muted** (`#94A3B8`): Placeholder text, disabled states

### Pastel Icon Backgrounds
- **Blue Pastel** (`#EBF5FF`): Icon containers for primary items
- **Orange Pastel** (`#FFF4ED`): Icon containers for secondary items
- **Teal Pastel** (`#E0F7FA`): Icon containers for tertiary items
- **Green Pastel** (`#ECFDF5`): Icon containers for success/nature items

## 3. Typography Rules

### Font Families
- **Display/Headings**: `Fredoka` — rounded, friendly, confident. Used for all headings H1–H4.
- **Body/UI**: `Baloo 2` — warm, readable, approachable. Used for body copy, nav, buttons, labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero H1 | Fredoka | 64px (4rem) | 700 | 1.10 | -0.5px | Dominant, bold, max impact |
| Page H1 | Fredoka | 48px (3rem) | 700 | 1.15 | -0.3px | Section page titles |
| Section H2 | Fredoka | 40px (2.5rem) | 600 | 1.20 | -0.2px | Section headings |
| Card H3 | Fredoka | 24px (1.5rem) | 600 | 1.25 | normal | Card and feature headings |
| Card H4 | Fredoka | 20px (1.25rem) | 600 | 1.30 | normal | Smaller card headings |
| Hero Subtitle | Baloo 2 | 20px (1.25rem) | 400 | 1.60 | normal | Hero supporting text |
| Body Large | Baloo 2 | 18px (1.125rem) | 400 | 1.65 | normal | Feature descriptions |
| Body | Baloo 2 | 16px (1rem) | 400 | 1.60 | normal | Standard body copy |
| Button | Baloo 2 | 16px (1rem) | 600 | 1.25 | 0.3px | All button labels |
| Label | Baloo 2 | 14px (0.875rem) | 500 | 1.40 | 0.2px | Tags, labels, nav links |
| Caption | Baloo 2 | 13px (0.8125rem) | 400 | 1.40 | normal | Small metadata |

## 4. Component Stylings

### Buttons

**Primary CTA (Coral Orange)**
- Background: `#FB923C`
- Text: `#FFFFFF`
- Padding: 14px 32px
- Radius: 999px (pill)
- Font: Baloo 2 600, 16px, letter-spacing 0.3px
- Shadow: `0 4px 14px rgba(251, 146, 60, 0.4)`
- Hover: background `#F97316`, shadow `0 6px 20px rgba(249, 115, 22, 0.45)`, transform `translateY(-1px)`
- Active: `#EA580C`, transform `translateY(0)`
- Use: Hero primary CTA, Pricing subscribe buttons

**Secondary CTA (Blue)**
- Background: `#2563EB`
- Text: `#FFFFFF`
- Padding: 14px 32px
- Radius: 999px (pill)
- Shadow: `0 4px 14px rgba(37, 99, 235, 0.35)`
- Hover: background `#1D4ED8`, shadow `0 6px 20px rgba(29, 78, 216, 0.4)`, transform `translateY(-1px)`
- Use: Secondary hero CTA, shop buttons

**Ghost / Outline**
- Background: transparent
- Text: `#FFFFFF` (on dark bg) or `#2563EB` (on light bg)
- Border: 2px solid currentColor
- Padding: 12px 28px
- Radius: 999px
- Hover: background rgba(255,255,255,0.1) on dark, rgba(37,99,235,0.08) on light

### Cards

**Product Card**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)`
- Hover shadow: `0 4px 16px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.1)`, transform `translateY(-4px)`
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Image area: radius 12px, aspect ratio 4:3, `object-fit: cover`
- Padding: 20px

**Feature / Step Card**
- Background: `#FFFFFF`
- Radius: 20px
- Shadow: `0 4px 20px rgba(0,0,0,0.07)`
- Icon container: 64px × 64px, radius 16px, pastel background tint
- Icon: 32px, brand color matching tint

**Pricing Card**
- Background: `#FFFFFF`
- Radius: 20px
- Shadow: `0 4px 24px rgba(0,0,0,0.08)`
- Default border: `2px solid transparent`
- Featured border: `2px solid #FB923C`
- Featured label: pill badge, `#FB923C` background, white text, absolute position top-right
- Price: Fredoka 48px 700, `#1E293B`
- Price period: Baloo 2 16px 400, `#64748B`

**Testimonial Card**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0 2px 12px rgba(0,0,0,0.06)`
- Quote mark: Fredoka 80px, `#2563EB` at 15% opacity, decorative
- Star rating: `#FB923C`, 20px

### Navigation

**Navbar**
- Background: `rgba(255,255,255,0.95)` with `backdrop-filter: blur(10px)`
- Border-bottom: `1px solid rgba(0,0,0,0.06)` on scroll
- Logo: Fredoka 22px 700, `#2563EB`
- Nav links: Baloo 2 15px 500, `#334155`
- Nav link hover: `#2563EB`
- Active link: `#2563EB`, underline indicator 2px solid
- CTA button: coral orange pill, 14px, padding 10px 24px

### Inputs (Contact/Form)
- Background: `#F8FAFC`
- Border: `1.5px solid #E2E8F0`
- Border-radius: 10px
- Focus border: `1.5px solid #2563EB`, shadow `0 0 0 3px rgba(37,99,235,0.1)`
- Padding: 12px 16px
- Font: Baloo 2 16px

## 5. Layout Principles

### Spacing Scale
- 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

### Section Padding
- Desktop: `padding: 96px 0`
- Tablet: `padding: 64px 0`
- Mobile: `padding: 48px 0`

### Container Width
- Max width: `1280px`
- Padding: `0 24px` (mobile), `0 48px` (tablet), `0 64px` (desktop)

### Grid System
- Hero: 1 column, centered max-width 800px
- Features: 3-column grid, gap 32px
- Pricing: 3-column grid, gap 24px, center card scales 1.04 or has featured border
- Products: 4-column grid (desktop), 2-column (tablet), 1-column (mobile), gap 24px
- Testimonials: 3-column grid, gap 24px

### Whitespace Philosophy
- Sections breathe with 96px vertical padding
- Elements within sections: 48px gap between heading block and content grid
- Heading blocks: eyebrow label + H2 + subtitle, max-width 600px, centered

## 6. Depth & Elevation

### Shadow System
- **Level 0**: No shadow — flat surface (section backgrounds)
- **Level 1**: `0 1px 3px rgba(0,0,0,0.06)` — subtle separation (nav on scroll, dividers)
- **Level 2**: `0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)` — cards
- **Level 3**: `0 4px 20px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.1)` — card hover, dropdowns
- **Level 4**: `0 8px 40px rgba(0,0,0,0.12), 0 24px 60px rgba(0,0,0,0.1)` — modals, featured pricing

### Surface Hierarchy
1. **Page background**: `#F0F7FF` (subtle blue tint) for alternating sections
2. **Section surface**: `#FFFFFF` for default sections
3. **Card surface**: `#FFFFFF` with shadow elevation
4. **Input surface**: `#F8FAFC`

## 7. Do's and Don'ts

### Do's
- Use Fredoka for ALL headings — it's the brand voice
- Use coral orange `#FB923C` only for primary CTAs and pricing highlights — scarcity keeps it impactful
- Alternate section backgrounds between `#FFFFFF` and `#F0F7FF` to create rhythm without borders
- Give every section an eyebrow label (small ALL-CAPS colored tag above H2)
- Use pastel icon container backgrounds — never bare icons on white
- Add art-supply emoji (🎨 🖌️ ✏️) subtly in hero and feature sections for brand personality
- Ensure pricing "most popular" card is visually distinct with orange border + scale/shadow
- Keep testimonials on a soft tinted background (`#E8F4F8`) to visually isolate them

### Don'ts
- Don't use sharp corners on interactive elements (min 8px radius, pill for CTAs)
- Don't use pure black (`#000000`) — use `#1E293B` for warmth
- Don't put coral orange and ocean blue side by side in equal weight — let one dominate
- Don't use more than 3 colors per section
- Don't stack two same-colored sections in a row
- Don't use underlined text for non-links
- Don't make headings less than 40px in hero sections

## 8. Responsive Behavior

### Breakpoints
- Mobile: `< 640px`
- Tablet: `640px – 1024px`
- Desktop: `> 1024px`

### Key Responsive Rules
- Hero H1: 64px → 48px → 36px
- Section H2: 40px → 32px → 28px
- 3-column grids → 2-column (tablet) → 1-column (mobile)
- Pricing: stack vertically on mobile, center featured card
- Navbar: hamburger menu on tablet/mobile, links in drawer
- CTA buttons: full width on mobile
- Section padding: 96px → 64px → 48px

## 9. Agent Prompt Guide

### Quick Color Reference
```
Primary blue:    #2563EB   (headings, secondary CTAs, trust)
Teal accent:     #0390AC   (icons, secondary elements)  
Coral orange:    #FB923C   (primary CTAs, pricing badges)
Light canvas:    #F0F7FF   (alternating section bg)
Near black:      #1E293B   (primary text)
Mid gray:        #64748B   (secondary text)
```

### Ready-to-Use Prompts for Stitch

**Hero Section:**
> "Design a hero section for a children's art subscription box called Blueby Art Shop. Use a gradient from #0390AC to #2563EB as background. Include a floating 'New Colors Every Month' pill badge in coral orange above the headline. Headline in Fredoka 64px white bold: 'Where Little Hands Create Big Wonders.' Subtitle in Baloo 2 20px white/80%: 'Curated art subscription boxes packed with safe, premium materials.' Two pill CTAs: coral orange 'Start Creating' and white outline 'Browse the Shop'. Below the CTAs, three trust badges in a row: '✓ No contracts', '✓ Ships in 2-3 days', '✓ 400+ subscriptions'. Decorative circle blobs in background at 30% opacity for depth."

**Feature Card:**
> "Design a feature card with a 64×64px rounded icon container in #EBF5FF background, a 32px emoji icon, bold Fredoka 24px heading in #1E293B, and Baloo 2 16px description in #64748B. White card, 20px radius, soft multi-layer shadow. Hover lifts 4px."

**Pricing Card (Featured):**
> "Design a 'Most Popular' pricing card with coral orange #FB923C 2px border, white background, 20px radius. Orange 'Most Popular' pill badge top-right. Fredoka 48px 700 price. Orange 'Subscribe Now' pill CTA at bottom. Slight scale 1.02 vs sibling cards."
