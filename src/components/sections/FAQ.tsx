"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "faq-freshness",
    question: "How long does the banana stem stay fresh?",
    answer:
      "Our banana stem packs stay fresh for up to 3 days when stored in the refrigerator (in the sealed packaging). The juice-ready grated packs are best used within 24-48 hours for maximum nutritional benefit. We recommend ordering the quantity you'll use within 2-3 days for the best experience.",
  },
  {
    id: "faq-storage",
    question: "How should I store the banana stem?",
    answer:
      "Keep the pack refrigerated in its original sealed eco-bag. Do not store at room temperature for more than 2-3 hours. Once opened, transfer to an airtight container and use within 24 hours. Avoid freezing — freezing degrades the fiber structure and texture.",
  },
  {
    id: "faq-cooking",
    question: "How do I cook banana stem? Is it difficult?",
    answer:
      "Our pre-cleaned banana stem is incredibly easy to cook! You skip the hardest part (cleaning and removing threads). Simply chop the rounds, and cook in 10-15 minutes as a stir-fry (poriyal), curry (kootu), or blend fresh for juice. We send recipe cards with every order and have full recipes on our Instagram.",
  },
  {
    id: "faq-cleaned",
    question: "Is it already cleaned? Do I need to do anything?",
    answer:
      "Yes! Our team removes all outer layers, trims the fibrous ends, and removes the central thread — the most tedious parts. When you receive your pack, the banana stem is washed, trimmed to rounds, and ready to cook. All you need to do is chop to your preferred size and cook.",
  },
  {
    id: "faq-delivery",
    question: "Which cities do you deliver to?",
    answer:
      "We currently deliver to Bangalore (all major localities), Pune (within PMC limits), and select areas of Mumbai. Delivery is usually within 4-6 hours for orders placed before 10 AM. We're expanding to Hyderabad, Chennai, and Delhi soon — join our waitlist via WhatsApp!",
  },
  {
    id: "faq-subscription",
    question: "How does the weekly subscription work?",
    answer:
      "After subscribing, you'll receive a fresh pack at your doorstep every week on your chosen day. You can pause, change your delivery day, or cancel anytime via WhatsApp — no complicated portals, no hidden fees. We send a WhatsApp reminder 24 hours before each delivery.",
  },
  {
    id: "faq-order",
    question: "How do I place an order?",
    answer:
      "Simply click any 'Order on WhatsApp' button on this website, or send us a WhatsApp message at +91 99999 99999. Tell us which product you want and your delivery address. We'll confirm availability, share a payment link (UPI/card/COD available), and dispatch the same day.",
  },
  {
    id: "faq-organic",
    question: "Is the banana stem organically grown?",
    answer:
      "Our produce comes from partner farms in Karnataka that follow natural, low-chemical farming practices. While we are in the process of obtaining formal organic certification, our farmers use no synthetic pesticides. The banana plant itself is naturally pest-resistant and rarely requires chemical treatment.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-freshness");

  return (
    <section id="faq" className="section-base" style={{ background: "linear-gradient(180deg, #EDF4EE 0%, #FDFAF5 100%)" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Got Questions?</span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Everything You Need
            <br />
            <span style={{ color: "#4A7A50" }}>To Know</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            Can&apos;t find your answer? Message us on WhatsApp — we typically reply within 5 minutes.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "white" : "rgba(255,255,255,0.6)",
                  border: isOpen ? "1.5px solid rgba(74,122,80,0.3)" : "1px solid rgba(168,197,172,0.2)",
                  boxShadow: isOpen ? "0 8px 32px rgba(45,90,53,0.1)" : "none",
                }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base"
                    style={{ color: isOpen ? "#1A3A20" : "#2D5A35" }}
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                      background: isOpen ? "#2D5A35" : "rgba(74,122,80,0.1)",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={15} className="text-white" />
                    ) : (
                      <Plus size={15} style={{ color: "#4A7A50" }} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }} itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact footer */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: "rgba(45,90,53,0.06)", border: "1px solid rgba(168,197,172,0.25)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "#1A3A20" }}>Still have a question?</p>
          <p className="text-sm mb-5" style={{ color: "#6B7280" }}>
            Our team is available on WhatsApp from 7 AM to 9 PM, 7 days a week.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20Vazha%20Wellness"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: "inline-flex" }}
          >
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
