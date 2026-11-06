
import type { Experience } from "../types/experience.types";

import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
} from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="card relative">

      {/* INDICADOR */}

      <div className="absolute -left-[29px] top-8 h-4 w-4 rounded-full border-4 border-[#0f172a] bg-[#22d3ee]" />

      {/* EMPRESA */}

      <div className="flex flex-wrap items-start justify-between gap-4">

        <div>

          <div className="flex items-center gap-2">

            <BriefcaseBusiness
              size={20}
              className="text-[#22d3ee]"
            />

            <h3 className="text-xl font-bold text-white">
              {experience.position}
            </h3>

          </div>

          <p className="mt-2 font-medium text-[#22d3ee]">
            {experience.company}
          </p>

        </div>

        <div className="flex flex-col gap-2 text-sm text-[#94a3b8]">

          <div className="flex items-center gap-2">

            <CalendarDays size={16} />

            <span>{experience.period}</span>

          </div>

          <div className="flex items-center gap-2">

            <MapPin size={16} />

            <span>{experience.location}</span>

          </div>

        </div>

      </div>

      {/* DESCRIPCIÓN */}

      <p className="mt-6 leading-7 text-[#94a3b8]">
        {experience.description}
      </p>

      {/* RESPONSABILIDADES */}

      <div className="mt-6">

        <h4 className="font-semibold text-white">
          Responsabilidades
        </h4>

        <ul className="mt-4 space-y-3">

          {experience.responsibilities.map(
            (responsibility, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-6 text-[#94a3b8]"
              >

                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#22d3ee]" />

                {responsibility}

              </li>
            )
          )}

        </ul>

      </div>

      {/* TECNOLOGÍAS */}

      <div className="mt-6 flex flex-wrap gap-2">

        {experience.technologies.map((technology) => (

          <span
            key={technology}
            className="rounded-full border border-[#263248] bg-[#0f172a] px-3 py-1 text-xs text-[#94a3b8]"
          >

            {technology}

          </span>

        ))}

      </div>

    </article>
  );
}
