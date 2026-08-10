import Link from "next/link";
import { HeartHandshake, ArrowRight, HandHeart, Mail } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="bg-[#FCFAF5] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#E5D8C3]
            bg-[#063B20]
            px-6
            py-10
            shadow-[0_18px_50px_rgba(6,59,32,0.16)]
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >
          {/* =========================
              TRICOLOR TOP ACCENT
          ========================== */}

          <div className="absolute left-0 right-0 top-0 flex h-[4px]">
            <span className="w-1/2 bg-[#F47B20]" />
            <span className="w-1/2 bg-[#138A45]" />
          </div>

          {/* =========================
              BACKGROUND DECORATION
          ========================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#F47B20]/12
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-20
              h-64
              w-64
              rounded-full
              bg-[#138A45]/20
              blur-3xl
            "
          />

          {/* Decorative ring */}

          <div
            className="
              pointer-events-none
              absolute
              right-[8%]
              top-1/2
              hidden
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              border
              border-[#F6C453]/15
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
              flex
              flex-col
              items-center
              justify-between
              gap-8
              text-center
              lg:flex-row
              lg:text-left
            "
          >
            {/* =========================
                LEFT CONTENT
            ========================== */}

            <div className="max-w-2xl">
              {/* Label */}

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                <HeartHandshake
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#F6C453]"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#F6C453]
                  "
                >
                  Be Part Of The Change
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  font-[var(--font-heading)]
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                Have Something To
                <span className="block text-[#F47B20]">Share With Us?</span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/70
                  sm:text-base
                "
              >
                Whether you want to volunteer, support our work, collaborate
                with us, or simply share an idea, your voice matters to us.
              </p>
            </div>

            {/* =========================
                ACTIONS
            ========================== */}

            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                sm:w-auto
                sm:flex-row
              "
            >
              {/* Contact Again */}

              <a
                href="#contact-form"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#F6C453]/40
                  hover:bg-white/15
                  active:scale-[0.98]
                "
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="
                    text-[#F6C453]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
                Contact Us
              </a>

              {/* Donate */}

              <Link
                href="/donate"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F47B20]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(244,123,32,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#E96D12]
                  hover:shadow-[0_12px_28px_rgba(244,123,32,0.30)]
                  active:scale-[0.98]
                "
              >
                <HandHeart
                  size={18}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
                Support Us
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* =========================
              BOTTOM ACCENT
          ========================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-8
              h-px
              max-w-5xl
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
            "
          />

          <p
            className="
              relative
              z-10
              mt-4
              text-center
              text-[10px]
              tracking-wide
              text-white/40
            "
          >
            Together, small actions can create meaningful change.
          </p>
        </div>
      </div>
    </section>
  );
}
