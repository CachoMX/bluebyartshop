import Link from "next/link";
import { AuthEmailForm } from "@/components/AuthEmailForm";
import { sanitizeNextPath } from "@/lib/app-url";
import { isSupabaseConfigured } from "@/lib/supabase/config";

const authMessageByKey: Record<string, string> = {
  callback_failed:
    "That email link could not finish signing you in. Request a fresh link below.",
  missing_code:
    "That email link was incomplete. Request a fresh link below.",
};

export default async function AccountSignInPage({
  searchParams,
}: {
  searchParams: Promise<{ auth_error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const nextPath = sanitizeNextPath(params.next);

  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1
          className="mb-4 text-4xl"
          style={{
            color: "#1E293B",
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
          }}
        >
          Supabase Is Not Connected Yet
        </h1>
        <p className="mb-6 text-base" style={{ color: "#64748B" }}>
          Add the Supabase environment variables from `.env.example` before
          enabling account sign-in.
        </p>
        <Link href="/subscribe" className="btn-primary">
          Back to Plans
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="card p-8">
          <p className="eyebrow eyebrow-blue">Account Access</p>
          <h1
            className="mt-4 text-4xl"
            style={{
              color: "#1E293B",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Sign In with Email
          </h1>
          <p className="mt-4 text-base" style={{ color: "#64748B" }}>
            We will send a secure magic link so you can continue to your
            dashboard or checkout without creating a password.
          </p>

          {params.auth_error && authMessageByKey[params.auth_error] ? (
            <p
              className="mt-6 rounded-2xl px-4 py-3 text-sm"
              style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
            >
              {authMessageByKey[params.auth_error]}
            </p>
          ) : null}

          <div className="mt-8">
            <AuthEmailForm mode="sign-in" nextPath={nextPath} />
          </div>

          <p className="mt-6 text-sm" style={{ color: "#64748B" }}>
            New here?{" "}
            <Link
              href={`/account/sign-up?next=${encodeURIComponent(nextPath)}`}
              style={{ color: "#2563EB", fontWeight: 600 }}
            >
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
