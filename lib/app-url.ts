import { SITE_URL } from "@/lib/brand";

const trimTrailingSlash = (value: string) => value.replace(/\/$/, "");
const DEFAULT_AFTER_AUTH_PATH = "/subscribe/checkout";
const siteHost = new URL(SITE_URL).host.toLowerCase();
const localHostPattern = /^(localhost|127\.0\.0\.1)(:\d+)?$/i;
const previewHostPattern = /^[a-z0-9-]+\.vercel\.app$/i;

type HeaderLookup = {
  get(name: string): string | null;
};

const isAllowedAppHost = (host: string) => {
  const normalizedHost = host.trim().toLowerCase();

  return (
    normalizedHost === siteHost ||
    normalizedHost.endsWith(`.${siteHost}`) ||
    localHostPattern.test(normalizedHost) ||
    previewHostPattern.test(normalizedHost)
  );
};

const resolveProtocol = (protocol: string | null | undefined, host: string) => {
  const normalizedProtocol = protocol?.replace(":", "").toLowerCase();
  if (normalizedProtocol === "http" || normalizedProtocol === "https") {
    return normalizedProtocol;
  }

  return localHostPattern.test(host) ? "http" : "https";
};

const resolveTrustedOrigin = (
  host: string | null,
  protocol: string | null | undefined,
) => {
  if (!host) {
    return SITE_URL;
  }

  const trimmedHost = host.trim();
  if (!isAllowedAppHost(trimmedHost)) {
    return SITE_URL;
  }

  return `${resolveProtocol(protocol, trimmedHost)}://${trimmedHost}`;
};

const resolveUrlFromHeaders = (headerStore: HeaderLookup) => {
  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? null;
  return resolveTrustedOrigin(host, headerStore.get("x-forwarded-proto"));
};

export const resolveAppUrl = (request?: Request) => {
  if (request) {
    const requestUrl = new URL(request.url);
    const forwardedHost = request.headers.get("x-forwarded-host");
    const host = forwardedHost ?? request.headers.get("host") ?? requestUrl.host;
    return resolveTrustedOrigin(
      host,
      request.headers.get("x-forwarded-proto") ?? requestUrl.protocol,
    );
  }

  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  return configuredUrl ? trimTrailingSlash(configuredUrl) : SITE_URL;
};

export const resolveAppUrlFromHeaders = (headerStore: HeaderLookup) => {
  return resolveUrlFromHeaders(headerStore);
};

export const sanitizeNextPath = (
  value: string | null | undefined,
  fallback = DEFAULT_AFTER_AUTH_PATH,
) => {
  const normalizedValue = value?.trim().replace(/\\/g, "/");

  if (
    !normalizedValue ||
    !normalizedValue.startsWith("/") ||
    normalizedValue.startsWith("//") ||
    /[\u0000-\u001F]/.test(normalizedValue)
  ) {
    return fallback;
  }

  return normalizedValue;
};

export const resolveSafeRedirectUrl = (
  baseUrl: string,
  value: string | null | undefined,
  fallback = DEFAULT_AFTER_AUTH_PATH,
) => {
  const sanitizedPath = sanitizeNextPath(value, fallback);
  const resolvedUrl = new URL(sanitizedPath, baseUrl);

  if (resolvedUrl.origin !== new URL(baseUrl).origin) {
    return new URL(fallback, baseUrl);
  }

  return resolvedUrl;
};
