import { Heart, ShieldCheck, IndianRupee } from "lucide-react";

export default function DonationHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Indian Tricolor Background */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-2
          bg-gradient-to-r
          from-[#F47B20]
          via-white
          to-[#138A45]
        "
      />

      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#FFF8EE]
          via-white
          to-[#F2F8F3]
        "
      />

      {/* Decorative saffron glow */}

      <div
        className="
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#F47B20]/10
          blur-3xl
        "
      />

      {/* Decorative green glow */}

      <div
        className="
          absolute
          -right-32
          top-20
          h-80
          w-80
          rounded-full
          bg-[#138A45]/10
          blur-3xl
        "
      />

      {/* Content */}

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-5
          pb-24
          pt-10
          sm:px-6
          lg:px-8
          lg:pb-28
          lg:pt-10
        "
      >
        {/* Small Label */}

        <div className="mb-5 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D9C79F]
              bg-white/80
              px-4
              py-2
              text-sm
              font-semibold
              text-[#063B20]
              shadow-sm
              backdrop-blur
            "
          >
            <Heart size={16} className="fill-[#F47B20] text-[#F47B20]" />
            SUPPORT OUR CAUSE
          </div>
        </div>

        {/* Heading */}

        <div className="mx-auto max-w-screen-2xl text-center">
          <h1
            className="
              font-[var(--font-heading)]
              text-4xl
              font-extrabold
              leading-tight
              text-[#063B20]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Your Support Can
            <span className="block text-[#F47B20]">Change a Life</span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-screen-2xl
              text-base
              leading-7
              text-[#4B5563]
              sm:text-lg
              sm:leading-8
            "
          >
            Every contribution helps us support communities, empower people, and
            create a better tomorrow.
          </p>
        </div>

        {/* Trust indicators */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
            sm:gap-8
          "
        >
          <div className="flex items-center gap-2 text-sm font-medium text-[#063B20]">
            <ShieldCheck size={20} className="text-[#138A45]" />
            Secure Donation
          </div>

          <div className="hidden h-5 w-px bg-[#D8D8D8] sm:block" />

          <div
            id="donation-payment"
            className="flex items-center gap-2 text-sm font-medium text-[#063B20]"
          >
            <IndianRupee size={19} className="text-[#F47B20]" />
            Every Contribution Matters
          </div>
        </div>
      </div>
    </section>
  );
}
