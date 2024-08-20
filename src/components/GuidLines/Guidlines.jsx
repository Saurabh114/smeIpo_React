import React, { useEffect } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";

const Guidlines = () => {
  return (
    <div>
      <div className="mt-4 mb-8" data-aos="fade-in-up">
        <SectionHeading heading={"SEBI Guidelines for SMEs"} />
      </div>

      <div className="sm:w-2/4 w-11/12 mx-auto text-center">
        <div
          className="bg-[#5578ff] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="500"
        >
          <h3 className="text-white text-xl">
            Maximum Post Issue capital - Rs.25 crores
          </h3>
        </div>

        <div
          className="bg-[#2196F3] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <h3 className="text-white text-xl">
            Minimum no. of members for Issue -50
          </h3>
        </div>

        <div
          className="bg-[#b2904f] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <h3 className="text-white text-xl">
            Market making - Mandatory for 3 years
          </h3>
        </div>

        <div
          className="bg-[#61b15a] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <h3 className="text-white text-xl">Underwriting -100%</h3>
        </div>

        <div
          className="bg-[#552854] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="2500"
        >
          <h3 className="text-white text-xl">
            Issue Lot size - No. of shares depending on IPO price band
          </h3>
        </div>

        <div
          className="bg-[#b2904f] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            Trading Lot size - Multiples of Rs.100,000/-
          </h3>
        </div>

        <div
          className="bg-black p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            After listing, no minimum number of members required to be continued
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Guidlines;
