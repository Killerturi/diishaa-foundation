"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  shortTitle: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

export default function QuickActionItem({
  href,
  icon: Icon,
  color,
  shortTitle,
}: Props) {
  return (
    <Link
      href={href}
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-2
        h-[74px]
        transition-all
        duration-300
        active:scale-95
      "
    >
      <Icon size={24} strokeWidth={2} style={{ color }} />

      <span
        className="
          text-[11px]
          font-medium
          text-[#2B2B2B]
        "
      >
        {shortTitle}
      </span>
    </Link>
  );
}
