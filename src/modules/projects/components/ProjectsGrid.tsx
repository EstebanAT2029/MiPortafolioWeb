
import { projectsData } from "../data/projectsData";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

      {projectsData.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />

      ))}

    </div>
  );
}
