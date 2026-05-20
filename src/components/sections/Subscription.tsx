"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "weekly-basic",
    name: "Detox Starter",
    frequency: "Weekly",
    price: "₹349",
    perDelivery: "₹349/week",
    savings: "Save ₹120/month",
    description: "Your first step toward a weekly wellness ritual",
    items: ["500g fresh banana stem × 2", "1 juice-ready pack", "Free eco bag"],
    color: "#7A9E7E",
    highlight: false,
  },
  {
    id: "weekly-family",
    name: "Family Wellness",
    frequency: "Weekly",
    price: "₹599",
    perDelivery: "₹599/week",
    savings: "Save ₹200/month",
    description: "Whole family detox, every single week",
    items: ["1kg family stem pack", "2 juice-ready packs", "Recipe card included", "Priority delivery"],
    color: "#2D5A35",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "monthly-wellness",
    name: "Monthly Box",
    frequency: "Bi-weekly",
    price: "₹999",
    perDelivery: "₹499/delivery",
    savings: "Save ₹340/month",
    description: "For the truly committed wellness lifestyle",
    items: ["1kg stem × 2 deliveries", "4 juice-ready packs", "Wellness guide PDF", "Dedicated support"],
    color: "#4A7A50",
    highlight: false,
  },
];

const subscriptionBenefits = [
  { icon: "🔄", text: "Flexible scheduling — weekly, bi-weekly" },
  { icon: "📦", text: "Priority fresh stock allocation" },
  { icon: "💚", text: "Subscriber-only pricing (up to 30% off)" },
  { icon: "⏸️", text: "Pause or cancel anytime, no questions" },
  { icon: "🚚", text: "Free delivery on all subscription orders" },
  { icon: "📱", text: "WhatsApp delivery updates" },
];

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="subscription"
      className="section-base relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A3A20 0%, #2D5A35 60%, #3D6B43 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, #A8C5AC 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Subscription Plans</span>
          <h2 className="text-headline mb-5 text-white">
            Your Weekly
            <br />
            <span style={{ color: "#A8C5AC" }}>Wellness Ritual</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#A8C5AC" }}>
            Fresh detox delivered on autopilot. Never miss a week of gut-healing goodness.
            Subscribe. Save. Thrive.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={plan.id}
              className="rounded-3xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: plan.highlight
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,255,255,0.06)",
                border: plan.highlight
                  ? "1.5px solid rgba(168,197,172,0.5)"
                  : "1px solid rgba(168,197,172,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {plan.badge && (
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start"
                  style={{ background: "#C9A84C", color: "#1A3A20" }}
                >
                  {plan.badge}
                </span>
              )}

              <span className="text-label mb-1" style={{ color: "#7A9E7E", fontSize: "0.65rem" }}>
                {plan.frequency} delivery
              </span>
              <h3 className="font-semibold text-xl mb-1 text-white">{plan.name}</h3>
              <p className="text-xs mb-5" style={{ color: "#7A9E7E" }}>{plan.description}</p>

              <div className="mb-5">
                <span className="font-bold text-3xl text-white">{plan.price}</span>
                <span className="text-sm ml-1" style={{ color: "#7A9E7E" }}>/week</span>
                <p className="text-xs mt-1" style={{ color: "#C9A84C" }}>{plan.savings}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#A8C5AC" }}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: plan.highlight ? "#25D366" : "rgba(255,255,255,0.15)",
                  color: "white",
                  textDecoration: "none",
                  border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
              >
                Subscribe via WhatsApp
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        {/* Benefits bar */}
        <div
          className="rounded-3xl p-8 mb-16"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(168,197,172,0.15)" }}
        >
          <h3 className="text-center font-semibold text-lg text-white mb-8">
            Every subscription includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {subscriptionBenefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm" style={{ color: "#A8C5AC" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email lead capture */}
        <div className="max-w-lg mx-auto text-center">
          <p className="font-semibold text-white mb-2">Not ready to subscribe yet?</p>
          <p className="text-sm mb-6" style={{ color: "#7A9E7E" }}>
            Drop your email and get our free &ldquo;7-Day Banana Stem Detox Guide&rdquo; + first-order discount.
          </p>
          {submitted ? (
            <div className="py-4 px-6 rounded-2xl text-center" style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}>
              <p className="text-white font-medium">🎉 Check your inbox! Your guide is on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                id="subscription-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(168,197,172,0.3)",
                  color: "white",
                }}
              />
              <button
                type="submit"
                className="btn-primary flex-shrink-0"
                style={{ padding: "0.875rem 1.5rem" }}
              >
                Get Guide
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
