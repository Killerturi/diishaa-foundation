"use client";

import Link from "next/link";

export default function CommunityCTA() {


  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute left-0 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9933]/5 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#138808]/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* =====================================
            CTA CARD
        ====================================== */}

        <div className="relative overflow-hidden rounded-3xl bg-[#0B3D91] shadow-xl">
          {/* TOP TRICOLOR LINE */}
          <div className="absolute inset-x-0 top-0 flex h-1.5">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          {/* DECORATIVE CIRCLE */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border-[30px] border-[#FF9933]/10" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full border-[35px] border-[#138808]/10" />

          {/* CONTENT */}
          <div className="relative px-5 py-10 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FF9933]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFCC99] sm:text-xs">
                TAKE THE NEXT STEP
              </span>

              <span className="h-2 w-2 rounded-full bg-[#138808]" />
            </div>

            {/* TITLE */}
            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to Become Part of the
              <span className="block text-[#FF9933]">Diishaa Community?</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Submit your application and take the first step toward becoming a
              Diishaa Community Member.
            </p>

            {/* CTA */}
            <Link
                  href="/join-us/apply"
              className="
                mt-7
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-xl
                bg-[#FF9933]
                px-8
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-black/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E88921]
                hover:shadow-xl
                active:translate-y-0
              "
            >
              Start Your Application
              <span className="ml-2 text-base">→</span>
            </Link>

            {/* SUPPORTING TEXT */}
            <p className="mt-4 text-[11px] text-white/45">
              Application first • Admin review • Payment after approval
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
