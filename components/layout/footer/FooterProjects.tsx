import Link from "next/link";
import { projectLinks } from "./data";

export default function FooterProjects() {
  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#d4af37]">
        Our Projects
      </h3>

      {/* Project List */}

      <ul className="space-y-3">
        {projectLinks.map((project) => (
          <li key={project.title}>
            <Link
              href={project.href}
              className="
          inline-block
          text-gray-300
          transition-all
          duration-300
          hover:text-[#d4af37]
          hover:translate-x-1
        "
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
