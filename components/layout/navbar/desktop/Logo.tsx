import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo/logo.png"
        alt="Dishaa Care Foundation"
        width={70}
        height={70}
        priority
        className="h-14 w-auto md:h-16"
      />

      <div className="leading-tight">
        <h1 className="text-2xl font-black uppercase tracking-wide text-[#06351D]">
          Diishaa
        </h1>

        <p className="font-semibold  font-underline text-sm text-gray-700">CARE FOUNDATION</p>

        <span className="text-xs font-medium text-[#F57C00]">
          Ek Bharat Shrestha Bharat
        </span>
      </div>
    </Link>
  );
}
