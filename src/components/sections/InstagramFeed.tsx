"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-base bg-[#F7F4EE]">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6 animate-fade-up">
          <div>
            <span className="text-label text-[#5E7A63] mb-4 block">Follow The Journey</span>
            <h2 className="text-headline text-[#1F1F1F]">
              Daily <span className="text-[#5E7A63] italic">Rituals.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#D9C7AE] flex items-center justify-center text-[#5E7A63] transition-colors group-hover:bg-[#5E7A63] group-hover:text-white">
              <Camera size={16} />
            </div>
            <span className="text-sm font-medium text-[#3A3A3A] group-hover:text-[#5E7A63] transition-colors">@stem.native</span>
          </a>
        </div>

        <div className="relative aspect-[3/2] w-full animate-fade-in shadow-xl">
          <Image
            src="/instagram-grid.png"
            alt="Stem Native Instagram aesthetic grid"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mt-12 animate-fade-up">
          <p className="text-caption text-[#7A7A72] mb-2">
            Tag us in your morning rituals for a chance to be featured.
          </p>
          <span className="text-sm font-medium text-[#5E7A63]">#RootedInWellness</span>
        </div>
      </div>
    </section>
  );
}
