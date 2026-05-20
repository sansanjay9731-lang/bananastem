"use client";

import { useRef, useEffect } from "react";
import { Sprout, Package, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Farm Harvest",
    subtitle: "Morning freshness, straight from the source",
    description:
      "Our partner farmers in Karnataka harvest banana stems at dawn — when the fiber content and hydration are at their absolute peak. No cold storage. No delay.",
    detail: "Harvested between 5–7 AM daily",
    color: "#4A7A50",
    bg: "rgba(74,122,80,0.08)",
  },
  {
    number: "02",
    icon: Package,
    title: "Clean & Pack",
    subtitle: "45 minutes of work, done for you",
    description:
      "Our team of trained processors remove the outer layers, trim the fibrous ends, remove the central thread, and cut to cooking-ready portions — hygienically, in a certified facility.",
    detail: "FSSAI-certified processing unit",
    color: "#8B6E4E",
    bg: "rgba(139,110,78,0.08)",
  },
  {
    number: "03",
    icon: Truck,
    title: "Delivered Fresh",
    subtitle: "At your door before lunch",
    description:
      "Packed in eco-friendly, breathable packaging and dispatched by 9 AM. Delivered to your doorstep across Bangalore, Pune, and Mumbai — fresh, vibrant, and ready to cook.",
    detail: "Delivery by 12 PM for same-day orders",
    color: "#2D5A35",
    bg: "rgba(45,90,53,0.08)",
  },
];

export default function HowItWorks() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = `all 0.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s`;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
    });
  }, []);

  return (
    <section id="how-it-works" className="section-base" style={{ background: "linear-gradient(180deg, #EDF4EE 0%, #FDFAF5 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>The Process</span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Farm to Your Kitchen
            <br />
            <span style={{ color: "#4A7A50" }}>in 3 Simple Steps</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            No middlemen. No warehouses. Just the freshest produce on a direct route to your table.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-16 left-0 right-0 hidden lg:block"
            style={{ height: "2px", background: "linear-gradient(90deg, rgba(168,197,172,0) 0%, rgba(168,197,172,0.6) 30%, rgba(168,197,172,0.6) 70%, rgba(168,197,172,0) 100%)", zIndex: 0 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step icon circle */}
                  <div className="relative mb-8">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center"
                      style={{
                        background: step.bg,
                        border: `2px solid ${step.color}30`,
                        boxShadow: `0 0 0 8px ${step.color}08`,
                      }}
                    >
                      <Icon size={44} style={{ color: step.color }} />
                    </div>
                    {/* Step number */}
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <span className="text-label mb-2" style={{ color: step.color, fontSize: "0.7rem" }}>
                    Step {step.number}
                  </span>
                  <h3 className="font-semibold text-2xl mb-2" style={{ color: "#1A3A20" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: step.color }}>
                    {step.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280", maxWidth: "300px" }}>
                    {step.description}
                  </p>
                  <span
                    className="text-xs px-4 py-2 rounded-full"
                    style={{
                      background: step.bg,
                      color: step.color,
                      border: `1px solid ${step.color}25`,
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(45,90,53,0.06) 0%, rgba(122,158,126,0.1) 100%)",
              border: "1px solid rgba(168,197,172,0.3)",
            }}
          >
            <div className="text-left">
              <p className="font-semibold text-lg mb-1" style={{ color: "#1A3A20" }}>
                Ready for fresh banana stem tomorrow morning?
              </p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Order by midnight. Delivered by noon. Fresh as the farm.
              </p>
            </div>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20place%20a%20fresh%20banana%20stem%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
