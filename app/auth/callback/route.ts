import { NextResponse } from "next/server";
import {
  resolveAppUrl,
  resolveSafeRedirectUrl,
  sanitizeNextPath,
} from "@/lib/app-url";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const errorCode = requestUrl.searchParams.get("error_code");
  const baseUrl = resolveAppUrl(request);
  const nextPath = sanitizeNextPath(requestUrl.searchParams.get("next"));
  const redirectToSignIn = (reason: string) => {
    const signInUrl = new URL("/account/sign-in", baseUrl);
    signInUrl.searchParams.set("next", nextPath);
    signInUrl.searchParams.set("auth_error", reason);
    return NextResponse.redirect(signInUrl);
  };

  if (errorCode) {
    return redirectToSignIn(errorCode);
  }

  if (!code) {
    return redirectToSignIn("missing_code");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return redirectToSignIn("callback_failed");
  }

  return NextResponse.redirect(resolveSafeRedirectUrl(baseUrl, nextPath));
}
