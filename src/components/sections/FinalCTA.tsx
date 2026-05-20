"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden"
      style={{ padding: "8rem 0", background: "linear-gradient(160deg, #1A3A20 0%, #2D5A35 50%, #3D6B43 100%)" }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #A8C5AC 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 60%)" }}
      />

      {/* Leaf pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {["🌿", "🍃", "🌱"].map((leaf, i) => (
          <span
            key={i}
            className="absolute text-8xl animate-float"
            style={{
              top: `${20 + i * 30}%`,
              left: `${5 + i * 40}%`,
              animationDelay: `${i * 2}s`,
              opacity: 0.3,
            }}
          >
            {leaf}
          </span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Label */}
        <span className="text-label mb-6 block" style={{ color: "#7A9E7E" }}>
          Start Your Wellness Journey
        </span>

        {/* Headline */}
        <h2
          className="mb-6 text-white"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Bring Traditional Wellness
          <br />
          <span style={{ color: "#A8C5AC" }}>Back To Your Home.</span>
        </h2>

        {/* Subtext */}
        <p
          className="mb-10 mx-auto"
          style={{
            color: "#7A9E7E",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            maxWidth: "580px",
          }}
        >
          Your grandparents ate banana stem every week. It kept them healthy, lean, and gut-strong. 
          Modern life made it inconvenient. We made it effortless again. 
          <br />
          <strong className="text-white">Your first pack is waiting.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20fresh%20banana%20stem%20from%20Vazha%20Wellness"
            target="_blank"
            rel="noopener noreferrer"
            id="final-whatsapp-cta"
            className="btn-whatsapp text-base"
            style={{ padding: "1rem 2.5rem", fontSize: "1rem", fontWeight: 600 }}
          >
            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order Fresh Today
          </a>
          <a
            href="#subscription"
            id="final-subscription-cta"
            className="flex items-center gap-2 justify-center font-semibold transition-all duration-300"
            style={{
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              textDecoration: "none",
              border: "1.5px solid rgba(168,197,172,0.4)",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
            }}
          >
            See Subscription Plans
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Trust icons */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: "🌿", label: "Farm Fresh" },
            { icon: "✅", label: "Pre-Cleaned" },
            { icon: "🚚", label: "Fast Delivery" },
            { icon: "💚", label: "No Preservatives" },
            { icon: "♻️", label: "Eco Packaging" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs font-medium" style={{ color: "#7A9E7E" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
