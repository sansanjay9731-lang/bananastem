"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden section-lg"
      style={{ background: "#1F1F1F" }}
    >
      {/* Decorative BG texture */}
      <div className="absolute inset-0 texture-paper opacity-[0.03] pointer-events-none" />

      {/* Very faint botanical gradient overlay */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #5E7A63 0%, transparent 70%)" }}
      />

      <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
        {/* Label */}
        <span className="text-label text-[#AFC3B0] mb-8 block">
          Begin Your Ritual
        </span>

        {/* Headline */}
        <h2 className="text-display text-[#F7F4EE] mb-8">
          The <span className="italic text-[#5E7A63]">Return</span> <br/>
          to Tradition.
        </h2>

        {/* Subtext */}
        <p className="text-body-lg text-[#7A7A72] mb-12 mx-auto max-w-xl">
          Your grandparents understood the power of banana stem. It kept them healthy, 
          lean, and resilient. It's time to bring that ancient wisdom back to your daily life.
          <br /><br />
          <strong className="text-[#D9C7AE] font-normal">Your fresh pack is waiting.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20fresh%20banana%20stem%20from%20Stem%20Native"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            Order Fresh Today
          </a>
          <a
            href="#subscription"
            className="btn-primary"
            style={{ 
              background: "transparent", 
              border: "1px solid rgba(217,199,174,0.3)", 
              color: "#F7F4EE" 
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F7F4EE";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1F1F1F";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F7F4EE";
            }}
          >
            Explore Subscriptions
          </a>
        </div>

        {/* Trust icons */}
        <div className="flex flex-wrap items-center justify-center gap-10 border-t border-[#F7F4EE]/10 pt-10">
          {[
            { label: "Farm Fresh Daily" },
            { label: "Pre-Cleaned" },
            { label: "Zero Preservatives" },
            { label: "Eco Packaging" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E7A63]" />
              <span className="text-xs uppercase tracking-widest text-[#7A7A72]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
