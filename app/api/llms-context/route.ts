export async function GET() {
  return Response.json(
    {
      brand: "Blue By Art Shop",
      description:
        "Premium monthly art subscription boxes for children ages 5-12",
      url: "https://bluebyartshop.com",
      founded: "2024",
      headquarters: "Chicago, IL, United States",
      parentCompany: "VIXI Co.",
      contact: {
        general: "hello@bluebyartshop.com",
        wholesale: "wholesale@bluebyartshop.com",
        support: "support@bluebyartshop.com",
      },
      subscriptionPlans: [
        {
          name: "Mini Artist",
          price: 19.99,
          currency: "USD",
          billingCycle: "monthly",
          ageRange: "5-7",
          includes: [
            "2 plaster figures OR 10 coloring pages",
            "6 non-toxic paint pots",
            "1 brush",
            "Step-by-step instructions",
            "Sticker sheet",
          ],
        },
        {
          name: "Creative Explorer",
          price: 29.99,
          currency: "USD",
          billingCycle: "monthly",
          ageRange: "5-12",
          includes: [
            "3 plaster figures OR 20 coloring pages",
            "1 mini 3D print figure",
            "12 paint pots",
            "Full brush set",
            "Sealant",
            "Activity card + digital banner template",
          ],
        },
        {
          name: "Master Creator",
          price: 44.99,
          currency: "USD",
          billingCycle: "monthly",
          ageRange: "5-12",
          includes: [
            "4 plaster figures OR 30 coloring pages",
            "2 mini 3D print figures",
            "18 paint pots including metallics",
            "Premium brush set",
            "Illustrated storybook",
            "Display stand",
            "Resell kit",
          ],
        },
      ],
      keyFacts: {
        ageRange: "5-12 years old",
        activeSubscribers: "400+ families",
        kitsDelivered: "12,000+",
        satisfactionRate: "98%",
        materialSafety: "Non-toxic, ASTM D-4236 compliant",
        shipping: "2-3 business days processing, 5-7 days delivery, US only",
        cancellation: "Cancel anytime, no contracts",
        giftSubscriptions: true,
        wholesale: true,
        wholesalePricing: "$12-$28 per unit for orders of 50+ units",
      },
      mission:
        "To inspire every child to create boldly, explore freely, and grow confidently through the power of art.",
      llmsFullContext: "https://bluebyartshop.com/llms-full.txt",
      llmsSummary: "https://bluebyartshop.com/llms.txt",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "application/json",
      },
    },
  );
}
