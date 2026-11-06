
import {
  ShieldCheck,
  Code2,
  Database,
  GraduationCap,
} from "lucide-react";

const professionalAreas = [
  {
    title: "Ciberseguridad",
    description:
      "Seguridad de la información, identificación de amenazas y gestión de riesgos cibernéticos.",
    icon: ShieldCheck,
  },
  {
    title: "Desarrollo de software",
    description:
      "Diseño y desarrollo de aplicaciones, sistemas y soluciones tecnológicas.",
    icon: Code2,
  },
  {
    title: "Gestión tecnológica",
    description:
      "Gestión de riesgos tecnológicos, continuidad y mejora de procesos.",
    icon: Database,
  },
  {
    title: "Investigación e innovación",
    description:
      "Aplicación de inteligencia artificial y tecnologías emergentes.",
    icon: GraduationCap,
  },
];

export function AboutSection() {
  return (
    <section
      id="perfil"
      className="border-t border-[#263248] bg-[#111b30] py-20"
    >
      <div className="site-container">

        {/* ENCABEZADO */}

        <div className="mb-12 max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee]">
            Sobre mí
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Tecnología, seguridad
            <span className="text-[#22d3ee]">
              {" "}e innovación
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#94a3b8]">
            Soy Ingeniero de Sistemas e Informática, orientado
            a la gestión tecnológica, ciberseguridad y desarrollo
            de soluciones que contribuyan a mejorar los procesos
            y fortalecer la seguridad de las organizaciones.
          </p>

          <p className="mt-4 text-base leading-8 text-[#94a3b8]">
            Mi interés profesional se centra en la innovación
            tecnológica, la gestión de riesgos y la aplicación
            de inteligencia artificial para resolver problemas
            reales.
          </p>

        </div>

        {/* ÁREAS PROFESIONALES */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {professionalAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="card"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22d3ee]/10 text-[#22d3ee]">

                  <Icon size={24} />

                </div>

                <h3 className="text-lg font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#94a3b8]">
                  {area.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
