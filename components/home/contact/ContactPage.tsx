import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactSupport from "./ContactSupport";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-[#FCFAF5]">
      {/* =========================
          CONTACT HERO
      ========================== */}

      <ContactHero />

      {/* =========================
          CONTACT FORM AREA
      ========================== */}

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Very subtle tricolor atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-20
            h-64
            w-64
            rounded-full
            bg-[#138A45]/5
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-40
            h-72
            w-72
            rounded-full
            bg-[#F47B20]/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-6xl">
          <div
            className="
              grid
              grid-cols-1
              overflow-hidden
              rounded-[28px]
              border
              border-[#E8DDC9]
              bg-white
              shadow-[0_18px_55px_rgba(6,59,32,0.08)]
              lg:grid-cols-[0.82fr_1.18fr]
            "
          >
            {/* =========================
                CONTACT INFORMATION
            ========================== */}

            <div className="bg-[#063B20]">
              <ContactInfo />
            </div>

            {/* =========================
                CONTACT FORM
            ========================== */}

            <div className="bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION
      ========================== */}

      <ContactMap />

      {/* =========================
          FINAL CTA
      ========================== */}

      <ContactSupport />
    </main>
  );
}
