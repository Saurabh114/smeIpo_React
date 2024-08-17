import React from 'react'
import Hero  from "./../../components/Hero/Hero";
import AboutHome from "./../../components/AboutContent/AboutHome";
import Objective from "./../../components/Objective/Objective";
import VitaminM from "./../../components/VitaminM/VitaminM";
import Eligibility from "./../../components/Eligibility/Eligibility";

const Home = () => {
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