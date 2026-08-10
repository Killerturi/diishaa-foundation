import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#d4af37]">
        Contact Us
      </h3>

      <div className="space-y-5">
        {/* Address */}

        <div className="flex items-start gap-3">
          <div className="mt-1 text-[#d4af37]">
            <MapPin size={20} />
          </div>

          <p className="text-sm leading-6 text-gray-300">
            Diishaa Care Foundation
            <br />
            Durgapur, Paschim Bardhaman
            <br />
            West Bengal - 713201
          </p>
        </div>

        {/* Phone */}

        <div className="flex items-center gap-3">
          <Phone size={20} className="text-[#d4af37]" />

          <Link
            href="tel:+919999999999"
            className="text-gray-300 transition hover:text-[#d4af37]"
          >
            +91 99999 99999
          </Link>
        </div>

        {/* Email */}

        <div className="flex items-center gap-3">
          <Mail size={20} className="text-[#d4af37]" />

          <Link
            href="mailto:info@dishaafoundation.org"
            className="break-all text-gray-300 transition hover:text-[#d4af37]"
          >
            info@dishaafoundation.org
          </Link>
        </div>

        {/* Office Hours */}

        <div className="flex items-start gap-3">
          <Clock size={20} className="mt-1 text-[#d4af37]" />

          <div className="text-sm text-gray-300 leading-6">
            Monday - Saturday
            <br />
            9:00 AM - 6:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
