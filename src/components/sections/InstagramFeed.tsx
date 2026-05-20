"use client";

import { Camera } from "lucide-react";

const posts = [
  {
    id: "ig-1",
    emoji: "🥤",
    caption: "Morning detox ritual ✨ Banana stem juice + coconut water = gut magic",
    likes: "1.2K",
    type: "Reel",
    bg: "linear-gradient(135deg, #D4E8D6, #A8C5AC)",
  },
  {
    id: "ig-2",
    emoji: "🌿",
    caption: "This is what farm-fresh looks like. Harvested at dawn. At your door by noon.",
    likes: "987",
    type: "Photo",
    bg: "linear-gradient(135deg, #EDF4EE, #D4E8D6)",
  },
  {
    id: "ig-3",
    emoji: "🍲",
    caption: "Banana stem kootu — grandmother's recipe, ready in 20 minutes with our cleaned packs",
    likes: "2.3K",
    type: "Reel",
    bg: "linear-gradient(135deg, #F5EDD5, #E8D5A3)",
  },
  {
    id: "ig-4",
    emoji: "📦",
    caption: "Unboxing your weekly wellness delivery 💚 What's your detox ritual?",
    likes: "1.8K",
    type: "Reel",
    bg: "linear-gradient(135deg, #D4E8D6, #BFD9C2)",
  },
  {
    id: "ig-5",
    emoji: "💪",
    caption: "30 days of banana stem. Here's what happened to my gut health...",
    likes: "4.1K",
    type: "Carousel",
    bg: "linear-gradient(135deg, #EDF4EE, #C5DCC8)",
  },
  {
    id: "ig-6",
    emoji: "🌅",
    caption: "5 AM at the farm. This is why our banana stem is always the freshest.",
    likes: "756",
    type: "Photo",
    bg: "linear-gradient(135deg, #FFF5D6, #F5E8C0)",
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-base" style={{ background: "#FDFAF5" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-label mb-2 block" style={{ color: "#7A9E7E" }}>Follow the Journey</span>
            <h2 className="text-title" style={{ color: "#1A3A20" }}>
              Real Life. Real Wellness.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Camera size={16} />
            @vazha.wellness
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              id={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center cursor-pointer"
              style={{ background: post.bg, textDecoration: "none" }}
            >
              {/* Content */}
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {post.emoji}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(45,90,53,0.15)", color: "#2D5A35" }}
                >
                  {post.type}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(26,58,32,0.88)" }}
              >
                <p className="text-white text-xs text-center leading-relaxed mb-3">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1 text-xs" style={{ color: "#A8C5AC" }}>
                  <span>❤️</span>
                  <span>{post.likes} likes</span>
                </div>
                <span className="mt-3 text-xs font-semibold" style={{ color: "#7A9E7E" }}>
                  View on Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm mb-3" style={{ color: "#9CA3AF" }}>
            Tag us in your banana stem creations for a chance to be featured
          </p>
          <span className="font-semibold text-sm" style={{ color: "#4A7A50" }}>#VazhaWellness #BananaStemDetox #Vazhaithandu</span>
        </div>
      </div>
    </section>
  );
}
