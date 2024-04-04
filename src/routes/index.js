import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Cats from "../pages/Cats";
import Layout from "../layouts";
import Auth from '../pages/Auth';

// const  App = lazy(() => import("../App"));
const Cats = lazy(() => import("../pages/Cats"));

const MAIN_ROUTS = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "/todos",
        element: <Cats />
      },
      {
        path: "/auth",
        element: <Auth />
      }
    ]
  },

];
export const router = createBrowserRouter(MAIN_ROUTS);
