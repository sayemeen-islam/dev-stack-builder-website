import { use } from "react";
import type { ITechnologyType } from "../types/type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
  techPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ techPromise }: TechnologiesProps) {
  const technologies = use(techPromise);
  // console.log(technologies);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-[34px] font-extrabold font-inter text-[#0F172A] mb-1">
        Explore the <span className="text-gradient-2">Technologies</span>
      </h2>
      <p className="text-[#64748B] mb-10">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-12 gap-6 ">
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 col-span-9 ">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            ></TechnologyCard>
          ))}
        </div>
        <div className="flex flex-col gap-4 col-span-3">
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
                  <p className="text-[13px] text-[#94A3B8]">
                    Your stack is empty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
