import { useContext } from "react";
import { AuthContext } from "../services/AuthServiceProvider";

function useAuthService() {
  const data = useContext(AuthContext);
  return data;
}

export default useAuthService;
