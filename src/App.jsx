import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navbar from "./routes/Navbar/Navbar";
import IPO from "./routes/Ipo/Ipo";
import Services from "./routes/ServicePage/ServicePage";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/ipo" element={<IPO /> } />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
