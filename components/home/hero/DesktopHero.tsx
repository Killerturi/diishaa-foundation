"use client";

import HeroSlider from "./HeroSlider";
import HeroOverlay from "./HeroOverlay";
import HeroButtons from "./HeroButtons";
import { heroContent } from "./heroContent";


export default function DesktopHero() {
  return (
    <section className="relative h-[720px] overflow-hidden">
      {/* Background Slider */}
      <HeroSlider />

      {/* White Overlay */}
      <HeroOverlay />

      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="mx-auto flex h-full max-w-7xl items-center px-8">
          <div className="max-w-[650px]">
            {/* Script Heading */}

            <h3
              className="
                font-[var(--font-script)]
                text-[#D67A2C]
                text-[58px]
                leading-none
              "
            >
              {heroContent.script}
            </h3>

            {/* Main Heading */}

            <h1
              className="
                mt-2
                text-[78px]
                leading-[0.92]
                font-black
                text-[#0A442C]
              "
            >
              {heroContent.title1}
            </h1>

            <h2
              className="
                mt-1
                text-[74px]
                leading-[0.92]
                font-black
                text-[#EF7B1A]
              "
            >
              {heroContent.title2}
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[520px]
                text-[23px]
                leading-10
                text-[#333333]
              "
            >
              {heroContent.description}
            </p>

            {/* Buttons */}

            <div className="mt-12">
              <HeroButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
        {/* HeroPagination */}
      </div>
    </section>
  );
}
