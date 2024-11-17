import React, { createContext, useContext, useState } from "react";
import cookie from 'js-cookie'

export const AuthContext = createContext();
export default function AuthProvider({ children }) {

  const token = cookie.get('token')
  // console.log(token)

  const [authUser, setAuthUser] = useState(

    token ? (token) : undefined
    
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
