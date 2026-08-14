import CommunityStepper from "@/components/community/CommunityStepper";
import CommunityApplicationForm from "@/components/community/CommunityApplicationForm";

export default function CommunityApplicationPage() {
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

          <h1 className="mt-3 text-3xl font-black leading-tight text-[#003366] sm:text-4xl lg:text-5xl">
            Take the First Step
            <span className="block text-[#FF9933]">
              Towards Community
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Complete the application below to begin
            your journey as a Dishaa Community Member.
            Your application will be reviewed by our
            team before payment is requested.
          </p>
        </div>

        {/* =====================================
            STEPPER
        ====================================== */}

        <div className="mt-8 sm:mt-10">
          <CommunityStepper currentStep="application" />
        </div>

        {/* =====================================
            APPLICATION FORM
        ====================================== */}

        <div className="mt-6 sm:mt-8">
          <CommunityApplicationForm />
        </div>

        {/* =====================================
            BOTTOM INFORMATION
        ====================================== */}

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-xs leading-5 text-slate-400">
            Your information will be used only for
            processing and reviewing your community
            membership application.
          </p>
        </div>
      </div>
    </main>
  );
}