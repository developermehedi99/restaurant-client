import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurNavMenu from "../pages/ourNavMenu/OurNavMenu";
import Contact from "../pages/Contact/Contact";
import DashBoard from "../pages/dashBoard/DashBoard";
import Shop from "../pages/shop/Shop";
import SingOut from "../pages/singOut/SingOut";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/dashboard",
          element: <DashBoard></DashBoard>
        },
        {
          path:"/menu",
          element: <OurNavMenu></OurNavMenu>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/singOut",
          element: <SingOut></SingOut>
        }
      ]
    },
  ]);