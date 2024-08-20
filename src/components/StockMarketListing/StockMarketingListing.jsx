import React, { useEffect } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";

const StockMarketingListing = () => {
  return (
    <div>
      <div className="mt-4 mb-8" data-aos="fade-in-up">
        <SectionHeading
          heading={"Benefits of getting listed in the Stock Market"}
        />
      </div>

      <div className="sm:w-2/4 w-11/12 mx-auto text-center">
        <div
          className="bg-[#5578ff] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="500"
        >
          <h3 className="text-white text-xl">Reduction of debt burden</h3>
        </div>

        <div
          className="bg-[#2196F3] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <h3 className="text-white text-xl">
            Fund-raising for Capital expenditure, expansion, new projects, M&A
            etc from Public.
          </h3>
        </div>

        <div
          className="bg-[#b2904f] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <h3 className="text-white text-xl">
            Raise funds for activities such as marketing, research where debt is
            not available.
          </h3>
        </div>

        <div
          className="bg-[#61b15a] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <h3 className="text-white text-xl">
            Liquidity to investors/share-holders without affecting the stability
            of the company
          </h3>
        </div>

        <div
          className="bg-[#552854] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="2500"
        >
          <h3 className="text-white text-xl">
            Listed companies generally find that the market perception of their
            financial and business strength is enhanced.
          </h3>
        </div>

        <div
          className="bg-[#b2904f] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            Listing raises a company’s public profile with customers, suppliers,
            investors, financial institutions and the media.
          </h3>
        </div>

        <div
          className="bg-black p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            An initial listing increases a company’s ability to raise further
            capital through various routes like preferential issue, rights
            issue, Qualified Institutional Placements and ADRs / GDRs / FCCBs,
            and in the process attract a wide and varied body of institutional
            and professional investors.
          </h3>
        </div>

        <div
          className="bg-[#2196F3] p-5 rounded mb-6"
          data-aos="fade-up-left"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            IPO listing is also a great solution for companies struggling with
            succession planning and that have difficulty in getting acquired by
            another company.
          </h3>
        </div>

        <div
          className="bg-[#5578ff] p-5 rounded mb-6"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        >
          <h3 className="text-white text-xl">
            IPO listing also helps Companies to convert paper currency in
            currency. It can help to issue ESOPs and retain talent.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StockMarketingListing;
