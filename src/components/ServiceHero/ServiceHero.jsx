import React from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const ServiceHero = () => {
  return (
    <div className="h-full w-full content-center bg-gradient-to-l from-sky-50 to-sky-200 mb-10">
      <div className="my-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="heading">
          <SectionHeading heading={"Services "} />
          <h6 className="text-lg text-center">
            We provide following Services to Companies for IPO Planning
          </h6>
        </div>

        <div className="description text-justify my-7">
          <p className="text-lg">
            <strong>Small and Medium Enterprises (SMEs)</strong> are the
            backbone of a nation's economy. SME segment has been a key engine of
            growth, employment, wealth distribution and effective mobilization
            of resources (both capital and skills) in India. Statistically,{" "}
            <strong>
              SME segment contributes 8% of GDP, 45% of the manufactured output,
              40% of exports
            </strong>
            , and is among the largest generator of employment in the Indian
            economy. SME segment has been in our prime focus. The deep routed
            understanding of our experienced team about the segment built over
            the years of work and exposure has provided us with unmatched
            excellence.
          </p>

          <h4 className="text-lg font-semibold mt-2 ">
            The opportunity in the new emerged SME listing (BSE SME Exchange and
            Emerge) space and considering the scalability and offered reach, we
            have built upon a team of professionals especially catering to this
            segment and which provide following services:
          </h4>
        </div>

        <div className="grid sm:grid-cols-3 gap-7 mt-4 mb-10">
          <div
            className="bg-[#5578ff] hover:bg-[#2196F3] p-4 content-center items-center rounded ease-in-out duration-300"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <h4 className="text-lg font-bold text-center text-white">
              Restructuring of capital
            </h4>
          </div>

          <div className="bg-[#2196F3] hover:bg-[#552854] p-4 content-center items-center rounded ease-in-out duration-300"
          data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h4 className="text-lg font-bold text-center text-white">
              Due Diligence and Pre IPO preparation
            </h4>
          </div>

          <div className="bg-[#552854] hover:bg-[#61b15a] p-4 content-center items-center rounded ease-in-out duration-300"
        data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            <h4 className="text-lg font-bold text-center text-white">
              Appointment of Intermediaries
            </h4>
          </div>

          <div className="bg-[#61b15a] hover:bg-[#b2904f] p-4 content-center items-center rounded ease-in-out duration-300"
            data-aos="fade-up-right"
          data-aos-duration="1000"
          >
            <h4 className="text-lg font-bold text-center text-white">
              Preparation of offer document
            </h4>
          </div>

          <div className="bg-[#b2904f] hover:bg-[#000] p-4 content-center items-center rounded ease-in-out duration-300"
           data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg font-bold text-center text-white">
              Issue pricing
            </h4>
          </div>

          <div className="bg-[#000] hover:bg-[#5578ff] p-4 content-center items-center rounded ease-in-out duration-300"
           data-aos="fade-up-left"
           data-aos-duration="1000"
           >
            <h4 className="text-lg font-bold text-center text-white">
              Filing of offer documents with authorities and support to get
              approvals
            </h4>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <ul>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Exploring IPO possibility and Valuation.
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Capital Structuring
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Short listing of Merchant Bankers & Other Intermediaries
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Searching Suitable Key Managerial Personnel (KMP) such as
              </li>
              <ul>
                <li className="flex text-lg  ps-3">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="w-5 text-blue-800"
                  />
                  Chief Executive Officer (CEO),
                </li>
                <li className="flex text-lg  ps-3">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="w-5 text-blue-800"
                  />
                  Chief Financial Officer (CFO),
                </li>
                <li className="flex text-lg  ps-3">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="w-5 text-blue-800"
                  />
                  Company Secretary (CS).
                </li>
              </ul>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Guidance on searching Independent Directors.
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Designing of Corporate Governance Policies& Other Policies
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Co-ordination for Due Diligence
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Co-ordination for SEBI Approval
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Registrar of Companies Approvals
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Peer Review Certification and Audit of Financial Statements as
                per SEBI Guidelines for IPO.
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Restatement of Financial Statements as per SEBI Guidelines for
                IPO.
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Certifications for IPOs
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Convergence and Implementation of IND AS for listed and under
                listing Companies.
              </li>
              <li className="flex text-lg ">
                <ChevronDoubleRightIcon
                  aria-hidden="true"
                  className="w-5 text-blue-800"
                />
                Statutory Audit and other audits for listed Companies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
