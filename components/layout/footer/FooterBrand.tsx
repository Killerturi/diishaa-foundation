import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div>
      {/* Logo */}

      <Link href="/" className="inline-block">
        <Image
          src="/footer/logo.png"
          alt="Diishaa Care Foundation"
          width={240}
          height={80}
          className="object-contain"
        />
      </Link>

      {/* Description */}

      <p className="mt-6 text-sm leading-7 text-gray-300">
        We are committed to creating a better society by empowering communities
        through healthcare, education, environmental protection, food
        distribution and humanitarian services.
      </p>

      {/* Social Icons */}

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="#"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#d4af37]/30
            bg-white/10
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-black
          "
        >
          <FaFacebookF size={18} />
        </Link>

        <Link
          href="#"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#d4af37]/30
            bg-white/10
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-black
          "
        >
          <FaInstagram size={18} />
        </Link>

        <Link
          href="#"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#d4af37]/30
            bg-white/10
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-black
          "
        >
          <FaYoutube size={18} />
        </Link>

        <Link
          href="#"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#d4af37]/30
            bg-white/10
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-black
          "
        >
          <MessageCircle size={18} />
        </Link>
      </div>
    </div>
  );
}
