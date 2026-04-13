import { SITE_URL } from "@/lib/brand";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const resolveOrigin = (value: string) => {
  try {
    return new URL(value).origin.toLowerCase();
  } catch {
    return "";
  }
};

const rawStoreUrl = process.env.NEXT_PUBLIC_STORE_URL?.trim() ?? "";
const appOrigin = resolveOrigin(process.env.NEXT_PUBLIC_APP_URL?.trim() ?? SITE_URL);
const storeOrigin = resolveOrigin(rawStoreUrl);

export const STORE_URL =
  rawStoreUrl && storeOrigin && storeOrigin !== appOrigin
    ? trimTrailingSlash(rawStoreUrl)
    : "";

export const hasExternalStore = Boolean(STORE_URL);

export const getStoreUrl = (path: string, fallbackPath: string) => {
  if (!hasExternalStore) {
    return fallbackPath;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${STORE_URL}${normalizedPath}`;
};

export const getStoreShopUrl = (fallbackPath = "/shop") =>
  getStoreUrl("/shop", fallbackPath);

export const getStoreAccountUrl = (fallbackPath = "/account") =>
  getStoreUrl("/my-account", fallbackPath);
