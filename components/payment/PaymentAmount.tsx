"use client";

import { Check, Heart, Users } from "lucide-react";

import { PaymentPurpose } from "./payment.data";

interface PaymentAmountProps {
  purpose: PaymentPurpose;
  amount: number;
  onAmountChange: (amount: number) => void;
}

const donationAmounts = [500, 1000, 2500, 5000];

export default function PaymentAmount({
  purpose,
  amount,
  onAmountChange,
}: PaymentAmountProps) {
  const isDonation = purpose === "donation";
  const isCommunityMembership = purpose === "community-membership";

  /* =========================================================
     COMMUNITY MEMBERSHIP
  ========================================================== */

  if (isCommunityMembership) {
    return (
      <section className="p-5 sm:p-7 lg:p-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="flex items-start gap-3">
          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#FF9933]/10
              text-[#FF9933]
            "
          >
            <Users size={20} strokeWidth={2} />
          </span>

          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#D98A18]
              "
            >
              Community Membership
            </p>

            <h2
              className="
                mt-1
                text-xl
                font-black
                text-[#063B20]
                sm:text-2xl
              "
            >
              Annual Contribution
            </h2>
          </div>
        </div>

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <p
          className="
            mt-4
            text-sm
            leading-6
            text-slate-500
          "
        >
          Your annual contribution supports Dishaa Foundation&apos;s community
          initiatives and programs.
        </p>

        {/* ===================================================
            FIXED CONTRIBUTION
        ==================================================== */}

        <div
          className="
            relative
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-[#E4DDCF]
            bg-[#FCFBF7]
            p-5
            sm:p-6
          "
        >
          {/* TRICOLOR TOP */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              flex
              h-1
            "
          >
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          <div className="flex items-center justify-between gap-5 pt-2">
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                "
              >
                Annual Contribution
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Valid for 1 Year
              </p>
            </div>

            <div className="text-right">
              <p
                className="
                  text-3xl
                  font-black
                  text-[#FF9933]
                  sm:text-4xl
                "
              >
                ₹{amount.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                Fixed contribution
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            BENEFITS
        ==================================================== */}

        <div className="mt-7">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#063B20]
            "
          >
            Included with your membership
          </p>

          <div className="mt-4 space-y-3">
            <Benefit text="Dishaa Community Account" />

            <Benefit text="Community ID with QR verification" />

            <Benefit text="Digital Community Certificate" />

            <Benefit text="Connection to eligible community activities" />
          </div>
        </div>

        {/* ===================================================
            APPROVAL NOTICE
        ==================================================== */}

        <div
          className="
            mt-7
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-[#138808]/15
            bg-[#138808]/5
            p-4
          "
        >
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
              text-white
            "
          >
            <Check size={13} strokeWidth={3} />
          </span>

          <div>
            <p className="text-sm font-bold text-[#063B20]">
              Application Approved
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-slate-500
              "
            >
              Your application has been approved by the Dishaa team. Complete
              the contribution to activate your membership.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     DONATION
  ========================================================== */

  return (
    <section className="p-5 sm:p-7 lg:p-8">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-start gap-3">
        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#FF9933]/10
            text-[#FF9933]
          "
        >
          <Heart size={20} strokeWidth={2} />
        </span>

        <div>
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#D98A18]
            "
          >
            Make a Difference
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-black
              text-[#063B20]
              sm:text-2xl
            "
          >
            Choose Your Donation
          </h2>
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <p
        className="
          mt-4
          text-sm
          leading-6
          text-slate-500
        "
      >
        Select an amount that you would like to contribute. Every contribution
        helps us serve communities in need.
      </p>

      {/* =====================================================
          PRESET AMOUNTS
      ====================================================== */}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {donationAmounts.map((donationAmount) => {
          const selected = amount === donationAmount;

          return (
            <button
              key={donationAmount}
              type="button"
              onClick={() => onAmountChange(donationAmount)}
              className={`
                relative
                flex
                h-14
                items-center
                justify-center
                rounded-xl
                border
                text-sm
                font-bold
                transition-all
                duration-200

                ${
                  selected
                    ? `
                      border-[#138808]
                      bg-[#063B20]
                      text-white
                      shadow-[0_8px_20px_rgba(6,59,32,0.16)]
                    `
                    : `
                      border-[#E0D8C9]
                      bg-white
                      text-[#063B20]
                      hover:border-[#FF9933]
                      hover:bg-[#FFF9EF]
                    `
                }
              `}
            >
              <span className="text-[#FF9933]">₹</span>

              <span className="ml-1">
                {donationAmount.toLocaleString("en-IN")}
              </span>

              {/* SELECTED */}

              {selected && (
                <span
                  className="
                    absolute
                    right-2
                    top-2
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
              )}
            </button>
          );
        })}
      </div>

      {/* =====================================================
          CUSTOM AMOUNT
      ====================================================== */}

      <div className="mt-6">
        <label
          htmlFor="custom-donation-amount"
          className="
            text-sm
            font-bold
            text-[#063B20]
          "
        >
          Or enter another amount
        </label>

        <div
          className="
            mt-2
            flex
            h-14
            items-center
            rounded-xl
            border
            border-[#E0D8C9]
            bg-white
            px-4
            transition-all
            focus-within:border-[#FF9933]
            focus-within:ring-4
            focus-within:ring-[#FF9933]/10
          "
        >
          <span
            className="
              text-lg
              font-bold
              text-[#FF9933]
            "
          >
            ₹
          </span>

          <input
            id="custom-donation-amount"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Enter amount"
            value={donationAmounts.includes(amount) ? "" : amount || ""}
            onChange={(event) => {
              const value = Number(event.target.value);

              if (!Number.isNaN(value)) {
                onAmountChange(value);
              }
            }}
            className="
              ml-3
              w-full
              bg-transparent
              text-sm
              font-medium
              text-[#171717]
              outline-none
              placeholder:text-slate-400
            "
          />
        </div>

        <p className="mt-2 text-[10px] text-slate-400">
          Enter the amount you would like to contribute.
        </p>
      </div>

      {/* =====================================================
          CONTRIBUTION SUMMARY
      ====================================================== */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          rounded-2xl
          bg-[#F2F8F3]
          px-4
          py-4
        "
      >
        <span className="text-sm text-slate-600">Your contribution</span>

        <span
          className="
            text-xl
            font-black
            text-[#063B20]
          "
        >
          ₹{amount.toLocaleString("en-IN")}
        </span>
      </div>

      {/* =====================================================
          IMPACT MESSAGE
      ====================================================== */}

      <div
        className="
          mt-5
          border-t
          border-[#EEE8DD]
          pt-5
        "
      >
        <p
          className="
            text-xs
            leading-5
            text-slate-500
          "
        >
          Your donation will help support our initiatives in education,
          healthcare, food distribution, child welfare, women empowerment and
          other community programs.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   BENEFIT
========================================================= */

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#138808]/10
          text-[#138808]
        "
      >
        <Check size={13} strokeWidth={3} />
      </span>

      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
