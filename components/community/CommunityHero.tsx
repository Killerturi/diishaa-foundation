"use client";

import Link from "next/link";
import { communityHero } from "./community.data";

export default function CommunityHero() {
  const handleJoinNow = () => {
    document.getElementById("community-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleLearnMore = () => {
    document.getElementById("why-join-community")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#0B3D91]">
      {/* =========================================
          TRICOLOR TOP ACCENT
      ========================================== */}
      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[45px] border-[#FF9933]/10 sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-32 -left-28 h-72 w-72 rounded-full border-[45px] border-[#138808]/10 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl sm:h-64 sm:w-64" />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-12 lg:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* =====================================
              EYEBROW
          ====================================== */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#FF9933]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFCC99] sm:text-xs">
              {communityHero.eyebrow}
            </span>

            <span className="h-2 w-2 rounded-full bg-[#138808]" />
          </div>

          {/* =====================================
              TITLE
          ====================================== */}
          <h1 className="mt-6 text-2xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-6xl">
            {communityHero.title}

            <span className="mt-2 block whitespace-nowrap text-[18px] font-black text-[#FF9933] sm:text-5xl lg:text-6xl">
              {communityHero.highlightedTitle}
            </span>
          </h1>

          {/* =====================================
              DESCRIPTION
          ====================================== */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            {communityHero.description}
          </p>

          {/* =====================================
              CTA BUTTONS
          ====================================== */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {/* PRIMARY CTA */}
            <Link
              href="/join-us/apply"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-xl
                bg-[#FF9933]
                px-7
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-black/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E88921]
                hover:shadow-xl
                active:translate-y-0
              "
            >
              {communityHero.primaryCta}

              <span className="ml-2 text-base">→</span>
            </Link>

            {/* SECONDARY CTA */}
            <button
              type="button"
              onClick={handleLearnMore}
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/25
                bg-white/10
                px-7
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white
                hover:text-[#0B3D91]
              "
            >
              {communityHero.secondaryCta}

              <span className="ml-2 text-base">↓</span>
            </button>
          </div>

          {/* =====================================
              TRUST MESSAGE
          ====================================== */}

          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/10" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-xs">
              Together • Community • Impact
            </p>

            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM TRICOLOR ACCENT
      ========================================== */}

      <div className="absolute inset-x-0 bottom-0 flex h-1">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>
    </section>
  );
}
