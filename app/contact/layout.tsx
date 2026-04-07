import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Blue By Art Shop — Kids Art Subscription Boxes",
  description: "Get in touch with Blue By Art Shop for custom orders, wholesale inquiries, gift subscriptions, or general support. Email us at hello@bluebyartshop.com. We respond within one business day.",
  alternates: {
    canonical: "https://bluebyartshop.com/contact",
  },
  openGraph: {
    title: "Contact Blue By Art Shop | Kids Art Subscription Boxes",
    description: "Questions about subscriptions, orders, or wholesale? Contact us at hello@bluebyartshop.com. We respond within one business day.",
    url: "https://bluebyartshop.com/contact",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://bluebyartshop.com/contact",
  "url": "https://bluebyartshop.com/contact",
  "name": "Contact Blue By Art Shop",
  "description": "Contact Blue By Art Shop for kids art subscription box inquiries, wholesale orders, and customer support.",
  "publisher": { "@id": "https://bluebyartshop.com/#organization" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bluebyartshop.com/#localbusiness",
  "name": "Blue By Art Shop",
  "url": "https://bluebyartshop.com",
  "email": "hello@bluebyartshop.com",
  "telephone": "+15550123456",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chicago",
    "addressRegion": "IL",
    "addressCountry": "US",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@bluebyartshop.com",
      "telephone": "+15550123456",
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "wholesale@bluebyartshop.com",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bluebyartshop.com" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://bluebyartshop.com/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
