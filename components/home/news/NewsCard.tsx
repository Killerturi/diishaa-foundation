import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { NewsItem } from "./data";

interface Props {
  item: NewsItem;
}

export default function NewsCard({ item }: Props) {
  const badgeColor = {
    Completed: "bg-green-100 text-green-700",
    Upcoming: "bg-orange-100 text-orange-700",
    Announcement: "bg-blue-100 text-blue-700",
  };

  return (
    <Link href={`/news/${item.slug}`} className="group block">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Image */}

        <div className="relative h-56 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}

        <div className="p-6">
          {/* Status */}

          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              badgeColor[item.status]
            }`}
          >
            {item.status}
          </span>

          {/* Title */}

          <h3 className="mt-4 text-2xl font-bold text-gray-900 line-clamp-2">
            {item.title}
          </h3>

          {/* Date */}

          <div className="mt-5 flex items-center gap-2 text-gray-500">
            <CalendarDays size={18} />

            <span>{item.date}</span>
          </div>

          {/* Location */}

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <MapPin size={18} />

            <span>{item.location}</span>
          </div>

          {/* Description */}

          <p className="mt-5 text-gray-600 line-clamp-2">{item.excerpt}</p>

          {/* Read More */}

          <div
            className="
              mt-6
              flex
              items-center
              gap-2
              font-semibold
              text-green-700
            "
          >
            Read More
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
