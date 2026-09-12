import { TiStar } from "react-icons/ti";
import type { ITechnologyType } from "../types/type";

export interface TechnologyCardProps {
  technology: ITechnologyType;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="card w-[95%] border border-[#47556907]  bg-base-100  shadow-sm">
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <img
            className="w-6 h-6 translate-y-1"
            src={technology.icon}
            alt="technology-icon"
          />
          <button className="btn btn-xs bg-[#F1F5F9] btn-disabled rounded-full text-[#0F172A]  ">
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
          <button className="btn btn-neutral btn-block">Add to Stack</button>
        </div>
      </div>
    </div>
  );
}
