// "use client";

import React from "react";

import { cn } from "../../utils/cn.js";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Spotlight } from "../ui/spotlight";

import "./Hero.css";

import HeroImg from "./../../assets/hero_bg.png";
import BgImg from "./../../assets/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = [
    {
      text: " We are ",
      className: "text-black dark:text-black",
    },
    {
      text: "SME",
      className: "text-black dark:text-black",
    },
    {
      text: "- IPO",
      className: "text-black dark:text-black",
    },
    {
      text: "Services",
      className: "text-black dark:text-black",
    },
  ];

  return (
    <>
      <div className=" heroSection h-[95vh] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />

        <div className="mx-auto max-w-7xl relative z-10 px-2 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-4 h-full content-center">
          <div className="h-full">
            <div className="img_hero">
              <img src={HeroImg} alt="" />
            </div>
          </div>

          <div className="h-full content-center">
            <div className="heroContaint ">
              <h2 className="text-3xl font-bold">
                <TypewriterEffectSmooth words={words} />
              </h2>
              <h2 className="text-xl font-bold">
                One of the best SME IPO consultant and SME IPO advisors!
              </h2>
              <h6 className="text-l mt-2">
                The SME-IPO Services is a complete Financial Solution Company,
                focused at providing assistance to those Individuals or
                Organizations seeking Loans and Financial services. Our
                expertise encompasses the entire plethora of Financial services.
              </h6>
            </div>

            <div className=" mt-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <Link to="/ipo">Read More</Link>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
