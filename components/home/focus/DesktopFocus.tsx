"use client";

import focusData from "./focusData";
import FocusCard from "./FocusCard";

export default function DesktopFocus() {
  return (
    <section className="relative z-30 -mt-12 hidden lg:block">
      <div className="mx-auto max-w-[1300px] px-5">
        <div
          className="
            rounded-[28px]
            bg-white
            px-7
            py-3
            border
            border-[#EFE7D8]
            shadow-[0_12px_35px_rgba(0,0,0,0.08)]
          "
        >
          {/* Heading */}

          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#C89C34] to-[#C89C34]" />

            <h2
              className="
                text-[30px]
                font-extrabold
                uppercase
                tracking-wide
                text-[#1B1B1B]
              "
            >
              OUR FOCUS AREAS
            </h2>

            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent via-[#C89C34] to-[#C89C34]" />
          </div>

          {/* Cards */}

          <div className="grid grid-cols-8 gap-3">
            {focusData.map((item) => (
              <FocusCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
