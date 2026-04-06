"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Subscribe", href: "/subscribe" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#1E3A8A" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span
              className="text-white text-xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Blue By Art Shop
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#FF9F1C",
                color: "#fff",
                fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
              }}
            >
              Start Creating ✨
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#162d6e" }} className="md:hidden px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-blue-100 hover:text-white font-medium text-base"
              style={{ fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-2 rounded-full text-center text-sm font-bold"
            style={{
              backgroundColor: "#FF9F1C",
              color: "#fff",
              fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
            }}
          >
            Start Creating ✨
          </Link>
        </div>
      )}
    </nav>
  );
}
