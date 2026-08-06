import BecomeMember from "./BecomeMember";
import SupportCause from "./SupportCause";
import Testimonial from "./Testimonial";

export default function Engagement() {
  return (
    <section className="hidden md:block py-10 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Become Member */}
          <BecomeMember />

          {/* Support Our Cause */}
          <SupportCause />

          {/* Testimonial */}
          <Testimonial />
        </div>
      </div>
    </section>
  );
}
