"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ramya S.",
    role: "Software Engineer, Bangalore",
    avatar: "R",
    color: "#4A7A50",
    stars: 5,
    text: "I was skeptical at first — ordering banana stem online seemed strange. But the quality blew me away. It arrived so fresh, pre-cleaned, and was so easy to cook. My whole family now gets the weekly subscription. My IBS has improved significantly in just 3 weeks!",
    tag: "Weekly Subscriber",
  },
  {
    id: 2,
    name: "Meena K.",
    role: "Homemaker, Pune",
    avatar: "M",
    color: "#7A9E7E",
    stars: 5,
    text: "Growing up in Chennai, my amma made banana stem dishes every week. When we moved to Pune, I couldn't find good quality banana stem anywhere. Vazha Wellness solved that problem completely. The stem is cleaned perfectly — I can cook in 10 minutes!",
    tag: "Monthly Customer",
  },
  {
    id: 3,
    name: "Priya N.",
    role: "Yoga Instructor, Mumbai",
    avatar: "P",
    color: "#8B6E4E",
    stars: 5,
    text: "My yoga students ask me for detox recommendations and now I tell them all about Vazha Wellness. The juice-ready pack is brilliant — I blend it with coconut water every morning. My digestion has never been better. Premium quality, premium results.",
    tag: "Wellness Enthusiast",
  },
  {
    id: 4,
    name: "Sanjay T.",
    role: "IT Professional, Bangalore",
    avatar: "S",
    color: "#2D5A35",
    stars: 5,
    text: "As someone who tracks nutrition obsessively, I love that Vazha gives me a high-fiber, low-calorie option that's traditionally Indian. The 1kg family pack is excellent value. Customer service on WhatsApp is fast and personal. 10/10.",
    tag: "Family Pack User",
  },
  {
    id: 5,
    name: "Kavitha R.",
    role: "Doctor, Chennai → Bangalore",
    avatar: "K",
    color: "#C9A84C",
    stars: 5,
    text: "As a physician, I recommend high-fiber foods to many of my patients for gut health and kidney stones. Banana stem is medically brilliant for both. Vazha Wellness makes it accessible and convenient. I recommend this to all my health-conscious patients.",
    tag: "Medical Professional",
  },
  {
    id: 6,
    name: "Anjali M.",
    role: "Working Mom, Pune",
    avatar: "A",
    color: "#D4716C",
    stars: 5,
    text: "With two kids and a full-time job, I don't have 45 minutes to clean banana stem. Vazha's pre-cleaned packs are a lifesaver. I made banana stem poriyal in 15 minutes yesterday — my kids actually loved it. Healthy eating made realistic.",
    tag: "Busy Parent",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;

  const next = () => setCurrent((c) => (c + 1) % (testimonials.length - visible + 1));
  const prev = () => setCurrent((c) => Math.max(0, c - 1));

  return (
    <section
      id="testimonials"
      className="section-base"
      style={{ background: "linear-gradient(180deg, #FDFAF5 0%, #EDF4EE 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Customer Stories</span>
            <h2 className="text-headline" style={{ color: "#1A3A20" }}>
              Real People.
              <br />
              <span style={{ color: "#4A7A50" }}>Real Wellness Journeys.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: "white", border: "1.5px solid rgba(168,197,172,0.4)", color: "#2D5A35" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current >= testimonials.length - visible}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: "#2D5A35", color: "white" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards - desktop shows 3, mobile shows 1 */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visible} + 8px)))` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 rounded-3xl p-8"
                style={{
                  width: `calc(${100 / visible}% - ${(visible - 1) * 24 / visible}px)`,
                  minWidth: "280px",
                  background: "white",
                  border: "1px solid rgba(168,197,172,0.25)",
                  boxShadow: "0 4px 24px rgba(45,90,53,0.06)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#C9A84C" stroke="none" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#4B5563" }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1A3A20" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.role}</p>
                  </div>
                  <span
                    className="ml-auto text-xs px-3 py-1 rounded-full"
                    style={{ background: `${t.color}12`, color: t.color }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aggregate rating */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10" style={{ borderTop: "1px solid rgba(168,197,172,0.2)" }}>
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#C9A84C" stroke="none" />)}
          </div>
          <p className="font-bold text-2xl" style={{ color: "#1A3A20" }}>4.9/5</p>
          <p style={{ color: "#6B7280" }}>from <strong>500+</strong> verified purchases</p>
        </div>
      </div>
    </section>
  );
}
