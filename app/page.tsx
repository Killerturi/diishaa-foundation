import Activities from "@/components/home/activities/Activities";
import Engagement from "@/components/home/engagement/Engagement";
import FocusSection from "@/components/home/focus/FocusSection";
import Hero from "@/components/home/hero/Hero";
import ImpactSection from "@/components/home/impact/ImpactSection";
import NewsSection from "@/components/home/news/NewsSection";
import QuickActions from "@/components/layout/navbar/mobile/QuickActions";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F8F8F8]">
      {/* Hero Section */}
      <div className="relative">
        <Hero />

        {/* Mobile Quick Actions
            Visible only on Home page */}
        <div className="lg:hidden">
          <QuickActions />
        </div>
      </div>

      {/* Focus Areas */}
      <FocusSection />

      {/* Our Impact */}
      <ImpactSection />

      {/* Activities */}
      <Activities />

      {/* Engagement */}
      <Engagement />

      {/* News */}
      <NewsSection />
    </main>
  );
}
