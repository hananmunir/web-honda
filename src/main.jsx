import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Agency from "./pages/Agency.jsx";
import Events from "./pages/Events";
import Culture from "./pages/Culture";
import Studio from "./pages/Studio";
import Project from "./pages/Portfolio";
import Production from "./pages/Production";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/agencia-creativa",
    element: (
      <App>
        <Agency />
      </App>
    ),
  },
  {
    path: "/agencia-de-fotografia",
    element: (
      <App>
        <Events />
      </App>
    ),
  },
  {
    path: "/direccion-de-arte",
    element: (
      <App>
        <Culture />
      </App>
    ),
  },
  {
    path: "/estudio-de-diseno-grafico",
    element: (
      <App>
        <Studio />
      </App>
    ),
  },
  {
    path: "/project",
    element: (
      <App>
        <Project />
      </App>
    ),
  },
  {
    path: "/productora-audivisual",
    element: (
      <App>
        <Production />
      </App>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
