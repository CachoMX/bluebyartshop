import { z } from "zod";

const publicSupabaseSchema = z.object({
  url: z.string().url(),
  publishableKey: z.string().min(1),
});

const adminSupabaseSchema = publicSupabaseSchema.extend({
  serviceRoleKey: z.string().min(1),
});

const readPublicSupabaseEnv = () => {
  const parsed = publicSupabaseSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });

  return parsed.success ? parsed.data : null;
};

export const getSupabasePublicConfig = () => readPublicSupabaseEnv();

export const requireSupabasePublicConfig = () => {
  const config = readPublicSupabaseEnv();

  if (!config) {
    throw new Error(
      "Missing Supabase browser config. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  return config;
};

export const getSupabaseAdminConfig = () => {
  const parsed = adminSupabaseSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  });

  return parsed.success ? parsed.data : null;
};

export const requireSupabaseAdminConfig = () => {
  const config = getSupabaseAdminConfig();

  if (!config) {
    throw new Error(
      "Missing Supabase admin config. Set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return config;
};

export const isSupabaseConfigured = () => readPublicSupabaseEnv() !== null;
export const isSupabaseAdminConfigured = () => getSupabaseAdminConfig() !== null;
