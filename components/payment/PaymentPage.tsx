"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ShieldCheck } from "lucide-react";

import { PaymentMethod, PaymentPurpose } from "./payment.data";

import PaymentHeader from "./PaymentHeader";
import PaymentAmount from "./PaymentAmount";
import PaymentMethods from "./PaymentMethods";
import PaymentSummary from "./PaymentSummary";
import PaymentButton from "./PaymentButton";

import CommunityStepper from "@/components/community/CommunityStepper";

interface PaymentPageProps {
  purpose: PaymentPurpose;

  /*
    For Community Membership this is temporary.

    Later this amount will come from the approved
    membership/application record.
  */
  membershipAmount?: number;
}

export default function PaymentPage({
  purpose,
  membershipAmount = 500,
}: PaymentPageProps) {
  const router = useRouter();

  const isDonation = purpose === "donation";
  const isCommunityMembership = purpose === "community-membership";

  /* =========================================================
     PAYMENT AMOUNT
  ========================================================= */

  const [amount, setAmount] = useState(isDonation ? 500 : membershipAmount);

  /* =========================================================
     PAYMENT METHOD
  ========================================================= */

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("upi");

  /* =========================================================
     PAYMENT STATUS
  ========================================================= */

  const [paymentStarted, setPaymentStarted] = useState(false);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  /* =========================================================
     PAYMENT START
  ========================================================= */

  const handlePaymentStart = () => {
    setPaymentStarted(true);
    setPaymentCompleted(false);
  };

  /* =========================================================
     PAYMENT COMPLETE
  ========================================================= */

  const handlePaymentComplete = () => {
    setPaymentCompleted(true);
    setPaymentStarted(false);
  };

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  if (paymentCompleted) {
    return <PaymentSuccess purpose={purpose} amount={amount} />;
  }

  return (
    <main className="min-h-screen bg-[#F7F7F3]">
      {/* =====================================================
          TRICOLOR TOP ACCENT
      ====================================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* ===================================================
            COMMUNITY STEPPER
        ==================================================== */}

        {isCommunityMembership && (
          <div className="mb-8 sm:mb-10">
            <CommunityStepper currentStep="payment" />
          </div>
        )}

        {/* ===================================================
            HEADER
        ==================================================== */}

        <PaymentHeader purpose={purpose} />

        {/* ===================================================
            PAYMENT CONTENT
        ==================================================== */}

        <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
          <div
            className="
              grid
              gap-5
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-start
            "
          >
            {/* =================================================
                LEFT COLUMN
            ================================================== */}

            <div className="space-y-5">
              {/* AMOUNT */}

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#E4DDCF]
                  bg-white
                  shadow-[0_12px_35px_rgba(6,59,32,0.06)]
                "
              >
                <PaymentAmount
                  purpose={purpose}
                  amount={amount}
                  onAmountChange={setAmount}
                />
              </div>

              {/* PAYMENT METHODS */}

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#E4DDCF]
                  bg-white
                  shadow-[0_12px_35px_rgba(6,59,32,0.06)]
                "
              >
                <PaymentMethods
                  purpose={purpose}
                  selectedMethod={selectedMethod}
                  onMethodChange={setSelectedMethod}
                />
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================== */}

            <div className="lg:sticky lg:top-24">
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#E4DDCF]
                  bg-white
                  shadow-[0_15px_40px_rgba(6,59,32,0.08)]
                "
              >
                {/* =================================================
                    SUMMARY
                ================================================== */}

                <PaymentSummary
                  purpose={purpose}
                  amount={amount}
                  selectedMethod={selectedMethod}
                />

                {/* =================================================
                    PAYMENT BUTTON
                ================================================== */}

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <PaymentButton
                    purpose={purpose}
                    amount={amount}
                    selectedMethod={selectedMethod}
                    disabled={paymentStarted || amount <= 0}
                    onPaymentStart={handlePaymentStart}
                    onPaymentComplete={handlePaymentComplete}
                  />

                  {/* SECURITY */}

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-[#138808]" />

                    <p className="text-[10px] text-slate-400">
                      Secure &amp; trusted payment
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  COMMUNITY PAYMENT NOTE
              ================================================== */}

              {isCommunityMembership && (
                <div
                  className="
                    mt-4
                    rounded-2xl
                    border
                    border-[#138808]/15
                    bg-[#138808]/5
                    px-4
                    py-3
                  "
                >
                  <p className="text-center text-[10px] leading-5 text-slate-500">
                    Your Community Membership will be activated after successful
                    payment verification.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRUST
        ====================================================== */}

        <div className="mx-auto mt-8 max-w-3xl text-center sm:mt-12">
          <p className="text-[10px] leading-5 text-slate-400 sm:text-xs">
            Diishaa Foundation is committed to handling your contribution
            responsibly and securely.
          </p>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SUCCESS SCREEN
========================================================= */

function PaymentSuccess({
  purpose,
  amount,
}: {
  purpose: PaymentPurpose;
  amount: number;
}) {
  const router = useRouter();

  const isDonation = purpose === "donation";
  const isCommunityMembership = purpose === "community-membership";

  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((previous) => {
        if (previous <= 1) {
          clearInterval(interval);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      /*
        TEMPORARY FRONTEND FLOW

        Donation:
        Payment Success → Donation Page

        Community:
        Payment Success → Join Us Page

        Later Community will become:

        Payment Success
              ↓
        Community Account
      */

      if (isDonation) {
        router.push("/donate");
      } else {
        router.push("/join-us");
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isDonation, router]);

  return (
    <main className="min-h-screen bg-[#F7F7F3]">
      {/* =====================================================
          TRICOLOR
      ====================================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div
        className="
          flex
          min-h-[calc(100vh-6px)]
          items-center
          justify-center
          px-4
          py-10
          sm:px-6
          sm:py-14
        "
      >
        <div
          className="
            w-full
            max-w-xl
            overflow-hidden
            rounded-3xl
            border
            border-[#E4DDCF]
            bg-white
            shadow-[0_20px_55px_rgba(6,59,32,0.10)]
          "
        >
          {/* TOP ACCENT */}

          <div className="h-1 bg-[#138808]" />

          <div className="px-5 py-10 text-center sm:px-10 sm:py-14">
            {/* =================================================
                SUCCESS ICON
            ================================================== */}

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-[#138808]/10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#138808]
                  text-2xl
                  font-black
                  text-white
                  shadow-[0_8px_20px_rgba(19,136,8,0.20)]
                "
              >
                ✓
              </div>
            </div>

            {/* LABEL */}

            <p
              className="
                mt-7
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#138808]
              "
            >
              {isDonation ? "DONATION SUCCESSFUL" : "PAYMENT SUCCESSFUL"}
            </p>

            {/* TITLE */}

            <h1
              className="
                mt-3
                text-2xl
                font-black
                leading-tight
                text-[#171717]
                sm:text-3xl
              "
            >
              {isDonation
                ? "Thank You for Your Contribution!"
                : "Your Community Contribution Is Complete!"}
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {isDonation
                ? "Your support helps Diishaa Foundation continue its work with communities and create meaningful opportunities."
                : "Your annual community contribution has been received successfully. Your Community Membership can now be activated."}
            </p>

            {/* =================================================
                AMOUNT
            ================================================== */}

            <div
              className="
                mx-auto
                mt-7
                max-w-sm
                rounded-2xl
                border
                border-[#E4DDCF]
                bg-[#FCFBF7]
                px-5
                py-5
              "
            >
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-400
                "
              >
                Amount Paid
              </p>

              <p
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-[#FF9933]
                "
              >
                ₹{new Intl.NumberFormat("en-IN").format(amount)}
              </p>
            </div>

            {/* =================================================
                COMMUNITY NEXT STEPS
            ================================================== */}

            {isCommunityMembership && (
              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-[#FF9933]/20
                  bg-[#FFF9F2]
                  p-5
                  text-left
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#C66A00]
                  "
                >
                  What Happens Next
                </p>

                <div className="mt-4 space-y-3">
                  <SuccessStep number="01" text="Community Account creation" />

                  <SuccessStep
                    number="02"
                    text="Diishaa Community ID + QR generation"
                  />

                  <SuccessStep
                    number="03"
                    text="Community Certificate generation"
                  />
                </div>
              </div>
            )}

            {/* =================================================
                DONATION MESSAGE
            ================================================== */}

            {isDonation && (
              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-[#138808]/15
                  bg-[#138808]/5
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Your contribution is now part of Diishaa Foundation&apos;s
                  ongoing community impact.
                </p>
              </div>
            )}

            {/* =================================================
                PAYMENT STATUS
            ================================================== */}

            <div className="mt-7">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-400
                "
              >
                Payment Status
              </p>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#138808]
                    text-white
                  "
                >
                  <Check size={11} strokeWidth={3} />
                </span>

                <p className="text-sm font-bold text-[#138808]">
                  Successfully Completed
                </p>
              </div>
            </div>

            {/* =================================================
                REDIRECT MESSAGE
            ================================================== */}

            <div className="mt-6">
              <p className="text-xs text-slate-400">
                Returning to{" "}
                <span className="font-bold text-[#063B20]">
                  {isDonation ? "Donation" : "Community Membership"}
                </span>{" "}
                in{" "}
                <span className="font-bold text-[#FF9933]">{secondsLeft}</span>{" "}
                seconds...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SUCCESS STEP
========================================================= */

function SuccessStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#138808]
          text-[10px]
          font-bold
          text-white
        "
      >
        {number}
      </span>

      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
}
