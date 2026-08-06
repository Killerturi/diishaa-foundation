import Activities from "@/components/home/activities/Activities";
import Engagement from "@/components/home/engagement/Engagement";
import FocusSection from "@/components/home/focus/FocusSection";
import Hero from "@/components/home/hero/Hero";
import ImpactSection from "@/components/home/impact/ImpactSection";
import NewsSection from "@/components/home/news/NewsSection";

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

      <Engagement />

      <NewsSection />

    </main>
  );
}
