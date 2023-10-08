import { createContext, useState } from "react";

type AuthServiceContextData = {
  userDetails: any,
  setUserDetails: any,
};

export const AuthContext = createContext<AuthServiceContextData>({
  userDetails: null,
  setUserDetails: null,
});

function AuthServiceProvider({ children }: any) {
  const [userDetails, setUserDetails] = useState<any>(null);
  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthServiceProvider;
