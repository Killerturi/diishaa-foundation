import Link from "next/link";
import { NewsItem } from "./news.data";

interface UpcomingEventProps {
  event: NewsItem;
}

export default function UpcomingEvent({ event }: UpcomingEventProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0B3D91] shadow-xl">
      {/* =========================================
          TRICOLOR TOP ACCENT
      ========================================== */}
      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =========================================
          DECORATIVE CIRCLES
      ========================================== */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border-[30px] border-[#FF9933]/10" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full border-[35px] border-[#138808]/10" />

      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="relative p-5 pt-8 sm:p-8 lg:p-10">
        {/* HEADER */}
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF9933] text-sm text-white">
            ★
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFCC99] sm:text-sm">
            Upcoming Event
          </p>
        </div>

        {/* =====================================
            MAIN CONTENT
        ====================================== */}
        <div className="mt-6 grid gap-7 lg:grid-cols-[100px_1fr_auto] lg:items-center">
          {/* =====================================
              DATE CARD
          ====================================== */}
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D91]">
              {getMonth(event.date)}
            </span>

            <span className="mt-0.5 text-4xl font-black leading-none text-[#FF9933]">
              {getDay(event.date)}
            </span>

            <span className="mt-1 text-[10px] font-semibold text-slate-500">
              {getYear(event.date)}
            </span>
          </div>

          {/* =====================================
              EVENT INFORMATION
          ====================================== */}
          <div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              {event.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              {event.excerpt}
            </p>

            {/* EVENT META */}
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-blue-100 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              {event.location && (
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#FF9933]">📍</span>

                  {event.location}
                </span>
              )}

              {event.time && (
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#FF9933]">◷</span>

                  {event.time}
                </span>
              )}
            </div>
          </div>

          {/* =====================================
              ACTIONS
          ====================================== */}
          <div className="flex flex-col gap-3 lg:min-w-[150px]">
            <Link
              href={`/news/${event.slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FF9933] px-5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E88921] hover:shadow-xl"
            >
              View Event
              <span className="ml-2">→</span>
            </Link>

            {event.registrationAvailable && (
              <Link
                href={`/news/${event.slug}#register`}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B3D91]"
              >
                Register Now
              </Link>
            )}
          </div>
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================== */}
        <div className="mt-7 border-t border-white/15 pt-5">
          <p className="text-xs leading-5 text-blue-200 sm:text-sm">
            Be part of the change. Together, small actions can create meaningful
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   DATE HELPERS
============================================= */

function getDate(dateString: string) {
  return new Date(dateString);
}

function getMonth(dateString: string) {
  return getDate(dateString).toLocaleDateString("en-IN", {
    month: "short",
  });
}

function getDay(dateString: string) {
  return getDate(dateString).getDate();
}

function getYear(dateString: string) {
  return getDate(dateString).getFullYear();
}
