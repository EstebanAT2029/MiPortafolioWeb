
import { experienceData } from "../data/experienceData";

import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  return (
    <div className="relative ml-3 space-y-8 border-l-2 border-[#263248] pl-6">

      {experienceData.map((experience) => (

        <ExperienceCard
          key={experience.id}
          experience={experience}
        />

      ))}

    </div>
  );
}
