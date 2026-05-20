"use client";

import Image from "next/image";

const products = [
  {
    id: "daily-detox",
    name: "Daily Detox Pack",
    weight: "500g",
    price: "149",
    oldPrice: "199",
    tag: "Bestseller",
    description: "Premium pre-cleaned rounds. Perfect for morning juice or smoothies. 3-4 servings.",
    image: "/product-pack.png"
  },
  {
    id: "family-pack",
    name: "Gut Wellness Pack",
    weight: "1kg",
    price: "249",
    oldPrice: "349",
    tag: "Value Pack",
    description: "Family size pack for daily juicing and traditional recipes like kootu and poriyal.",
    image: "/products-flatlay.png"
  },
  {
    id: "juice-ready",
    name: "Morning Juice Pack",
    weight: "300g",
    price: "129",
    oldPrice: "159",
    tag: "Ultra Fresh",
    description: "Finely diced and vacuum sealed to retain maximum juice and enzymes. Ready to blend.",
    image: "/product-pack.png"
  },
];

export default function Products() {
  return (
    <section id="products" className="section-lg bg-[#F7F4EE]">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl animate-fade-up">
            <span className="text-label text-[#5E7A63] mb-4 block">The Range</span>
            <h2 className="text-headline text-[#1F1F1F]">
              Premium Quality, <br />
              <span className="text-[#5E7A63] italic">Zero Effort.</span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-body-lg text-right max-w-sm">
              We harvest daily, remove the outer layers and fiber, and pack it fresh. 
              Ready for your kitchen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div 
              key={product.id}
              className="group bg-white p-6 border border-[#D9C7AE]/40 card-lift"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] bg-[#E8E4DC] mb-6 overflow-hidden border border-[#D9C7AE]/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#5E7A63] text-white text-[0.65rem] uppercase tracking-widest py-1.5 px-3">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-title text-[#1F1F1F] text-2xl mb-1">{product.name}</h3>
                    <span className="text-label text-[#7A7A72]">{product.weight}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-medium text-[#1F1F1F]">₹{product.price}</span>
                    <span className="text-xs text-[#C79A72] line-through">₹{product.oldPrice}</span>
                  </div>
                </div>

                <p className="text-caption">
                  {product.description}
                </p>

                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center mt-2"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
