"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { BRAND_NAME } from "@/lib/brand";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Subscribe", href: "/subscribe" },
  { label: "Account", href: "/account" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center"
            aria-label={`${BRAND_NAME} home`}
          >
            <BrandLogo
              width={132}
              priority
              className="h-10 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{
                  color: "#334155",
                  fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#2563EB";
                  e.currentTarget.style.backgroundColor = "#EBF5FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#334155";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="ml-3 btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.875rem" }}
            >
              Start Creating ✨
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl transition-colors duration-150"
            style={{ color: "#334155" }}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-5 pt-2 border-t"
          style={{ borderColor: "#E2E8F0", backgroundColor: "rgba(255,255,255,0.98)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150"
                style={{
                  color: "#334155",
                  fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Start Creating ✨
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
