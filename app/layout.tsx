import type { Metadata } from "next";
import { Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fredokaOne = Fredoka({
  weight: ["400", "600", "700"],
  variable: "--font-fredoka-one",
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue By Art Shop | Kids Art Subscription & Shop",
  description:
    "Where Little Hands Create Big Wonders. Safe, fun art kits for kids 5-12. Monthly subscriptions and one-time art kits delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredokaOne.variable} ${baloo2.variable} antialiased`}
        style={{ fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
