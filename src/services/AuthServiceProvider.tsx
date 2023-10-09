import { createContext, useState } from "react";

type AuthServiceContextData = {
  isLoggedIn:boolean,
  setIsLoggedIn:any,
  userDetails: any,
  setUserDetails: any,
};

export const AuthContext = createContext<AuthServiceContextData>({
  userDetails: null,
  setUserDetails: null,
  isLoggedIn:false,
  setIsLoggedIn:null
});

function AuthServiceProvider({ children }: any) {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);
  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthServiceProvider;
