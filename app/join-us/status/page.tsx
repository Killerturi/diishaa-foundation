import CommunityStepper from "@/components/community/CommunityStepper";
import ApplicationSubmitted from "@/components/community/ApplicationSubmitted";

export default function CommunityApplicationStatusPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* =========================================
          TRICOLOR TOP ACCENT
      ========================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-[#0B3D91]" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      {/* =========================================
          PAGE CONTENT
      ========================================== */}

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* =====================================
            PAGE INTRO
        ====================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D98A18]">
            JOIN OUR COMMUNITY
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-[#003366] sm:text-4xl">
            Application Received
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Your application has been submitted successfully and is now waiting
            for review by the Dishaa team.
          </p>
        </div>

        {/* =====================================
            COMMUNITY STEPPER
        ====================================== */}

        <div className="mt-8 sm:mt-10">
          <CommunityStepper currentStep="review" />
        </div>

        {/* =====================================
            APPLICATION STATUS
        ====================================== */}

        <div className="mt-6 sm:mt-8">
          <ApplicationSubmitted applicationId="DCM-2026-000001" />
        </div>

        {/* =====================================
            PRIVACY MESSAGE
        ====================================== */}

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-xs leading-5 text-slate-400">
            Please keep your application ID safe. You may need it when checking
            the status of your Community Membership application.
          </p>
        </div>
      </div>
    </main>
  );
}
