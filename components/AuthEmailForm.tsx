"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthMode = "sign-in" | "sign-up";

type AuthEmailFormProps = {
  mode: AuthMode;
  nextPath: string;
};

const copyByMode: Record<
  AuthMode,
  {
    actionLabel: string;
    helperText: string;
    pendingLabel: string;
    successText: string;
    errorText: string;
  }
> = {
  "sign-in": {
    actionLabel: "Email Me a Sign-In Link",
    helperText: "Use the email address tied to your Blue By Art Shop account.",
    pendingLabel: "Sending Sign-In Link...",
    successText:
      "If that email matches an account, check your inbox for a secure sign-in link.",
    errorText:
      "We could not start the sign-in flow right now. Please try again in a moment.",
  },
  "sign-up": {
    actionLabel: "Create Account with Email",
    helperText: "We will email you a secure magic link to finish setting up your account.",
    pendingLabel: "Sending Sign-Up Link...",
    successText: "Check your inbox to confirm your account and continue.",
    errorText:
      "We could not start the email sign-up flow right now. Please try again in a moment.",
  },
};

const isNonRevealingSignInError = (error: { message?: string } | null) => {
  const normalizedMessage = error?.message?.toLowerCase() ?? "";

  return (
    normalizedMessage.includes("signups not allowed") ||
    normalizedMessage.includes("user not found") ||
    normalizedMessage.includes("email not found")
  );
};

export const AuthEmailForm = ({ mode, nextPath }: AuthEmailFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const copy = useMemo(() => copyByMode[mode], [mode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSuccess(false);
    setIsPending(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
      const authOrigin =
        configuredAppUrl && /^https?:\/\//.test(configuredAppUrl)
          ? configuredAppUrl
          : window.location.origin;
      const callbackUrl = new URL("/auth/callback", authOrigin);
      callbackUrl.searchParams.set("next", nextPath);

      const { error: authError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: callbackUrl.toString(),
          shouldCreateUser: mode === "sign-up",
        },
      });

      if (authError) {
        if (mode === "sign-in" && isNonRevealingSignInError(authError)) {
          setIsSuccess(true);
          return;
        }

        throw authError;
      }

      setIsSuccess(true);
    } catch (submissionError) {
      console.error(submissionError);
      setError(copy.errorText);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6 }}>
        {copy.helperText}
      </p>

      <label className="block">
        <span
          className="mb-2 block text-sm font-semibold"
          style={{ color: "#1E293B" }}
        >
          Email address
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-2xl border px-4 py-3 text-base"
          style={{ borderColor: "#CBD5E1", color: "#0F172A" }}
          autoComplete="email"
        />
      </label>

      {error ? (
        <p
          className="rounded-2xl px-4 py-3 text-sm"
          style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
        >
          {error}
        </p>
      ) : null}

      {isSuccess ? (
        <p
          className="rounded-2xl px-4 py-3 text-sm"
          style={{ backgroundColor: "#DCFCE7", color: "#166534" }}
        >
          {copy.successText}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? copy.pendingLabel : copy.actionLabel}
      </button>
    </form>
  );
};
