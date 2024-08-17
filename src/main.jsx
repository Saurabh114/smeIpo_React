import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import "./index.css";
import Home from "./routes/Home/Home";
import IPO from "./routes/Ipo/Ipo";
import Services from "./routes/ServicePage/ServicePage";
import Contact from "./routes/Contact/Contact";

// 1 Way to create Routes

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "ipo",
//         element: <IPO />,
//       },
//       {
//         path: "service",
//         element: <Services />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// 2 Way to create Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="ipo" element={<IPO />} />
      <Route path="service" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
