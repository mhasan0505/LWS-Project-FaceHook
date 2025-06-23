import { useContext, useDebugValue } from "react";
import AuthContext from "../context/index";

export const useAuth = () => {
  const {auth} = useContext(AuthContext);
  useDebugValue(auth, auth => auth ? "User Logged In" : "User Logged Out");
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return useContext(AuthContext);
};


