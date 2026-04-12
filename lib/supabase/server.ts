import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { Database } from "@/lib/database.types";
import { requireSupabasePublicConfig } from "@/lib/supabase/config";

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies();
  const { publishableKey, url } = requireSupabasePublicConfig();

  return createServerClient<Database>(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, options, value }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot always mutate cookies directly.
        }
      },
    },
  });
};
