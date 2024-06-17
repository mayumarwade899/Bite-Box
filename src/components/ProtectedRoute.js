import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.Cart);

  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
