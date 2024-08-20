import React from "react";
import IPOImg from "../../assets/IPO-Investment-removebg-preview.png";

const IpoHero = () => {
  return (
    <div className="sm:h-[60vh] w-full content-center bg-gradient-to-r from-sky-100 to-sky-300 mb-10">
      <div className="my-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 gap-4 item-center content-center">
          <div>
            <div className="img_hero">
              <img src={IPOImg} alt="" />
            </div>
          </div>
          <div className="content-center">
            <h2 className="text-4xl font-bold">SME-IPO</h2>
            <h5 className="text-xl font-medium">
              Spurred by investor interest, <b>145</b> Small & Medium
              Enterprises (SMEs) raised a record <b>₹2,455</b> crore through
              Initial Public Offerings (IPOs) in 2018. Funds raised were used
              for business expansion plans, working capital requirements and
              other general corporate purposes.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpoHero;
