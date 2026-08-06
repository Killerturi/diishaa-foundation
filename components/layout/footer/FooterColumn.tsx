import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div className="relative">

      {/* Gold Divider */}

      <div className="absolute -left-6 top-0 hidden h-full w-px bg-[#C89B3C]/40 lg:block" />

      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#D4AF37] mt-4">
        {title}
      </h3>

      {/* Links */}

      <ul className="space-y-3">

        {links.map((link) => (

          <li key={link.title}>

            <Link
              href={link.href}
              className="
                group
                inline-flex
                items-center
                text-gray-200
                transition-all
                duration-300
                hover:text-[#D4AF37]
              "
            >

              <span
                className="
                  mr-0
                  h-[2px]
                  w-0
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  group-hover:mr-2
                  group-hover:w-3
                "
              />

              {link.title}

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}