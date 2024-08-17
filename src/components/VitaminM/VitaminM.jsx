import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import SectionHeading from "./../SectionHeading/SectionHeading";

import "./VitaminM.scss";

const VitaminM = () => {
  return (
    <div className="sectionVitaminM py-16">
      <SectionHeading heading={"Vitamin M (M - Money)"} />

      <div className="box my-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 gap-4">
          
          <div className="col-span-1">
            <div className="border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

              <EvervaultCard text="M - 1" />

              <h2 className=" text-black mt-4 text-l font-semibold text-center mx-auto">
                <span>1. Management Team</span>
                <br />
                <span>2. Qualified Passionate Professionals and Experts.</span>
              </h2>
            </div>
          </div>
          
          
          <div className="col-span-1">
            <div className="border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

              <EvervaultCard text="M - 2" />

              <h2 className=" text-black mt-4 text-l font-semibold text-center mx-auto">
                <span>Market Size. Is Market Size big enough to grow by 10X, 100X, 1000X ans so on.</span>
              </h2>
            </div>
          </div>
          
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          
          <div className="col-span-1">
            <div className="border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

              <EvervaultCard text="M - 3" />

              <h2 className=" text-black mt-4 text-l font-semibold text-center mx-auto">
                <span>1. MVP-Minimum Viable Product / Services</span>
                <br />
                <span>2. MVP is ready. Traction and Track Record.</span>
              </h2>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

              <EvervaultCard text="M - 4" />

              <h2 className=" text-black mt-4 text-l font-semibold text-center mx-auto">
                <span>Momentum-Traction Scalability.</span>
              </h2>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

              <EvervaultCard text="M - 5" />

              <h2 className=" text-black mt-4 text-l font-semibold text-center mx-auto">
                <span>Get Vitamin M-Money and Funding</span>
              </h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VitaminM;
