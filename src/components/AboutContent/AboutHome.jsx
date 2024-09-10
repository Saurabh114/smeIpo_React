import React from "react";
import AboutUS from "../../assets/aboutUS.png";
import SectionHeading from "./../SectionHeading/SectionHeading";
import { DirectRight } from "iconsax-react"

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

      <div className="content mt-3">
        <ul>
          <li className="flex mt-1" > <span className="me-2 mt-1" ><DirectRight size="20" color="#3498db" variant="TwoTone"/></span> <span> Successfully registered <b>900+ SME IPOs by 2023</b>, empowering small and medium enterprises to thrive and grow in the competitive market</span></li>
          <li className="flex mt-1" > <span className="me-2 mt-1" ><DirectRight size="20" color="#3498db" variant="TwoTone"/></span> <span> Successfully raised <b>₹14,321 crores</b> through SME IPOs</span></li>
          <li className="flex mt-1" > <span className="me-2 mt-1" ><DirectRight size="20" color="#3498db" variant="TwoTone"/></span> <span> In 2024, approximately <b>₹6,251</b> crores were raised through <b>175 SME IPOs</b>, highlighting the dynamic growth and investment potential in the small and medium enterprises sector.</span></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutHome;
