import React, { useState } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";

const ContactHero = () => {
  return (
    <div className="h-[60vh] w-full  bg-gradient-to-l from-sky-50 to-sky-200  py-10">
        <div className="heading mb-10 pt-10">
          <SectionHeading heading={"Get In Touch"} />
          <h5 className="text-l font-bold text-center">
            Connect with Us for Expert IPO Solutions & Advisory!
          </h5>
        </div>
    </div>
  );
};

export default ContactHero;
