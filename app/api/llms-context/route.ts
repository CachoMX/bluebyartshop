import { subscriptionTiers } from "@/lib/catalog";
import {
  BRAND_DESCRIPTION,
  BRAND_EMAIL,
  BRAND_NAME,
  SITE_URL,
  WHOLESALE_EMAIL,
} from "@/lib/brand";

export async function GET() {
  return Response.json(
    {
      brand: BRAND_NAME,
      description: BRAND_DESCRIPTION,
      url: SITE_URL,
      contact: {
        general: BRAND_EMAIL,
        wholesale: WHOLESALE_EMAIL,
      },
      subscriptionPlans: subscriptionTiers.map((tier) => ({
        name: tier.name,
        price: tier.monthlyPrice,
        shipping: tier.shippingPrice,
        currency: "USD",
        billingCycle: "monthly",
        ageRange: `${tier.suggestedMinAge} and up`,
        comingSoon: tier.comingSoon ?? false,
        includes: tier.features
          .filter((feature) => feature.included)
          .map((feature) => feature.label),
      })),
      keyFacts: {
        ageRange: "4 and up",
        subscriptionCount: subscriptionTiers.length,
        cancellation: "Manage billing and cancellations from the account dashboard and Stripe billing portal when available.",
        policyPages: {
          privacy: `${SITE_URL}/privacy`,
          shippingReturns: `${SITE_URL}/shipping-returns`,
          terms: `${SITE_URL}/terms`,
        },
        wholesale: true,
      },
      mission:
        "Help kids explore creativity through hands-on art kits, subscriptions, and project-based making.",
      llmsFullContext: `${SITE_URL}/llms-full.txt`,
      llmsSummary: `${SITE_URL}/llms.txt`,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "application/json",
      },
    },
  );
}
