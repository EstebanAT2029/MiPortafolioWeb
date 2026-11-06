
import {
  Code2,
  ShieldCheck,
  Database,
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#263248] bg-[#0b1222]">

      <div className="site-container py-16">

        {/* CONTENIDO PRINCIPAL */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* IDENTIDAD */}

          <div>

            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              Mi<span className="text-[#22d3ee]">Portfolio</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#94a3b8]">

              Ingeniero de Sistemas e Informática, orientado
              a la tecnología, innovación, ciberseguridad
              y gestión de riesgos.

            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#94a3b8]">

              <MapPin size={17} className="text-[#22d3ee]" />

              Perú

            </div>

          </div>

          {/* NAVEGACIÓN */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Navegación
            </h3>

            <ul className="space-y-4 text-sm text-[#94a3b8]">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-[#22d3ee]"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <a
                  href="/#perfil"
                  className="transition hover:text-[#22d3ee]"
                >
                  Sobre mí
                </a>
              </li>

              <li>
                <a
                  href="/#experiencia"
                  className="transition hover:text-[#22d3ee]"
                >
                  Experiencia
                </a>
              </li>

              <li>
                <a
                  href="/#proyectos"
                  className="transition hover:text-[#22d3ee]"
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="/#contacto"
                  className="transition hover:text-[#22d3ee]"
                >
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* ESPECIALIDADES */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Especialidades
            </h3>

            <ul className="space-y-5">

              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">

                <ShieldCheck
                  size={19}
                  className="text-[#22d3ee]"
                />

                Ciberseguridad

              </li>

              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">

                <Code2
                  size={19}
                  className="text-[#22d3ee]"
                />

                Desarrollo de software

              </li>

              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">

                <Database
                  size={19}
                  className="text-[#22d3ee]"
                />

                Gestión tecnológica

              </li>

            </ul>

          </div>

          {/* CONTACTO */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Contacto
            </h3>

            <p className="text-sm leading-7 text-[#94a3b8]">

              ¿Tienes una propuesta, proyecto o iniciativa
              tecnológica? Podemos conversar.

            </p>

            <a
              href="/#contacto"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#22d3ee] px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-[#06b6d4]"
            >

              <Mail size={17} />

              Contactarme

            </a>

          </div>

        </div>

        {/* SEPARADOR */}

        <div className="my-12 border-t border-[#263248]" />

        {/* COPYRIGHT */}

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

          <p className="text-sm text-[#64748b]">

            © {currentYear} Mi Portfolio Web.
            Todos los derechos reservados.

          </p>

          <p className="text-sm text-[#64748b]">

            Desarrollado con
            <span className="mx-1 font-semibold text-[#22d3ee]">
              React + TypeScript
            </span>

          </p>

          <a
            href="/"
            aria-label="Volver al inicio"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#263248] text-[#22d3ee] transition hover:border-[#22d3ee] hover:bg-[#22d3ee]/10"
          >

            <ArrowUp size={20} />

          </a>

        </div>

      </div>

    </footer>
  );
}
