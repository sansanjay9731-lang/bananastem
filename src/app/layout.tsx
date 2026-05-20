import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2D5A35",
};

export const metadata: Metadata = {
  title: "Stem Native — Fresh Banana Stem Delivered | Stem Nativeithandu Online",
  description:
    "India's premium fresh banana stem (Stem Nativeithandu) brand. Ready-to-cook, farm-fresh, cleaned banana stem packs delivered to your door in Bangalore, Pune & Mumbai. Gut health. Detox. Traditional Indian wellness.",
  keywords: [
    "banana stem online",
    "banana stem Bangalore",
    "Stem Nativeithandu delivery",
    "banana stem juice",
    "detox foods India",
    "traditional Indian superfoods",
    "high fiber foods",
    "fresh banana stem pack",
    "banana stem subscription",
    "organic banana stem",
  ],
  openGraph: {
    title: "Stem Native — India's Forgotten Superfood, Delivered Fresh",
    description:
      "Ready-to-cook banana stem packs. Farm fresh. Cleaned and delivered. Start your daily detox.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
