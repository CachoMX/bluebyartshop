"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const transforms: Record<string, string> = {
    up: "translateY(28px)",
    down: "translateY(-28px)",
    left: "translateX(28px)",
    right: "translateX(-28px)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: React.ReactNode[];
  className?: string;
  baseDelay?: number;
  staggerMs?: number;
  direction?: AnimateInProps["direction"];
  itemClassName?: string;
}

export function StaggerIn({
  children,
  className = "",
  baseDelay = 0,
  staggerMs = 100,
  direction = "up",
  itemClassName = "",
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <AnimateIn
          key={i}
          delay={baseDelay + i * staggerMs}
          direction={direction}
          className={itemClassName}
        >
          {child}
        </AnimateIn>
      ))}
    </div>
  );
}
