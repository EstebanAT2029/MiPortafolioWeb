
import type { Project } from "../types/project.types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Agente inteligente de riesgos cibernéticos",
    category: "Inteligencia artificial y ciberseguridad",

    description:
      "Modelo de agente inteligente basado en inteligencia artificial generativa para apoyar la gestión de riesgos cibernéticos mediante análisis contextual, recuperación de información institucional y generación de recomendaciones.",

    technologies: [
      "Python",
      "LLM",
      "RAG",
      "IA Generativa",
      "GitHub",
    ],

    status: "En desarrollo",

    icon: "shield",

    features: [
      "Identificación de riesgos cibernéticos.",
      "Evaluación y análisis de riesgos.",
      "Priorización mediante reglas institucionales.",
      "Generación de recomendaciones con IA.",
    ],
  },

  {
    id: 2,
    title: "SISCOMITE",
    category: "Desarrollo de software y gestión financiera",

    description:
      "Sistema de gestión de comités de créditos orientado a organizar el registro de casos, gestionar expedientes y documentar las decisiones adoptadas durante los procesos de evaluación crediticia.",

    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    status: "Proyecto de desarrollo",

    icon: "workflow",

    features: [
      "Registro y administración de comités.",
      "Gestión de múltiples casos por comité.",
      "Registro de decisiones crediticias.",
      "Organización y seguimiento de operaciones.",
    ],
  },

  {
    id: 3,
    title: "Soluciones y automatización tecnológica",
    category: "Innovación y transformación digital",

    description:
      "Espacio de desarrollo de prototipos y soluciones tecnológicas orientadas a automatizar actividades, optimizar procesos y facilitar el análisis de información.",

    technologies: [
      "Python",
      "React",
      "TypeScript",
      "SQL",
      "APIs REST",
    ],

    status: "Laboratorio tecnológico",

    icon: "code",

    features: [
      "Automatización de procesos.",
      "Integración de servicios y APIs.",
      "Desarrollo de interfaces web.",
      "Análisis y procesamiento de información.",
    ],
  },
];
