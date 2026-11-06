
import { ExperienceTimeline } from "../components/ExperienceTimeline";

export function ExperiencePage() {
  return (
    <section
      id="experiencia"
      className="border-t border-[#263248] bg-[#0f172a] py-20"
    >

      <div className="site-container">

        {/* ENCABEZADO */}

        <div className="mb-12 max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee]">
            Trayectoria profesional
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">

            Mi experiencia
            <span className="text-[#22d3ee]">
              {" "}profesional
            </span>

          </h2>

          <p className="mt-6 leading-8 text-[#94a3b8]">

            Experiencia en tecnología, gestión de riesgos,
            ciberseguridad y desarrollo de soluciones
            para el sector financiero.

          </p>

        </div>

        {/* LÍNEA DE TIEMPO */}

        <div className="max-w-4xl">

          <ExperienceTimeline />

        </div>

      </div>

    </section>
  );
}
