import { MapPin, Mail, Phone, Clock3, ArrowUpRight } from "lucide-react";

export default function ContactInfo() {
  return (
    <div
      className="
        relative
        h-full
        overflow-hidden
        bg-[#063B20]
        px-6
        py-8
        sm:px-8
        sm:py-10
        lg:px-8
        lg:py-10
      "
    >
      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-[#138A45]/25
          blur-2xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-56
          w-56
          rounded-full
          bg-[#F47B20]/10
          blur-3xl
        "
      />

      {/* Subtle tricolor line */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          flex
          h-[3px]
        "
      >
        <span className="w-1/2 bg-[#F47B20]" />
        <span className="w-1/2 bg-[#138A45]" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10">
        {/* Label */}

        <div className="mb-4 flex items-center gap-3">
          <span
            className="
              h-[2px]
              w-8
              bg-[#F6C453]
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#F6C453]
            "
          >
            Contact Information
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
          Let&apos;s Connect
        </h2>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-md
            text-sm
            leading-6
            text-white/70
          "
        >
          Have a question about our work, want to volunteer, partner with us, or
          support a community initiative? We&apos;re here to help.
        </p>

        {/* =========================
            CONTACT DETAILS
        ========================== */}

        <div className="mt-8 space-y-5">
          {/* Address */}

          <div className="flex gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#138A45]/25
                ring-1
                ring-white/10
              "
            >
              <MapPin size={19} strokeWidth={1.8} className="text-[#F6C453]" />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#F6C453]
                "
              >
                Our Address
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Your Foundation Address
              </p>

              <p className="mt-0.5 text-xs text-white/55">West Bengal, India</p>
            </div>
          </div>

          {/* Email */}

          <div className="flex gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#138A45]/25
                ring-1
                ring-white/10
              "
            >
              <Mail size={19} strokeWidth={1.8} className="text-[#F47B20]" />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#F6C453]
                "
              >
                Email Us
              </p>

              <a
                href="mailto:info@diishaa.org"
                className="
                  mt-1
                  block
                  break-all
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:text-[#F6C453]
                "
              >
                info@diishaa.org
              </a>

              <p className="mt-0.5 text-xs text-white/55">
                We usually respond within 1–2 working days.
              </p>
            </div>
          </div>

          {/* Phone */}

          <div className="flex gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#138A45]/25
                ring-1
                ring-white/10
              "
            >
              <Phone size={19} strokeWidth={1.8} className="text-[#F6C453]" />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#F6C453]
                "
              >
                Call Us
              </p>

              <a
                href="tel:+91XXXXXXXXXX"
                className="
                  mt-1
                  block
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:text-[#F6C453]
                "
              >
                +91 XXXXX XXXXX
              </a>

              <p className="mt-0.5 text-xs text-white/55">Monday – Saturday</p>
            </div>
          </div>

          {/* Working Hours */}

          <div className="flex gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#138A45]/25
                ring-1
                ring-white/10
              "
            >
              <Clock3 size={19} strokeWidth={1.8} className="text-[#F47B20]" />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#F6C453]
                "
              >
                Working Hours
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                10:00 AM – 6:00 PM
              </p>

              <p className="mt-0.5 text-xs text-white/55">Monday to Saturday</p>
            </div>
          </div>
        </div>

        {/* =========================
            MAP LINK
        ========================== */}

        <a
          href="#contact-map"
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-2
            text-xs
            font-bold
            text-[#F6C453]
            transition-colors
            duration-200
            hover:text-white
          "
        >
          View our location on the map
          <ArrowUpRight
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>
    </div>
  );
}
