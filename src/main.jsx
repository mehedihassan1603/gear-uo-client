import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AddCart from "./Components/AddCart/AddCart.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import Login from "./Components/Authentication/Login/Login.jsx";
import Register from "./Components/Authentication/Register/Register.jsx";
import AuthProvider from "./Components/Authentication/AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./Components/Authentication/PrivateRoute/PrivateRoute";
import Details from "./Components/Details/Details.jsx";
import Brand from "./Components/Brand/Brand.jsx";
import Update from "./Components/Update/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addcart",
        element: <AddCart></AddCart>,
        loader: ()=> fetch('http://localhost:5000/addcart')
      },
      {
        path: "/product",
        element: <AddProduct></AddProduct>,
        
      },
      {
        path: "/details/:_id",
        loader: () => fetch("http://localhost:5000/product"),
        element: <Details></Details>,
      },
      {
        path: "/brand/:brand",
        element: <Brand></Brand>,
        loader: ()=> fetch('http://localhost:5000/product')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);
