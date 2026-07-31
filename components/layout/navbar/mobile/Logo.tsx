import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-start gap-1">
      {/* Logo Image */}
      <Image
        src="/logo/logo.png"
        alt="Dishaa Care Foundation"
        width={60}
        height={60}
        priority
        className="h-[60px] w-auto shrink-0"
      />

      {/* Logo Text */}
      <div className="leading-none">
        <h1 className="text-[20px] font-black uppercase tracking-tight text-[#0B3B22]">
          DIISHAA
        </h1>

        <p className="mt-[2px] text-[9px] font-bold uppercase tracking-[0.15em] text-[#444]">
          CARE FOUNDATION
        </p>

        <span className="mt-[2px] block text-[7px] font-semibold uppercase tracking-[0.12em] text-[#D29B2D]">
          EK BHARAT SHRESTHA BHARAT
        </span>
      </div>
    </Link>
  );
}
