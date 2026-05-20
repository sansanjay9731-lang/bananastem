"use client";

import { Clock, Users, ChefHat } from "lucide-react";

const recipes = [
  {
    id: "recipe-juice",
    title: "Morning Detox Juice",
    subtitle: "Banana Stem & Coconut Water",
    description:
      "Start your day with this gut-cleansing, kidney-loving elixir. Just 3 ingredients. Zero effort. Maximum detox.",
    time: "5 min",
    serves: "1",
    difficulty: "Easy",
    steps: [
      "Grate 200g of banana stem",
      "Blend with 200ml fresh coconut water",
      "Add a squeeze of lime and a pinch of cumin",
      "Strain and serve chilled",
    ],
    tag: "Detox",
    tagColor: "#4A7A50",
    emoji: "🥤",
    seoKeyword: "banana stem juice recipe",
  },
  {
    id: "recipe-kootu",
    title: "Banana Stem Kootu",
    subtitle: "Traditional South Indian Classic",
    description:
      "The timeless Tamil recipe your grandmother made. Creamy moong dal, coconut, and banana stem in perfect harmony.",
    time: "25 min",
    serves: "3-4",
    difficulty: "Medium",
    steps: [
      "Cook moong dal until soft",
      "Sauté banana stem rounds with mustard and curry leaves",
      "Add fresh coconut paste and turmeric",
      "Combine and simmer for 5 minutes",
    ],
    tag: "Traditional",
    tagColor: "#8B6E4E",
    emoji: "🍲",
    seoKeyword: "banana stem kootu recipe",
  },
  {
    id: "recipe-smoothie",
    title: "Green Detox Smoothie",
    subtitle: "Banana Stem, Cucumber & Mint",
    description:
      "A fiber-packed, alkaline smoothie that resets your gut. Great post-workout or as a clean morning meal.",
    time: "7 min",
    serves: "2",
    difficulty: "Easy",
    steps: [
      "Blend 150g banana stem with 1 cucumber",
      "Add a handful of fresh mint leaves",
      "Add 1 cup cold water or almond milk",
      "Blend smooth. Strain if desired.",
    ],
    tag: "Fiber Boost",
    tagColor: "#7A9E7E",
    emoji: "🥗",
    seoKeyword: "banana stem smoothie recipe",
  },
  {
    id: "recipe-poriyal",
    title: "Banana Stem Poriyal",
    subtitle: "Quick Stir-Fry Side Dish",
    description:
      "A light, refreshing stir-fry with grated coconut and tempering spices. Ready in under 20 minutes.",
    time: "20 min",
    serves: "2-3",
    difficulty: "Easy",
    steps: [
      "Slice banana stem into thin rounds",
      "Temper with mustard, curry leaves, dried red chilli",
      "Add banana stem and cook covered for 10 min",
      "Finish with fresh grated coconut",
    ],
    tag: "Quick Cook",
    tagColor: "#C9A84C",
    emoji: "🥘",
    seoKeyword: "banana stem poriyal recipe",
  },
];

export default function Recipes() {
  return (
    <section id="recipes" className="section-base" style={{ background: "#FDFAF5" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label mb-4 block" style={{ color: "#7A9E7E" }}>Recipes & Education</span>
          <h2 className="text-headline mb-5" style={{ color: "#1A3A20" }}>
            Cook With
            <span style={{ color: "#4A7A50" }}> Confidence</span>
          </h2>
          <p className="text-body-lg" style={{ color: "#6B7280" }}>
            From traditional South Indian classics to modern detox shots — here&apos;s everything 
            you need to start cooking with banana stem.
          </p>
        </div>

        {/* Recipe cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              id={recipe.id}
              className="rounded-3xl overflow-hidden card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168,197,172,0.25)",
                boxShadow: "0 4px 24px rgba(45,90,53,0.06)",
              }}
              itemScope
              itemType="https://schema.org/Recipe"
            >
              {/* Header area */}
              <div
                className="p-7 pb-5"
                style={{ background: `linear-gradient(135deg, ${recipe.tagColor}08, ${recipe.tagColor}04)` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: `${recipe.tagColor}15`, color: recipe.tagColor, border: `1px solid ${recipe.tagColor}25` }}
                  >
                    {recipe.tag}
                  </span>
                  <span className="text-4xl" aria-hidden="true">{recipe.emoji}</span>
                </div>

                <h3 className="font-semibold text-xl mb-1" style={{ color: "#1A3A20" }} itemProp="name">
                  {recipe.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: recipe.tagColor }}>
                  {recipe.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }} itemProp="description">
                  {recipe.description}
                </p>
              </div>

              {/* Meta info */}
              <div
                className="flex items-center gap-6 px-7 py-4"
                style={{ borderTop: "1px solid rgba(168,197,172,0.15)", borderBottom: "1px solid rgba(168,197,172,0.15)" }}
              >
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}>
                  <Clock size={13} style={{ color: "#7A9E7E" }} />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}>
                  <Users size={13} style={{ color: "#7A9E7E" }} />
                  <span>Serves {recipe.serves}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}>
                  <ChefHat size={13} style={{ color: "#7A9E7E" }} />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>

              {/* Steps */}
              <div className="px-7 py-5">
                <h4 className="text-xs font-semibold mb-3 text-label" style={{ color: "#4A7A50" }}>
                  HOW TO MAKE IT
                </h4>
                <ol className="space-y-2.5" itemProp="recipeInstructions">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#6B7280" }}>
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ background: `${recipe.tagColor}15`, color: recipe.tagColor }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA */}
              <div className="px-7 pb-6">
                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20banana%20stem%20for%20the%20${encodeURIComponent(recipe.title)}%20recipe`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: recipe.tagColor, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1A3A20")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = recipe.tagColor)}
                >
                  Order ingredients on WhatsApp →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom SEO note */}
        <div className="mt-12 text-center">
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Looking for more banana stem recipes? Follow us on Instagram or message us on WhatsApp — 
            our team shares new recipes every week.
          </p>
        </div>
      </div>
    </section>
  );
}
