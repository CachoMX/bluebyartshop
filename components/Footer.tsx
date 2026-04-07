import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2563EB" }} className="text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🎨</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
              >
                Blue By Art Shop
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Where Little Hands Create Big Wonders. Safe, fun art kits for kids 5–12, delivered monthly.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Shop
            </h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?cat=plaster" className="hover:text-white transition-colors">Plaster Kits</Link></li>
              <li><Link href="/shop?cat=coloring" className="hover:text-white transition-colors">Coloring Books</Link></li>
              <li><Link href="/shop?cat=party" className="hover:text-white transition-colors">Party Kits</Link></li>
              <li><Link href="/shop?cat=wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Company
            </h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/subscribe" className="hover:text-white transition-colors">Subscriptions</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-lg font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
            >
              Follow Along
            </h4>
            <div className="flex gap-3">
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "📸", label: "Instagram" },
                { icon: "🎵", label: "TikTok" },
                { icon: "▶️", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: "rgba(212,247,247,0.2)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Tag us <span className="font-semibold" style={{ color: "#D4F7F7" }}>#BlueByArtShop</span> to be featured!
            </p>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Blue By Art Shop — A VIXI Company. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
