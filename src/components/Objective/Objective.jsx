import React from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";
import {
  DollarCircle,
  Activity,
  ProgrammingArrows,
  Money4,
  Buildings2,
  Diagram,
  AirplaneSquare,
  Layer,
  ChartSuccess,
  Chart21,
} from "iconsax-react";
import Image from "../../assets/hero-img-Photoroom.png";

import "./Objective.scss";

const Objective = () => {
  return (
    <>
      <div className="sm:h-[100vh] w-full objectiveSection content-center items-center">
        <SectionHeading style={"text-white"} heading={"Objectives Of SME-IPO"} />

        <div className="box my-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div className="img_hero content-center text-center items-center">
              <img src={Image} className="img" alt="Objective Img" />
            </div>

            <div className="col-span-2">
              <div className="grid sm:grid-cols-2 gap-4 justify-center ">
                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <DollarCircle size="32" color="#3498db" variant="TwoTone" />

                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Funds Raising & Cash Flow
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Activity size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Wealth & Value Creation
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <ProgrammingArrows
                    size="32"
                    color="#3498db"
                    variant="TwoTone"
                  />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Image, Branding & Trust
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Money4 size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Shares Becomes Currency/Money
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Buildings2 size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Business Model Expansion
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Diagram size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Multiply Sales, Profits, Cash
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Layer size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">Lower Debt Burden</h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <AirplaneSquare size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">ESOPs/Autopilot</h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <ChartSuccess size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">
                      Multiply Profits Growth
                    </h4>
                  </div>
                </div>

                <div className="bg-white rounded p-4 flex  content-center items-center">
                  <Chart21 size="32" color="#3498db" variant="TwoTone" />
                  <div className="text ms-3">
                    <h4 className="text-xl font-bold">Unicorn Company</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;
