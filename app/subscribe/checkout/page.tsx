import Link from "next/link";

export default function CheckoutPlaceholderPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="text-8xl mb-6">🛒</div>
      <h1
        className="text-4xl sm:text-5xl mb-4"
        style={{
          color: "#1E3A8A",
          fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
        }}
      >
        Checkout Coming Soon!
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        We&apos;re setting up a secure checkout experience. In the meantime, reach out to us
        directly and we&apos;ll get you started right away.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
          style={{ backgroundColor: "#FF9F1C" }}
        >
          Contact Us to Order
        </Link>
        <Link
          href="/subscribe"
          className="px-8 py-4 rounded-full font-bold border-2 transition-all hover:bg-blue-900 hover:text-white"
          style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}
        >
          Back to Plans
        </Link>
      </div>
    </div>
  );
}
