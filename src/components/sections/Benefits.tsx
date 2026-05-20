"use client";

import { useEffect, useRef } from "react";
import { Heart, Zap, Leaf, Clock, Sun, Droplets } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    color: "#D4716C",
    bg: "rgba(212,113,108,0.08)",
    title: "Gut Health",
    tagline: "Your microbiome will thank you",
    description:
      "Banana stem is rich in soluble fiber that feeds good gut bacteria, reducing bloating, improving digestion, and supporting a healthy gut lining.",
  },
  {
    icon: Droplets,
    color: "#4A7A50",
    bg: "rgba(74,122,80,0.08)",
    title: "Deep Detox",
    tagline: "Flush out what you don't need",
    description:
      "Acts as a natural diuretic, flushing toxins and kidney stones. Traditional Ayurveda has recommended Vazhaithandu for detox for centuries.",
  },
  {
    icon: Zap,
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.08)",
    title: "High Fiber",
    tagline: "14x more fiber than broccoli",
    description:
      "One serving packs a powerful fiber punch, keeping you full longer, stabilizing blood sugar, and supporting healthy cholesterol levels.",
  },
  {
    icon: Leaf,
    color: "#7A9E7E",
    bg: "rgba(122,158,126,0.08)",
    title: "Traditional Wellness",
    tagline: "5000 years of Ayurvedic wisdom",
    description:
      "Used in South Indian households for generations. Vazhaithandu has deep roots in Siddha medicine for kidney health, weight management, and vitality.",
  },
  {
    icon: Clock,
    color: "#8B6E4E",
    bg: "rgba(139,110,78,0.08)",
    title: "Zero Effort Cooking",
    tagline: "From our farm to your pan in minutes",
    description:
      "We do the hard work — cleaning, trimming, and prepping — so you can cook healthy meals in under 15 minutes. No mess. No waste.",
  },
  {
    icon: Sun,
    color: "#E89B4A",
    bg: "rgba(232,155,74,0.08)",
    title: "Farm-Direct Freshness",
    tagline: "Harvested and delivered same day",
    description:
      "Direct from partner farms in Karnataka. No cold storage, no preservatives. You get produce at its nutritional peak — vibrant, crisp, and alive.",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = benefit.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.7s cubic-bezier(0.4,0,0.2,1)";
    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="card-hover rounded-2xl p-7 cursor-default"
      style={{
        background: "#FDFAF5",
        border: "1px solid rgba(168,197,172,0.25)",
        boxShadow: "0 4px 24px rgba(45,90,53,0.06)",
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: benefit.bg }}
      >
        <Icon size={22} style={{ color: benefit.color }} />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-lg mb-1.5" style={{ color: "#1A3A20" }}>
        {benefit.title}
      </h3>
      <p className="text-xs font-medium mb-3" style={{ color: benefit.color }}>
        {benefit.tagline}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
        {benefit.description}
      </p>
    </div>
  );
}

export default function Benefits() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.2 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="section-base" style={{ background: "#FDFAF5" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>
            Why It Works
          </span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Six Reasons Your Body
            <br />
            <span style={{ color: "#4A7A50" }}>Needs Banana Stem</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            One humble vegetable. A lifetime of wellness benefits. Backed by 
            Ayurveda and modern nutrition science.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
