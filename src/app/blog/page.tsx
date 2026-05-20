import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Blog & Recipes | Vazha Wellness",
  description: "Learn about the ancient Ayurvedic benefits of banana stem, read detox guides, and explore traditional South Indian recipes.",
};

export default function BlogListing() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32" style={{ background: "#FDFAF5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Wellness Journal</span>
            <h1 className="text-5xl font-bold mb-6" style={{ color: "#1A3A20" }}>
              Notes on <span style={{ color: "#4A7A50" }}>Tradition.</span>
            </h1>
            <p className="text-lg" style={{ color: "#6B7280" }}>
              Explore the science of gut health, traditional recipes, and modern detox rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block">
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A8C5AC]/20 h-full flex flex-col">
                  <div className="relative h-60 w-full overflow-hidden bg-[#F5F0E8]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-[#2D5A35] shadow-sm backdrop-blur-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-medium mb-3 block" style={{ color: "#C9A84C" }}>
                      {blog.date}
                    </span>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: "#1A3A20" }}>
                      {blog.title}
                    </h2>
                    <p className="text-sm line-clamp-3 mb-6 flex-1" style={{ color: "#6B7280" }}>
                      {blog.excerpt}
                    </p>
                    <span className="text-sm font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform" style={{ color: "#4A7A50" }}>
                      Read Article <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
