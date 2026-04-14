'use client';

import Script from 'next/script';
import { GA4_MEASUREMENT_ID, GA_AW_ID } from '@/lib/gtag';

const primaryTagId = GA4_MEASUREMENT_ID || GA_AW_ID;
const configCommands = [
  GA4_MEASUREMENT_ID ? `gtag('config', '${GA4_MEASUREMENT_ID}');` : '',
  `gtag('config', '${GA_AW_ID}');`,
]
  .filter(Boolean)
  .join('\n');

/**
 * GoogleAdsTag — loads the global gtag.js script.
 * Add once to app/layout.tsx inside <head> or after <body>.
 */
export function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configCommands}
        `}
      </Script>
    </>
  );
}
