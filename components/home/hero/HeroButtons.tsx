"use client";

import Link from "next/link";
import { Heart, UserRound } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex items-center gap-10">
      {/* Become Member */}

      <Link
        href="/membership"
        className="
          group
          flex
          h-[60px]
          w-[270px]
          items-center
          justify-center
          gap-4
          rounded-[12px]
          border
          border-[#1A6D1A]
          bg-[#0B641A]
          text-white
          shadow-md
          transition-all
          duration-300
          hover:bg-[#0A5A18]
          hover:shadow-lg
        "
      >
        <UserRound size={20} strokeWidth={2.5} className="text-white" />

        <span
          className="
            text-[17px]
            font-bold
            uppercase
            tracking-[1px]
          "
        >
          Become a Member
        </span>
      </Link>

      {/* Donate */}

      <Link
        href="/donate"
        className="
          group
          flex
          h-[60px]
          w-[240px]
          items-center
          justify-center
          gap-4
          rounded-[12px]
          border
          border-[#6B5B1F]
          bg-[#23210D]
          text-[#F5D766]
          shadow-md
          transition-all
          duration-300
          hover:bg-[#2B2811]
          hover:shadow-lg
        "
      >
        <span
          className="
            text-[17px]
            font-bold
            uppercase
            tracking-[1px]
          "
        >
          Donate Now
        </span>

        <Heart size={20} strokeWidth={2.3} className="text-[#F5D766]" />
      </Link>
    </div>
  );
}
