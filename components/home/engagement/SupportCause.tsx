import Image from "next/image";
import Link from "next/link";

export default function SupportCause() {
  return (
    <div className="h-full rounded-3xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Heading */}

      <h3 className="text-2xl text-center font-bold text-gray-900">Support Our Cause</h3>

      <p className="mt-2 text-gray-600">
        Your contribution helps us create a better future for those in need.
      </p>

      {/* Payment Methods */}

      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:border-green-600 transition">
          <Image src="/engagement/upi.webp" alt="UPI" width={36} height={36} />
          <span className="mt-2 text-sm font-medium">UPI</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:border-green-600 transition">
          <Image
            src="/engagement/bank.png"
            alt="Bank Transfer"
            width={36}
            height={36}
          />
          <span className="mt-2 text-sm font-medium text-center">Bank</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:border-green-600 transition">
          <Image src="/engagement/qr.jpg" alt="QR" width={36} height={36} />
          <span className="mt-2 text-sm font-medium">QR</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-gray-200 p-4 hover:border-green-600 transition">
          <Image
            src="/engagement/card.png"
            alt="Payment"
            width={36}
            height={36}
          />
          <span className="mt-2 text-sm font-medium text-center">Payment</span>
        </div>
      </div>

      {/* Donate Button */}

      <Link
        href="/donate"
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-r
          from-green-900
          to-green-700
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
        "
      >
        Donate Now ❤️
      </Link>
    </div>
  );
}
