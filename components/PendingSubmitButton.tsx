"use client";

import type { CSSProperties } from "react";
import { useFormStatus } from "react-dom";

type PendingSubmitButtonProps = {
  className?: string;
  label: string;
  pendingLabel?: string;
  style?: CSSProperties;
};

export const PendingSubmitButton = ({
  className,
  label,
  pendingLabel,
  style,
}: PendingSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={className}
      style={style}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? pendingLabel ?? "Working..." : label}
    </button>
  );
};
