"use client";

import { useState } from "react";

import {
  PaymentMethod,
  PaymentPurpose,
  formatIndianCurrency,
} from "./payment.data";

interface PaymentButtonProps {
  purpose: PaymentPurpose;
  amount: number;
  selectedMethod: PaymentMethod;
  disabled?: boolean;
  onPaymentStart?: () => void;
  onPaymentComplete?: () => void;
}

export default function PaymentButton({
  purpose,
  amount,
  selectedMethod,
  disabled = false,
  onPaymentStart,
  onPaymentComplete,
}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const isDonation = purpose === "donation";

  const handlePayment = async () => {
    if (isProcessing || disabled) {
      return;
    }

    /*
      =========================================
      START PAYMENT
      =========================================

      This will eventually call our backend.

      For example:

      POST /api/payments/create

      We are NOT doing that yet.
    */

    setIsProcessing(true);

    onPaymentStart?.();

    try {
      /*
        TEMPORARY SIMULATION

        This is only here so we can test
        the complete UI before integrating
        the real payment gateway.
      */

      await new Promise((resolve) => setTimeout(resolve, 1500));

      onPaymentComplete?.();
    } catch (error) {
      console.error("Payment processing error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  /* =========================================
     BUTTON TEXT
  ========================================== */

  const buttonText = isDonation
    ? `Donate ₹${formatIndianCurrency(amount)}`
    : `Complete Membership ₹${formatIndianCurrency(amount)}`;

  /* =========================================
     PAYMENT METHOD LABEL
  ========================================== */

  const methodLabel =
    selectedMethod === "upi"
      ? "UPI"
      : selectedMethod === "bank"
        ? "Bank Transfer"
        : selectedMethod === "qr"
          ? "QR Code"
          : "Online Payment";

  return (
    <div className="mt-6">
      {/* =====================================
          PAYMENT BUTTON
      ====================================== */}

      <button
        type="button"
        onClick={handlePayment}
        disabled={disabled || isProcessing}
        className={[
          "group relative flex min-h-14 w-full",
          "items-center justify-center gap-2",
          "overflow-hidden rounded-2xl",
          "px-6 text-sm font-bold text-white",
          "shadow-lg transition-all duration-300",
          "active:scale-[0.99]",
          "focus:outline-none focus:ring-4",
          "focus:ring-[#FF9933]/20",
          isProcessing || disabled
            ? "cursor-not-allowed bg-slate-400 shadow-none"
            : "bg-[#FF9933] shadow-[#FF9933]/20 hover:-translate-y-0.5 hover:bg-[#E88921] hover:shadow-xl",
        ].join(" ")}
      >
        {/* =================================
            DECORATIVE SHINE
        ================================== */}

        {!isProcessing && !disabled && (
          <span className="pointer-events-none absolute inset-y-0 -left-20 w-16 -skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[500px]" />
        )}

        {/* =================================
            LOADING STATE
        ================================== */}

        {isProcessing ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>

            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      {/* =====================================
          SELECTED PAYMENT METHOD
      ====================================== */}

      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />

        <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
          Paying securely via {methodLabel}
        </p>

        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />
      </div>

      {/* =====================================
          SECURITY MESSAGE
      ====================================== */}

      <div className="mt-4 flex items-center justify-center gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 text-[#138808]"
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

        <p className="text-[10px] text-slate-400 sm:text-xs">
          Your payment information is handled securely.
        </p>
      </div>
    </div>
  );
}
