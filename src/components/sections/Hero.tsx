"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden gradient-hero">
      {/* Background Texture */}
      <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />

      {/* Decorative Botanical Lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D9C7AE] to-transparent opacity-30" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D9C7AE] to-transparent opacity-30" />

      <div className="container-xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8" style={{ background: "#5E7A63" }} />
            <span className="text-label" style={{ color: "#5E7A63" }}>
              The Daily Detox Ritual
            </span>
          </div>

          <h1 className="text-display mb-6 text-[#1F1F1F]">
            Rooted In <br />
            <span className="text-[#5E7A63] italic">Wellness.</span>
          </h1>

          <p className="text-body-lg mb-10 max-w-lg">
            India's premium wellness food brand reviving forgotten superfoods. 
            Farm-fresh, pre-cleaned banana stem delivered to your kitchen for effortless daily detox.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Stem%20Native"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Fresh Today
              <ArrowRight size={16} />
            </a>
            
            <a href="#products" className="text-label group flex items-center gap-2" style={{ color: "#1F1F1F" }}>
              Explore The Range
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-14 pt-8 border-t border-[#D9C7AE]/30 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7F4EE] overflow-hidden bg-[#E8E4DC]" />
              ))}
            </div>
            <div>
              <div className="flex text-[#C79A72] text-sm mb-1">★★★★★</div>
              <p className="text-caption">Loved by 5,000+ in Bangalore</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Decorative frame */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#5E7A63]/20 rounded-sm" />
          
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#E8E4DC] shadow-2xl">
            <Image
              src="/hero.png"
              alt="Stem Native Fresh Banana Stem"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 glass px-4 py-2 rounded-sm shadow-lg flex items-center gap-2 animate-float">
              <span className="w-2 h-2 rounded-full bg-[#5E7A63] animate-pulse" />
              <span className="text-label text-[#1F1F1F]">Harvested Today</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
