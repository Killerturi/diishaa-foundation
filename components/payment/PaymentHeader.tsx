import {
  PaymentPurpose,
  donationPaymentContent,
  communityPaymentContent,
} from "./payment.data";

interface PaymentHeaderProps {
  purpose: PaymentPurpose;
}

export default function PaymentHeader({ purpose }: PaymentHeaderProps) {
  const isDonation = purpose === "donation";

  const content = isDonation ? donationPaymentContent : communityPaymentContent;

  return (
    <div className="text-center">
      {/* =========================================
          EYEBROW
      ========================================== */}

      <div className="inline-flex items-center gap-2">
        <span
          className={`h-1 w-8 rounded-full ${
            isDonation ? "bg-[#FF9933]" : "bg-[#0B3D91]"
          }`}
        />

        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            isDonation ? "text-[#D97A12]" : "text-[#0B3D91]"
          }`}
        >
          {content.eyebrow}
        </p>

        <span className="h-1 w-8 rounded-full bg-[#138808]" />
      </div>

      {/* =========================================
          TITLE
      ========================================== */}

      <h1 className="mt-3 text-2xl font-black leading-tight text-[#003366] sm:text-3xl lg:text-4xl">
        {content.title}
      </h1>

      {/* =========================================
          DESCRIPTION
      ========================================== */}

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
        {content.description}
      </p>

      {/* =========================================
          PURPOSE INDICATOR
      ========================================== */}

      <div className="mt-5 flex items-center justify-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            isDonation ? "bg-[#FF9933]" : "bg-[#0B3D91]"
          }`}
        />

        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          {isDonation
            ? "Every contribution creates impact"
            : "Complete your community membership"}
        </span>

        <span className="h-2 w-2 rounded-full bg-[#138808]" />
      </div>
    </div>
  );
}
