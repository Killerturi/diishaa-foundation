"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentMethod, PaymentPurpose } from "./payment.data";

import PaymentHeader from "./PaymentHeader";
import PaymentAmount from "./PaymentAmount";
import PaymentMethods from "./PaymentMethods";
import PaymentSummary from "./PaymentSummary";
import PaymentButton from "./PaymentButton";

interface PaymentPageProps {
  purpose: PaymentPurpose;

  /*
    For Community Membership this should eventually
    come from the approved application/payment record.

    For now we use the temporary value passed by
    the page.
  */
  membershipAmount?: number;
}

export default function PaymentPage({
  purpose,
  membershipAmount = 500,
}: PaymentPageProps) {
  const isDonation = purpose === "donation";

  /* =========================================
     PAYMENT AMOUNT
  ========================================== */

  const [amount, setAmount] = useState(isDonation ? 500 : membershipAmount);

  /* =========================================
     PAYMENT METHOD
  ========================================== */

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("upi");

  /* =========================================
     PAYMENT STATUS
  ========================================== */

  const [paymentStarted, setPaymentStarted] = useState(false);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  /* =========================================
     PAYMENT START
  ========================================== */

  const handlePaymentStart = () => {
    setPaymentStarted(true);
    setPaymentCompleted(false);
  };

  /* =========================================
     PAYMENT COMPLETE
  ========================================== */

  const handlePaymentComplete = () => {
    setPaymentCompleted(true);
    setPaymentStarted(false);
  };

  /* =========================================
     SUCCESS SCREEN
  ========================================== */

  if (paymentCompleted) {
    return <PaymentSuccess purpose={purpose} amount={amount} />;
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================
          TOP TRICOLOR LINE
      ====================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =====================================
          PAGE CONTENT
      ====================================== */}

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* ===================================
            HEADER
        ==================================== */}

        <PaymentHeader purpose={purpose} />

        {/* ===================================
            PAYMENT CONTENT
        ==================================== */}

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* =================================
                LEFT COLUMN
            ================================== */}

            <div className="space-y-6">
              {/* AMOUNT */}

              <PaymentAmount
                purpose={purpose}
                amount={amount}
                onAmountChange={setAmount}
              />

              {/* PAYMENT METHODS */}

              <PaymentMethods
                purpose={purpose}
                selectedMethod={selectedMethod}
                onMethodChange={setSelectedMethod}
              />
            </div>

            {/* =================================
                RIGHT COLUMN
            ================================== */}

            <div className="lg:sticky lg:top-24">
              <PaymentSummary
                purpose={purpose}
                amount={amount}
                selectedMethod={selectedMethod}
              />

              {/* =================================
                  FINAL BUTTON
              ================================== */}

              <PaymentButton
                purpose={purpose}
                amount={amount}
                selectedMethod={selectedMethod}
                disabled={paymentStarted || amount <= 0}
                onPaymentStart={handlePaymentStart}
                onPaymentComplete={handlePaymentComplete}
              />
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM TRUST
        ====================================== */}

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <p className="text-xs leading-5 text-slate-400">
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
      if (isDonation) {
        router.push("/donate/payment");
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
    <main className="min-h-screen bg-slate-50">
      {/* =====================================
          TRICOLOR
      ====================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="flex min-h-[calc(100vh-6px)] items-center justify-center px-5 py-12 sm:px-6">
        <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          {/* =================================
              TOP ACCENT
          ================================== */}

          <div className="h-1 bg-[#138808]" />

          <div className="px-5 py-10 text-center sm:px-10 sm:py-14">
            {/* SUCCESS ICON */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#138808]/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#138808] text-2xl font-black text-white">
                ✓
              </div>
            </div>

            {/* LABEL */}

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#138808]">
              {isDonation ? "DONATION SUCCESSFUL" : "PAYMENT SUCCESSFUL"}
            </p>

            {/* TITLE */}

            <h1 className="mt-3 text-2xl font-black leading-tight text-[#003366] sm:text-3xl">
              {isDonation
                ? "Thank You for Your Contribution!"
                : "Your Community Membership Is Activated!"}
            </h1>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              {isDonation
                ? "Your support helps Diishaa Foundation continue its work with communities and create meaningful opportunities."
                : "Your contribution has been received successfully. Your Community Account and membership credentials can now be generated."}
            </p>

            {/* AMOUNT */}

            <div className="mx-auto mt-7 max-w-sm rounded-2xl bg-[#0B3D91] px-5 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
                Amount Paid
              </p>

              <p className="mt-1 text-3xl font-black text-[#FF9933]">
                ₹{new Intl.NumberFormat("en-IN").format(amount)}
              </p>
            </div>

            {/* MEMBERSHIP NEXT STEPS */}

            {!isDonation && (
              <div className="mt-6 rounded-2xl border border-[#FF9933]/20 bg-[#FF9933]/5 p-5 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C66A00]">
                  What happens next
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

            {/* DONATION MESSAGE */}

            {isDonation && (
              <div className="mt-6 rounded-2xl border border-[#138808]/15 bg-[#138808]/5 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Your contribution is now part of Diishaa Foundation&apos;s
                  ongoing community impact.
                </p>
              </div>
            )}

            {/* REFERENCE */}

            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Payment Status
              </p>

              <p className="mt-1 text-sm font-bold text-[#138808]">
                Successfully Completed
              </p>
            </div>
            <div className="mt-6">
              <p className="text-xs text-slate-400">
                Returning to the donation page in{" "}
                <span className="font-bold text-[#0B3D91]">{secondsLeft}</span>{" "}
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
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-[10px] font-bold text-white">
        {number}
      </span>

      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
}
