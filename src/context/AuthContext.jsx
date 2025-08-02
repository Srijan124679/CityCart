// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthDataContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
 // const serverUrl = "http://localhost:8080/"; 
  const serverUrl = "https://citycart-backend-60ob.onrender.com/";


  return (
    <AuthDataContext.Provider value={{ authData, setAuthData, serverUrl }}>
      {children}
    </AuthDataContext.Provider>
  );
};
