import { TiStar } from "react-icons/ti";
import type { ITechnologyType } from "../../types/type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export interface TechnologyCardProps {
  technology: ITechnologyType;

  selectedTechs: ITechnologyType[];
  setSelectedTechs: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function TechnologyCard({
  technology,
  selectedTechs,
  setSelectedTechs,
}: TechnologyCardProps) {
  const handleSelectedTechs = (technology: ITechnologyType): void => {
    const newSelectedTechs = [...selectedTechs, technology];
    if (selectedTechs.some((tech) => tech.id === technology.id)) {
      toast.info(`${technology.name} is already in your stack!`, {
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
    } else if (newSelectedTechs.length > selectedTechs.length) {
      setSelectedTechs(newSelectedTechs);
      toast.success(`${technology.name} was added to your stack!`, {
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
    }
  };
  const selected = selectedTechs.find((tech) => tech.id === technology.id);

  return (
    <div
      className={`card w-[95%] border border-[#47556907]  bg-base-100  shadow-sm ${selected ? " border border-[#DB2777]" : ""}`}
    >
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <img
            className="w-10 h-10 translate-y-1"
            src={technology.icon}
            alt="technology-icon"
          />
          <button className="badge  badge-soft bg-[#db27780e] text-[#DB2777] rounded-full ">
            {technology.badge}
          </button>
        </div>

        <h3 className="text-[18px] font-extrabold">{technology.name}</h3>
        <p className="text-[#64748B] text-[13px] border-b border-b-[#f1f5f99f] shadow-base-100 pb-6">
          {technology.description}
        </p>

        <div className="flex justify-between gap-4 text-center items-center mb-4">
          <p className="btn btn-xs border-none bg-[#f1f5f9c5] tracking-wide">
            {technology.category}
          </p>
          <p className="text-[12px] tracking-wide">{technology.difficulty}</p>
          <p className="text-[12px] tracking-wide flex ">
            <TiStar className="text-yellow-400 w-4 h-4 mr-0.5" />
            {technology.rating}
          </p>
        </div>

        <div className="">
          <button
            onClick={() => handleSelectedTechs(technology)}
            className={`btn btn-neutral rounded-md transition-transform duration-300 hover:scale-105   btn-block ${selected ? " border-none bg-[#db27780e] text-[#DB2777]" : ""}`}
          >
            {selected ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
