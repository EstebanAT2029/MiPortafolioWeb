
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#263248] bg-[#0f172a]/95 shadow-lg shadow-black/10 backdrop-blur-md">

      <div className="site-container flex h-[76px] items-center justify-between">

        {/* LOGOTIPO */}

        <Link
          to="/"
          className="text-xl font-bold text-white transition hover:opacity-80"
        >
          Mi<span className="text-[#22d3ee]">Portfolio</span>
        </Link>

        {/* NAVEGACIÓN */}

        <nav className="flex items-center gap-6">

          <Link
            to="/"
            className="text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Inicio
          </Link>

          <a
            href="/#perfil"
            className="text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Perfil
          </a>

          <a
            href="/#proyectos"
            className="text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Proyectos
          </a>

          <a
            href="/#contacto"
            className="text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Contacto
          </a>
          
          <a
            href="/#experiencia"
            className="text-sm font-medium text-[#94a3b8] transition hover:text-[#22d3ee]"
          >
            Experiencia
          </a>

        </nav>

      </div>

    </header>
  );
}
