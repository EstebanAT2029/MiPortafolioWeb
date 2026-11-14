
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./MainLayout";

import { HomePage } from "../modules/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
    ],
    
  },
],
  {
    basename: "/portafolio",
  }
);
