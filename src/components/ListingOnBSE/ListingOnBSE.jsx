import React from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";

const ListingOnBSE = () => {
  return (
    <div className="h-full w-full content-center  py-10 ">
      <div className="my-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          heading={"Eligibility criteria for listing on BSE Emerge Platform"}
        />

        <h6 className="text-lg font-medium mb-4">
          <b>Parameter Listing Criterion</b>
        </h6>
        <h6 className="text-lg font-medium mb-4">
          <b>Incorporation: </b> The Issuer should be a company incorporated
          under the Companies Act 1956 / 2013 in India.
        </h6>
        <h6 className="text-lg font-medium mb-4">
          <b>Financials:</b>
        </h6>
        <h6 className="text-lg font-medium mb-4">
          • Post Issue Paid up Capital The post-issue paid up capital of the
          company shall be at least Rs. 3 crore.
          <br />
          <br />
          • Networth Net worth (excluding revaluation reserves) of at least Rs.3
          crore as per the latest audited financial results.
          <br />
          <br />
          • Net Tangible Assets At least Rs.3 crore as per the latest audited
          financial results.
          <br />
          <br />
          • Track Record Distributable profits in terms of Section 123 of the
          Companies Act 2013 for at least two years out of immediately preceding
          three financial years (each financial year has to be a period of at
          least 12 months). Extraordinary income will not be considered for the
          purpose of calculating distributable profits. Or
          <br />
          <br />• The net worth shall be at least Rs.5 crores.
        </h6>
        <h6 className="text-lg font-medium mb-4">
          <b>Other Requirements</b>
        </h6>
        <h6 className="text-lg font-medium mb-4">
          • It is mandatory for a company to have a website.
          <br />• It is mandatory for the company to facilitate trading in demat
          securities and enter into an agreement with both the depositories.
          <br />• There should not be any change in the promoters of the company
          in preceding one year from date of filing the application to BSE for
          listing under SME segment.
        </h6>
        <h6 className="text-lg font-medium mb-4">
          <b>Disclosures:</b>
        </h6>
        <h6 className="text-lg font-medium mb-4">
          A certificate from the applicant company / promoting companies stating
          the following:
          <br />
          a. The Company has not been referred to the Board for Industrial and
          Financial Reconstruction (BIFR).
        </h6>
        <h6 className="text-lg font-medium mb-4">
          <b>Note:</b> Cases, where a company is out of BIFR, is allowed.
        </h6>
        <h6 className="text-lg font-medium mb-4">
          b. There is no winding up petition against the company, which has been
          admitted by the court or a liquidator has not been appointed.
        </h6>
        <h6 className="text-lg font-medium mb-4">
          Migration from BSE SME Platform to the Main Board The companies
          seeking migration to Main Board of BSE should satisfy the eligibility
          criteria It is mandatory for the company to be listed and traded on
          the BSE SME Platform for a minimum period of two years and then they
          can migrate to the Main Board as per the guidelines specified by SEBI
          vide their circular dated 18th May 2010 and as per the procedures laid
          down in the ICDR guidelines Chapter X B.
        </h6>
      </div>
    </div>
  );
};

export default ListingOnBSE;
