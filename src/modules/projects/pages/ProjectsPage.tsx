
import { FolderCode } from "lucide-react";

import { ProjectsGrid } from "../components/ProjectsGrid";

export function ProjectsPage() {
  return (
    <section
      id="proyectos"
      className="border-y border-[#263248] bg-[#111b30] py-24"
    >

      <div className="site-container">

        {/* ENCABEZADO */}

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-2 text-[#22d3ee]">

              <FolderCode size={20} />

              <span className="text-sm font-semibold uppercase tracking-wider">

                Portafolio tecnológico

              </span>

            </div>

            <h2 className="text-3xl font-bold text-white md:text-4xl">

              Proyectos
              <span className="text-[#22d3ee]">
                {" "}destacados
              </span>

            </h2>

            <p className="mt-5 leading-8 text-[#94a3b8]">

              Explora algunos de mis proyectos y soluciones
              tecnológicas relacionados con inteligencia artificial,
              desarrollo de software, ciberseguridad y gestión
              de riesgos.

            </p>

          </div>

          <div className="rounded-xl border border-[#263248] bg-[#171e31] px-5 py-4">

            <p className="text-3xl font-bold text-[#22d3ee]">
              03
            </p>

            <p className="mt-1 text-sm text-[#94a3b8]">
              Proyectos destacados
            </p>

          </div>

        </div>

        {/* TARJETAS */}

        <ProjectsGrid />

      </div>

    </section>
  );
}
