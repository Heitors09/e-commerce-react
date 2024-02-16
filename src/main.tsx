import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Summer } from "./components/Pages/Summer.tsx";
import { Autumn } from "./components/Pages/Autumn.tsx";
import { Loungewear } from "./components/Pages/Loungewear.tsx";
import { Lightjackets } from "./components/Pages/Lightjackets.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
