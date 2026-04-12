"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";
import { requireSupabasePublicConfig } from "@/lib/supabase/config";

let browserClient: SupabaseClient<Database> | null = null;

export const getSupabaseBrowserClient = () => {
  if (browserClient) {
    return browserClient;
  }

  const { publishableKey, url } = requireSupabasePublicConfig();
  browserClient = createBrowserClient<Database>(url, publishableKey);

  return browserClient;
};
