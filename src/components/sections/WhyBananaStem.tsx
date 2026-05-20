"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const timeline = [
  {
    era: "2000 BCE",
    title: "Roots in Ayurveda",
    body: "Siddha and Ayurvedic texts documented Stem Nativeithandu as a premier medicinal food for kidney health, urinary wellness, and digestive balance. Revered as 'nature's filter'.",
  },
  {
    era: "Traditional Era",
    title: "South Indian Kitchen Staple",
    body: "Every grandmother's home had banana stem in the weekly menu. Banana stem kootu, poriyal, and moru kali were cooked in Tamil, Telugu, and Kannada households as a matter of routine.",
  },
  {
    era: "The Modern Gap",
    title: "Convenience Killed the Superfood",
    body: "Urbanization created a painful irony: people moved to cities seeking better health, but lost access to traditional healing foods. Cleaning banana stem takes 45+ minutes — nobody has that time.",
  },
  {
    era: "Today",
    title: "We Solved It",
    body: "Stem Native does the cleaning, trimming, and prep for you. Ready-to-cook. Farm-fresh. Delivered to your home in Bangalore, Pune, and Mumbai. Tradition preserved. Convenience delivered.",
  },
];

const nutritionFacts = [
  { value: "2.6g", unit: "fiber per 100g", label: "Dietary Fiber" },
  { value: "36", unit: "kcal per 100g", label: "Low Calories" },
  { value: "High", unit: "potassium", label: "Potassium Rich" },
  { value: "0%", unit: "preservatives", label: "Chemical Free" },
];

export default function WhyBananaStem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current;
    items.forEach((item, i) => {
      if (!item) return;
      item.style.opacity = "0";
      item.style.transform = i % 2 === 0 ? "translateX(-20px)" : "translateX(20px)";
      item.style.transition = "all 0.8s cubic-bezier(0.4,0,0.2,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => { if (item) observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-banana-stem" style={{ background: "linear-gradient(180deg, #FDFAF5, #EDF4EE)" }}>
      {/* Top wave */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "60px", display: "block" }}>
        <path d="M0 0L480 30L960 10L1440 40V0H0Z" fill="#FDFAF5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>The Superfood Story</span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Why Banana Stem?
            <br />
            <span style={{ color: "#4A7A50" }}>Because Your Ancestors Knew.</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            Stem Nativeithandu isn&apos;t a trend. It&apos;s a 4,000-year-old healing food that modern 
            nutrition science is just beginning to catch up to.
          </p>
        </div>

        {/* Two-column: image + timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Farm image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 70px rgba(45,90,53,0.15)" }}>
              <Image
                src="/farm.png"
                alt="Banana plantation in South India — farm-fresh sourcing"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat */}
            <div
              className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 shadow-xl"
              style={{ border: "1px solid rgba(168,197,172,0.4)" }}
            >
              <p className="font-bold text-2xl" style={{ color: "#2D5A35" }}>4,000+</p>
              <p className="text-xs mt-1" style={{ color: "#6B7280" }}>Years of Ayurvedic use</p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div ref={sectionRef} className="space-y-8 pt-4">
            {timeline.map((item, i) => (
              <div
                key={item.era}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, #4A7A50, #2D5A35)" }}
                  >
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(to bottom, #7A9E7E, transparent)", minHeight: "2rem" }} />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-label mb-1 block" style={{ color: "#7A9E7E", fontSize: "0.65rem" }}>{item.era}</span>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#1A3A20" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition facts bar */}
        <div
          className="rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ background: "linear-gradient(135deg, #2D5A35, #1A3A20)", boxShadow: "0 20px 60px rgba(45,90,53,0.25)" }}
        >
          {nutritionFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="font-bold text-4xl mb-1 text-white">{fact.value}</p>
              <p className="text-xs mb-2" style={{ color: "#A8C5AC" }}>{fact.unit}</p>
              <p className="text-label" style={{ color: "#7A9E7E", fontSize: "0.65rem" }}>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
