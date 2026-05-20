"use client";

import { Leaf, Scissors, Truck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="section-lg bg-[#E8E4DC]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-label text-[#5E7A63] mb-4 block">The Process</span>
          <h2 className="text-headline text-[#1F1F1F]">
            Farm To <br />
            <span className="text-[#5E7A63] italic">Fridge.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-[#D9C7AE] -translate-y-1/2 z-0" />

          {[
            {
              icon: <Leaf size={24} />,
              step: "01",
              title: "Harvest",
              desc: "Sourced daily from organic partner farms across South India at dawn.",
            },
            {
              icon: <Scissors size={24} />,
              step: "02",
              title: "Refine",
              desc: "Outer layers removed, excess fiber stripped, and cut to perfection.",
            },
            {
              icon: <Truck size={24} />,
              step: "03",
              title: "Deliver",
              desc: "Vacuum-sealed for maximum freshness and delivered to your door.",
            },
          ].map((item, i) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="w-20 h-20 bg-[#F7F4EE] rounded-full border-2 border-[#D9C7AE] flex flex-col items-center justify-center mb-6 shadow-sm text-[#5E7A63]">
                {item.icon}
              </div>
              <span className="font-serif text-[#C79A72] text-xl mb-2 italic">Step {item.step}</span>
              <h3 className="text-xl text-[#1F1F1F] font-serif mb-2">{item.title}</h3>
              <p className="text-caption px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
