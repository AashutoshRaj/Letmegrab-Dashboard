import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState();

  const login = () => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    // navigate("/product-table")

  };

  const logout = () => {
    localStorage.clear();
    //  localStorage.removeItem("token");
    //  localStorage.removeItem("auth");
    //   localStorage.removeItem("user_profile");
    setIsAuthenticated(false);
    setUserData(null);
  };

  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       setIsAuthenticated(true)
  //     } else {
  //       setIsAuthenticated(false)
  //     }
  //   })

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
