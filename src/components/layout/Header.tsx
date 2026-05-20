"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#why-banana-stem" },
  { label: "Products", href: "#products" },
  { label: "Detox Plans", href: "#subscription" },
  { label: "Recipes", href: "#recipes" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col items-start">
          <span
            className="font-serif tracking-[0.25em] text-sm font-medium uppercase"
            style={{ color: "#1F1F1F", letterSpacing: "0.3em" }}
          >
            Stem Native
          </span>
          <span
            className="text-label"
            style={{ color: "#AFC3B0", fontSize: "0.55rem", letterSpacing: "0.2em" }}
          >
            Rooted In Wellness.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-label transition-all duration-300"
              style={{ color: "#7A7A72" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1F1F1F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7A72")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Stem%20Native"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.625rem 1.5rem", fontSize: "0.75rem" }}
          >
            Order Fresh
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          style={{ color: "#1F1F1F" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t px-6 py-8 flex flex-col gap-5"
          style={{ borderColor: "rgba(217,199,174,0.4)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-label"
              style={{ color: "#3A3A3A", letterSpacing: "0.15em" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 justify-center"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
