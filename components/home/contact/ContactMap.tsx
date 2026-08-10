import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const locations = [
  {
    icon: MapPin,
    title: "ADDRESS",
    value: "Your Foundation Address",
    description: "West Bengal, India",
    color: "#F47B20",
    bg: "#FFF1E6",
  },
  {
    icon: Mail,
    title: "EMAIL",
    value: "your@email.com",
    description: "We would love to hear from you.",
    color: "#D4A13A",
    bg: "#FFF8E8",
  },
  {
    icon: Phone,
    title: "PHONE",
    value: "+91 XXXXX XXXXX",
    description: "Monday – Saturday",
    color: "#138A45",
    bg: "#EFF8F2",
  },
];

export default function ContactMap() {
  return (
    <section
      id="contact-map"
      className="
        relative
        overflow-hidden
        bg-[#FFF8EF]
        px-4
        pb-12
        sm:px-6
        sm:pb-15
        lg:px-8
        lg:pb-12
      "
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#138A45]/7
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#F47B20]/7
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47B20]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#D4A13A]
              "
            >
              Find Us
            </span>

            <span className="h-[2px] w-10 bg-[#138A45]" />
          </div>

          <h2
            className="
              font-[var(--font-heading)]
              text-3xl
              font-bold
              text-[#063B20]
              sm:text-4xl
            "
          >
            Our Location
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            Find our foundation and connect with our team. We are always happy
            to hear from people who want to support meaningful change.
          </p>
        </div>

        {/* =========================
            LOCATION CARDS
        ========================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {locations.map((location) => {
            const Icon = location.icon;

            return (
              <div
                key={location.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E8DDC9]
                  bg-white
                  px-5
                  py-7
                  shadow-[0_8px_25px_rgba(6,59,32,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_35px_rgba(6,59,32,0.09)]
                "
              >
                {/* Top accent */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[3px]
                  "
                  style={{
                    backgroundColor: location.color,
                  }}
                />

                <div className="flex items-start gap-4">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                    style={{
                      backgroundColor: location.bg,
                    }}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      style={{
                        color: location.color,
                      }}
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.14em]
                        text-gray-400
                      "
                    >
                      {location.title}
                    </p>

                    <p
                      className="
                        mt-1.5
                        break-words
                        text-sm
                        font-bold
                        leading-6
                        text-[#063B20]
                      "
                    >
                      {location.value}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-gray-500
                      "
                    >
                      {location.description}
                    </p>
                  </div>
                </div>

                {/* Address action */}

                {location.title === "ADDRESS" && (
                  <span
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-bold
                      text-[#F47B20]
                    "
                  >
                    Foundation Location
                    <MapPin size={12} />
                  </span>
                )}

                {/* Email action */}

                {location.title === "EMAIL" && (
                  <span
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-bold
                      text-[#D4A13A]
                    "
                  >
                    Send us an email
                    <Mail size={12} />
                  </span>
                )}

                {/* Phone action */}

                {location.title === "PHONE" && (
                  <span
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-bold
                      text-[#138A45]
                    "
                  >
                    Speak with our team
                    <Phone size={12} />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================
            MAP AREA
        ========================== */}

        <div
          className="
            relative
            mt-8
            min-h-[280px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#E2D7C3]
            bg-[#EAF3EC]
            shadow-[0_15px_40px_rgba(6,59,32,0.07)]
            sm:min-h-[360px]
          "
        >
          {/* Map atmosphere */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_20%_25%,rgba(19,138,69,0.13),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(244,123,32,0.13),transparent_30%)]
            "
          />

          {/* Map grid */}

          <div
            className="
              absolute
              inset-0
              opacity-40
              [background-image:linear-gradient(rgba(6,59,32,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(6,59,32,0.07)_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />

          {/* Decorative roads */}

          <div
            className="
              absolute
              left-[-10%]
              top-[45%]
              h-[2px]
              w-[120%]
              rotate-[-8deg]
              bg-white/80
            "
          />

          <div
            className="
              absolute
              left-[35%]
              top-[-20%]
              h-[140%]
              w-[2px]
              rotate-[18deg]
              bg-white/80
            "
          />

          <div
            className="
              absolute
              left-[15%]
              top-[20%]
              h-[2px]
              w-[75%]
              rotate-[12deg]
              bg-white/60
            "
          />

          {/* =========================
              LOCATION MARKER
          ========================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
            "
          >
            {/* Marker */}

            <div
              className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#063B20]
                shadow-[0_12px_30px_rgba(6,59,32,0.25)]
              "
            >
              <div
                className="
                  absolute
                  inset-[-8px]
                  rounded-full
                  border
                  border-[#F47B20]/30
                "
              />

              <MapPin size={30} strokeWidth={1.8} className="text-[#F6C453]" />
            </div>

            {/* Label */}

            <div
              className="
                mt-4
                rounded-xl
                border
                border-[#E8DDC9]
                bg-white
                px-5
                py-3
                text-center
                shadow-[0_8px_25px_rgba(0,0,0,0.10)]
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  text-[#063B20]
                "
              >
                Diishaa Care Foundation
              </p>

              <p className="mt-1 text-[10px] text-gray-500">
                West Bengal, India
              </p>
            </div>
          </div>

          {/* Map label */}

          <div
            className="
              absolute
              bottom-4
              left-4
              rounded-lg
              border
              border-white/70
              bg-white/85
              px-3
              py-2
              text-[10px]
              font-semibold
              text-[#063B20]
              shadow-sm
              backdrop-blur
            "
          >
            Our Foundation Location
          </div>

          {/* View map placeholder */}

          <div
            className="
              absolute
              bottom-4
              right-4
              hidden
              items-center
              gap-1.5
              rounded-lg
              bg-[#063B20]
              px-3
              py-2
              text-[10px]
              font-bold
              text-white
              sm:flex
            "
          >
            View on Maps
            <ExternalLink size={11} />
          </div>
        </div>

        {/* =========================
            MAP NOTE
        ========================== */}

        <p
          className="
            mt-4
            text-center
            text-[10px]
            leading-5
            text-gray-400
          "
        >
          Map integration can be connected once the final foundation address is
          confirmed.
        </p>
      </div>
    </section>
  );
}
