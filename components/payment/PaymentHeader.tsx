"use client";

import { Heart, Users } from "lucide-react";

import { PaymentPurpose } from "./payment.data";

interface PaymentHeaderProps {
  purpose: PaymentPurpose;
}

export default function PaymentHeader({ purpose }: PaymentHeaderProps) {
  const isDonation = purpose === "donation";

  return (
    <section className="mx-auto max-w-3xl text-center">
      {/* =====================================================
          TOP LABEL
      ====================================================== */}

      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#FF9933] sm:w-10" />

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#D98A18]
            sm:text-xs
          "
        >
          {isDonation ? "MAKE A DIFFERENCE" : "JOIN OUR COMMUNITY"}
        </p>

        <span className="h-px w-8 bg-[#138808] sm:w-10" />
      </div>

      {/* =====================================================
          ICON
      ====================================================== */}

      <div
        className="
          mx-auto
          mt-4
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#FF9933]/10
          text-[#FF9933]
        "
      >
        {isDonation ? (
          <Heart size={20} strokeWidth={2} />
        ) : (
          <Users size={20} strokeWidth={2} />
        )}
      </div>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <h1
        className="
          mt-4
          text-3xl
          font-black
          leading-tight
          text-[#063B20]
          sm:text-4xl
          lg:text-[42px]
        "
      >
        {isDonation ? "Choose Your Donation" : "Complete Your Membership"}
      </h1>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-sm
          leading-6
          text-slate-500
          sm:text-base
          sm:leading-7
        "
      >
        {isDonation ? (
          <>
            Select an amount that you would like to contribute. Every
            contribution helps us serve communities in need.
          </>
        ) : (
          <>
            Your Community Membership application has been approved. Complete
            your annual contribution to activate your Dishaa Community
            Membership.
          </>
        )}
      </p>

      {/* =====================================================
          SUPPORTING MESSAGE
      ====================================================== */}

      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />

        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-slate-400
            sm:text-[10px]
          "
        >
          {isDonation
            ? "EVERY CONTRIBUTION CREATES IMPACT"
            : "COMMUNITY · SUPPORT · IMPACT"}
        </p>

        <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />
      </div>
    </section>
  );
}
