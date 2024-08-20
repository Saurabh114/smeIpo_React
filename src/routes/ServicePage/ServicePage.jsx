import React from 'react'
import ServiceHero from "./../../components/ServiceHero/ServiceHero";
import StockMarketingListing from "./../../components/StockMarketListing/StockMarketingListing";
import ListingOnNSE from "./../../components/ListingOnNSE/ListingOnNSE";
import ListingOnBSE from "./../../components/ListingOnBSE/ListingOnBSE";

const Services = () => {
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