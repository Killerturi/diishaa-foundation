import CommunityHero from "@/components/community/CommunityHero";
import WhyJoinCommunity from "@/components/community/WhyJoinCommunity";
import CommunityProcess from "@/components/community/CommunityProcess";
import CommunityContribution from "@/components/community/CommunityContribution";
import CommunityCTA from "@/components/community/CommunityCTA";
import CommunityApplication from "@/components/community/CommunityApplication";

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========================================
          HERO
      ========================================== */}
      <CommunityHero />

      {/* =========================================
          WHY JOIN OUR COMMUNITY
      ========================================== */}
      <WhyJoinCommunity />

      {/* =========================================
          HOW IT WORKS
      ========================================== */}
      <CommunityProcess />

      {/* =========================================
          ANNUAL CONTRIBUTION
      ========================================== */}
      <CommunityContribution />

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <CommunityCTA />

      {/* =========================================
          APPLICATION FORM
      ========================================== */}
      <CommunityApplication />
    </main>
  );
}
