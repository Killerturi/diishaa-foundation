import {
  GraduationCap,
  HeartPulse,
  Utensils,
  Leaf,
  UsersRound,
  ShieldCheck,
} from "lucide-react";

const causes = [
  {
    title: "Education",
    description:
      "Helping children and young people access better learning opportunities.",
    icon: GraduationCap,
    color: "#2563EB",
  },
  {
    title: "Healthcare",
    description:
      "Supporting access to essential healthcare and wellbeing initiatives.",
    icon: HeartPulse,
    color: "#DC2626",
  },
  {
    title: "Food Distribution",
    description:
      "Providing food and essential support to people and families in need.",
    icon: Utensils,
    color: "#F47B20",
  },
  {
    title: "Environment",
    description: "Promoting cleaner, greener and more sustainable communities.",
    icon: Leaf,
    color: "#138A45",
  },
  {
    title: "Community Support",
    description:
      "Empowering vulnerable communities through meaningful social initiatives.",
    icon: UsersRound,
    color: "#D4A13A",
  },
];

export default function DonationInfo() {
  return (
    <section className="bg-[#FAF9F5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#D4A13A]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D4A13A]
              "
            >
              Your Contribution
            </span>

            <div className="h-px w-12 bg-[#D4A13A]" />
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
            Where Your Donation Makes a Difference
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-600
              sm:text-base
              sm:leading-8
            "
          >
            Your support helps us work with communities, create opportunities
            and reach people who need support the most.
          </p>
        </div>

        {/* Causes */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {causes.map((cause) => {
            const Icon = cause.icon;

            return (
              <div
                key={cause.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#E8E1D5]
                  bg-white
                  p-5
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                "
              >
                {/* Icon */}

                <div className="flex justify-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FAF7EF]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={2}
                      style={{ color: cause.color }}
                    />
                  </div>
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-base
                    font-bold
                    text-[#063B20]
                  "
                >
                  {cause.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-gray-500
                  "
                >
                  {cause.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
