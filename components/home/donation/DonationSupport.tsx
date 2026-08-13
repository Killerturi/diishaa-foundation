"use client";

import { useState } from "react";
import { Heart, HandHeart, ArrowRight } from "lucide-react";

export default function DonationSupport() {
  const [highlightPayment, setHighlightPayment] = useState(false);

  const handleDonateClick = () => {
    const paymentSection = document.getElementById("donation-payment");

    if (!paymentSection) return;

    paymentSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Give visual feedback every time the button is clicked
    setHighlightPayment(false);

    requestAnimationFrame(() => {
      setHighlightPayment(true);

      setTimeout(() => {
        setHighlightPayment(false);
      }, 1200);
    });
  };

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-gradient-to-br
            from-[#063B20]
            via-[#075027]
            to-[#063B20]
            px-6
            py-10
            shadow-[0_18px_50px_rgba(6,59,32,0.18)]
            sm:px-10
            sm:py-12
            lg:px-16
            lg:py-14
          "
        >
          {/* Decorative saffron glow */}
          <div
            className="
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-[#F47B20]/15
              blur-3xl
            "
          />

          {/* Decorative green glow */}
          <div
            className="
              absolute
              -bottom-24
              -left-20
              h-60
              w-60
              rounded-full
              bg-[#138A45]/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-8
              text-center
              lg:flex-row
              lg:text-left
            "
          >
            {/* Content */}
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
                <Heart size={18} className="fill-[#F47B20] text-[#F47B20]" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F6C453]
                  "
                >
                  Together We Can
                </span>
              </div>

              <h2
                className="
    font-[var(--font-heading)]
    text-xl
    font-bold
    leading-tight
    text-white
    sm:text-3xl
  "
              >
                Every Contribution Can
                <span className="block whitespace-nowrap text-[#F6C453]">
                  Create a Better Tomorrow
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/75
                  sm:text-base
                "
              >
                Your support helps us continue our work with communities and
                create meaningful opportunities for people in need.
              </p>
            </div>

            {/* Donate Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleDonateClick}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#F47B20]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(244,123,32,0.25)]
                  transition-all
                  duration-300
                  hover:bg-[#E96D12]
                  hover:shadow-[0_12px_28px_rgba(244,123,32,0.32)]
                  active:scale-[0.98]
                  sm:px-9
                "
              >
                <HandHeart
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
                Donate Now 
                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
