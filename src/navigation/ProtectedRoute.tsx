import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthService from "../hooks/useAuthService";

function ProtectedRoute() {
  const userInfo = useAuthService().userDetails;
  return <>{userInfo === true ? <Outlet /> : <Navigate to={"login"} />}</>;
}

export default ProtectedRoute;
