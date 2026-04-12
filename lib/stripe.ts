import Stripe from "stripe";
import { z } from "zod";
import type { SubscriptionTierKey } from "@/lib/catalog";

const stripeSecretSchema = z.string().min(1);
const stripeWebhookSchema = z.string().min(1);

const priceEnvByTierKey: Record<SubscriptionTierKey, string> = {
  "mini-artist": "STRIPE_PRICE_MINI_ARTIST",
  "creative-explorer": "STRIPE_PRICE_CREATIVE_EXPLORER",
  "master-creator": "STRIPE_PRICE_MASTER_CREATOR",
};

let stripeClient: Stripe | null = null;

export const getStripeClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("Stripe server client can only be used on the server.");
  }

  if (stripeClient) {
    return stripeClient;
  }

  const parsedSecret = stripeSecretSchema.safeParse(process.env.STRIPE_SECRET_KEY);
  if (!parsedSecret.success) {
    throw new Error("Missing STRIPE_SECRET_KEY.");
  }

  stripeClient = new Stripe(parsedSecret.data);
  return stripeClient;
};

export const getStripeWebhookSecret = () => {
  const parsedSecret = stripeWebhookSchema.safeParse(
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (!parsedSecret.success) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET.");
  }

  return parsedSecret.data;
};

export const getStripePriceId = (tierKey: SubscriptionTierKey) => {
  const priceId = process.env[priceEnvByTierKey[tierKey]];
  if (!priceId) {
    throw new Error(`Missing ${priceEnvByTierKey[tierKey]}.`);
  }

  return priceId;
};

export const getStripePriceMap = () => {
  return {
    "mini-artist": getStripePriceId("mini-artist"),
    "creative-explorer": getStripePriceId("creative-explorer"),
    "master-creator": getStripePriceId("master-creator"),
  } satisfies Record<SubscriptionTierKey, string>;
};

export const isStripeConfigured = () => Boolean(process.env.STRIPE_SECRET_KEY);

export const isStripeWebhookConfigured = () => {
  return Boolean(process.env.STRIPE_WEBHOOK_SECRET);
};

export const hasStripeSubscriptionPriceConfig = () => {
  return Object.values(priceEnvByTierKey).every((envKey) => Boolean(process.env[envKey]));
};
