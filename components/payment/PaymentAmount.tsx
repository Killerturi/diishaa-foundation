"use client";

import { useState } from "react";

import {
  PaymentPurpose,
  donationAmounts,
  communityPaymentContent,
  formatIndianCurrency,
} from "./payment.data";

interface PaymentAmountProps {
  purpose: PaymentPurpose;

  /**
   * Current selected donation amount.
   * For community membership this value is fixed.
   */
  amount: number;

  /**
   * Called whenever the donation amount changes.
   */
  onAmountChange: (amount: number) => void;
}

export default function PaymentAmount({
  purpose,
  amount,
  onAmountChange,
}: PaymentAmountProps) {
  const isDonation = purpose === "donation";

  /* =========================================
     CUSTOM DONATION INPUT
  ========================================== */

  const [customAmount, setCustomAmount] = useState("");

  /* =========================================
     DONATION AMOUNT HANDLER
  ========================================== */

  const handlePresetAmount = (value: number) => {
    setCustomAmount("");
    onAmountChange(value);
  };

  /* =========================================
     CUSTOM AMOUNT HANDLER
  ========================================== */

  const handleCustomAmount = (value: string) => {
    /*
      Only allow numbers.
      This prevents letters and special
      characters from entering the amount.
    */

    const numericValue = value.replace(/[^0-9]/g, "");

    setCustomAmount(numericValue);

    if (numericValue) {
      onAmountChange(Number(numericValue));
    }
  };

  /* =========================================
     COMMUNITY MEMBERSHIP
  ========================================== */

  if (!isDonation) {
    return <CommunityMembershipAmount amount={amount} />;
  }

  /* =========================================
     DONATION
  ========================================== */

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* =====================================
          SECTION HEADER
      ====================================== */}

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF9933]">
          MAKE A DIFFERENCE
        </p>

        <h2 className="mt-2 text-xl font-black text-[#003366] sm:text-2xl">
          Choose Your Donation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Select an amount that you would like to contribute. Every contribution
          helps us serve communities in need.
        </p>
      </div>

      {/* =====================================
          PRESET AMOUNTS
      ====================================== */}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {donationAmounts.map((value) => {
          const selected = amount === value && customAmount === "";

          return (
            <button
              key={value}
              type="button"
              onClick={() => handlePresetAmount(value)}
              className={[
                "relative min-h-[58px]",
                "rounded-xl border",
                "px-4 py-3",
                "text-sm font-bold",
                "transition-all duration-200",
                "active:scale-[0.98]",
                selected
                  ? "border-[#138808] bg-[#004d2a] text-white shadow-lg shadow-[#138808]/10"
                  : "border-[#E5D8C8] bg-white text-slate-800 hover:border-[#FF9933] hover:bg-[#FF9933]/5",
              ].join(" ")}
            >
              {/* RUPEE SYMBOL */}
              <span className={selected ? "text-[#FFCC66]" : "text-[#D98A18]"}>
                ₹
              </span>{" "}
              {formatIndianCurrency(value)}
              {/* SELECTED CHECK */}
              {selected && (
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#138808] text-[10px] text-white">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* =====================================
          CUSTOM AMOUNT
      ====================================== */}

      <div className="mt-6">
        <label
          htmlFor="custom-donation-amount"
          className="text-sm font-bold text-[#003366]"
        >
          Or enter another amount
        </label>

        <div
          className={[
            "mt-2 flex h-14 items-center overflow-hidden",
            "rounded-xl border bg-white",
            "transition-all duration-200",
            customAmount
              ? "border-[#138808] ring-4 ring-[#138808]/5"
              : "border-[#E5D8C8] focus-within:border-[#0B3D91] focus-within:ring-4 focus-within:ring-[#0B3D91]/10",
          ].join(" ")}
        >
          {/* RUPEE */}

          <span className="pl-4 text-lg font-bold text-[#D98A18]">₹</span>

          {/* INPUT */}

          <input
            id="custom-donation-amount"
            type="text"
            inputMode="numeric"
            value={customAmount}
            onChange={(event) => handleCustomAmount(event.target.value)}
            placeholder="Enter amount"
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-base font-semibold text-slate-800 outline-none placeholder:text-slate-400"
          />
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Enter the amount you would like to contribute.
        </p>
      </div>

      {/* =====================================
          CONTRIBUTION SUMMARY
      ====================================== */}

      <div className="mt-6 flex items-center justify-between rounded-xl bg-[#138808]/5 px-4 py-4">
        <span className="text-sm font-medium text-[#0B3D91]">
          Your contribution
        </span>

        <span className="text-xl font-black text-[#003D26]">
          ₹{formatIndianCurrency(amount)}
        </span>
      </div>

      {/* =====================================
          IMPACT MESSAGE
      ====================================== */}

      <div className="mt-5 border-t border-slate-100 pt-5">
        <p className="text-xs leading-5 text-slate-500 sm:text-sm">
          Your donation will help support our initiatives in education,
          healthcare, food distribution, child welfare, women empowerment and
          other community programs.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   COMMUNITY MEMBERSHIP AMOUNT
========================================================= */

function CommunityMembershipAmount({ amount }: { amount: number }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* =====================================
          TRICOLOR ACCENT
      ====================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="grid lg:grid-cols-[1fr_0.85fr]">
        {/* =================================
            LEFT INFORMATION
        ================================== */}

        <div className="p-5 sm:p-7 lg:p-9">
          <span className="inline-flex rounded-full bg-[#FF9933]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#C66A00]">
            Community Membership
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-[#003366] sm:text-3xl">
            Annual Community Contribution
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Complete your annual contribution to activate your Diishaa Community
            Membership.
          </p>

          {/* =================================
              BENEFITS
          ================================== */}

          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Your membership includes
            </p>

            <div className="mt-4 space-y-3">
              {communityPaymentContent.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#138808]/10 text-xs font-black text-[#138808]">
                    ✓
                  </span>

                  <span className="text-sm leading-5 text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================
            RIGHT AMOUNT
        ================================== */}

        <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 p-6 sm:p-8">
          {/* DECORATIVE CIRCLE */}

          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FF9933]/10" />

          <div className="relative text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B3D91]">
              Annual Contribution
            </p>

            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-2xl font-bold text-slate-600">₹</span>

              <span className="text-5xl font-black leading-none text-[#003366] sm:text-6xl">
                {formatIndianCurrency(amount)}
              </span>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-500">
              {communityPaymentContent.validity}
            </p>

            {/* PAYMENT NOTICE */}

            <div className="mt-6 rounded-xl border border-[#FF9933]/20 bg-[#FF9933]/5 px-4 py-3">
              <p className="text-xs leading-5 text-slate-600">
                {communityPaymentContent.paymentNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
