import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_TAGLINE,
  WHOLESALE_EMAIL,
} from "@/lib/brand";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2563EB" }} className="text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="mb-3 inline-flex items-center"
              aria-label={`${BRAND_NAME} home`}
            >
              <BrandLogo width={152} className="h-12 w-auto" />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.875rem", lineHeight: 1.65 }}>
              {BRAND_TAGLINE} Safe, fun art kits for kids 5–12, delivered monthly.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white" role="heading" aria-level={3}
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Shop
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?cat=plaster" className="hover:text-white transition-colors">Plaster Kits</Link></li>
              <li><Link href="/shop?cat=coloring" className="hover:text-white transition-colors">Coloring Books</Link></li>
              <li><Link href="/shop?cat=3d" className="hover:text-white transition-colors">3D Print Figures</Link></li>
              <li><Link href="/shop?cat=party" className="hover:text-white transition-colors">Party Kits</Link></li>
              <li><Link href="/shop?cat=wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white" role="heading" aria-level={3}
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Company
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/subscribe" className="hover:text-white transition-colors">Subscriptions</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white" role="heading" aria-level={3}
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Support
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              <li><Link href="/account" className="hover:text-white transition-colors">Account Dashboard</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href={`mailto:${BRAND_EMAIL}`} className="hover:text-white transition-colors">{BRAND_EMAIL}</a></li>
              <li><a href={`mailto:${WHOLESALE_EMAIL}`} className="hover:text-white transition-colors">{WHOLESALE_EMAIL}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
