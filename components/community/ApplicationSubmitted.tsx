import Link from "next/link";

interface ApplicationSubmittedProps {
  applicationId?: string;
}

export default function ApplicationSubmitted({
  applicationId = "DCM-2026-000001",
}: ApplicationSubmittedProps) {
  return (
    <section className="w-full">
      {/* =========================================
          MAIN CARD
      ========================================== */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* =====================================
            TRICOLOR TOP ACCENT
        ====================================== */}

        <div className="flex h-1.5">
          <div className="w-1/3 bg-[#FF9933]" />
          <div className="w-1/3 bg-[#0B3D91]" />
          <div className="w-1/3 bg-[#138808]" />
        </div>

        <div className="px-5 py-10 text-center sm:px-10 sm:py-14">
          {/* =====================================
              SUCCESS ICON
          ====================================== */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#138808]/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#138808] text-xl font-black text-white shadow-lg shadow-[#138808]/20">
              ✓
            </div>
          </div>

          {/* =====================================
              LABEL
          ====================================== */}

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#138808]">
            APPLICATION SUBMITTED
          </p>

          {/* =====================================
              TITLE
          ====================================== */}

          <h1 className="mx-auto mt-3 max-w-2xl text-2xl font-black leading-tight text-[#003366] sm:text-3xl lg:text-4xl">
            Thank You for Joining Our Community
          </h1>

          {/* =====================================
              DESCRIPTION
          ====================================== */}

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Your Community Membership application has been successfully
            submitted. Our team will review the information you provided before
            making a decision.
          </p>

          {/* =====================================
              APPLICATION ID
          ====================================== */}

          <div className="mx-auto mt-7 max-w-md rounded-2xl border border-[#0B3D91]/10 bg-[#0B3D91]/5 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B3D91]/60">
              Application ID
            </p>

            <p className="mt-2 break-all text-lg font-black tracking-wide text-[#0B3D91] sm:text-xl">
              {applicationId}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Please keep this ID for future reference.
            </p>
          </div>

          {/* =====================================
              REVIEW STATUS
          ====================================== */}

          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-[#FF9933]/20 bg-[#FF9933]/5 p-5">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#FF9933]" />

              <p className="text-sm font-bold text-[#C66A00]">
                Application Under Review
              </p>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Payment is not required at this stage. You will be able to make
              the annual community contribution only after your application has
              been approved.
            </p>
          </div>

          {/* =====================================
              WHAT HAPPENS NEXT
          ====================================== */}

          <div className="mx-auto mt-8 max-w-lg text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D98A18]">
              What Happens Next
            </p>

            <div className="mt-4 space-y-3">
              {/* STEP 1 */}

              <ReviewStep
                number="01"
                title="Application Submitted"
                description="Your application has been received successfully."
                status="completed"
              />

              {/* STEP 2 */}

              <ReviewStep
                number="02"
                title="Dishaa Team Review"
                description="Our team will review the information provided in your application."
                status="current"
              />

              {/* STEP 3 */}

              <ReviewStep
                number="03"
                title="Application Decision"
                description="You will be informed when your application is approved or rejected."
                status="upcoming"
              />

              {/* STEP 4 */}

              <ReviewStep
                number="04"
                title="Annual Contribution"
                description="Payment becomes available after successful approval."
                status="upcoming"
              />
            </div>
          </div>

          {/* =====================================
              INFORMATION MESSAGE
          ====================================== */}

          <div className="mx-auto mt-7 max-w-lg rounded-xl bg-slate-50 px-4 py-3">
            <p className="text-xs leading-5 text-slate-500">
              Please check your registered email or mobile number for updates
              regarding your application.
            </p>
          </div>

          {/* =====================================
              BACK BUTTON
          ====================================== */}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/join-us"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B3D91] px-6 text-sm font-bold text-[#0B3D91] transition-all duration-300 hover:bg-[#0B3D91] hover:text-white"
            >
              Back to Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REVIEW STEP
========================================================= */

function ReviewStep({
  number,
  title,
  description,
  status,
}: {
  number: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}) {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <div
      className={`
        flex items-start gap-3 rounded-xl border p-4
        transition-all duration-300
        ${
          isCompleted
            ? "border-[#138808]/15 bg-[#138808]/5"
            : isCurrent
              ? "border-[#FF9933]/20 bg-[#FF9933]/5"
              : "border-slate-100 bg-slate-50"
        }
      `}
    >
      {/* NUMBER / STATUS */}

      <div
        className={`
          flex h-8 w-8 shrink-0 items-center justify-center rounded-full
          text-[10px] font-black
          ${
            isCompleted
              ? "bg-[#138808] text-white"
              : isCurrent
                ? "bg-[#FF9933] text-white"
                : "bg-slate-200 text-slate-400"
          }
        `}
      >
        {isCompleted ? "✓" : number}
      </div>

      {/* CONTENT */}

      <div className="min-w-0">
        <p
          className={`
            text-sm font-bold
            ${
              isCompleted
                ? "text-[#138808]"
                : isCurrent
                  ? "text-[#C66A00]"
                  : "text-slate-400"
            }
          `}
        >
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </div>
  );
}
