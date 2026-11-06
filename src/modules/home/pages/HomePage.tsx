
import { HeroSection } from "../components/HeroSection";

import { AboutSection } from "../components/AboutSection";

import { ExperiencePage } from "../../experience/pages/ExperiencePage";

import { ProjectsPage } from "../../projects/pages/ProjectsPage";

export function HomePage() {
  return (
    <main>

      <HeroSection />

      <AboutSection />

      <ExperiencePage />

      <ProjectsPage />

    </main>
  );
}
