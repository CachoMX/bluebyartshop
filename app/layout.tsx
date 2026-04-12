import type { Metadata } from "next";
import { Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAdsTag } from "@/components/GoogleAdsTag";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import {
  BRAND_DESCRIPTION,
  BRAND_EMAIL,
  BRAND_LOGO_ALT,
  BRAND_LOGO_PATH,
  BRAND_NAME,
  DEFAULT_OG_IMAGE_PATH,
  SITE_URL,
} from "@/lib/brand";

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
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${BRAND_NAME} — Kids Art Kits & Subscriptions`,
    default: `${BRAND_NAME} | Monthly Kids Art Subscription Boxes`,
  },
  description: BRAND_DESCRIPTION,
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
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Premium Kids Art Subscription Boxes`,
    description: BRAND_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: BRAND_LOGO_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Monthly Kids Art Kits`,
    description:
      "Curated art subscription boxes for kids 5-12. Start from $19.99/mo.",
    images: [DEFAULT_OG_IMAGE_PATH],
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
    canonical: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND_LOGO_PATH}`,
      },
      description: BRAND_DESCRIPTION,
      email: BRAND_EMAIL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND_NAME,
      description:
        "Monthly kids art subscription boxes and one-time art kits for ages 5–12",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
        {/* Hyros universal tracking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var head=document.head,s=document.createElement('script');s.type='text/javascript';s.src="https://data.carlosaragon.online/v1/lst/universal-script?ph=664ad84e5a8d71d02e5f8fe74e28bfe1eca5b5a982655b75fac5513b98d326d3&tag=!blueby&ref_url="+encodeURI(document.URL);head.appendChild(s);`,
          }}
        />
      </head>
      <body
        className={`${fredokaOne.variable} ${baloo2.variable} antialiased`}
        style={{ fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif" }}
      >
        <GoogleAdsTag />
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
