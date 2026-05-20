"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const footerLinks = {
  "The Range": [
    { label: "Daily Detox Pack", href: "#products" },
    { label: "Morning Juice Pack", href: "#products" },
    { label: "Gut Wellness Pack", href: "#products" },
    { label: "Native Cleanse Box", href: "#subscription" },
  ],
  "Learn": [
    { label: "Our Story", href: "#why-banana-stem" },
    { label: "Health Benefits", href: "#benefits" },
    { label: "Recipes", href: "#recipes" },
    { label: "FAQs", href: "#faq" },
  ],
  "Connect": [
    { label: "Order on WhatsApp", href: "https://wa.me/919999999999" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Subscribe", href: "#subscription" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1F1F1F", color: "#F7F4EE" }}>
      <div className="container-xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="font-serif tracking-[0.3em] text-base uppercase mb-1"
                style={{ color: "#F7F4EE" }}>
                Stem Native
              </p>
              <p className="text-label" style={{ color: "#5E7A63", fontSize: "0.6rem" }}>
                Rooted In Wellness.
              </p>
            </div>

            <p className="text-caption mb-6 leading-loose max-w-xs"
              style={{ color: "#7A7A72", lineHeight: 2 }}>
              India&apos;s premium wellness food brand reviving forgotten Indian superfoods for 
              the modern kitchen. Farm-fresh. Pre-cleaned. Delivered.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <MapPin size={13} style={{ color: "#5E7A63" }} />
                <span className="text-caption" style={{ color: "#7A7A72" }}>
                  Bangalore · Pune · Mumbai
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} style={{ color: "#5E7A63" }} />
                <a href="tel:+919999999999" className="text-caption"
                  style={{ color: "#7A7A72", textDecoration: "none" }}>
                  +91 99999 99999
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              {[
                { label: "IG", href: "https://instagram.com" },
                { label: "WA", href: "https://wa.me/919999999999" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-xs font-medium transition-all duration-300"
                  style={{
                    border: "1px solid rgba(94,122,99,0.4)",
                    color: "#5E7A63",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#5E7A63";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#5E7A63";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-label mb-6" style={{ color: "#5E7A63" }}>{category}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-caption transition-colors duration-200"
                      style={{ color: "#7A7A72", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#F7F4EE")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#7A7A72")}
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

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(94,122,99,0.15)" }}>
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption" style={{ color: "#3A3A3A" }}>
            © 2024 Stem Native. All rights reserved.
          </p>
          <p className="text-caption" style={{ color: "#3A3A3A" }}>
            Farm Fresh · Chemical Free · Rooted In Tradition
          </p>
        </div>
      </div>
    </footer>
  );
}
