import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { products } from "@/data/products";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedProduct = products.find(p => p.id === blog.relatedProductId);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32" style={{ background: "#FDFAF5" }}>
        <article className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <header className="mb-12 text-center">
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-[#A8C5AC]/20 text-[#2D5A35] mb-6 inline-block">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#1A3A20" }}>
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#6B7280" }}>
              <span style={{ color: "#C9A84C" }}>{blog.date}</span>
              <span>•</span>
              <span>By Stem Native</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-80 md:h-[400px] w-full rounded-3xl overflow-hidden mb-12 shadow-lg bg-[#F5F0E8]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#1A3A20] prose-a:text-[#4A7A50] prose-p:text-[#4B5563]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Embedded Product CTA (Conversion Focused) */}
          {relatedProduct && (
            <div className="mt-16 p-8 rounded-3xl border-2 border-[#2D5A35]/10 bg-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A7A50]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-[#F5F0E8]">
                  <Image src={relatedProduct.image} alt={relatedProduct.name} fill className="object-cover" />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">
                    Start Your Journey
                  </span>
                  <h4 className="text-2xl font-bold text-[#1A3A20] mb-2">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-sm text-[#6B7280] mb-6">
                    {relatedProduct.tagline}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href={`/products/${relatedProduct.id}`}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-1 hover:shadow-lg text-center"
                      style={{ background: "#2D5A35" }}
                    >
                      View Product
                    </Link>
                    <span className="text-sm font-semibold text-[#2D5A35]">{relatedProduct.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
