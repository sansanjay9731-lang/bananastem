"use client";

import Image from "next/image";
import { ShieldCheck, Leaf, Star, ArrowRight } from "lucide-react";

const products = [
  {
    id: "pack-500g",
    name: "Fresh Stem Pack",
    weight: "500g",
    price: "₹89",
    originalPrice: "₹120",
    badge: "Best Seller",
    badgeColor: "#C9A84C",
    image: "/product-pack.png",
    tagline: "Perfect for a family of 2",
    benefits: ["Serves 2-3 people", "Pre-cleaned & trimmed", "Cook in 15 minutes", "Same-day delivery"],
    cta: "Order 500g Pack",
  },
  {
    id: "pack-1kg",
    name: "Family Pack",
    weight: "1 kg",
    price: "₹159",
    originalPrice: "₹220",
    badge: "Best Value",
    badgeColor: "#4A7A50",
    image: "/product-pack.png",
    tagline: "Ideal for weekly cooking",
    benefits: ["Serves 4-6 people", "Pre-cleaned & trimmed", "Stays fresh 3 days", "Free delivery"],
    cta: "Order 1kg Pack",
  },
  {
    id: "juice-pack",
    name: "Juice Ready Pack",
    weight: "300g",
    price: "₹69",
    originalPrice: "₹95",
    badge: "New",
    badgeColor: "#7A9E7E",
    image: "/juice.png",
    tagline: "Squeeze your daily detox",
    benefits: ["Pre-grated for juicing", "Makes 2 full glasses", "No blender needed", "AM detox ritual"],
    cta: "Order Juice Pack",
  },
  {
    id: "weekly-sub",
    name: "Weekly Detox Box",
    weight: "2 kg / week",
    price: "₹499",
    originalPrice: "₹680",
    badge: "🔄 Subscribe & Save 26%",
    badgeColor: "#2D5A35",
    image: "/product-pack.png",
    tagline: "Your weekly wellness ritual",
    benefits: ["Fresh weekly harvest", "Auto-scheduled delivery", "Priority fresh stock", "Cancel anytime"],
    cta: "Start Subscription",
    highlight: true,
  },
];

export default function Products() {
  return (
    <section id="products" className="section-base" style={{ background: "#FDFAF5" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Our Products</span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Choose Your
            <span style={{ color: "#4A7A50" }}> Wellness Pack</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            Farm-fresh, pre-cleaned banana stem — in the format that fits your lifestyle.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="card-hover rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: product.highlight ? "linear-gradient(160deg, #2D5A35, #1A3A20)" : "#FFFFFF",
                border: product.highlight ? "none" : "1px solid rgba(168,197,172,0.3)",
                boxShadow: product.highlight
                  ? "0 20px 60px rgba(45,90,53,0.35)"
                  : "0 4px 24px rgba(45,90,53,0.06)",
              }}
            >
              {/* Badge */}
              <div className="px-5 pt-5">
                <span
                  className="text-label text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: `${product.badgeColor}20`,
                    color: product.highlight ? "#A8C5AC" : product.badgeColor,
                    border: `1px solid ${product.badgeColor}30`,
                  }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Image */}
              <div className="px-5 pt-4 pb-2">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: product.highlight ? "rgba(255,255,255,0.08)" : "#F5F0E8" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={220}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4 flex-1 flex flex-col">
                <div className="mb-1">
                  <span className="text-label text-xs" style={{ color: product.highlight ? "#7A9E7E" : "#A8C5AC", fontSize: "0.65rem" }}>
                    {product.weight}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: product.highlight ? "#FDFAF5" : "#1A3A20" }}>
                  {product.name}
                </h3>
                <p className="text-xs mb-4" style={{ color: product.highlight ? "#7A9E7E" : "#9CA3AF" }}>
                  {product.tagline}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-5 flex-1">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs" style={{ color: product.highlight ? "#A8C5AC" : "#6B7280" }}>
                      <ShieldCheck size={13} style={{ color: product.highlight ? "#7A9E7E" : "#7A9E7E", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-bold text-2xl" style={{ color: product.highlight ? "#FDFAF5" : "#1A3A20" }}>
                    {product.price}
                  </span>
                  <span className="text-sm line-through" style={{ color: product.highlight ? "#4A7A50" : "#D1D5DB" }}>
                    {product.originalPrice}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "#C9A84C" }}>
                    {Math.round((1 - parseInt(product.price.replace("₹","")) / parseInt(product.originalPrice.replace("₹",""))) * 100)}% off
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: product.highlight ? "#25D366" : "linear-gradient(135deg, #2D5A35, #4A7A50)",
                    color: "white",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(45,90,53,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  {product.highlight && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {product.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10" style={{ borderTop: "1px solid rgba(168,197,172,0.2)" }}>
          {[
            { icon: "🚚", text: "Free delivery on orders above ₹199" },
            { icon: "♻️", text: "100% compostable packaging" },
            { icon: "⚡", text: "Order before 10AM for same-day delivery" },
            { icon: "🔄", text: "Easy subscription management" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
