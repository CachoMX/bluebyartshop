import type { NextConfig } from "next";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const resolveOrigin = (value: string) => {
  try {
    return new URL(value).origin.toLowerCase();
  } catch {
    return "";
  }
};

const configuredStoreUrl = process.env.NEXT_PUBLIC_STORE_URL?.trim() ?? "";
const appOrigin = resolveOrigin(
  process.env.NEXT_PUBLIC_APP_URL?.trim() ?? "https://bluebyartshop.com",
);
const storeOrigin = resolveOrigin(configuredStoreUrl);
const storeUrl =
  configuredStoreUrl && storeOrigin && storeOrigin !== appOrigin
    ? trimTrailingSlash(configuredStoreUrl)
    : "";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    // Only redirect to the WooCommerce store the routes that MUST live there
    // (real account dashboard + Stripe-backed checkout). Keep informational
    // pages (/, /subscribe, /shop, /faq, /about, /contact, etc.) on Next.js.
    const legacyStoreRedirects = storeUrl
      ? [
          {
            source: "/subscribe/checkout",
            destination: `${storeUrl}/checkout`,
            permanent: false,
          },
          {
            source: "/subscribe/checkout/:path*",
            destination: `${storeUrl}/checkout/:path*`,
            permanent: false,
          },
          {
            source: "/account",
            destination: `${storeUrl}/my-account`,
            permanent: false,
          },
          {
            source: "/account/:path*",
            destination: `${storeUrl}/my-account/:path*`,
            permanent: false,
          },
        ]
      : [];

    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      ...legacyStoreRedirects,
    ];
  },
};

export default nextConfig;
