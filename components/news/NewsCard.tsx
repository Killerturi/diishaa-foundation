import Image from "next/image";
import Link from "next/link";

import { NewsItem } from "./news.data";

interface NewsCardProps {
  news: NewsItem;
}

function getCategoryStyle(category: NewsItem["category"]) {
  switch (category) {
    case "Upcoming":
      return {
        badge: "bg-[#FF9933] text-white",
        dot: "bg-[#FF9933]",
      };

    case "Events":
      return {
        badge: "bg-[#0B3D91] text-white",
        dot: "bg-[#0B3D91]",
      };

    case "Impact Stories":
      return {
        badge: "bg-[#138808] text-white",
        dot: "bg-[#138808]",
      };

    case "Announcements":
      return {
        badge: "bg-[#FF9933]/10 text-[#C66A00]",
        dot: "bg-[#FF9933]",
      };

    case "Achievements":
      return {
        badge: "bg-[#0B3D91]/10 text-[#0B3D91]",
        dot: "bg-[#0B3D91]",
      };

    default:
      return {
        badge: "bg-slate-100 text-slate-700",
        dot: "bg-slate-500",
      };
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  const categoryStyle = getCategoryStyle(news.category);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* =========================================
          IMAGE
      ========================================== */}
      <Link
        href={`/news/${news.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        {/* CATEGORY BADGE */}
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide shadow-sm ${categoryStyle.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${categoryStyle.dot}`} />

            {news.category}
          </span>
        </div>

        {/* FEATURED MARKER */}
        {news.featured && (
          <div className="absolute right-4 top-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-sm shadow-md backdrop-blur-sm">
              ★
            </span>
          </div>
        )}
      </Link>

      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="flex flex-1 flex-col p-5">
        {/* DATE */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />

          <time className="text-xs font-semibold text-slate-500">
            {news.date}
          </time>
        </div>

        {/* TITLE */}
        <Link href={`/news/${news.slug}`} className="mt-3">
          <h3 className="line-clamp-2 text-lg font-black leading-snug text-slate-950 transition-colors duration-200 group-hover:text-[#0B3D91]">
            {news.title}
          </h3>
        </Link>

        {/* EXCERPT */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {news.excerpt}
        </p>

        {/* EVENT DETAILS */}
        {(news.location || news.time) && (
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
            {news.location && (
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <span className="mt-0.5 text-[#FF9933]">📍</span>

                <span className="line-clamp-1">{news.location}</span>
              </div>
            )}

            {news.time && (
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-[#0B3D91]">◷</span>

                <span>{news.time}</span>
              </div>
            )}
          </div>
        )}

        {/* BOTTOM ACTION */}
        <div className="mt-auto pt-5">
          <Link
            href={`/news/${news.slug}`}
            className="group/link inline-flex items-center text-sm font-bold text-[#0B3D91]"
          >
            Read More
            <span className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* =========================================
          BOTTOM TRICOLOR ACCENT
      ========================================== */}
      <div className="flex h-1 w-full">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>
    </article>
  );
}
