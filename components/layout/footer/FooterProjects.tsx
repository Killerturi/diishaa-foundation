import Link from "next/link";
import { projects } from "./data";

export default function FooterProjects() {
  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#d4af37]">
        Our Projects
      </h3>

      {/* Project List */}

      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project}>
            <Link
              href="/our-work"
              className="
                inline-block
                text-gray-300
                transition-all
                duration-300
                hover:text-[#d4af37]
                hover:translate-x-1
              "
            >
              {project}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
