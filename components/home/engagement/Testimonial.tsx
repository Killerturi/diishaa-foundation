import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="h-full rounded-3xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Quote */}


      {/* Heading */}

      <h3 className="mt-2 text-2xl text-center font-bold text-gray-900">Testimonials</h3>

      {/* Review */}

      <p className="mt-6 text-gray-600 leading-8">
        Diishaa Foundation is doing an incredible job serving the community.
        Their dedication, transparency, and commitment inspire everyone to
        contribute towards a better society.
      </p>

      {/* Rating */}

      <div className="mt-6 flex gap-1 text-amber-500 text-xl">★ ★ ★ ★ ★</div>

      {/* User */}

      <div className="mt-8 flex items-center gap-4">
        <Image
          src="/engagement/volunteer.jpg"
          alt="Volunteer"
          width={70}
          height={70}
          className="rounded-full object-cover border-4 border-amber-200"
        />

        <div>
          <h4 className="font-semibold text-lg text-gray-900">Ramesh Kumar</h4>

          <p className="text-gray-500">Volunteer</p>
        </div>
      </div>
    </div>
  );
}
