import Link from "next/link";
import { quickLinks } from "./data";

export default function FooterLinks() {
  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#d4af37]">
        Quick Links
      </h3>

      {/* Links */}

      <ul className="space-y-3">
        {quickLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="
                text-gray-300
                transition-all
                duration-300
                hover:text-[#d4af37]
                hover:translate-x-1
                inline-block
              "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
