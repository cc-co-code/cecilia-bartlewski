import { projects } from "../data/projectData";
import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <h2
        className="text-2xl md:text-2xl font-bold text-primary leading-tight"
        style={{ color: "var(--accent)" }}
      >
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover trasition duration-500 grayscale group-hover:grayscale-0 ease-in-out blur-sm group-hover:blur-none scale-105 group-hover:scale-100"
              />
            </div>
            {project.badge && (
              <div
                className={`absolute top-8 -left-6 -rotate-45 text-xs font-bold px-3 py-1 ${project.badgeColor}`}
              >
                {project.badge}
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold text-text dark:text-white">
                {project.title}
              </h3>
              <p className="text-text mt-2 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary mt-3 inline-block hover:underline"
              >
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
