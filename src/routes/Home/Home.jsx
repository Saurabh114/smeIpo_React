import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Hero  from "./../../components/Hero/Hero";
import AboutHome from "./../../components/AboutContent/AboutHome";
import Objective from "./../../components/Objective/Objective";
import VitaminM from "./../../components/VitaminM/VitaminM";
import Eligibility from "./../../components/Eligibility/Eligibility";

const Home = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Hero />
      <AboutHome />
      <Objective />
      <VitaminM />
      <Eligibility />
    </div>
  )
}

export default Home