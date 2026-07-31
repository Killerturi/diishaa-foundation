"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface DrawerItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  onClick: () => void;
}

export default function DrawerItem({
  title,
  href,
  icon: Icon,
  onClick,
}: DrawerItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex
        items-center
        gap-4
        rounded-xl
        px-4
        py-3
        text-gray-700
        transition-all
        duration-300
        hover:bg-[#0A5A18]
        hover:text-white
      "
    >
      <Icon size={22} />

      <span className="font-medium">{title}</span>
    </Link>
  );
}
