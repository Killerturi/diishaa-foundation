"use client";

import impactData from "./impactData";
import ImpactCard from "./ImpactCard";

export default function MobileImpact() {
  return (
    <section className="block mt-2 px-4 pb-4  lg:hidden">
      <div
        className="
          relative
          overflow-hidden
          rounded-[18px]
          bg-gradient-to-r
          from-[#08361C]
          via-[#0A3D1F]
          to-[#08361C]
          shadow-[0_8px_20px_rgba(0,0,0,.15)]
        "
      >
        {/* Background Pattern */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)]
            [background-size:18px_18px]
          "
        />

        <div className="relative z-10 p-4">
          {/* Heading */}

          <div className="mb-1 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89C34]" />

            <h2
              className="
                text-[14px]
                font-bold
                uppercase
                tracking-wide
                text-white
              "
            >
              OUR IMPACT
            </h2>

            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89C34]" />
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-4">
            {impactData.map((item, index) => (
              <ImpactCard
                key={item.label}
                icon={item.icon}
                number={item.number}
                label={item.label}
                showDivider={index !== impactData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
