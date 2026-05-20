"use client";

import { Leaf, Heart, Shield, Droplet, Flame, Activity } from "lucide-react";

const benefits = [
  {
    icon: <Leaf size={24} />,
    title: "Gut Cleanse",
    description: "Insoluble fiber acts as a natural prebiotic, sweeping the digestive tract and restoring microbiome balance.",
  },
  {
    icon: <Droplet size={24} />,
    title: "Kidney Detox",
    description: "Natural diuretic properties help flush out toxins and prevent the crystallization of kidney stones.",
  },
  {
    icon: <Heart size={24} />,
    title: "Blood Sugar Balance",
    description: "Low glycemic index and high fiber content prevent sugar spikes, supporting metabolic health.",
  },
  {
    icon: <Flame size={24} />,
    title: "Weight Management",
    description: "Promotes early satiety and sustained energy release without the calorie density of modern carbs.",
  },
  {
    icon: <Shield size={24} />,
    title: "Immunity Boost",
    description: "Rich in Vitamin B6 and iron, essential for red blood cell production and immune defense.",
  },
  {
    icon: <Activity size={24} />,
    title: "Alkaline Nature",
    description: "Helps neutralize stomach acid and reduces acidity, providing soothing relief to the digestive system.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-base bg-[#F7F4EE]">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#5E7A63]" />
            <span className="text-label text-[#5E7A63]">Functional Nutrition</span>
            <span className="h-[1px] w-8 bg-[#5E7A63]" />
          </div>
          
          <h2 className="text-headline mb-6 text-[#1F1F1F]">
            Traditional Wisdom, <br />
            <span className="text-[#5E7A63] italic">Clinically Proven.</span>
          </h2>
          
          <p className="text-body-lg">
            Banana stem is one of Ayurveda's most potent detoxifiers. We've brought this 
            forgotten superfood back into the modern wellness routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={benefit.title}
              className="p-8 border border-[#D9C7AE]/50 rounded-sm bg-white card-lift animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm bg-[#F7F4EE] text-[#5E7A63]">
                {benefit.icon}
              </div>
              <h3 className="text-title mb-3 text-[#1F1F1F] text-xl">
                {benefit.title}
              </h3>
              <p className="text-caption leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
