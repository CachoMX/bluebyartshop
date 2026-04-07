import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Blue By Art Shop",
  description: "The page you were looking for doesn't exist. Browse our kids art kits or return home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#F0F7FF" }}
    >
      <div className="max-w-lg mx-auto text-center py-24">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-6"
          style={{ background: "linear-gradient(135deg, #2563EB, #0390AC)" }}
        >
          🎨
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#1E293B",
          }}
        >
          Oops! Page Not Found
        </h1>

        <p className="mb-3" style={{ color: "#334155", fontSize: "1.125rem", lineHeight: 1.7 }}>
          Looks like this page wandered off to paint something. Let&apos;s get you back to creating!
        </p>

        <p className="mb-10 text-sm" style={{ color: "#94A3B8" }}>
          Error 404 — The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            Go Home →
          </Link>
          <Link
            href="/shop"
            className="btn-outline"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            Browse the Shop
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm" style={{ color: "#64748B" }}>
          <Link href="/subscribe" style={{ color: "#2563EB" }}>Subscriptions</Link>
          <span style={{ color: "#CBD5E1" }}>·</span>
          <Link href="/about" style={{ color: "#2563EB" }}>About Us</Link>
          <span style={{ color: "#CBD5E1" }}>·</span>
          <Link href="/contact" style={{ color: "#2563EB" }}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
