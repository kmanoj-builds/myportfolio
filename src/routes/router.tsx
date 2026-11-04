
import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Lab from "../pages/Lab";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "lab",
        element: <Lab />,
      },
    ],
  },
]);

export default appRouter;
