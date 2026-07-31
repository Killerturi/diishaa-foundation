"use client";

import { LucideIcon } from "lucide-react";

interface FocusCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
}

export default function FocusCard({
  title,
  icon: Icon,
  color,
}: FocusCardProps) {
  return (
    <div
      className="
        group
        flex
        h-[82px]
        sm:h-[90px]
        lg:h-[150px]
        flex-col
        items-center
        justify-center
        rounded-xl
        lg:rounded-2xl
        border
        border-[#EEE6D8]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Icon */}

      <Icon
        size={22}
        strokeWidth={2}
        style={{ color }}
        className="
          lg:h-10
          lg:w-10
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      {/* Title */}

      <h3
        className="
          mt-2
          px-1
          text-center
          text-[9px]
          font-semibold
          leading-[1.15]
          text-[#222]

          lg:mt-4
          lg:px-2
          lg:text-[15px]
          lg:leading-6
        "
      >
        {title}
      </h3>
    </div>
  );
}
