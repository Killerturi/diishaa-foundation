"use client";

import Image from "next/image";
import heroImages from "./heroImages";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      slidesPerView={1}
      loop={true}
      speed={900}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="heroSwiper"
    >
      {heroImages.map((image, index) => (
        <SwiperSlide key={index}>
          <section className="relative h-[520px] lg:h-[700px] overflow-hidden">
            {/* Background Image */}

            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/20" />

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
