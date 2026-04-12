import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";
import { requireSupabaseAdminConfig } from "@/lib/supabase/config";

let adminClient: SupabaseClient<Database> | null = null;

export const getSupabaseAdminClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("Supabase admin client can only be used on the server.");
  }

  if (adminClient) {
    return adminClient;
  }

  const { serviceRoleKey, url } = requireSupabaseAdminConfig();
  adminClient = createClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return adminClient;
};
