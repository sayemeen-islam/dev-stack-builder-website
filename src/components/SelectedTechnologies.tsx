import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyType } from "../types/type";
import SelectedTechCard from "./SelectedTechCard";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechnologiesProps {
  technologies: ITechnologyType[];
  selectedTechs: ITechnologyType[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function SelectedTechnologies({
  selectedTechs,
  setSelectedTechs,
}: SelectedTechnologiesProps) {
  const handleRemoveAll = () => {
    toast.warn("All technologies have been removed from your stack!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setSelectedTechs([]);
  };

  if (selectedTechs.length === 0) {
    return (
      <div className="card w-full bg-base-100 shadow-sm ">
        <div className="card-body">
          <h3 className="text-[18px] text-[#0F172A] font-bold -mb-1">
            Your Stack
          </h3>
          <p className="text-[13px] mb-2 text-[#94A3B8]">
            No technologies selected yet.
          </p>

          <div className="card bg-base-100 w-full border border-dashed border-[#E2E8F0] shadow-xs  ">
            <div className="card-body flex justify-center items-center">
              <p className="text-[13px] text-[#94A3B8]">Your stack is empty.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card w-full bg-base-100 shadow-sm ">
      <div className="card-body">
        <h3 className="text-[18px] text-[#0F172A] font-bold -mb-1">
          Your Stack
        </h3>
        <p className="text-[13px] mb-2 text-[#94A3B8]">
          {selectedTechs.length} Technology Selected
        </p>
        {selectedTechs.map((technology) => (
          <SelectedTechCard
            key={technology.id}
            technology={technology}
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
          ></SelectedTechCard>
        ))}
        <div className="mt-6">
          <button
            onClick={handleRemoveAll}
            className="btn  btn-block border border-[#ED8C85] text-[#D82C20]"
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
