import {
  PaymentMethod,
  PaymentPurpose,
  formatIndianCurrency,
  paymentMethods,
  communityPaymentContent,
} from "./payment.data";

interface PaymentSummaryProps {
  purpose: PaymentPurpose;
  amount: number;
  selectedMethod: PaymentMethod;
}

export default function PaymentSummary({
  purpose,
  amount,
  selectedMethod,
}: PaymentSummaryProps) {
  const isDonation = purpose === "donation";

  const method = paymentMethods.find((item) => item.id === selectedMethod);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* =========================================
          TRICOLOR TOP ACCENT
      ========================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="p-5 sm:p-7">
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              PAYMENT SUMMARY
            </p>

            <h2 className="mt-1 text-xl font-black text-[#003366]">
              Review Your Payment
            </h2>
          </div>

          {/* CHECK ICON */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#138808]/10 text-[#138808]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                d="m5 12 4 4L19 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* =====================================
            SUMMARY DETAILS
        ====================================== */}

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
          {/* PURPOSE */}

          <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-4">
            <span className="text-sm text-slate-500">
              {isDonation ? "Payment Type" : "Membership"}
            </span>

            <span className="text-right text-sm font-bold text-[#003366]">
              {isDonation ? "Donation" : "Community Membership"}
            </span>
          </div>

          {/* AMOUNT */}

          <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-4">
            <span className="text-sm text-slate-500">
              {isDonation ? "Contribution" : "Annual Contribution"}
            </span>

            <span className="text-right text-base font-black text-[#003366]">
              ₹{formatIndianCurrency(amount)}
            </span>
          </div>

          {/* MEMBERSHIP VALIDITY */}

          {!isDonation && (
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-4">
              <span className="text-sm text-slate-500">Validity</span>

              <span className="text-right text-sm font-bold text-[#138808]">
                {communityPaymentContent.validity}
              </span>
            </div>
          )}

          {/* PAYMENT METHOD */}

          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <span className="text-sm text-slate-500">Payment Method</span>

            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF9933]/10 text-[#D98A18]">
                <PaymentMethodIcon method={selectedMethod} />
              </span>

              <span className="text-sm font-bold text-[#003366]">
                {method?.title || "Select method"}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================
            TOTAL
        ====================================== */}

        <div className="mt-5 rounded-2xl bg-[#0B3D91] px-4 py-5 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Total Amount
              </p>

              <p className="mt-1 text-xs text-white/50">
                {isDonation
                  ? "Thank you for supporting our work."
                  : "Annual community contribution."}
              </p>
            </div>

            <span className="text-2xl font-black text-[#FF9933] sm:text-3xl">
              ₹{formatIndianCurrency(amount)}
            </span>
          </div>
        </div>

        {/* =====================================
            MEMBERSHIP NOTICE
        ====================================== */}

        {!isDonation && (
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#FF9933]/20 bg-[#FF9933]/5 px-4 py-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF9933]/15 text-[#C66A00]">
              !
            </span>

            <p className="text-xs leading-5 text-slate-600">
              Your payment will activate the approved Community Membership. Your
              Community Account, ID and QR verification will be generated after
              successful payment.
            </p>
          </div>
        )}

        {/* =====================================
            DONATION NOTICE
        ====================================== */}

        {isDonation && (
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#138808]/15 bg-[#138808]/5 px-4 py-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#138808]/10 text-[#138808]">
              ✓
            </span>

            <p className="text-xs leading-5 text-slate-600">
              Your contribution will support Diishaa Foundation&apos;s community
              initiatives and social impact programs.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   PAYMENT METHOD ICON
========================================================= */

function PaymentMethodIcon({ method }: { method: PaymentMethod }) {
  if (method === "upi") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />

        <path d="M10 6h4M11 18h2" strokeLinecap="round" />
      </svg>
    );
  }

  if (method === "bank") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
      >
        <path d="M3 9h18L12 4 3 9Z" strokeLinejoin="round" />

        <path d="M5 10v7M9 10v7M15 10v7M19 10v7" />

        <path d="M3 20h18" strokeLinecap="round" />
      </svg>
    );
  }

  if (method === "qr") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />

        <path
          d="M14 14h3v3h3M14 20h3M20 14v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />

      <path d="M3 10h18" />

      <path d="M7 15h4" strokeLinecap="round" />
    </svg>
  );
}
