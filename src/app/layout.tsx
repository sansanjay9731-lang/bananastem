import type { Metadata, Viewport } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5E7A63",
};

export const metadata: Metadata = {
  title: "Stem Native — Rooted In Wellness | Fresh Banana Stem Delivered",
  description:
    "Stem Native is India's premium wellness food brand reviving forgotten Indian superfoods. Farm-fresh, pre-cleaned banana stem (Vazhaithandu) delivered to your door in Bangalore, Pune & Mumbai. Daily detox. Gut wellness. Traditional nutrition, made modern.",
  keywords: [
    "Stem Native",
    "banana stem online",
    "banana stem Bangalore",
    "vazhaithandu delivery",
    "banana stem juice",
    "detox foods India",
    "traditional Indian superfoods",
    "high fiber foods",
    "Indian wellness brand",
    "fresh banana stem subscription",
    "gut health foods India",
    "Ayurvedic superfoods",
    "banana stem powder",
    "rooted in wellness",
  ],
  openGraph: {
    title: "Stem Native — India's Forgotten Superfood, Delivered Fresh",
    description:
      "Premium banana stem packs. Farm fresh. Pre-cleaned. Delivered. Start your daily detox ritual with Stem Native.",
    type: "website",
    locale: "en_IN",
    siteName: "Stem Native",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          background: "#F7F4EE",
          color: "#1F1F1F",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
