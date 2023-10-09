import { Navigate, Outlet } from "react-router-dom";
import useAuthService from "../hooks/useAuthService";

function ProtectedRoute() {
  const isLoggedIn = useAuthService().isLoggedIn;
  return <>{isLoggedIn === true ? <Outlet /> : <Navigate to={"login"} />}</>;
}

export default ProtectedRoute;
