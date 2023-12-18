import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Users from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";

  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/users',
          element: <PrivateRoute><Users></Users></PrivateRoute>
        },
        {
          path: '/login',
          element: <Signin></Signin>
        },
        {
          path: '/register',
          element: <Signup></Signup>
        },
        
      ]
    },
   
  
  ]);