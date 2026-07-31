"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import heroImages from "./heroImages";

export default function HeroBackground() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    const cleanup = autoplay();
    return cleanup;
  }, [autoplay]);

  return (
    <div ref={emblaRef} className="overflow-hidden h-[520px] lg:h-[720px]">
      <div className="flex h-full">
        {heroImages.map((image, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
