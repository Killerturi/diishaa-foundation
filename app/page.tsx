import Activities from "@/components/home/activities/Activities";
import FocusSection from "@/components/home/focus/FocusSection";
import Hero from "@/components/home/hero/Hero";
import ImpactSection from "@/components/home/impact/ImpactSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Focus Areas */}
      <FocusSection />
      
      {/* Our Impact */}
      <ImpactSection />

      <Activities />
      
    </main>
  );
}
