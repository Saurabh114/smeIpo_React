import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import ServiceHero from "./../../components/ServiceHero/ServiceHero";
import StockMarketingListing from "./../../components/StockMarketListing/StockMarketingListing";
import ListingOnNSE from "./../../components/ListingOnNSE/ListingOnNSE";
import ListingOnBSE from "./../../components/ListingOnBSE/ListingOnBSE";

const Services = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <ServiceHero />
      <StockMarketingListing />
      <ListingOnNSE />
      <ListingOnBSE />
    </>
  )
}

export default Services