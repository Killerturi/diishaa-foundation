"use client";

import { useState } from "react";
import { Building2, CreditCard, QrCode, Smartphone, Check } from "lucide-react";

const paymentMethods = [
  {
    id: "upi",
    title: "UPI",
    description: "Pay using UPI",
    icon: Smartphone,
  },
  {
    id: "bank",
    title: "Bank",
    description: "Direct bank transfer",
    icon: Building2,
  },
  {
    id: "qr",
    title: "QR Code",
    description: "Scan & contribute",
    icon: QrCode,
  },
  {
    id: "online",
    title: "Online",
    description: "Secure online payment",
    icon: CreditCard,
  },
];

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("upi");

  const handleDonate = () => {
    /*
      Payment gateway will be connected here later.

      Example:

      const amount = selectedAmount;
      const method = selectedMethod;

      Then send these values to your backend/payment gateway.
    */

    console.log("Selected payment method:", selectedMethod);
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10">
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
          Secure Payment
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
          Choose Payment Method
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Select your preferred way to support Dishaa Care Foundation.
        </p>
      </div>

      {/* Payment Methods */}

      <div className="grid grid-cols-2 gap-3">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelectedMethod(method.id)}
              className={`
                relative
                flex
                min-h-[105px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                px-3
                py-4
                text-center
                transition-all
                duration-200
                ${
                  isSelected
                    ? `
                      border-[#138A45]
                      bg-[#F1F8F3]
                      shadow-[0_8px_20px_rgba(6,59,32,0.08)]
                    `
                    : `
                      border-[#DDD6C8]
                      bg-white
                      hover:border-[#D4A13A]
                      hover:bg-[#FFF9EF]
                    `
                }
              `}
            >
              {/* Selected indicator */}

              {isSelected && (
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
                    bg-[#138A45]
                    text-white
                  "
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              )}

              {/* Icon */}

              <span
                className={`
                  mb-2
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  ${
                    isSelected
                      ? "bg-[#063B20] text-[#F6C453]"
                      : "bg-[#F8F4EA] text-[#D4A13A]"
                  }
                `}
              >
                <Icon size={21} strokeWidth={2} />
              </span>

              {/* Title */}

              <span
                className={`
                  text-sm
                  font-bold
                  ${isSelected ? "text-[#063B20]" : "text-[#222]"}
                `}
              >
                {method.title}
              </span>

              {/* Description */}

              <span className="mt-1 text-[10px] text-gray-500">
                {method.description}
              </span>
            </button>
          );
        })}
      </div>

      {/* Donate Button */}

      <button
        type="button"
        onClick={handleDonate}
        className="
          mt-6
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#063B20]
          px-6
          text-base
          font-bold
          text-white
          shadow-[0_10px_25px_rgba(6,59,32,0.18)]
          transition-all
          duration-200
          hover:bg-[#075029]
          hover:shadow-[0_12px_30px_rgba(6,59,32,0.25)]
          active:scale-[0.98]
        "
      >
        <span>Donate Now</span>

        <span className="text-[#F47B20]">♥</span>
      </button>

      {/* Security message */}

      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-[#E8E1D5]" />

        <p className="text-center text-[11px] text-gray-400">
          Secure &amp; trusted donation
        </p>

        <div className="h-px flex-1 bg-[#E8E1D5]" />
      </div>
    </div>
  );
}
