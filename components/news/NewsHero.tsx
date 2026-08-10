import Link from "next/link";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================================
          TOP TRICOLOR LINE
      ========================================== */}
      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FF9933]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#138808]/10 blur-3xl" />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-10 lg:pt-10">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF9933]/30 bg-[#FF9933]/10 px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF9933]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D97706] sm:text-sm">
              Our Journey
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Stories of
            <span className="block text-[#FF9933]">Hope & Impact</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Discover the people, events and initiatives behind Dishaa
            Foundation's journey towards creating meaningful change in
            communities.
          </p>

          {/* ACTIONS */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#latest-updates"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FF9933] px-6 text-sm font-bold text-white shadow-lg shadow-[#FF9933]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E88921] hover:shadow-xl hover:shadow-[#FF9933]/25 active:translate-y-0"
            >
              Explore Updates
              <span className="ml-2 text-base">↓</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("upcoming-events")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#0B3D91] bg-white px-6 text-sm font-bold text-[#0B3D91] transition-all duration-300 hover:bg-[#0B3D91] hover:text-white"
            >
              Upcoming Events
              <span className="ml-2 text-base">→</span>
            </button>
          </div>
        </div>

        {/* =========================================
            IMPACT STRIP
        ========================================== */}
        <div className="mt-12 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
          <div className="grid grid-cols-3 gap-3 sm:max-w-xl sm:gap-6">
            {/* ITEM 1 */}
            <div className="border-l-2 border-[#FF9933] pl-3 sm:pl-4">
              <p className="text-lg font-black text-slate-950 sm:text-2xl">
                People
              </p>

              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                At the heart of our work
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="border-l-2 border-[#0B3D91] pl-3 sm:pl-4">
              <p className="text-lg font-black text-slate-950 sm:text-2xl">
                Action
              </p>

              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                Turning ideas into change
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="border-l-2 border-[#138808] pl-3 sm:pl-4">
              <p className="text-lg font-black text-slate-950 sm:text-2xl">
                Impact
              </p>

              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                Creating lasting change
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
