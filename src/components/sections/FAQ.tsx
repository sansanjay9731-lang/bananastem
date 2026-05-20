"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How fresh is the banana stem?",
    a: "We harvest at dawn from our organic partner farms, clean it, and vacuum seal it within hours. It reaches your door the same day or next morning, maintaining 100% of its nutritional integrity."
  },
  {
    q: "How long does it stay fresh in the fridge?",
    a: "Our vacuum-sealed packs keep the stem fresh and crisp for up to 5 days in the refrigerator. We recommend keeping it sealed until you are ready to use it."
  },
  {
    q: "Do I need to clean it again?",
    a: "No! That's the beauty of Stem Native. We've done the tedious work of removing the outer bark and the inner fibrous layers. It is 100% ready to juice, blend, or cook straight out of the pack."
  },
  {
    q: "How much should I consume daily?",
    a: "For daily detox, a 150ml-200ml glass of juice (using about 150g of stem) is perfect. Our Daily Detox pack gives you about 3-4 servings."
  },
  {
    q: "Can I pause my subscription if I travel?",
    a: "Yes, absolutely. Our subscriptions are completely flexible. You can pause, skip a week, or cancel anytime by just messaging our WhatsApp concierge."
  },
  {
    q: "Is it safe for pregnant women?",
    a: "Banana stem is generally safe and often recommended for its cooling properties and iron content. However, we always recommend consulting your physician before adding any new functional food to your pregnancy diet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Schema.org markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="section-lg bg-[#E8E4DC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-xl max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-label text-[#5E7A63] mb-4 block">Knowledge Base</span>
          <h2 className="text-headline text-[#1F1F1F]">
            Frequently <br />
            <span className="text-[#5E7A63] italic">Asked.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#F7F4EE] border border-[#D9C7AE]/40 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-xl text-[#1F1F1F] pr-8">{faq.q}</span>
                <span className="text-[#5E7A63] shrink-0 transition-transform duration-300">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-8 pb-8 text-caption text-[#7A7A72] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-up">
          <p className="text-sm text-[#7A7A72] mb-4">Have another question?</p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#5E7A63] underline decoration-[#5E7A63]/30 underline-offset-4 hover:decoration-[#5E7A63] transition-colors"
          >
            Chat with our Wellness Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
