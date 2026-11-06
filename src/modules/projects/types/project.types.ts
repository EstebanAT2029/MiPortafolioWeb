
export type ProjectStatus =
  | "En desarrollo"
  | "Proyecto de desarrollo"
  | "Laboratorio tecnológico";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  icon: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}
