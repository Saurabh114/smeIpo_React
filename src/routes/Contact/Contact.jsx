import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import ContactHero from "./../../components/ContactHero/ContactHero";
import ContactForm from "./../../components/ContactForm/ContactForm";
import ContactMap from "./../../components/ContactMap/ContactMap";

const Contact = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  )
}

export default Contact