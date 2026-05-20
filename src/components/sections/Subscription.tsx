"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  {
    id: "trial",
    name: "Discovery",
    deliveries: "2 Deliveries / Month",
    price: "449",
    savings: "",
    features: ["500g Fresh Pack per delivery", "Recipe guide included", "Cancel anytime"],
    isPopular: false,
  },
  {
    id: "routine",
    name: "The Ritual",
    deliveries: "4 Deliveries / Month",
    price: "799",
    savings: "Save 15%",
    features: ["500g Fresh Pack per delivery", "Priority morning delivery", "Pause or skip weeks", "Free shipping"],
    isPopular: true,
  },
  {
    id: "family",
    name: "Family Wellness",
    deliveries: "4 Deliveries / Month",
    price: "1399",
    savings: "Save 25%",
    features: ["1kg Family Pack per delivery", "Priority morning delivery", "Pause or skip weeks", "Free shipping", "Complimentary juice strainer"],
    isPopular: false,
  },
];

export default function Subscription() {
  return (
    <section id="subscription" className="section-lg bg-[#F7F4EE]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 animate-fade-up">
            <span className="text-label text-[#5E7A63] mb-4 block">Subscribe</span>
            <h2 className="text-headline text-[#1F1F1F] mb-6">
              The Native <br />
              <span className="text-[#5E7A63] italic">Cleanse Box.</span>
            </h2>
            <p className="text-body-lg mb-8">
              Wellness is a habit, not an event. Subscribe to get fresh banana stem delivered 
              to your door every week. Farm to fridge, automatically.
            </p>
            <ul className="space-y-3 mb-8">
              {["Harvested & packed same day", "Flexible deliveries (pause anytime)", "Eco-friendly insulated packaging"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#3A3A3A]">
                  <Check size={16} className="text-[#5E7A63]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 animate-fade-in relative aspect-[16/9] bg-[#E8E4DC]">
            <Image
              src="/subscription-box.png"
              alt="Native Cleanse Subscription Box"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div 
              key={plan.id}
              className={`relative bg-white border p-8 card-lift ${
                plan.isPopular ? "border-[#5E7A63] shadow-lg" : "border-[#D9C7AE]/50"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 inset-x-0 flex justify-center">
                  <span className="bg-[#5E7A63] text-white text-[0.65rem] uppercase tracking-widest py-1 px-3">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="font-serif text-2xl text-[#1F1F1F] mb-1">{plan.name}</h3>
              <p className="text-caption mb-6">{plan.deliveries}</p>
              
              <div className="flex items-end gap-2 mb-8">
                <span className="text-3xl font-light text-[#1F1F1F]">₹{plan.price}</span>
                <span className="text-sm text-[#7A7A72] mb-1">/ mo</span>
                {plan.savings && (
                  <span className="ml-2 text-xs font-medium text-[#C79A72]">{plan.savings}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#3A3A3A]">
                    <Check size={14} className="text-[#5E7A63] mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.isPopular ? "btn-green w-full justify-center" : "btn-outline w-full justify-center"}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
