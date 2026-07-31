import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden xl:block bg-[#06351D] text-white">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-between px-6 text-[13px]">
        {/* Part 1 */}
        <div className="flex items-center gap-2 pr-12">
          <span className="text-[#D8B25A]">🇮🇳</span>

          <span className="font-medium whitespace-nowrap">
            Ek Bharat Shrestha Bharat
          </span>
        </div>

        {/* Part 2 */}
        <div className="flex items-center gap-2 px-6">
          <MapPin size={15} className="text-[#D8B25A] shrink-0" />

          <span className="truncate">
            Shankarpur Colliery, PO - Ukhra, PS - Andal, PIN - 713363, West
            Bengal
          </span>
        </div>

        {/* Part 3 */}
        <div className="flex items-center gap-6 px-8 whitespace-nowrap">
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-[#D8B25A]" />

            <span>+91 9332333880</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} className="text-[#D8B25A]" />

            <span>info@dishaacarefoundation.org</span>
          </div>
        </div>

        {/* Part 4 */}
        <div className="flex items-center gap-4 pl-8">
          <FaFacebookF className="cursor-pointer transition hover:text-[#D8B25A]" />
          <FaInstagram className="cursor-pointer transition hover:text-[#D8B25A]" />
          <FaYoutube className="cursor-pointer transition hover:text-[#D8B25A]" />
          <FaWhatsapp className="cursor-pointer transition hover:text-[#D8B25A]" />
        </div>
      </div>
    </div>
  );
}
