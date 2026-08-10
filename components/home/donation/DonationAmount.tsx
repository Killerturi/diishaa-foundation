"use client";

import { useState } from "react";
import { IndianRupee } from "lucide-react";

const amounts = [500, 1000, 2500, 5000];

export default function DonationAmount() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");

    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div
      className="
        border-b
        border-[#E8E1D5]
        p-6
        sm:p-8
        lg:border-b-0
        lg:border-r
        lg:p-10
      "
    >
      {/* Heading */}

      <div className="mb-7">
        <p
          className="
            mb-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#D4A13A]
          "
        >
          Make a Difference
        </p>

        <h2
          className="
            font-[var(--font-heading)]
            text-2xl
            font-bold
            text-[#063B20]
            sm:text-3xl
          "
        >
          Choose Your Donation
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Select an amount that you would like to contribute. Every contribution
          helps us serve communities in need.
        </p>
      </div>

      {/* Amount Buttons */}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
        {amounts.map((amount) => {
          const isSelected = selectedAmount === amount;

          return (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountSelect(amount)}
              className={`
                relative
                flex
                h-14
                items-center
                justify-center
                rounded-xl
                border
                text-base
                font-bold
                transition-all
                duration-200
                ${
                  isSelected
                    ? `
                      border-[#138A45]
                      bg-[#063B20]
                      text-white
                      shadow-[0_8px_20px_rgba(6,59,32,0.18)]
                    `
                    : `
                      border-[#DDD6C8]
                      bg-white
                      text-[#063B20]
                      hover:border-[#D4A13A]
                      hover:bg-[#FFF9EF]
                    `
                }
              `}
            >
              <IndianRupee
                size={16}
                strokeWidth={2.5}
                className={isSelected ? "text-[#F6C453]" : "text-[#D4A13A]"}
              />

              {amount.toLocaleString("en-IN")}
            </button>
          );
        })}
      </div>

      {/* Custom Amount */}

      <div className="mt-5">
        <label
          htmlFor="customDonation"
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-[#063B20]
          "
        >
          Or enter another amount
        </label>

        <div className="relative">
          <IndianRupee
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#D4A13A]
            "
          />

          <input
            id="customDonation"
            type="text"
            inputMode="numeric"
            value={customAmount}
            onChange={handleCustomAmount}
            placeholder="Enter amount"
            className="
              h-14
              w-full
              rounded-xl
              border
              border-[#DDD6C8]
              bg-[#FFFEFC]
              pl-11
              pr-4
              text-base
              font-semibold
              text-[#063B20]
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-[#138A45]
              focus:ring-2
              focus:ring-[#138A45]/15
            "
          />
        </div>
      </div>

      {/* Selected Amount */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          rounded-xl
          bg-[#F2F7F3]
          px-4
          py-3
        "
      >
        <span className="text-sm font-medium text-gray-600">
          Your contribution
        </span>

        <span
          className="
            flex
            items-center
            font-[var(--font-heading)]
            text-xl
            font-bold
            text-[#063B20]
          "
        >
          <IndianRupee size={17} strokeWidth={2.5} />

          {(selectedAmount !== null
            ? selectedAmount
            : Number(customAmount) || 0
          ).toLocaleString("en-IN")}
        </span>
      </div>

      {/* Note */}

      <p className="mt-4 text-xs leading-5 text-gray-400">
        Your donation will help support our initiatives in education,
        healthcare, food distribution, child welfare, women empowerment and
        other community programs.
      </p>
    </div>
  );
}
