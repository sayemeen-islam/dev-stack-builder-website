import { RxCross2 } from "react-icons/rx";
import type { ITechnologyType } from "../types/type";
import type { Dispatch, SetStateAction } from "react";

export interface SelectedTechCardProps {
  technology: ITechnologyType;
  selectedTechs: ITechnologyType[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function SelectedTechCard({
  technology,
  selectedTechs,
  setSelectedTechs,
}: SelectedTechCardProps) {
  const handleRemoveTechs = (technology: ITechnologyType): void => {
    const remainingSelectedTechs = selectedTechs.filter(
      (tech) => tech.id !== technology.id,
    );
    setSelectedTechs(remainingSelectedTechs);
  };

  return (
    <div className="card bg-base-100 w-full border border-[#E2E8F0] shadow-xs ">
      <div className="card-body flex flex-row items-center justify-between p-3">
        <div className="flex gap-2 ">
          <img
            className="w-10 h-10"
            src={technology.icon}
            alt="technology-icon"
          />

          <div>
            <h3 className="text-[14px] font-bold text-[#0F172A]">
              {technology.name}
            </h3>
            <p className="text-[10px] text-[#94A3B8]">{technology.category}</p>
          </div>
        </div>
        <RxCross2
          onClick={() => handleRemoveTechs(technology)}
          className="w-6 h-6 cursor-pointer text-[#94A3B8] hover:text-[#e22c1f] hover:bg-[#ecb5b1] hover:btn-circle"
        />
      </div>
    </div>
  );
}
