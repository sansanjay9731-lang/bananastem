"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Stem%20Native"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 animate-wa-pulse ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.5} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-[#1F1F1F] text-[#F7F4EE] text-xs font-medium px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 transition-opacity duration-300 pointer-events-none">
        Order Fresh 🌿
      </span>
      
      <style jsx>{`
        a:hover span {
          opacity: 1;
        }
      `}</style>
    </a>
  );
}
