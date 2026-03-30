import {  RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import ProductsDetails from "./Pages/ProductDetails/ProductDetails";

import Error from "./Pages/ErrorPage/Error";
import MainComponent from "./component/MainComponent/MainComponent";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { AuthProvider } from "./context/auth";
import { useState } from "react";
import Protected from "./component/Protected/Protected";

const router = createHashRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Protected><Products /></Protected> },
      { path: "details/:id", element: <ProductsDetails /> },
      { path: "wishlist", element: <Wishlist /> },
    ]
  },
  { path: "*", element: <Error /> },
])

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"))

  return (
    <AuthProvider value={{ isAuth, setIsAuth }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  )
}

export default App