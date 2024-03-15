import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Summer } from "./components/Pages/Summer.tsx";
import { Autumn } from "./components/Pages/Autumn.tsx";
import { Lightjackets } from "./components/Pages/Lightjackets.tsx";
import { Jeans } from "./components/Pages/Jeans.tsx";
import { Dresses } from "./components/Pages/Dresses.tsx";
import { Index } from "./components/Index.tsx";
import { FinalCart } from "./components/Pages/FinalCart.tsx";
import { Payment } from "./components/Pages/Payment.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/summer-Collection",
        element: <Summer />,
      },
      {
        path: "/autumn-Collection",
        element: <Autumn />,
      },
      {
        path: "/jackets-Collection",
        element: <Lightjackets />,
      },
      {
        path: "/jeans-Collection",
        element: <Jeans />,
      },
      {
        path: "/dresses-Collection",
        element: <Dresses />,
      },
      {
        path: "/Checkout",
        element: <FinalCart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
