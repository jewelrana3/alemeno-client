import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Login from "../password/Login";
import SignUp from "../password/SignUp";
import Student from "../Dashboard/Student";

const Router = createBrowserRouter([
   {
    path:'/',
    element:<Main />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<SignUp></SignUp>
          },
          {
            path:'/student',
            element:<Student />,
            loader:({})=>fetch('http://localhost:4000/user')
          }
    ]
   }
  ]);

  export default Router;
  