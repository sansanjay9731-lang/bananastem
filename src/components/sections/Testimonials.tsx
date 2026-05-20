"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Priya S.",
    location: "Indiranagar",
    quote: "Stem Native has completely transformed my morning routine. No more messy cleaning, just fresh juice ready in 2 minutes. My digestion has never been better.",
    tag: "Subscribed for 3 months"
  },
  {
    id: "t2",
    name: "Dr. Arvind R.",
    location: "Koramangala",
    quote: "I frequently recommend banana stem for kidney health to my patients. Stem Native solves the biggest hurdle: the tedious preparation. Excellent quality.",
    tag: "Verified Purchase"
  },
  {
    id: "t3",
    name: "Meera V.",
    location: "Jayanagar",
    quote: "The packaging is beautiful and the stem is incredibly fresh. Reminds me of the kootu my grandmother used to make. A true premium experience.",
    tag: "Verified Purchase"
  }
];

export default function Testimonials() {
  return (
    <section className="section-lg bg-[#E8E4DC]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-label text-[#5E7A63] mb-4 block">Community</span>
          <h2 className="text-headline text-[#1F1F1F]">
            The Native <br />
            <span className="text-[#5E7A63] italic">Experience.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={t.id} 
              className="bg-[#F7F4EE] p-10 relative card-lift"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="text-[#D9C7AE] w-12 h-12 absolute top-8 left-8 opacity-40" />
              <div className="relative z-10 pt-4">
                <div className="flex text-[#C79A72] text-sm mb-6">★★★★★</div>
                <p className="font-serif text-xl leading-relaxed text-[#3A3A3A] mb-8 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#D9C7AE]/40 pt-6">
                  <p className="font-medium text-[#1F1F1F] text-sm mb-1">{t.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#7A7A72]">{t.location}</span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-[#5E7A63]">{t.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
