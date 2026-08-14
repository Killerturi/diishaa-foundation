"use client";

export type CommunityStep = "application" | "review" | "payment" | "membership";

interface CommunityStepperProps {
  currentStep: CommunityStep;
}

const steps = [
  {
    id: "application" as CommunityStep,
    number: "01",
    title: "Application",
    shortTitle: "Apply",
  },
  {
    id: "review" as CommunityStep,
    number: "02",
    title: "Review",
    shortTitle: "Review",
  },
  {
    id: "payment" as CommunityStep,
    number: "03",
    title: "Payment",
    shortTitle: "Pay",
  },
  {
    id: "membership" as CommunityStep,
    number: "04",
    title: "Membership",
    shortTitle: "Member",
  },
];

export default function CommunityStepper({
  currentStep,
}: CommunityStepperProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <section className="w-full min-w-0">
      {/* =========================================================
          MOBILE STEPPER
      ========================================================== */}

      <div className="block min-w-0 sm:hidden">
        <div
          className="
            w-full
            min-w-0
            overflow-hidden
            rounded-2xl
            border
            border-[#E4DDCF]
            bg-white
            p-4
            shadow-[0_5px_18px_rgba(6,59,32,0.06)]
          "
        >
          {/* ===================================================
              MOBILE HEADER
          ==================================================== */}

          <div className="flex min-w-0 items-center justify-between gap-3">
            <p
              className="
                min-w-0
                truncate
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#D98A18]
              "
            >
              Community Membership
            </p>

            <p
              className="
                shrink-0
                whitespace-nowrap
                text-[10px]
                font-semibold
                text-slate-400
              "
            >
              Step {currentIndex + 1} of {steps.length}
            </p>
          </div>

          {/* ===================================================
              PROGRESS
          ==================================================== */}

          <div className="mt-4 flex w-full min-w-0 items-center">
            {steps.map((step, index) => {
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className={`
                    flex
                    min-w-0
                    items-center
                    ${isLast ? "flex-none" : "flex-1"}
                  `}
                >
                  {/* =================================================
                      CIRCLE
                  ================================================== */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-[10px]
                      font-bold
                      transition-all
                      duration-300

                      ${
                        isCompleted
                          ? "bg-[#138808] text-white"
                          : isCurrent
                            ? "bg-[#FF9933] text-white shadow-[0_5px_12px_rgba(255,153,51,0.25)]"
                            : "border border-slate-200 bg-slate-50 text-slate-400"
                      }
                    `}
                  >
                    {isCompleted ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="h-4 w-4"
                      >
                        <path
                          d="m5 12 4 4L19 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* =================================================
                      CONNECTOR
                  ================================================== */}

                  {!isLast && (
                    <div
                      className="
                        mx-1
                        h-1
                        min-w-[10px]
                        flex-1
                        overflow-hidden
                        rounded-full
                        bg-slate-100
                      "
                    >
                      <div
                        className={`
                          h-full
                          rounded-full
                          transition-all
                          duration-500
                          ${
                            index < currentIndex ? "w-full bg-[#138808]" : "w-0"
                          }
                        `}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ===================================================
              CURRENT STEP
          ==================================================== */}

          <div className="mt-4 min-w-0 border-t border-[#F0ECE4] pt-3">
            <p
              className="
                truncate
                text-sm
                font-black
                text-[#063B20]
              "
            >
              {steps[currentIndex]?.title}
            </p>

            <p
              className="
                mt-1
                truncate
                text-[10px]
                leading-5
                text-slate-400
              "
            >
              {getStepDescription(currentStep)}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP STEPPER
      ========================================================== */}

      <div className="hidden min-w-0 sm:block">
        <div
          className="
            w-full
            min-w-0
            overflow-hidden
            rounded-2xl
            border
            border-[#E4DDCF]
            bg-white
            px-5
            py-5
            shadow-[0_5px_18px_rgba(6,59,32,0.06)]
            lg:px-8
          "
        >
          <div className="flex min-w-0 items-center">
            {steps.map((step, index) => {
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className={`
                    flex
                    min-w-0
                    items-center
                    ${isLast ? "flex-none" : "flex-1"}
                  `}
                >
                  {/* =================================================
                      STEP
                  ================================================== */}

                  <div className="flex min-w-0 items-center gap-3">
                    {/* CIRCLE */}

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-xs
                        font-black
                        transition-all
                        duration-300

                        ${
                          isCompleted
                            ? "bg-[#138808] text-white"
                            : isCurrent
                              ? "bg-[#FF9933] text-white shadow-[0_7px_18px_rgba(255,153,51,0.20)]"
                              : "border border-slate-200 bg-slate-50 text-slate-400"
                        }
                      `}
                    >
                      {isCompleted ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="h-5 w-5"
                        >
                          <path
                            d="m5 12 4 4L19 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <p
                        className={`
                          truncate
                          text-sm
                          font-bold

                          ${
                            isCurrent
                              ? "text-[#063B20]"
                              : isCompleted
                                ? "text-[#138808]"
                                : "text-slate-400"
                          }
                        `}
                      >
                        {step.title}
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-slate-400">
                        {getStepDescription(step.id)}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      CONNECTOR
                  ================================================== */}

                  {!isLast && (
                    <div
                      className="
                        mx-3
                        h-1
                        min-w-[18px]
                        flex-1
                        overflow-hidden
                        rounded-full
                        bg-slate-100
                        lg:mx-4
                      "
                    >
                      <div
                        className={`
                          h-full
                          rounded-full
                          transition-all
                          duration-500

                          ${
                            index < currentIndex ? "w-full bg-[#138808]" : "w-0"
                          }
                        `}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STEP DESCRIPTION
========================================================= */

function getStepDescription(step: CommunityStep) {
  switch (step) {
    case "application":
      return "Tell us about yourself";

    case "review":
      return "Application review";

    case "payment":
      return "Annual contribution";

    case "membership":
      return "Welcome to the community";

    default:
      return "";
  }
}
