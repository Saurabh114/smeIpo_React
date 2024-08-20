import React from 'react'
import SectionHeading from "./../SectionHeading/SectionHeading";
import { ArrangeVerticalCircle, Timer, Trade, Chart1, MoneySend, Check } from "iconsax-react";

const BenefitsOfIPO = () => {
  return (
    <div className="my-10 mb-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
       <SectionHeading heading={"Benefits of IPO to SME"} />

       <div className="grid sm:grid-cols-3 gap-4 ">

            <div className="benefitBox flex gap-1 content-center items-center">
                <ArrangeVerticalCircle size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >Maintaining Debt Equity Ratio</h3>
            </div>

            <div className="benefitBox flex gap-1 content-center items-center">
                <Timer size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >Limited liability for repayment</h3>
            </div>

            <div className="benefitBox flex gap-1 content-center items-center">
                <Trade size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >Dedicated trading platform in BSE & NSE</h3>
            </div>

            <div className="benefitBox flex gap-1 content-center items-center">
                <MoneySend size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >Increasing Profitability</h3>
            </div>

            <div className="benefitBox flex gap-1 content-center items-center">
                <Chart1 size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >Lower interest burden</h3>
            </div>

            <div className="benefitBox flex gap-1 content-center items-center">
                <Check size="32" color="#3498db" variant="TwoTone" className="me-2" />
                <h3 className="text-xl font-semibold" >SEBI relaxations</h3>
            </div>

        </div>
    </div>
  )
}

export default BenefitsOfIPO