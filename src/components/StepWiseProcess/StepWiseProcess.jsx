import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ClipboardTick, Chart, ClipboardText, MoneyRecive, Clipboard, Diagram } from "iconsax-react";

import "./StepWiseProcess.css"
import SectionHeading from "./../SectionHeading/SectionHeading";

const StepWiseProcess = () => {
  return (
    <div className="mt-40 mb-32" >
      <div className="my-10"  data-aos="fade-up">
        <SectionHeading heading={ "Stepwise SME IPO Process" } />
      </div>
      <VerticalTimeline>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<ClipboardTick />}
        >
          <h3 className="vertical-timeline-element-title">Selection of Merchant Banker</h3>
       
        </VerticalTimelineElement>
      
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#5578ff", color: "#fff" }}
          icon={<Chart />}
        >
          <h3 className="vertical-timeline-element-title">Restructuring of capital and valuation</h3>
       
        </VerticalTimelineElement>
      
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#b2904f", color: "#fff" }}
          icon={<ClipboardText />}
        >
          <h3 className="vertical-timeline-element-title">Offer Document for IPO</h3>
       
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#61b15a", color: "#fff" }}
          icon={<MoneyRecive />}
        >
          <h3 className="vertical-timeline-element-title">Due Diligence as part of IPO</h3>
       
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<Clipboard />}
        >
          <h3 className="vertical-timeline-element-title">Marketing Strategy</h3>
       
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#552854", color: "#fff" }}
          icon={<Diagram />}
        >
          <h3 className="vertical-timeline-element-title">Effective communication of its equity strength</h3>
       
        </VerticalTimelineElement>
      
      </VerticalTimeline>
    </div>
  );
};

export default StepWiseProcess;
