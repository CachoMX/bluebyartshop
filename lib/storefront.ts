import type { SubscriptionTierKey } from "@/lib/catalog";
import type { Database } from "@/lib/database.types";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

type PublicTables = Database["public"]["Tables"];

type CustomerRow = PublicTables["customers"]["Row"];
type LeadInsert = PublicTables["lead_submissions"]["Insert"];
type OrderInsert = PublicTables["orders"]["Insert"];
type ProfileRow = PublicTables["profiles"]["Row"];
type SubscriptionInsert = PublicTables["subscriptions"]["Insert"];
type SubscriptionRow = PublicTables["subscriptions"]["Row"];

const normalizeEmail = (value: string) => value.trim().toLowerCase();

const requireData = <T>(data: T | null, tableName: string) => {
  if (!data) {
    throw new Error(`Missing ${tableName} response data.`);
  }

  return data;
};

export const getProfileByUserId = async (userId: string) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as ProfileRow | null;
};

export const upsertProfile = async ({
  email,
  fullName,
  userId,
}: {
  email: string;
  fullName?: string | null;
  userId: string;
}) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: userId,
        email: normalizeEmail(email),
        full_name: fullName ?? null,
      },
      { onConflict: "id" },
    )
    .select()
    .single();

  if (error) {
    throw error;
  }

  return requireData(data as ProfileRow | null, "profiles");
};

export const getCustomerByUserId = async (userId: string) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as CustomerRow | null;
};

export const getCustomerByStripeCustomerId = async (stripeCustomerId: string) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("stripe_customer_id", stripeCustomerId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as CustomerRow | null;
};

export const upsertCustomer = async ({
  stripeCustomerId,
  userId,
}: {
  stripeCustomerId: string;
  userId: string;
}) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("customers")
    .upsert(
      {
        stripe_customer_id: stripeCustomerId,
        user_id: userId,
      },
      { onConflict: "user_id" },
    )
    .select()
    .single();

  if (error) {
    throw error;
  }

  return requireData(data as CustomerRow | null, "customers");
};

export const getSubscriptionsByUserId = async (userId: string) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as SubscriptionRow[];
};

export const getSubscriptionByStripeSubscriptionId = async (
  stripeSubscriptionId: string,
) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("stripe_subscription_id", stripeSubscriptionId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as SubscriptionRow | null;
};

export const upsertSubscription = async (
  subscription: Omit<SubscriptionInsert, "metadata"> & {
    metadata?: SubscriptionInsert["metadata"];
    tier_key?: SubscriptionTierKey | null;
  },
) => {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("subscriptions")
    .upsert(
      {
        ...subscription,
        metadata: subscription.metadata ?? {},
        tier_key: subscription.tier_key ?? null,
      },
      { onConflict: "stripe_subscription_id" },
    )
    .select()
    .single();

  if (error) {
    throw error;
  }

  return requireData(data as SubscriptionRow | null, "subscriptions");
};

export const upsertOrder = async (order: OrderInsert) => {
  const supabase = getSupabaseAdminClient();
  const payload = {
    ...order,
    currency: order.currency ?? "usd",
    metadata: order.metadata ?? {},
    status: order.status ?? "pending",
  } satisfies OrderInsert;

  const query = supabase.from("orders");

  if (payload.stripe_checkout_session_id) {
    const { data, error } = await query
      .upsert(payload, { onConflict: "stripe_checkout_session_id" })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return requireData(data, "orders");
  }

  if (payload.stripe_payment_intent_id) {
    const { data, error } = await query
      .upsert(payload, { onConflict: "stripe_payment_intent_id" })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return requireData(data, "orders");
  }

  const { data, error } = await query.insert(payload).select().single();
  if (error) {
    throw error;
  }

  return requireData(data, "orders");
};

export const createLeadSubmission = async (lead: LeadInsert) => {
  const supabase = getSupabaseAdminClient();
  const payload = {
    ...lead,
    email: normalizeEmail(lead.email),
    source: lead.source ?? "site",
    status: lead.status ?? "new",
  } satisfies LeadInsert;

  const { data, error } = await supabase
    .from("lead_submissions")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return requireData(data, "lead_submissions");
};

export const createContactSubmission = async (
  contact: PublicTables["contact_submissions"]["Insert"],
) => {
  const supabase = getSupabaseAdminClient();
  const payload = {
    ...contact,
    email: normalizeEmail(contact.email),
    status: contact.status ?? "new",
  } satisfies PublicTables["contact_submissions"]["Insert"];

  const { data, error } = await supabase
    .from("contact_submissions")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return requireData(data, "contact_submissions");
};
