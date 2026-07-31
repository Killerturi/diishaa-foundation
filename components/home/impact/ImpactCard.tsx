"use client";

import { ComponentType } from "react";

interface ImpactCardProps {
  icon: ComponentType<any>;
  number: string;
  label: string;
  showDivider?: boolean;
}

export default function ImpactCard({
  icon: Icon,
  number,
  label,
  showDivider = true,
}: ImpactCardProps) {
  return (
    <div className="relative flex flex-1 items-center justify-center px-1">
      {showDivider && (
        <div
          className="
        absolute
        right-0
        top-1/2
        h-10
        w-px
        -translate-y-1/2
        bg-[#C89C34]/30

        lg:h-16
      "
        />
      )}

      <div className="flex flex-col items-center text-center">
        <Icon
          className="
    text-[#D9A441]
    text-[30px]
    drop-shadow-[0_2px_4px_rgba(0,0,0,.25)]

    lg:text-[48px]
  "
        />

        <h3
          className="
    mt-2
    text-[12px]
    font-extrabold
    tracking-tight
    text-white

    lg:text-[16px]
"
        >
          {number}
        </h3>

        <p
          className="
mt-1
text-[11px]
font-medium
text-[#F4F4F4]

lg:text-[18px]
"
        >
          {label}
        </p>
      </div>
    </div>
  );
}
