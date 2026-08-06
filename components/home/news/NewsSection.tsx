"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";

import { news } from "./data";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4">

        {/* Heading */}

        <div className="mb-10 flex items-center justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="h-[2px] w-10 bg-orange-500"></div>

              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Stay Updated
              </span>

            </div>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Latest News & Events
            </h2>

          </div>

          <Link
            href="/news"
            className="
              hidden
              md:flex
              items-center
              gap-2
              font-semibold
              text-green-700
              hover:text-green-800
            "
          >
            View All

            <ArrowRight
              size={18}
            />

          </Link>

        </div>

        {/* Desktop */}

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {news.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

        {/* Mobile Slider */}

        <div
          className="overflow-hidden md:hidden"
          ref={emblaRef}
        >
          <div className="flex">

            {news.map((item) => (

              <div
                key={item.id}
                className="flex-[0_0_88%] pr-4"
              >

                <NewsCard item={item} />

              </div>

            ))}

          </div>

        </div>

        {/* Mobile Button */}

        <div className="mt-8 flex justify-center md:hidden">

          <Link
            href="/news"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-green-700
              px-6
              py-3
              font-semibold
              text-white
            "
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}