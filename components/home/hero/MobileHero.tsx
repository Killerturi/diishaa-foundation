"use client";

import HeroSlider from "./HeroSlider";
import { heroContent } from "./heroContent";

export default function MobileHero() {
  return (
    <section
      className="
    relative
    h-[560px]
    overflow-hidden
    pt-10
  "
    >
      {/* Slider */}
      <HeroSlider />

      {/* White Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white/85
          via-white/45
          to-transparent
          z-10
        "
      />

      {/* Content */}

      <div
        className="
    absolute
    inset-0
    z-20
    flex
    items-center
    pt-10
  "
      >
        <div className="px-5">
          {/* Script */}

          <h3
            className="
              font-[var(--font-script)]
              text-[#D67A2B]
              text-[34px]
              leading-none
            "
          >
            {heroContent.script}
          </h3>

          {/* Heading */}

          <h1
            className="
              mt-2
              max-w-[290px]
              text-[46px]
              leading-[0.95]
              font-black
              text-[#083E29]
            "
          >
            {heroContent.title1}
          </h1>

          <h2
            className="
              mt-2
              text-[44px]
              leading-[0.95]
              font-black
              text-[#EF7A18]
            "
          >
            {heroContent.title2}
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[300px]
              text-[15px]
              leading-7
              text-[#2F2F2F]
            "
          >
            {heroContent.description}
          </p>
        </div>
      </div>

      {/* Pagination */}

      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
