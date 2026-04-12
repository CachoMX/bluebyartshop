export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          inquiry_type: string;
          message: string;
          name: string;
          order_interest: string | null;
          status: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          inquiry_type: string;
          message: string;
          name: string;
          order_interest?: string | null;
          status?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          inquiry_type?: string;
          message?: string;
          name?: string;
          order_interest?: string | null;
          status?: string;
        };
        Relationships: [];
      };
      customers: {
        Row: {
          created_at: string;
          stripe_customer_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          stripe_customer_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          stripe_customer_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      lead_submissions: {
        Row: {
          child_age_range: string | null;
          created_at: string;
          email: string;
          first_name: string | null;
          id: string;
          interest: string | null;
          message: string | null;
          source: string;
          status: string;
        };
        Insert: {
          child_age_range?: string | null;
          created_at?: string;
          email: string;
          first_name?: string | null;
          id?: string;
          interest?: string | null;
          message?: string | null;
          source?: string;
          status?: string;
        };
        Update: {
          child_age_range?: string | null;
          created_at?: string;
          email?: string;
          first_name?: string | null;
          id?: string;
          interest?: string | null;
          message?: string | null;
          source?: string;
          status?: string;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          amount_total: number | null;
          created_at: string;
          currency: string;
          id: string;
          metadata: Json;
          order_type: "one_time" | "subscription";
          product_slug: string | null;
          status: string;
          stripe_checkout_session_id: string | null;
          stripe_customer_id: string | null;
          stripe_payment_intent_id: string | null;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          amount_total?: number | null;
          created_at?: string;
          currency?: string;
          id?: string;
          metadata?: Json;
          order_type: "one_time" | "subscription";
          product_slug?: string | null;
          status?: string;
          stripe_checkout_session_id?: string | null;
          stripe_customer_id?: string | null;
          stripe_payment_intent_id?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          amount_total?: number | null;
          created_at?: string;
          currency?: string;
          id?: string;
          metadata?: Json;
          order_type?: "one_time" | "subscription";
          product_slug?: string | null;
          status?: string;
          stripe_checkout_session_id?: string | null;
          stripe_customer_id?: string | null;
          stripe_payment_intent_id?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          email: string;
          full_name: string | null;
          id: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          full_name?: string | null;
          id: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          full_name?: string | null;
          id?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean;
          canceled_at: string | null;
          created_at: string;
          current_period_end: string | null;
          current_period_start: string | null;
          id: string;
          metadata: Json;
          status: string;
          stripe_customer_id: string | null;
          stripe_price_id: string | null;
          stripe_subscription_id: string;
          tier_key: string | null;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          cancel_at_period_end?: boolean;
          canceled_at?: string | null;
          created_at?: string;
          current_period_end?: string | null;
          current_period_start?: string | null;
          id?: string;
          metadata?: Json;
          status: string;
          stripe_customer_id?: string | null;
          stripe_price_id?: string | null;
          stripe_subscription_id: string;
          tier_key?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          cancel_at_period_end?: boolean;
          canceled_at?: string | null;
          created_at?: string;
          current_period_end?: string | null;
          current_period_start?: string | null;
          id?: string;
          metadata?: Json;
          status?: string;
          stripe_customer_id?: string | null;
          stripe_price_id?: string | null;
          stripe_subscription_id?: string;
          tier_key?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
