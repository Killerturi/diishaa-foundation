import { MessageCircle, Mail, ArrowRight, HeartHandshake } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-[#E9DFCF]
        bg-[#FCFAF5]
      "
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      {/* Green glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-80
          w-80
          rounded-full
          bg-[#138A45]/10
          blur-3xl
        "
      />

      {/* Saffron glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-80
          w-80
          rounded-full
          bg-[#F47B20]/10
          blur-3xl
        "
      />

      {/* Gold decorative circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-10
          hidden
          h-32
          w-32
          rounded-full
          border
          border-[#D4A13A]/20
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[13%]
          top-[18%]
          hidden
          h-3
          w-3
          rounded-full
          bg-[#F47B20]
          lg:block
        "
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-5
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-16
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div>
            {/* Small label */}

            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#F47B20]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#D4A13A]
                "
              >
                Get In Touch
              </span>

              <div className="h-[2px] w-5 bg-[#138A45]" />
            </div>

            {/* Heading */}

            <h1
              className="
                font-[var(--font-heading)]
                text-4xl
                font-extrabold
                leading-[1.05]
                text-[#063B20]
                sm:text-5xl
                lg:text-[56px]
              "
            >
              Write <span className="text-[#F47B20]">To</span> Us
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#4B5563]
                sm:text-base
              "
            >
              Have a question, want to work with us, or simply want to know more
              about Dishaa Care Foundation? We would love to hear from you.
            </p>

            {/* Quick contact links */}

            <div className="mt-7 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Email */}

              <a
                href="mailto:info@dishaa.org"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#E8DDC9]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_5px_18px_rgba(6,59,32,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#F47B20]/40
                  hover:shadow-[0_8px_22px_rgba(244,123,32,0.10)]
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#FFF1E6]
                  "
                >
                  <Mail size={17} strokeWidth={2} className="text-[#F47B20]" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Email Us
                  </span>

                  <span className="mt-0.5 block text-xs font-bold text-[#063B20]">
                    Get in touch
                  </span>
                </span>

                <ArrowRight
                  size={15}
                  className="
                    ml-auto
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#F47B20]
                  "
                />
              </a>

              {/* General help */}

              <a
                href="#contact-form"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#E8DDC9]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_5px_18px_rgba(6,59,32,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#138A45]/40
                  hover:shadow-[0_8px_22px_rgba(19,138,69,0.10)]
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#EFF8F2]
                  "
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={2}
                    className="text-[#138A45]"
                  />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Need Help?
                  </span>

                  <span className="mt-0.5 block text-xs font-bold text-[#063B20]">
                    Talk to our team
                  </span>
                </span>

                <ArrowRight
                  size={15}
                  className="
                    ml-auto
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#138A45]
                  "
                />
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT FEATURE CARD
          ========================== */}

          <div className="relative">
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#E8DDC9]
                bg-white
                p-6
                shadow-[0_18px_45px_rgba(6,59,32,0.08)]
                sm:p-8
              "
            >
              {/* Decorative top-right */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-[#F47B20]/10
                "
              />

              {/* Decorative bottom-left */}

              <div
                className="
                  absolute
                  -bottom-12
                  -left-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#138A45]/10
                "
              />

              <div className="relative z-10 text-center">
                {/* Icon */}

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#063B20]
                    shadow-[0_8px_20px_rgba(6,59,32,0.18)]
                  "
                >
                  <HeartHandshake
                    size={27}
                    strokeWidth={1.8}
                    className="text-[#F6C453]"
                  />
                </div>

                <h2
                  className="
                    mt-5
                    font-[var(--font-heading)]
                    text-2xl
                    font-bold
                    text-[#063B20]
                    sm:text-3xl
                  "
                >
                  We&apos;re Here To Listen
                </h2>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-sm
                    text-xs
                    leading-6
                    text-gray-500
                    sm:text-sm
                  "
                >
                  Whether you have a question, suggestion, partnership idea or
                  want to support our work, reach out to us.
                </p>

                {/* Tricolor accent */}

                <div className="mx-auto mt-7 flex h-[3px] w-24 overflow-hidden rounded-full">
                  <div className="w-1/2 bg-[#F47B20]" />
                  <div className="w-1/2 bg-[#138A45]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
