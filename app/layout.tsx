import type { Metadata } from "next";
import { Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const fredokaOne = Fredoka({
  weight: ["400", "600", "700"],
  variable: "--font-fredoka-one",
  subsets: ["latin"],
  display: "swap",
});

const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo-2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluebyartshop.com"),
  title: {
    template: "%s | Blue By Art Shop — Kids Art Kits & Subscriptions",
    default: "Blue By Art Shop | Monthly Kids Art Subscription Boxes",
  },
  description:
    "Blue By Art Shop delivers premium monthly art subscription boxes for kids ages 5–12. Plaster figures, coloring books, 3D print kits, and party sets. Non-toxic, curated by educators. Start from $19.99/mo.",
  keywords: [
    "kids art subscription box",
    "monthly art kit for kids",
    "art subscription box ages 5-12",
    "children's art kit delivery",
    "paint your own plaster figures",
    "best kids art subscription 2026",
    "kids art kits",
    "kids coloring books subscription",
    "3D print figures for kids",
    "kids art party kit",
    "wholesale art kits for schools",
    "non-toxic art kits kids",
    "monthly art box for children",
    "kids craft subscription box",
    "art activities kids 5-7 year olds",
    "kids art gifts ages 5-12",
    "birthday art kit kids",
    "plaster crafts to paint kids",
    "unicorn art kit for girls",
    "dinosaur painting kit kids",
  ],
  authors: [{ name: "Blue By Art Shop", url: "https://bluebyartshop.com" }],
  creator: "Blue By Art Shop",
  publisher: "Blue By Art Shop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluebyartshop.com",
    siteName: "Blue By Art Shop",
    title: "Blue By Art Shop | Premium Kids Art Subscription Boxes",
    description:
      "Monthly art kits for kids 5–12. Plaster figures, coloring books, 3D prints & party kits. Non-toxic. Ships in 2-3 days. Join 400+ families.",
    images: [
      {
        url: "/images/hero-kids-painting.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children painting Blue By Art Shop art kits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue By Art Shop | Monthly Kids Art Kits",
    description:
      "Curated art subscription boxes for kids 5-12. Start from $19.99/mo.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bluebyartshop.com/#organization",
      name: "Blue By Art Shop",
      url: "https://bluebyartshop.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bluebyartshop.com/images/hero-unboxing.jpg",
      },
      description:
        "Blue By Art Shop creates premium monthly art subscription boxes for children ages 5–12, featuring plaster figures, coloring books, 3D printed figures, and party art kits.",
      foundingDate: "2024",
      email: "hello@bluebyartshop.com",
      telephone: "+15550123456",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
      sameAs: [
        "https://instagram.com/bluebyartshop",
        "https://facebook.com/bluebyartshop",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@bluebyartshop.com",
        telephone: "+15550123456",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bluebyartshop.com/#website",
      url: "https://bluebyartshop.com",
      name: "Blue By Art Shop",
      description:
        "Monthly kids art subscription boxes and one-time art kits for ages 5–12",
      publisher: { "@id": "https://bluebyartshop.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://bluebyartshop.com/shop?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body
        className={`${fredokaOne.variable} ${baloo2.variable} antialiased`}
        style={{ fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif" }}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
