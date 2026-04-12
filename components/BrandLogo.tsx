import Image from "next/image";
import {
  BRAND_LOGO_ALT,
  BRAND_LOGO_HEIGHT,
  BRAND_LOGO_PATH,
  BRAND_LOGO_WIDTH,
} from "@/lib/brand";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  width?: number;
};

export const BrandLogo = ({
  className,
  priority = false,
  width = BRAND_LOGO_WIDTH,
}: BrandLogoProps) => {
  const height = Math.round((width / BRAND_LOGO_WIDTH) * BRAND_LOGO_HEIGHT);

  return (
    <Image
      src={BRAND_LOGO_PATH}
      alt={BRAND_LOGO_ALT}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
};
