import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Summer } from "./components/Pages/Summer.tsx";
import { Autumn } from "./components/Pages/Autumn.tsx";
import { Loungewear } from "./components/Pages/Loungewear.tsx";
import { Lightjackets } from "./components/Pages/Lightjackets.tsx";
import { Jeans } from "./components/Pages/Jeans.tsx";
import { Dresses } from "./components/Pages/Dresses.tsx";
import { Index } from "./components/Index.tsx";

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
        path: "/summer-collection",
        element: <Summer />,
      },
      {
        path: "/autumn-collection",
        element: <Autumn />,
      },
      {
        path: "/loungewear",
        element: <Loungewear />,
      },
      {
        path: "/light-jackets",
        element: <Lightjackets />,
      },
      {
        path: "/jeans",
        element: <Jeans />,
      },
      {
        path: "/dresses",
        element: <Dresses />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
