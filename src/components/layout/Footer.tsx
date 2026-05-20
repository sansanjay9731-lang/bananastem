"use client";

import Link from "next/link";
import { Leaf, Camera, MapPin, Phone } from "lucide-react";


const footerLinks = {
  Products: [
    { label: "500g Fresh Pack", href: "/products/pack-500g" },
    { label: "1kg Family Pack", href: "/products/pack-1kg" },
    { label: "Juice Ready Pack", href: "/products/juice-pack" },
    { label: "Weekly Subscription", href: "/products/weekly-sub" },
  ],
  Learn: [
    { label: "Why Banana Stem?", href: "/#why-banana-stem" },
    { label: "Health Benefits", href: "/#benefits" },
    { label: "Recipes", href: "/#recipes" },
    { label: "Journal & Blog", href: "/blog" },
    { label: "FAQs", href: "/#faq" },
  ],
  Connect: [
    { label: "Order on WhatsApp", href: "https://wa.me/919999999999" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A3A20" }} className="text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #4A7A50, #7A9E7E)" }}>
                <Leaf size={18} className="text-white" />
              </div>
              <div>
                <span className="font-semibold text-xl text-white">Vazha</span>
                <span className="text-label text-xs block leading-none" style={{ color: "#A8C5AC" }}>Wellness</span>
              </div>
            </div>
            <p className="text-body-lg mb-6 leading-relaxed" style={{ color: "#A8C5AC", fontSize: "0.95rem" }}>
              India&apos;s forgotten superfood, delivered fresh to your kitchen. 
              Premium cleaned banana stem packs for your daily detox and wellness ritual.
            </p>
            <div className="flex items-center gap-2 mb-3" style={{ color: "#7A9E7E" }}>
              <MapPin size={15} />
              <span style={{ fontSize: "0.875rem", color: "#A8C5AC" }}>Serving Bangalore, Pune & Mumbai</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "#7A9E7E" }}>
              <Phone size={15} />
              <a href="tel:+919999999999" style={{ fontSize: "0.875rem", color: "#A8C5AC" }}>+91 99999 99999</a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(168,197,172,0.15)", border: "1px solid rgba(168,197,172,0.2)" }}
              >
                <Camera size={18} style={{ color: "#A8C5AC" }} />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(37,211,102,0.2)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" style={{ color: "#FDFAF5", letterSpacing: "0.05em", fontSize: "0.875rem" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 text-sm"
                      style={{ color: "#A8C5AC" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FDFAF5")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#A8C5AC")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(168,197,172,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "#7A9E7E", fontSize: "0.8rem" }}>
            © 2024 Vazha Wellness. All rights reserved.
          </p>
          <p style={{ color: "#7A9E7E", fontSize: "0.8rem" }}>
            Farm Fresh · Chemical Free · Tradition Preserved
          </p>
        </div>
      </div>
    </footer>
  );
}
