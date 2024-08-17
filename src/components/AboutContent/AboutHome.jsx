import React from "react";
import AboutUS from "../../assets/aboutUS.png";
import SectionHeading from "./../SectionHeading/SectionHeading";

const AboutHome = () => {
  return (
    <div className="my-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

      <SectionHeading heading={"About Us"} />

      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className="aboutContent">
          <h4 className="text-xl font-semibold">
            Initial Public Offering (IPO) Advisory & Solutions Services <br />|
            IPO Consultant | IPO Advisory Firms
          </h4>
          <br />
          <h4>
            <strong> Mahima Consultancy Services</strong> which provides{" "}
            <strong>SME-IPO Services</strong> is headed by{" "}
            <strong>M.S.Ramakrishnan Iyer</strong>, A Graduate of Calicut
            University. Mr. Ramakrishnan Iyer holds a Bachelor of Business
            Administration Degree, which has helped him successfully run this
            Business venture and grow it into a reputed Institution over a
            decade. With an individual Net Worth of over INR 3 crores, Mr.
            Ramakrishnan Iyer possesses astute Business sense and expert
            knowledge of the finance industry.
          </h4>
          <br />
          <h4>
            Traditionally Debt/loans used to be an instrument available to
            Companies to raise funds for business. However, there are certain
            costs such as marketing, logistics, research, a brand creation where
            debt option is not available.
          </h4>
          <br />
          <h4>
            Companies also opt for Venture Capital / Private Equity. However,
            performance pressure and stringent conditions make such investment
            unattractive for most of the businesses.
          </h4>
        </div>

        <div className="img_hero">
          <img src={AboutUS} alt="About Us Image" className="img" />
        </div>
      </div>

      <div className="content mt-3">
        <h4>
          Therefore, Initial Public Offering (IPO) on Main board i.e. National
          Stock Exchange (NSE) and Bombay Stock Exchange (BSE) is the ultimate
          solution. Now after the introduction of SME Stock Exchanges small IPOs
          like Rs.5 Cr are also possible. SME IPOs are quick (3 to 6 months) and
          comparatively cost effective than Main board IPOs. Such listing
          entitles Companies raised a good amount of money from the public
          without any repayment or commitment. Also, SME IPO does not require
          any permission from SEBI. Further after certain period and criteria,
          such Companies are allowed to migrate to Main Boards of BSE & NSE.
        </h4>
      </div>
    </div>
  );
};

export default AboutHome;
