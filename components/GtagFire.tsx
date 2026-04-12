'use client';

import { useEffect } from 'react';
import { fireConversion, CONVERSION_LABELS } from '@/lib/gtag';

type ConversionName = keyof typeof CONVERSION_LABELS;

interface Props {
  event: ConversionName;
  value?: number;
  currency?: string;
  transactionId?: string;
}

/**
 * GtagFire — fires a Google Ads conversion event once on mount.
 * Renders nothing. Drop it into any server component page.
 *
 * Example:
 *   <GtagFire event="subscribe" value={19.99} currency="USD" />
 */
export function GtagFire({ event, value, currency, transactionId }: Props) {
  useEffect(() => {
    fireConversion(CONVERSION_LABELS[event], { value, currency, transactionId });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
