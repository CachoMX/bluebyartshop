import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BRAND_EMAIL, BRAND_NAME, SITE_URL, WHOLESALE_EMAIL } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND_NAME} — Kids Art Subscription Boxes`,
  description: `Get in touch with ${BRAND_NAME} for custom orders, wholesale inquiries, gift subscriptions, or general support.`,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact ${BRAND_NAME} | Kids Art Subscription Boxes`,
    description:
      "Questions about subscriptions, orders, or wholesale? Use the contact form or email our team directly.",
    url: `${SITE_URL}/contact`,
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact`,
  url: `${SITE_URL}/contact`,
  name: `Contact ${BRAND_NAME}`,
  description: `Contact ${BRAND_NAME} for kids art subscription box inquiries, wholesale orders, and customer support.`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const supportContactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#contact-organization`,
  name: BRAND_NAME,
  url: SITE_URL,
  email: BRAND_EMAIL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: BRAND_EMAIL,
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: WHOLESALE_EMAIL,
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={supportContactJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
