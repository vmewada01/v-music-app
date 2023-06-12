import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
 
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  console.log(auth);

  if (!auth) {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children
};

export default RequiresAuth;
