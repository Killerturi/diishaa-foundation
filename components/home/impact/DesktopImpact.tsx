"use client";

import impactData from "./impactData";
import ImpactCard from "./ImpactCard";

export default function DesktopImpact() {
  return (
    <section className="hidden lg:block py-10">
      <div className="mx-auto max-w-[1320px] px-5">
        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            bg-gradient-to-r
           from-[#052D17]
via-[#063818]
to-[#052D17]
            shadow-[0_15px_40px_rgba(0,0,0,.18)]
          "
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative z-10 px-8 py-6">
            {/* Heading */}
            <div className="mb-1 flex items-center justify-center gap-2     ">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D9A441] to-[#D9A441]" />

              <h2 className="text-[22px] font-bold uppercase tracking-[1px] text-[#F8F2E7]">
                OUR IMPACT
              </h2>

              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#C89C34]" />
            </div>

            {/* Stats */}
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
      </div>
    </section>
  );
}
