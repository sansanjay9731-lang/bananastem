"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

const trustBadges = [
  { icon: "🌿", label: "100% Farm Fresh" },
  { icon: "✅", label: "Pre-Cleaned" },
  { icon: "🚚", label: "Same Day Delivery" },
  { icon: "♻️", label: "Eco Packaging" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.style.opacity = "0";
      headlineRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (headlineRef.current) {
          headlineRef.current.style.transition = "all 0.9s cubic-bezier(0.4,0,0.2,1)";
          headlineRef.current.style.opacity = "1";
          headlineRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(160deg, #FDFAF5 0%, #EDF4EE 45%, #D4E8D6 100%)",
      }}
    >
      {/* Background organic shape */}
      <div
        className="absolute top-0 right-0 w-[65%] h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, #A8C5AC 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[50%] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 100%, #C9A84C 0%, transparent 60%)",
        }}
      />

      {/* Marquee trust bar */}
      <div
        className="absolute top-20 left-0 right-0 overflow-hidden py-2.5"
        style={{ background: "rgba(74,122,80,0.06)", borderTop: "1px solid rgba(74,122,80,0.12)", borderBottom: "1px solid rgba(74,122,80,0.12)" }}
      >
        <div className="animate-marquee flex gap-12 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, i) => (
            <span key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#4A7A50" }}>
              <span>{badge.icon}</span>
              {badge.label}
              <span style={{ color: "#A8C5AC", marginLeft: "1.5rem" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: "rgba(74,122,80,0.1)", border: "1px solid rgba(74,122,80,0.2)" }}>
              <Star size={12} fill="#C9A84C" stroke="none" />
              <span className="text-label" style={{ color: "#4A7A50", fontSize: "0.7rem" }}>
                India&apos;s Premium Wellness Food Brand
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-display mb-6"
              style={{ color: "#1A3A20" }}
            >
              India&apos;s Forgotten
              <br />
              <span style={{ color: "#4A7A50" }}>Superfood,</span>
              <br />
              Delivered Fresh.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg mb-8 max-w-lg" style={{ color: "#4A7A50" }}>
              Ready-to-cook banana stem packs — cleaned, packed, and delivered from 
              the farm to your kitchen. High-fiber. Gut-healing. Traditional Indian wellness, 
              made effortlessly convenient.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["High Fiber", "Detox Support", "Gut Health", "Farm Fresh", "Pre-Cleaned"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(45,90,53,0.08)", color: "#2D5A35", border: "1px solid rgba(45,90,53,0.15)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20fresh%20banana%20stem"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="btn-whatsapp"
              >
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order Fresh Today
              </a>
              <a
                href="#subscription"
                id="hero-subscription-cta"
                className="btn-secondary"
              >
                Weekly Detox Plan
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(74,122,80,0.15)" }}>
              <div className="flex -space-x-2">
                {["#4A7A50","#7A9E7E","#2D5A35","#A8C5AC"].map((color, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: color }}>
                    {["R","M","P","S"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="#C9A84C" stroke="none" />)}
                </div>
                <p className="text-xs" style={{ color: "#6B7280" }}>
                  <strong style={{ color: "#2D5A35" }}>500+ happy customers</strong> in Bangalore &amp; Pune
                </p>
              </div>
              <div className="flex items-center gap-1.5 ml-auto hidden sm:flex">
                <ShieldCheck size={16} style={{ color: "#7A9E7E" }} />
                <span className="text-xs" style={{ color: "#6B7280" }}>FSSAI Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Product visual */}
          <div className="relative flex items-center justify-center">
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, #A8C5AC 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            {/* Main product image */}
            <div className="relative z-10 animate-float">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 40px 80px rgba(45,90,53,0.2), 0 0 0 1px rgba(168,197,172,0.3)",
                  maxWidth: "480px",
                  width: "100%",
                }}
              >
                <Image
                  src="/hero.png"
                  alt="Fresh cleaned banana stem (Vazhaithandu) — premium wellness food"
                  width={480}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay label */}
                <div
                  className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 glass"
                >
                  <p className="text-label mb-0.5" style={{ color: "#4A7A50", fontSize: "0.65rem" }}>Featured Product</p>
                  <p className="font-semibold" style={{ color: "#1A3A20" }}>Fresh Cleaned Banana Stem</p>
                  <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Ready-to-cook · Farm harvested this morning</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-6 -left-4 glass rounded-2xl p-4 z-20 shadow-xl hidden sm:block"
              style={{ border: "1px solid rgba(168,197,172,0.4)" }}
            >
              <p className="text-3xl font-bold" style={{ color: "#2D5A35" }}>98%</p>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Fiber retention</p>
            </div>

            {/* Second floating badge */}
            <div
              className="absolute bottom-20 -right-4 glass rounded-2xl p-4 z-20 shadow-xl hidden sm:block"
              style={{ border: "1px solid rgba(168,197,172,0.4)" }}
            >
              <p className="text-label mb-1" style={{ color: "#7A9E7E", fontSize: "0.65rem" }}>Delivered in</p>
              <p className="font-bold text-lg" style={{ color: "#2D5A35" }}>4–6 hours</p>
              <p className="text-xs" style={{ color: "#6B7280" }}>Farm to kitchen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "80px" }}>
          <path d="M0 80L480 40L960 60L1440 20V80H0Z" fill="#FDFAF5" />
        </svg>
      </div>
    </section>
  );
}
