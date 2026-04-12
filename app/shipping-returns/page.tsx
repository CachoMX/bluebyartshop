import type { Metadata } from "next";
import { BRAND_EMAIL, BRAND_NAME, SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Shipping & Returns | ${BRAND_NAME}`,
  description: `Review the current shipping, delivery, and return guidance for ${BRAND_NAME}.`,
  alternates: {
    canonical: `${SITE_URL}/shipping-returns`,
  },
};

const sections = [
  {
    title: "Shipping",
    body: [
      "Blue By Art Shop is currently set up to fulfill orders within the United States.",
      "Most orders are prepared after successful payment, and subscription shipments begin after the related renewal or first checkout is completed.",
    ],
  },
  {
    title: "Processing and Delivery",
    body: [
      "Our current goal is to prepare orders within 2-3 business days, but actual timing can vary based on product mix, volume, and seasonal demand.",
      "Once a shipment is handed to the carrier, delivery timing depends on the service selected during checkout and the destination.",
    ],
  },
  {
    title: "Delivery Problems",
    body: [
      "If a package arrives damaged, incomplete, or incorrect, contact us and include the order email plus any helpful photos so we can review the issue quickly.",
      "If tracking stalls or a shipment appears lost, reach out and we will investigate the carrier status with you.",
    ],
  },
  {
    title: "Returns",
    body: [
      "Return requests are handled case by case. Because many products include consumable or opened art materials, email us before sending anything back.",
      `For shipping and return questions, contact ${BRAND_EMAIL}.`,
    ],
  },
];

export default function ShippingReturnsPage() {
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
            Shipping & Returns
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,255,255,0.86)" }}>
            This page shares the current fulfillment and support guidance for
            orders placed through {BRAND_NAME}.
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
