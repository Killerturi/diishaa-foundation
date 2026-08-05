"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity } from "./data";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link href={`/activities/${activity.slug}`} className="group block h-full">
      <div
        className="
          overflow-hidden
          rounded-2xl
          bg-white
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          cursor-pointer
        "
      >
        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={activity.cover}
            alt={activity.title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Title */}

        <div className="pt-3 pb-1">
          <h3
            className="
              text-center
              text-base
              md:text-lg
              font-semibold
              text-gray-900
            "
          >
            {activity.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
