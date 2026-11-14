
import {
  ShieldCheck,
  Workflow,
  Code2,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

const projectIcons = {
  shield: ShieldCheck,
  workflow: Workflow,
  code: Code2,
};

export function ProjectCard({ project }: ProjectCardProps) {

  const Icon =
    projectIcons[project.icon as keyof typeof projectIcons]
    ?? Code2;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#263248] bg-[#171e31] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#22d3ee] hover:shadow-xl hover:shadow-[#22d3ee]/5">

      {/* ENCABEZADO */}

      <div className="flex items-start justify-between gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#22d3ee]/20 bg-[#22d3ee]/10 text-[#22d3ee]">

          <Icon size={28} />

        </div>

        <span className="rounded-full border border-[#263248] bg-[#0f172a] px-3 py-1 text-xs text-[#94a3b8]">

          {project.status}

        </span>

      </div>

      {/* INFORMACIÓN */}

      <div className="mt-7">

        <p className="text-xs font-semibold uppercase tracking-wider text-[#22d3ee]">

          {project.category}

        </p>

        <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-[#22d3ee]">

          {project.title}

        </h3>

        <p className="mt-4 text-sm leading-7 text-[#94a3b8]">

          {project.description}

        </p>

      </div>

      {/* FUNCIONALIDADES */}

      <div className="mt-6">

        <h4 className="mb-4 text-sm font-semibold text-white">

          Características principales

        </h4>

        <ul className="space-y-3">

          {project.features.map((feature) => (

            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-[#94a3b8]"
            >

              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#22d3ee]"
              />

              {feature}

            </li>

          ))}

        </ul>

      </div>

      {/* TECNOLOGÍAS */}

      <div className="mt-7">

        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#64748b]">

          Tecnologías

        </h4>

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((technology) => (

            <span
              key={technology}
              className="rounded-md border border-[#263248] bg-[#0f172a] px-3 py-1.5 text-xs text-[#94a3b8]"
            >

              {technology}

            </span>

          ))}

        </div>

      </div>

      {/* ENLACES */}

      <div className="mt-auto flex gap-4 border-t border-[#263248] pt-6">

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            <ExternalLink size={17} />
            GitHub
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Ver proyecto
            <ExternalLink size={16} />
          </a>
        )}

        {!project.githubUrl && !project.demoUrl && (
          <span className="flex items-center gap-2 text-sm text-[#64748b]">
            <ArrowUpRight size={17} />
            Información del proyecto
          </span>
        )}

      </div>

    </article>
  );
}
