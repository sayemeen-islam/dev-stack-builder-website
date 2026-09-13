import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";
import type { ITechnologyType } from "../../types/technologies";

export interface TechnologiesProps {
  techPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ techPromise }: TechnologiesProps) {
  const technologies = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<ITechnologyType[]>([]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:mt-2">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 ">
        
        {/* technology-cards */}
        <div className="grid grid-cols-1 items-center lg:items-start md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6 xl:col-span-9">
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
        <div className="flex flex-col gap-4 xl:col-span-3">
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
