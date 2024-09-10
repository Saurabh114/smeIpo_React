import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import SectionHeading from "./../SectionHeading/SectionHeading";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "particulard",
    headerName: "PARTICULARS",
    width: 350,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "eligibility",
    headerName: "ELIGIBILITY NORMS",
    width: 350,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "position",
    headerName: "CURRENT POSITION",
    width: 230,
    headerClassName: "super-app-theme--header",
  },
];

const rows = [
  {
    id: 1,
    eligibility: "Up to INR 25 Cr",
    particulard: "Post Issue Paid up Capital (Face Value)",
    position: "Yes",
  },
  {
    id: 2,
    eligibility: "₹1.5 Cr",
    particulard: "Net tangible assets worth",
    position: "Yes",
  },
  {
    id: 3,
    eligibility: "Positive PBT for at least 1 FY out of 3 Fin.Year",
    particulard: "Cash Accurals",
    position: "Yes",
  },
  {
    id: 4,
    eligibility: "At least 3 Fin.Years",
    particulard: "Track Record of Existence of the Company",
    position: "Yes",
  },
  {
    id: 5,
    eligibility: "Positive Net Worth At least Rs. 1 Crore",
    particulard: "Net Worth (excluding Revaluation reserve )",
    position: "Yes",
  },
  {
    id: 6,
    eligibility: "Not changed in last 1 Financial Year",
    particulard: "Promotors",
    position: "Yes",
  },
];

const Eligibility = () => {
  return (
    <div className="container mx-auto">
      <div className="box my-14 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          heading={"Eligibility Criteria Assessment for SME IPO"}
        />

        <h4 className="text-xl text-center">To be eligible for an SME IPO, a company must meet certain criteria, including:</h4>

        <div className="mt-5 mx-auto max-w-5xl relative">
          <Box
            sx={{
              height: 430,
              width: "100%",
              "& .super-app-theme--header": {
                backgroundColor: "#000000",
                color: "#fff",
                textAlign: "center",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    ppositionSize: 5,
                  },
                },
              }}
              ppositionSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>

      <div className="content my-5 text-center" >
        <div className="heading ">
        <SectionHeading
          heading={"SME IPO expenses"}
        />
        </div>
        <div className="description">
           <p className="text-l">Companies pay fees to the stock exchange for listing their shares, including basic admission, processing, listing, and annual fees. </p>
        </div>
      </div>

      <div className="content my-5 text-center" >
        <div className="heading ">
        <SectionHeading
          heading={"SME IPO risks"}
        />
        </div>
        <div className="description">
           <p className="text-l">Investors should exercise caution and conduct thorough due diligence before investing in SME IPOs. The regulator has issued warnings about inexperienced investors choosing high-risk companies' IPOs without fully understanding the investments.</p>
        </div>
      </div>

    </div>
  );
};

export default Eligibility;
