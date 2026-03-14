import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
import { authContext } from "../../context/auth";

function Protected({ children }) {
  const { isAuth } = useContext(authContext);

  if (!isAuth) {
    return <Navigate to="/login" />; // Use Navigate component
  } else {
    return children;
  }
}

export default Protected;
