'use client';

import Script from 'next/script';
import { GA_AW_ID } from '@/lib/gtag';

/**
 * GoogleAdsTag — loads the global gtag.js script.
 * Add once to app/layout.tsx inside <head> or after <body>.
 */
export function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_AW_ID}');
        `}
      </Script>
    </>
  );
}
