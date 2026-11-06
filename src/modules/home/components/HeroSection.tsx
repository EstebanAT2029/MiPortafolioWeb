
import {
  ExternalLink,
  ShieldCheck,
  Code2,
  Database,
  Download,
  ArrowRight,
} from "lucide-react";


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a]">

      {/* FONDO DECORATIVO */}

      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#22d3ee]/5 blur-3xl" />

      <div className="site-container relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-2">

        {/* PRESENTACIÓN */}

        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#263248] bg-[#171e31] px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />

            <span className="text-sm text-[#94a3b8]">
              Profesional en Tecnologias de la Información
            </span>

          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

            Tecnología,
            <span className="text-[#22d3ee]">
              {" "}innovación
            </span>

            <br />

            y ciberseguridad

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#94a3b8]">

            Profesional orientado al desarrollo de soluciones
            tecnológicas, gestión de riesgos y ciberseguridad.
            Explora mi experiencia, habilidades y proyectos.

          </p>

          {/* BOTONES */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#proyectos"
              className="btn btn-primary"
            >

              Ver proyectos

              <ArrowRight size={18} />

            </a>

            <a
              href="/documents/cv.pdf"
              download
              className="btn btn-outline"
            >

              <Download size={18} />

              Descargar CV

            </a>

          </div>

          {/* REDES */}


          <div className="mt-10 flex items-center gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-[#94a3b8] transition hover:text-[#22d3ee]"
            >
              <Code2 size={22} />

              <span className="text-sm">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-[#94a3b8] transition hover:text-[#22d3ee]"
            >
              <ExternalLink size={22} />

              <span className="text-sm">
                LinkedIn
              </span>
            </a>

          </div>


        </div>

        {/* TARJETA PROFESIONAL */}

        <div className="relative">

          <div className="card relative overflow-hidden">

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#22d3ee]/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22d3ee]/10 text-[#22d3ee]">

                  <ShieldCheck size={26} />

                </div>

                <div>

                  <h2 className="font-semibold text-white">
                    Perfil profesional
                  </h2>

                  <p className="text-sm text-[#94a3b8]">
                    Tecnología y seguridad
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 rounded-xl border border-[#263248] bg-[#0f172a] p-4">

                  <ShieldCheck className="text-[#22d3ee]" />

                  <div>

                    <h3 className="font-medium text-white">
                      Ciberseguridad
                    </h3>

                    <p className="text-sm text-[#94a3b8]">
                      Seguridad y gestión de riesgos
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl border border-[#263248] bg-[#0f172a] p-4">

                  <Code2 className="text-[#22d3ee]" />

                  <div>

                    <h3 className="font-medium text-white">
                      Desarrollo de software
                    </h3>

                    <p className="text-sm text-[#94a3b8]">
                      Aplicaciones y soluciones tecnológicas
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl border border-[#263248] bg-[#0f172a] p-4">

                  <Database className="text-[#22d3ee]" />

                  <div>

                    <h3 className="font-medium text-white">
                      Sistemas e innovación
                    </h3>

                    <p className="text-sm text-[#94a3b8]">
                      Arquitectura y gestión tecnológica
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
