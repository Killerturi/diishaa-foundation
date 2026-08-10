import Image from "next/image";
import Link from "next/link";

import { NewsItem } from "./news.data";

interface FeaturedNewsProps {
  news: NewsItem;
}

export default function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-2">
        {/* =========================================
            IMAGE
        ========================================== */}
        <Link
          href={`/news/${news.slug}`}
          className="group relative block aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px]"
        >
          <Image
            src={news.image}
            alt={news.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />

          {/* CATEGORY */}
          <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF9933] px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              {news.category}
            </span>
          </div>

          {/* MOBILE IMAGE LABEL */}
          <div className="absolute inset-x-0 bottom-0 p-5 lg:hidden">
            <p className="text-xs font-medium text-white/80">{news.date}</p>
          </div>
        </Link>

        {/* =========================================
            CONTENT
        ========================================== */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
          {/* LABEL */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#FF9933]" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D97706]">
              Featured Story
            </p>
          </div>

          {/* TITLE */}
          <Link href={`/news/${news.slug}`} className="group mt-4">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-[#0B3D91] sm:text-3xl lg:text-4xl">
              {news.title}
            </h2>
          </Link>

          {/* DATE */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />

            {news.date}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {news.excerpt}
          </p>

          {/* EVENT LOCATION */}
          {news.location && (
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="text-[#FF9933]">📍</span>

              <span>{news.location}</span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-7">
            <Link
              href={`/news/${news.slug}`}
              className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0B3D91] px-6 text-sm font-bold text-white shadow-lg shadow-[#0B3D91]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#082f70] hover:shadow-xl"
            >
              Read Full Story
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* TRICOLOR DECORATION */}
          <div className="mt-8 flex h-1.5 w-24 overflow-hidden rounded-full">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-[#0B3D91]" />
            <div className="w-1/3 bg-[#138808]" />
          </div>
        </div>
      </div>
    </section>
  );
}
