import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import IpoHero from "./../../components/IpoHero/IpoHero";
import BenefitsOfIPO from "./../../components/BenefitsOfIPO/BenefitsOfIPO";
import StepWiseProcess from "./../../components/StepWiseProcess/StepWiseProcess";
import Guidlines from "./../../components/GuidLines/Guidlines";


const IPO = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
     <IpoHero />
     <BenefitsOfIPO />
     <StepWiseProcess />
     <Guidlines />
    </>
  )
}

export default IPO