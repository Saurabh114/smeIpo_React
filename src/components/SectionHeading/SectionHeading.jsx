import React from "react";
import "./SectionHeading.css"

const SectionHeading = ({ heading }) => {
  return (
    <div className="sectionHeading mt-5 mb-4">
      <div class="one">
        <h1 className="sm:text-4xl text-xl font-bold " >{heading}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
