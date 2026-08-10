"use client";

import DonationHero from "./DonationHero";
import DonationAmount from "./DonationAmount";
import PaymentMethods from "./PaymentMethods";
import DonationInfo from "./DonationInfo";
import DonationSupport from "./DonationSupport";

export default function DonationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF9F5]">

      {/* Hero */}
      <DonationHero />

      {/* Donation Amount + Payment */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:-mt-16">
        <div
          className="
            overflow-hidden
            rounded-[28px]
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.10)]
            ring-1
            ring-[#E9E1D2]
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* Amount */}
            <DonationAmount />

            {/* Payment Methods */}
            <PaymentMethods />

          </div>
        </div>
      </section>

      {/* Information */}
      <DonationInfo />

      {/* Support */}
      <DonationSupport />

    </main>
  );
}