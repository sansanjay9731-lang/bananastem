"use client";

import { Clock, Users, ChefHat } from "lucide-react";

const recipes = [
  {
    id: "recipe-juice",
    title: "Morning Detox Juice",
    subtitle: "Banana Stem & Coconut Water",
    description: "Start your day with this gut-cleansing, kidney-loving elixir. Just 3 ingredients. Zero effort.",
    time: "5 min",
    serves: "1",
    difficulty: "Easy",
    steps: [
      "Blend 200g of banana stem with 200ml fresh coconut water",
      "Add a squeeze of lime and a pinch of cumin",
      "Strain and serve chilled",
    ],
    tag: "Detox",
    emoji: "🌿",
  },
  {
    id: "recipe-kootu",
    title: "Banana Stem Kootu",
    subtitle: "Traditional South Indian Classic",
    description: "The timeless Tamil recipe your grandmother made. Creamy moong dal, coconut, and banana stem.",
    time: "25 min",
    serves: "3-4",
    difficulty: "Medium",
    steps: [
      "Cook moong dal until soft",
      "Sauté banana stem rounds with mustard and curry leaves",
      "Add fresh coconut paste, turmeric, and simmer",
    ],
    tag: "Traditional",
    emoji: "🍲",
  },
];

export default function Recipes() {
  return (
    <section id="recipes" className="section-lg bg-[#F7F4EE]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-label text-[#5E7A63] mb-4 block">Recipes & Education</span>
          <h2 className="text-headline text-[#1F1F1F]">
            Cook With <br />
            <span className="text-[#5E7A63] italic">Confidence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white border border-[#D9C7AE]/40 p-8 card-lift"
              itemScope
              itemType="https://schema.org/Recipe"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="bg-[#F7F4EE] text-[#5E7A63] border border-[#5E7A63]/20 text-[0.65rem] uppercase tracking-widest py-1.5 px-3">
                  {recipe.tag}
                </span>
                <span className="text-2xl opacity-80" aria-hidden="true">{recipe.emoji}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1F1F1F] mb-1" itemProp="name">
                {recipe.title}
              </h3>
              <p className="text-sm font-medium text-[#C79A72] mb-4">
                {recipe.subtitle}
              </p>
              <p className="text-caption mb-6" itemProp="description">
                {recipe.description}
              </p>

              <div className="flex items-center gap-6 py-4 border-y border-[#D9C7AE]/30 mb-6">
                <div className="flex items-center gap-2 text-xs text-[#7A7A72]">
                  <Clock size={14} className="text-[#5E7A63]" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#7A7A72]">
                  <Users size={14} className="text-[#5E7A63]" />
                  <span>Serves {recipe.serves}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#7A7A72]">
                  <ChefHat size={14} className="text-[#5E7A63]" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-label text-[#5E7A63] mb-4">How To Make It</h4>
                <ol className="space-y-3" itemProp="recipeInstructions">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-caption">
                      <span className="text-[#C79A72] font-serif italic mt-0.5">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <a
                href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20ingredients%20for%20the%20${encodeURIComponent(recipe.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-[#5E7A63] hover:text-[#1F1F1F] transition-colors flex items-center gap-2"
              >
                Order ingredients via WhatsApp →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
