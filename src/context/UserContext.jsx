import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthDataContext } from './AuthContext';
import axios from 'axios';

export const UserDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const { serverUrl } = useContext(AuthDataContext);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}api/user/getcurrentuser`, {
        withCredentials: true, 
      });

      setUserData(result.data);
      console.log("User data:", result.data);
    } catch (error) {
      setUserData(null);
      console.log("getCurrentUser error:", error.response?.data?.message || error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    userData,
    setUserData,
    getCurrentUser,
    loading
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
