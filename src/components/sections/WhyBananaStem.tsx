"use client";

import Image from "next/image";

export default function WhyBananaStem() {
  return (
    <section id="why-banana-stem" className="section-base bg-[#1F1F1F] text-[#F7F4EE]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual */}
          <div className="relative animate-fade-up">
            <div className="aspect-square bg-[#2D2D2A] p-8 md:p-12 flex flex-col justify-between border border-[#5E7A63]/20 relative overflow-hidden">
              {/* Top Text */}
              <div className="relative z-10">
                <span className="text-label text-[#AFC3B0] mb-4 block">The Forgotten Superfood</span>
                <h3 className="text-headline text-[#F7F4EE] leading-tight">
                  Why Did We <br />
                  <span className="italic text-[#5E7A63]">Stop Eating It?</span>
                </h3>
              </div>
              
              {/* Text overlay bottom */}
              <div className="relative z-10 mt-12 max-w-sm">
                <p className="text-caption text-[#D9C7AE]">
                  Banana stem was a weekly staple in Indian homes for centuries. 
                  But modern life got busy. Sourcing it fresh became hard. Cleaning it 
                  took too much time. So, we stopped.
                </p>
                <div className="mt-6 pt-6 border-t border-[#5E7A63]/30">
                  <p className="font-serif text-xl italic text-[#AFC3B0]">
                    We're bringing it back. Pre-cleaned, farm-fresh, and ready for your modern kitchen.
                  </p>
                </div>
              </div>

              {/* Decorative graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
                  <path d="M100 0 C150 0 200 50 200 100 C200 150 150 200 100 200 C50 200 0 150 0 100 C0 50 50 0 100 0 Z" stroke="#F7F4EE" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="60" stroke="#5E7A63" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Content Timeline */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-[#5E7A63] before:via-[#5E7A63]/50 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#5E7A63] bg-[#1F1F1F] text-[#AFC3B0] font-serif shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  01
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="text-xl font-serif text-[#F7F4EE] mb-2">The Past</h4>
                  <p className="text-caption text-[#7A7A72]">
                    Traditionally consumed weekly in South India to cleanse the gut, prevent kidney stones, and cool the body.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#5E7A63]/50 bg-[#1F1F1F] text-[#5E7A63] font-serif shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  02
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="text-xl font-serif text-[#F7F4EE] mb-2">The Problem</h4>
                  <p className="text-caption text-[#7A7A72]">
                    Urbanization made fresh sourcing difficult. The tedious 30-minute process of removing fiber layers led to its decline.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5E7A63] text-[#F7F4EE] font-serif shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  03
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="text-xl font-serif text-[#F7F4EE] mb-2">Stem Native</h4>
                  <p className="text-caption text-[#D9C7AE]">
                    We harvest at dawn, expertly clean the fibrous layers, and deliver it to you vacuum-sealed. Ready to juice or cook in seconds.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
