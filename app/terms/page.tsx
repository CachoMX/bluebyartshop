import type { Metadata } from "next";
import { BRAND_EMAIL, BRAND_NAME, SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Terms of Service | ${BRAND_NAME}`,
  description: `Read the main website and subscription terms for ${BRAND_NAME}.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

const sections = [
  {
    title: "Website Use",
    body: [
      "By using this site, you agree to use it only for lawful purposes and to provide accurate information when contacting us, creating an account, or completing checkout.",
      "We may update site content, pricing, product availability, and policies as the business evolves.",
    ],
  },
  {
    title: "Subscriptions and Billing",
    body: [
      "Subscription checkout is powered by Stripe. If you start a subscription, your billing relationship is completed through the Stripe-hosted checkout flow.",
      "Subscriptions renew according to the plan selected at checkout until they are canceled. You can manage billing from your account dashboard and Stripe billing portal when that access is available for your account.",
    ],
  },
  {
    title: "Orders and Support",
    body: [
      "Questions about orders, account access, shipping issues, or wholesale requests should be sent through the contact form or by email.",
      `For general support, contact ${BRAND_EMAIL}.`,
    ],
  },
  {
    title: "Content and Brand Materials",
    body: [
      `${BRAND_NAME} branding, copy, graphics, and site content remain the property of the business unless otherwise stated.`,
      "You may not copy or redistribute site materials in a way that suggests endorsement, ownership, or affiliation without permission.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <section className="hero-gradient px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}>
            Policy
          </p>
          <h1
            className="mt-4 text-4xl"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
          >
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,255,255,0.86)" }}>
            These terms describe the basic rules for using the site, starting a
            subscription, and contacting {BRAND_NAME}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="card p-6">
              <h2
                className="text-2xl"
                style={{
                  color: "#1E293B",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7" style={{ color: "#475569" }}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
