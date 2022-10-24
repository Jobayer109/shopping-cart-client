import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Profile from "../Pages/Profile";
import Shop from "../Pages/Shop";

export const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'profile',
      element: <Profile></Profile>
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'Shop',
      element: <Shop></Shop>
    }, 
    {
      path: 'product',
      element: <Product></Product>
    }
  ]
}])
