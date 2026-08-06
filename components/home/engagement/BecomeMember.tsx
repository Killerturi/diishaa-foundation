import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CreditCard, QrCode, ShieldCheck } from "lucide-react";

export default function BecomeMember() {
  return (
    <div className="h-full rounded-3xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Heading */}

      <h3 className="text-2xl font-bold text-gray-900">Become a Member</h3>

      <div className="mt-6 grid grid-cols-2 gap-6">
        {/* Left */}

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BadgeCheck className="text-green-600" size={18} />
            <span className="text-gray-700">Online Membership</span>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="text-green-600" size={18} />
            <span className="text-gray-700">Instant Member ID</span>
          </div>

          <div className="flex items-center gap-3">
            <QrCode className="text-green-600" size={18} />
            <span className="text-gray-700">QR Verification</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={18} />
            <span className="text-gray-700">Membership Certificate</span>
          </div>

          <Link
            href="/membership"
            className="
              mt-6
              inline-flex
              w-full
              justify-center
              rounded-xl
              bg-green-700
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-800
            "
          >
            Join Now
          </Link>
        </div>

        {/* Right */}

        <div className="flex items-center justify-center">
          <Image
            src="/engagement/member-card.png"
            alt="Membership Card"
            width={140}
            height={190}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
