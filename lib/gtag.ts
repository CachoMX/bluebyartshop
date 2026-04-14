/**
 * lib/gtag.ts — Google Ads conversion tracking helpers
 *
 * Tag ID: AW-18082837734
 * GA4 Measurement ID (main site): G-D5X4QJHQYS
 * Conversion actions created 2026-04-11 via Google Ads API.
 */

export const GA_AW_ID = 'AW-18082837734';
export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-D5X4QJHQYS';

export const CONVERSION_LABELS = {
  purchase:      'QOSCCMOrtpocEObpyK5D',
  subscribe:     'htE9CMartpocEObpyK5D',
  addToCart:     'G9drCPGstpocEObpyK5D',
  beginCheckout: 'OtezCMunz5ocEObpyK5D',
  lead:          'NBwiCPeny5ocEObpyK5D',
} as const;

type GtagCommand = 'config' | 'event';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function gtag(command: GtagCommand, ...args: unknown[]): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag(command, ...args);
}

export function fireConversion(
  label: string,
  opts: { value?: number; currency?: string; transactionId?: string } = {}
): void {
  gtag('event', 'conversion', {
    send_to: `${GA_AW_ID}/${label}`,
    ...(opts.value !== undefined && { value: opts.value }),
    ...(opts.currency && { currency: opts.currency }),
    ...(opts.transactionId && { transaction_id: opts.transactionId }),
  });
}

export function firePurchase(opts: {
  value: number;
  currency?: string;
  transactionId?: string;
}): void {
  fireConversion(CONVERSION_LABELS.purchase, opts);
}

export function fireSubscribe(opts: {
  value: number;
  currency?: string;
}): void {
  fireConversion(CONVERSION_LABELS.subscribe, opts);
}

export function fireBeginCheckout(opts: { value?: number } = {}): void {
  fireConversion(CONVERSION_LABELS.beginCheckout, opts);
}

export function fireAddToCart(opts: { value?: number } = {}): void {
  fireConversion(CONVERSION_LABELS.addToCart, opts);
}
