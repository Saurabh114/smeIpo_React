import React, { useEffect }  from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Layout() {

  
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
