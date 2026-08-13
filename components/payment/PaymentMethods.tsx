"use client";

import { PaymentMethod, PaymentPurpose, paymentMethods } from "./payment.data";

interface PaymentMethodsProps {
  purpose: PaymentPurpose;
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

export default function PaymentMethods({
  purpose,
  selectedMethod,
  onMethodChange,
}: PaymentMethodsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* =========================================
          HEADER
      ========================================== */}

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D98A18]">
          SECURE PAYMENT
        </p>

        <h2 className="mt-2 text-xl font-black text-[#003366] sm:text-2xl">
          Choose Payment Method
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Select your preferred way to{" "}
          {purpose === "donation"
            ? "support Diishaa Care Foundation."
            : "complete your community contribution."}
        </p>
      </div>

      {/* =========================================
          PAYMENT METHODS
      ========================================== */}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        {paymentMethods.map((method) => {
          const selected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onMethodChange(method.id)}
              aria-pressed={selected}
              className={[
                "group relative flex min-h-[122px]",
                "flex-col items-center justify-center",
                "rounded-2xl border p-4 text-center",
                "transition-all duration-200",
                "active:scale-[0.98]",
                selected
                  ? "border-[#138808] bg-[#138808]/5 shadow-md shadow-[#138808]/10"
                  : "border-[#E5D8C8] bg-white hover:-translate-y-0.5 hover:border-[#FF9933] hover:bg-[#FF9933]/5 hover:shadow-md",
              ].join(" ")}
            >
              {/* =================================
                  SELECTED CHECK
              ================================== */}

              {selected && (
                <span className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#138808] text-[10px] font-black text-white">
                  ✓
                </span>
              )}

              {/* =================================
                  ICON
              ================================== */}

              <span
                className={[
                  "flex h-12 w-12 items-center justify-center",
                  "rounded-full transition-all duration-200",
                  selected
                    ? "bg-[#004D2A] text-[#FFCC66]"
                    : "bg-[#F8F3EA] text-[#D99A1A] group-hover:bg-[#FF9933]/10",
                ].join(" ")}
              >
                <PaymentIcon type={method.id} />
              </span>

              {/* =================================
                  TITLE
              ================================== */}

              <span
                className={[
                  "mt-3 text-sm font-bold",
                  selected ? "text-[#003D26]" : "text-slate-800",
                ].join(" ")}
              >
                {method.title}
              </span>

              {/* =================================
                  DESCRIPTION
              ================================== */}

              <span className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                {method.description}
              </span>
            </button>
          );
        })}
      </div>

      {/* =========================================
          TRUST MESSAGE
      ========================================== */}

      <div className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-4">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#138808]/10 text-[#138808]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3.5 w-3.5"
          >
            <path
              d="M12 3 5 6v5c0 4.7 2.8 8.3 7 10 4.2-1.7 7-5.3 7-10V6l-7-3Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="m9 12 2 2 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="text-xs font-medium text-slate-500">
          Secure & trusted payment
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   PAYMENT ICONS
========================================================= */

function PaymentIcon({ type }: { type: PaymentMethod }) {
  if (type === "upi") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />

        <path d="M10 6h4M11 18h2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bank") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <path d="M3 9h18L12 4 3 9Z" strokeLinejoin="round" />

        <path d="M5 10v7M9 10v7M15 10v7M19 10v7" />

        <path d="M3 20h18" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "qr") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
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

  /* ONLINE */

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />

      <path d="M3 10h18" />

      <path d="M7 15h4" strokeLinecap="round" />
    </svg>
  );
}
