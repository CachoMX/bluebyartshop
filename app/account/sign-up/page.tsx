import Link from "next/link";
import { AuthEmailForm } from "@/components/AuthEmailForm";
import { sanitizeNextPath } from "@/lib/app-url";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AccountSignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
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
          enabling account sign-up.
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
          <p className="eyebrow eyebrow-orange">Create Your Account</p>
          <h1
            className="mt-4 text-4xl"
            style={{
              color: "#1E293B",
              fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            }}
          >
            Start with a Magic Link
          </h1>
          <p className="mt-4 text-base" style={{ color: "#64748B" }}>
            We will email you a secure sign-up link, then bring you back to the
            plan or page you were viewing.
          </p>

          <div className="mt-8">
            <AuthEmailForm mode="sign-up" nextPath={nextPath} />
          </div>

          <p className="mt-6 text-sm" style={{ color: "#64748B" }}>
            Already have an account?{" "}
            <Link
              href={`/account/sign-in?next=${encodeURIComponent(nextPath)}`}
              style={{ color: "#2563EB", fontWeight: 600 }}
            >
              Sign in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
