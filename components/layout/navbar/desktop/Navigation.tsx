"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../nav-links";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-12">
      {navLinks.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className="
            relative
            font-semibold
            uppercase
            text-[14px]
            tracking-wide
            text-[#222]
            transition-colors
            hover:text-[#B8860B]
            "
          >
            {item.name}

            {active && (
              <span
                className="
                absolute
                left-0
                -bottom-4
                h-[3px]
                w-full
                rounded-full
                bg-[#C79A2B]
                "
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
