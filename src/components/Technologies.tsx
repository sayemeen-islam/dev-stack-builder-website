import { use, useState } from "react";
import type { ITechnologyType } from "../types/type";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";

export interface TechnologiesProps {
  techPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ techPromise }: TechnologiesProps) {
  const technologies = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<ITechnologyType[]>([]);
  console.log(selectedTechs);

  return (
    <div className="w-full max-w-7xl mx-auto mt-2">

      <div className="grid grid-cols-12 gap-6 ">
        {/* technology-cards */}
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 col-span-9 ">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechs={selectedTechs}
              setSelectedTechs={setSelectedTechs}
            ></TechnologyCard>
          ))}
        </div>

        {/* sidebar */}
        <div className="flex flex-col gap-4 col-span-3">
          <SelectedTechnologies
            technologies={technologies}
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          ></SelectedTechnologies>
        </div>
      </div>
    </div>
  );
}
