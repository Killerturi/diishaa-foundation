import { Heart } from "lucide-react";
import Link from "next/link";

export default function DonateButton() {
  return (
    <Link
      href="/donate"
      className="
        group
        flex
        h-[54px]
        items-center
        justify-center
        gap-2
        rounded-[14px]
        border border-[#8B6A1F]
        bg-gradient-to-r
        from-[#0A341E]
        via-[#114828]
        to-[#0A341E]
        px-9
        text-[17px]
        font-semibold
        text-white
        shadow-[0_6px_18px_rgba(0,0,0,0.22)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]
      "
    >
      <span>DONATE NOW</span>

      <Heart
        size={19}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>
  );
}
