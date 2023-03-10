import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Protected({ children }) {
  const isSignedIn = useSelector((state) => state.login.value);

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
export default Protected;
