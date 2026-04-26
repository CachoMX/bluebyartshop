import type { Metadata } from "next";
import { BRAND_EMAIL, BRAND_NAME, SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: `Learn how ${BRAND_NAME} collects, uses, and protects customer and visitor information.`,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

const sections = [
  {
    title: "What We Collect",
    body: [
      "We collect the information you choose to send us through contact forms, lead-capture forms, account sign-in, and checkout. That can include your name, email address, subscription selections, and order details.",
      "When you create an account or subscribe, billing information is processed by Stripe and account records are stored through Supabase-based site infrastructure.",
    ],
  },
  {
    title: "How We Use It",
    body: [
      "We use submitted information to respond to questions, manage subscriptions, support orders, and operate the website experience.",
      "We may also use lead-form submissions to follow up about welcome offers, launch updates, and product information related to Blueby Art Shop.",
    ],
  },
  {
    title: "Service Providers",
    body: [
      "This website relies on third-party services to operate core functionality, including Stripe for billing and Supabase for authentication and data storage.",
      "Those providers may process information only as needed to power the services used on this site.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "If you want us to update or remove information you previously submitted through the site, contact us by email and include enough detail for us to locate the record safely.",
      `Privacy requests can be sent to ${BRAND_EMAIL}.`,
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,255,255,0.86)" }}>
            This page explains the main ways {BRAND_NAME} handles visitor and
            customer information on this website.
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
