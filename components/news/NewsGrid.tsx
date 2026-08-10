import { NewsItem } from "./news.data";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  news: NewsItem[];
}

export default function NewsGrid({ news }: NewsGridProps) {
  /* =========================================
     EMPTY STATE
  ========================================== */

  if (news.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center sm:px-8 sm:py-20">
        {/* ICON */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF9933]/10">
          <span className="text-2xl">📰</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-xl font-black text-slate-950">
          No updates yet
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          We don't have any updates in this category right now. Check back soon
          for new stories, events and announcements from Diishaa Foundation.
        </p>

        {/* ACCENT */}
        <div className="mx-auto mt-6 flex h-1 w-16 overflow-hidden rounded-full">
          <div className="w-1/3 bg-[#FF9933]" />
          <div className="w-1/3 bg-[#0B3D91]" />
          <div className="w-1/3 bg-[#138808]" />
        </div>
      </div>
    );
  }

  /* =========================================
     NEWS GRID
  ========================================== */

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}
