"use client";

import { useMemo, useState } from "react";

import NewsHero from "@/components/news/NewsHero";
import UpcomingEvent from "@/components/news/UpcomingEvent";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsFilters from "@/components/news/NewsFilters";
import NewsGrid from "@/components/news/NewsGrid";

import { NewsCategory, newsData } from "@/components/news/news.data";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    NewsCategory | "All"
  >("All");

  /* =========================================
     UPCOMING EVENT
  ========================================== */

  const upcomingEvent = useMemo(() => {
    return newsData
      .filter(
        (item) =>
          item.category === "Upcoming" && item.eventStatus === "upcoming",
      )
      .sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )[0];
  }, []);

  /* =========================================
     FEATURED STORY
  ========================================== */

  const featuredStory = useMemo(() => {
    return newsData.find(
      (item) => item.featured && item.category !== "Upcoming",
    );
  }, []);

  /* =========================================
     FILTER NEWS 
  ========================================== */

  const filteredNews = useMemo(() => {
    /*
      We don't show the upcoming event again
      inside the normal news grid.
    */
    const regularNews = newsData.filter((item) => item.category !== "Upcoming");

    if (selectedCategory === "All") {
      return regularNews;
    }

    /*
      When the user selects Upcoming,
      show upcoming content.
    */
    if (selectedCategory === "Upcoming") {
      return newsData.filter((item) => item.category === "Upcoming");
    }

    return regularNews.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================
          HERO
      ====================================== */}
      <NewsHero />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================
            UPCOMING EVENT
        ==================================== */}
        <div
          id="upcoming-events"
          className="relative z-10 scroll-mt-24 -mt-3 pb-10 sm:-mt-5 sm:pb-14"
        >
          {upcomingEvent && <UpcomingEvent event={upcomingEvent} />}
        </div>

        {/* ===================================
            FEATURED STORY
        ==================================== */}
        {featuredStory && (
          <section className="pb-12 sm:pb-16">
            <FeaturedNews news={featuredStory} />
          </section>
        )}

        {/* ===================================
            NEWS LIST
        ==================================== */}
        <section id="latest-updates" className="pb-16 sm:pb-20 lg:pb-24">
          {/* FILTERS */}
          <NewsFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* RESULTS COUNT */}
          <div className="mt-6 mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredNews.length}
              </span>{" "}
              {filteredNews.length === 1 ? "update" : "updates"}
            </p>
          </div>

          {/* GRID */}
          <NewsGrid news={filteredNews} />
        </section>
      </div>
    </main>
  );
}
