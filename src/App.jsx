import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navbar from "./routes/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
