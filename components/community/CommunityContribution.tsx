"use client";

import { communityContribution } from "./community.data";

export default function CommunityContribution() {
  const handleJoinNow = () => {
    document.getElementById("community-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#0B3D91] py-12 sm:py-12 lg:py-12">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[50px] border-[#FF9933]/10" />

      <div className="pointer-events-none absolute -bottom-32 -right-28 h-80 w-80 rounded-full border-[50px] border-[#138808]/10" />

      {/* =========================================
          TOP TRICOLOR ACCENT
      ========================================== */}

      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFCC99]">
            COMMUNITY CONTRIBUTION
          </p>

          <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            Support the Community,
            <span className="block text-[#FF9933]">Be Part of the Journey</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
            Your annual contribution helps support Diishaa Foundation&apos;s
            community initiatives and keeps you connected with our work.
          </p>
        </div>

        {/* =====================================
            CONTRIBUTION CARD
        ====================================== */}

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* CARD TOP */}
            <div className="flex h-1.5">
              <div className="w-1/3 bg-[#FF9933]" />
              <div className="w-1/3 bg-[#0B3D91]" />
              <div className="w-1/3 bg-[#138808]" />
            </div>

            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              {/* =================================
                  LEFT CONTENT
              ================================== */}

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center rounded-full bg-[#FF9933]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C66A00]">
                  {communityContribution.name}
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-950 sm:text-3xl">
                  Annual Community Contribution
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {communityContribution.description}
                </p>

                {/* WHAT YOU RECEIVE */}
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                    After successful completion
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Diishaa Community Account",
                      "Community ID with QR verification",
                      "Digital Community Certificate",
                      "Connection to eligible community activities",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#138808]/10 text-xs font-black text-[#138808]">
                          ✓
                        </span>

                        <span className="text-sm leading-5 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================
                  RIGHT PRICE PANEL
              ================================== */}

              <div className="relative flex flex-col justify-center bg-slate-50 p-6 sm:p-8 lg:p-10">
                {/* DECORATIVE ACCENT */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#FF9933]/10" />

                <div className="relative text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B3D91]">
                    Annual Contribution
                  </p>

                  <div className="mt-3 flex items-end justify-center gap-1">
                    <span className="text-2xl font-bold text-slate-700">₹</span>

                    <span className="text-5xl font-black leading-none text-slate-950 sm:text-6xl">
                      {communityContribution.amount}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    Valid for {communityContribution.duration}
                  </p>

                  {/* NOTICE */}
                  <div className="mt-6 rounded-xl border border-[#FF9933]/20 bg-[#FF9933]/5 px-4 py-3 text-left">
                    <p className="text-xs leading-5 text-slate-600">
                      Your application is reviewed by the Diishaa team before
                      payment is requested.
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={handleJoinNow}
                    className="
                      mt-6
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#FF9933]
                      px-6
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-[#FF9933]/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#E88921]
                      hover:shadow-xl
                      active:translate-y-0
                    "
                  >
                    Join Our Community
                    <span className="ml-2 text-base">→</span>
                  </button>

                  <p className="mt-3 text-[11px] leading-5 text-slate-400">
                    Payment is available only after application approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            TRUST MESSAGE
        ====================================== */}

        <div className="mx-auto mt-7 flex max-w-xl items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/10" />

          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs">
            Community • Support • Impact
          </p>

          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
