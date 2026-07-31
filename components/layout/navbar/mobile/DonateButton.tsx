import Link from "next/link";
import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <Link
      href="/donate"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-gradient-to-r
        from-[#F59E0B]
        to-[#EA580C]
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        active:scale-95
      "
    >
      <Heart size={16} fill="white" strokeWidth={2} />
      <span>Donate</span>
    </Link>
  );
}
