"use client";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

type MarketingImageProps = ImageProps & {
  fallbackBg?: string;
  fallbackEmoji?: string;
};

export const MarketingImage = ({
  alt,
  className,
  fallbackBg = "linear-gradient(135deg, #DBEAFE, #E0F2FE)",
  fallbackEmoji,
  fill,
  style,
  ...imageProps
}: MarketingImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-label={alt}
        className={className}
        role="img"
        style={{
          ...style,
          background: fallbackBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          inset: fill ? 0 : undefined,
          position: fill ? "absolute" : "relative",
        }}
      >
        {fallbackEmoji ? (
          <span aria-hidden="true" style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
            {fallbackEmoji}
          </span>
        ) : (
          <BrandLogo width={200} className="h-auto w-40 max-w-[60%]" />
        )}
      </div>
    );
  }

  return (
    <Image
      {...imageProps}
      alt={alt}
      className={className}
      fill={fill}
      style={style}
      onError={() => setHasError(true)}
    />
  );
};
