import { communitySteps } from "./community.data";

export default function CommunityProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-12">
      {/* =========================================
          BACKGROUND ACCENTS
      ========================================== */}

      <div className="pointer-events-none absolute -left-24 top-20 h-48 w-48 rounded-full bg-[#FF9933]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-[#138808]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#FF9933]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9933]">
              HOW IT WORKS
            </p>

            <span className="h-1 w-8 rounded-full bg-[#138808]" />
          </div>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Your Journey With Diishaa
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Becoming a Community Member is a simple process. Submit your
            application, complete the review and contribution process, and
            receive your official Diishaa Community identity.
          </p>
        </div>

        {/* =====================================
            PROCESS
        ====================================== */}

        <div className="relative mx-auto mt-10 max-w-4xl sm:mt-14">
          {/* DESKTOP CONNECTING LINE */}

          <div className="absolute left-[31px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#FF9933] via-[#0B3D91] to-[#138808] lg:block" />

          <div className="space-y-4 sm:space-y-5">
            {communitySteps.map((step, index) => {
              const isLast = index === communitySteps.length - 1;

              const accent =
                index % 3 === 0
                  ? "#FF9933"
                  : index % 3 === 1
                    ? "#0B3D91"
                    : "#138808";

              return (
                <div key={step.id} className="relative flex gap-4 sm:gap-6">
                  {/* =================================
                      NUMBER
                  ================================== */}

                  <div className="relative z-10 shrink-0">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-sm font-black shadow-md ring-1 ring-slate-200 sm:h-18 sm:w-18"
                      style={{
                        color: accent,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* =================================
                      CONTENT CARD
                  ================================== */}

                  <div
                    className={[
                      "flex-1 rounded-2xl border bg-white p-5 shadow-sm",
                      "transition-all duration-300",
                      "hover:-translate-y-0.5 hover:shadow-lg",
                      isLast ? "border-[#138808]/30" : "border-slate-200",
                    ].join(" ")}
                  >
                    {/* ACCENT */}
                    <div
                      className="mb-4 h-1 w-10 rounded-full"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    <h3 className="text-base font-black text-slate-950 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                    {/* FINAL STATUS */}
                    {isLast && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#138808]/10 px-3 py-1.5 text-xs font-bold text-[#138808]">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#138808] text-[10px] text-white">
                          ✓
                        </span>
                        Active Community Member
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================
            BOTTOM TRICOLOR ACCENT
        ====================================== */}

        <div className="mx-auto mt-10 flex h-1 w-20 overflow-hidden rounded-full sm:mt-14">
          <div className="w-1/3 bg-[#FF9933]" />
          <div className="w-1/3 bg-[#0B3D91]" />
          <div className="w-1/3 bg-[#138808]" />
        </div>
      </div>
    </section>
  );
}
