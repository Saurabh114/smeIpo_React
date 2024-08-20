import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  ArrowRight2,
  LocationTick,
  DirectInbox,
  CallCalling,
} from "iconsax-react";

import footerLogo from "./../../assets/smeipo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footerBox pt-5">
        <div className=" my-14 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-3 gap-4 ">
            
            <div className="sm:order-1 order-2" >
              <h3 className="text-xl font-semibold">Quick Links:</h3>
              <div className="links">
                <h4 className="text-l font-semibold flex mt-2 me-1">
                  <span>
                    <ArrowRight2
                      className="relative top-1"
                      size="20"
                      color="#3498db"
                      variant="TwoTone"
                    />
                  </span>
                  <Link to="/ipo"> IPO </Link>
                </h4>
                <h4 className="text-l font-semibold flex mt-2 me-1">
                  <span>
                    <ArrowRight2
                      className="relative top-1"
                      size="20"
                      color="#3498db"
                      variant="TwoTone"
                    />
                  </span>
                  <Link to="/service"> Services </Link>
                </h4>
                <h4 className="text-l font-semibold flex mt-2 me-1">
                  <span>
                    <ArrowRight2
                      className="relative top-1"
                      size="20"
                      color="#3498db"
                      variant="TwoTone"
                    />
                  </span>
                  <Link to="/contact"> Contact </Link>
                </h4>
              </div>
            </div>
            
            <div className="text-center items-center content-center sm:order-2 order-1">
              <div className="img_logo">
                <img src={footerLogo} alt="Footer Logo" className="w-52 mx-auto" />
              </div>
            </div>
            
            <div className="sm:order-3 order-3" >
              <h3 className="text-xl font-semibold">Reach Us:</h3>

              <div className="contactDetails mt-2 flex content-center items-center">
                <LocationTick
                  size="50"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <strong>Pune Office:</strong> F-108, Ashoka Mall, Opp. Sun &
                  Sand Hotel, Bund Garden Road, Pune – 411001.
                </h3>
              </div>

              <div className="contactDetails mt-2 flex content-center items-center">
                <LocationTick
                  size="50"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <strong>Bangalore Office: </strong> 405 B wing, 4th Floor,
                  Mittal Tower, Trinity, M.G.Road,Banglore- 560001.
                </h3>
              </div>

              <div className="contactDetails mt-2 flex content-center items-center">
                <DirectInbox
                  size="25"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <Link to="mailto:mahima07@rediffmail.com">
                    mahima07@rediffmail.com
                  </Link>
                  <br />
                  <Link to="mailto:mahimaconsultancies@gmail.com">
                    mahimaconsultancies@gmail.com
                  </Link>
                </h3>
              </div>

              <div className="contactDetails mt-2 flex content-center items-center">
                <CallCalling
                  size="25"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <Link to="tel:9890008077" target="_blank">
                    +91 98900 080 77
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright bg-slate-700 text-center py-4 w-full">
          <h2 className=" w-11/12 text-l text-white font-semibold">
            Copyright © 2024. All Rights Reserved | Designed & Developed by HSPM
            Solutions LLP
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
