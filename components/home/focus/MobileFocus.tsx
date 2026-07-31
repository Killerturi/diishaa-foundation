"use client";

import focusData from "./focusData";
import FocusCard from "./FocusCard";

export default function MobileFocus() {
  return (
    <section className="block bg-[#F8F8F8] px-4 py-8 lg:hidden">
      <div
        className="
          rounded-[20px]
          bg-white
          p-3
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          ring-1
          ring-[#F1E8D8]
        "
      >
        {/* Heading */}

        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#D4A64A]" />

          <h2
            className="
              text-center
              text-[18px]
              font-bold
              uppercase
              tracking-wide
              text-[#222]
            "
          >
            OUR FOCUS AREAS
          </h2>

          <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#D4A64A]" />
        </div>

        {/* Cards */}

        <div className="grid grid-cols-4 gap-1.5">
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
    </section>
  );
}
