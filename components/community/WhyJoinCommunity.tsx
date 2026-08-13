import { communityBenefits, whyJoinCommunity } from "./community.data";

function BenefitIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  switch (type) {
    case "id":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8" cy="11" r="2" />
          <path d="M13 10h5M13 14h4" />
        </svg>
      );

    case "qr":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <rect x="4" y="4" width="6" height="6" />
          <rect x="14" y="4" width="6" height="6" />
          <rect x="4" y="14" width="6" height="6" />
          <path d="M14 14h3v3h-3zM20 14v3M17 20h3M14 20v-2" />
        </svg>
      );

    case "certificate":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <path d="M6 3h12v18l-6-3-6 3V3Z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );

    case "events":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
          <path d="M8 14h2M14 14h2M8 17h2" />
        </svg>
      );

    case "updates":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
          <path d="M10 21h4" />
        </svg>
      );

    case "community":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={common}
          aria-hidden="true"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3 20c0-3.2 2.4-5 6-5s6 1.8 6 5" />
          <path d="M15 15c3 .2 5 1.8 5 4" />
        </svg>
      );

    default:
      return null;
  }
}

export default function WhyJoinCommunity() {
  return (
    <section
      id="why-join-community"
      className="scroll-mt-24 bg-white py-12 sm:py-20 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================
            SECTION INTRO
        ====================================== */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#FF9933]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9933]">
              {whyJoinCommunity.eyebrow}
            </p>

            <span className="h-1 w-8 rounded-full bg-[#138808]" />
          </div>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {whyJoinCommunity.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {whyJoinCommunity.description}
          </p>
        </div>

        {/* =====================================
            BENEFITS
        ====================================== */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {communityBenefits.map((benefit, index) => {
            const isGreen = index % 3 === 2;
            const isBlue = index % 3 === 1;

            const iconBackground = isGreen
              ? "bg-[#138808]/10"
              : isBlue
                ? "bg-[#0B3D91]/10"
                : "bg-[#FF9933]/10";

            const iconColor = isGreen
              ? "text-[#138808]"
              : isBlue
                ? "text-[#0B3D91]"
                : "text-[#FF9933]";

            return (
              <article
                key={benefit.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-6"
              >
                {/* TOP ACCENT */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isGreen
                      ? "bg-[#138808]"
                      : isBlue
                        ? "bg-[#0B3D91]"
                        : "bg-[#FF9933]"
                  }`}
                />

                {/* ICON */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBackground} ${iconColor} transition-transform duration-300 group-hover:scale-105`}
                >
                  <BenefitIcon type={benefit.icon} />
                </div>

                {/* CONTENT */}
                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>

                {/* SMALL TRICOLOR ACCENT */}
                <div className="mt-5 flex h-1 w-12 overflow-hidden rounded-full opacity-70">
                  <div className="w-1/3 bg-[#FF9933]" />
                  <div className="w-1/3 bg-[#0B3D91]" />
                  <div className="w-1/3 bg-[#138808]" />
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================
            BOTTOM MESSAGE
        ====================================== */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#FF9933]/20 bg-[#FF9933]/5 px-5 py-5 text-center sm:mt-12 sm:px-8">
          <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
            Your contribution helps support Diishaa Foundation&apos;s community
            initiatives while keeping you connected with the people and programs
            making a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
