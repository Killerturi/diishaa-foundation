"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ActivityCard from "./ActivityCard";
import { activities } from "./data";

export default function Activities() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-10 lg:py-10 lg:pb-15 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="flex justify-center items-center mb-10">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-orange-400 rounded-full" />

            <h2 className="text-l md:text-4xl font-bold text-gray-900">
              MAKING A DIFFERENCE
            </h2>

            <div className="h-[2px] w-10 bg-orange-400 rounded-full" />
          </div>
        </div>

        {/* Slider */}

        <div className="relative">
          {/* Left Arrow */}

          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="
  hidden lg:flex
  absolute
  left-0
  top-1/2
  -translate-y-1/2
  z-20

  h-12
  w-12

  rounded-full
  bg-white
  shadow-xl

  items-center
  justify-center

  transition

  hover:bg-orange-500
  hover:text-white
"
            >
              <ChevronLeft size={15} />
            </button>
          )}

          {/* Right Arrow */}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="
  hidden lg:flex
  absolute
  right-0
  top-1/2
  -translate-y-1/2
  z-20

  h-12
  w-12

  rounded-full
  bg-white
  shadow-xl

  items-center
  justify-center

  transition

  hover:bg-orange-500
  hover:text-white
"
            >
              <ChevronRight size={15} />
            </button>
          )}

          {/* Embla */}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="
flex-[0_0_48%]
sm:flex-[0_0_36%]
md:flex-[0_0_28%]
lg:flex-[0_0_22%]
xl:flex-[0_0_18%]
px-2
"
                >
                  <ActivityCard activity={activity} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
