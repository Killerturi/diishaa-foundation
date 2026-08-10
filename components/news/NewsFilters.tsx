"use client";

import { useEffect, useRef, useState } from "react";

import { NewsCategory } from "./news.data";

interface NewsFiltersProps {
  selectedCategory: NewsCategory | "All";
  onCategoryChange: (category: NewsCategory | "All") => void;
}

const categories: Array<NewsCategory | "All"> = [
  "All",
  "Upcoming",
  "Events",
  "Impact Stories",
  "Announcements",
  "Achievements",
];

export default function NewsFilters({
  selectedCategory,
  onCategoryChange,
}: NewsFiltersProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollRight, setCanScrollRight] = useState(false);

  /* =========================================
     CHECK WHETHER CONTENT ACTUALLY OVERFLOWS
  ========================================== */

  const checkScroll = () => {
    const container = scrollRef.current;

    if (!container) return;

    const hasOverflow = container.scrollWidth > container.clientWidth + 5;

    const hasMoreRight =
      container.scrollLeft + container.clientWidth < container.scrollWidth - 5;

    setCanScrollRight(hasOverflow && hasMoreRight);
  };

  /* =========================================
     INITIAL CHECK + RESIZE CHECK
  ========================================== */

  useEffect(() => {
    checkScroll();

    const handleResize = () => {
      checkScroll();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================
     SCROLL RIGHT
  ========================================== */

  const scrollRight = () => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: 240,
      behavior: "smooth",
    });

    /*
      Give the browser a moment to complete
      the smooth scroll before checking again.
    */
    setTimeout(() => {
      checkScroll();
    }, 350);
  };

  /* =========================================
     HANDLE MANUAL TOUCH / MOUSE SCROLL
  ========================================== */

  const handleScroll = () => {
    checkScroll();
  };

  return (
    <div className="w-full">
      {/* =======================================
          SECTION TITLE
      ======================================== */}

      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF9933]">
          Explore Updates
        </p>

        <h2 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">
          Discover our latest stories
        </h2>
      </div>

      {/* =======================================
          FILTER WRAPPER
      ======================================== */}

      <div className="relative">
        {/* =====================================
            SCROLL AREA
        ====================================== */}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex
            w-full
            gap-2
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            snap-x
            snap-mandatory
            overscroll-x-contain
            touch-pan-x
            pb-2
            pr-2

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                aria-pressed={isActive}
                className={[
                  "shrink-0 snap-start",
                  "min-h-11 rounded-full px-5",
                  "whitespace-nowrap",
                  "text-sm font-semibold",
                  "transition-all duration-200",
                  "active:scale-95",

                  isActive
                    ? "bg-[#FF9933] text-white shadow-md shadow-[#FF9933]/20"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#FF9933] hover:text-[#D97706]",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =====================================
            MOBILE RIGHT FADE
        ====================================== */}

        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 flex h-11 w-12 items-center justify-end bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent sm:hidden">
            <span className="mr-1 text-lg font-bold text-[#0B3D91]">→</span>
          </div>
        )}

        {/* =====================================
            DESKTOP ARROW
        ====================================== */}

        {canScrollRight && (
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Show more categories"
            className="
              absolute
              right-1
              top-1/2
              hidden
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[#0B3D91]
              shadow-md
              transition-all
              hover:border-[#FF9933]
              hover:text-[#FF9933]
              sm:flex
            "
          >
            →
          </button>
        )}
      </div>

      {/* =========================================
          TRICOLOR ACCENT
      ========================================== */}

      <div className="mt-3 flex h-1 w-16 overflow-hidden rounded-full">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>
    </div>
  );
}
