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
    eligibility: "Min.INR 25 Cr",
    particulard: "Post Issue Paid up Capital (Face Value)",
    position: "Yes",
  },
  {
    id: 2,
    eligibility: "Positive PBT for at least 1 FY out of 3 Fin.Year",
    particulard: "Cash Accurals",
    position: "Yes",
  },
  {
    id: 3,
    eligibility: "At least 3 Fin.Years",
    particulard: "Track Record of Existence of the Company",
    position: "Yes",
  },
  {
    id: 4,
    eligibility: "Positive Net Worth At least Rs. 1 Crore",
    particulard: "Net Worth (excluding Revaluation reserve )",
    position: "Yes",
  },
  {
    id: 5,
    eligibility: "Not changed in last 1 Financial Year",
    particulard: "Promotors",
    position: "Yes",
  },
];

const Eligibility = () => {
  return (
    <>
      <div className="box my-14 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          heading={"ELIGIBILITY CRITERIA ASSESSMENT FOR SME IPO"}
        />

        <div className="mt-5 mx-auto max-w-5xl relative">
          <Box
            sx={{
              height: 400,
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
    </>
  );
};

export default Eligibility;
