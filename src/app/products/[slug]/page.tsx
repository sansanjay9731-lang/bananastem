import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ShieldCheck, Truck, Clock, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const discountPercent = Math.round(
    (1 - parseInt(product.price.replace("₹", "")) / parseInt(product.originalPrice.replace("₹", ""))) * 100
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFAF5] pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Product Images (Left) */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="rounded-3xl overflow-hidden bg-[#F5F0E8] border border-[#A8C5AC]/30 aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating badging */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span
                      className="text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
                      style={{ background: product.badgeColor, color: "white" }}
                    >
                      {product.badge}
                    </span>
                    <span className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-[#2D5A35] shadow-sm">
                      Farm Fresh 🌿
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info (Right) */}
            <div className="flex flex-col justify-center">
              {/* Breadcrumb / Category */}
              <div className="flex items-center gap-2 text-sm text-[#7A9E7E] mb-4">
                <span>Shop</span>
                <span>/</span>
                <span>Fresh Banana Stem</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A3A20] mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-[#6B7280] mb-6">{product.tagline}</p>

              {/* Price Block */}
              <div className="flex items-end gap-4 mb-8 pb-8 border-b border-[#A8C5AC]/20">
                <span className="text-4xl font-bold text-[#2D5A35]">{product.price}</span>
                <div className="flex flex-col">
                  <span className="text-lg text-[#9CA3AF] line-through">{product.originalPrice}</span>
                  <span className="text-sm font-semibold text-[#C9A84C]">Save {discountPercent}% today</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-[#4B5563] mb-8">
                {product.description}
              </p>

              {/* Core Benefits */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#4A7A50] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#374151]">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Scarcity / Urgency */}
              <div className="bg-[#FFF8E7] border border-[#F3E2B3] rounded-2xl p-4 flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={20} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#8B6E4E]">Harvesting Soon</h4>
                  <p className="text-xs text-[#8B6E4E]/80">{product.shippingText}</p>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <a
                href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-lg text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #2D5A35, #4A7A50)" }}
              >
                Secure Your Order via WhatsApp
                <ArrowRight size={20} />
              </a>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <ShieldCheck size={18} className="text-[#7A9E7E]" /> Secure Checkout
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Truck size={18} className="text-[#7A9E7E]" /> Reliable Delivery
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Leaf size={18} className="text-[#7A9E7E]" /> 100% Organic
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-2xl z-50 lg:hidden flex items-center justify-between">
        <div>
          <span className="block text-xl font-bold text-[#2D5A35]">{product.price}</span>
          <span className="block text-xs font-semibold text-[#C9A84C]">{product.badge}</span>
        </div>
        <a
          href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl font-bold text-sm text-white shadow-md transition-all active:scale-95"
          style={{ background: "#2D5A35" }}
        >
          Buy Now
        </a>
      </div>
      <Footer />
    </>
  );
}
