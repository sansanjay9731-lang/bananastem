"use client";

import { ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Stem Native%20Wellness"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-2xl shadow-2xl hover:shadow-green-900/20 hover:-translate-y-1 transition-all group"
        style={{ boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.4)" }}
      >
        <div className="relative">
          <ShoppingBag size={20} strokeWidth={2.5} />
          <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-[#25D366] rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider opacity-90 leading-tight">Order Now</span>
          <span className="text-[10px] opacity-75 font-medium leading-tight">via WhatsApp</span>
        </div>
        <ArrowRight size={16} className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
