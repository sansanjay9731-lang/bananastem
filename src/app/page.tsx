import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import WhyBananaStem from "@/components/sections/WhyBananaStem";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Subscription from "@/components/sections/Subscription";
import Recipes from "@/components/sections/Recipes";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <WhyBananaStem />
      <Products />
      <HowItWorks />
      <Subscription />
      <Recipes />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <FinalCTA />
    </>
  );
}
