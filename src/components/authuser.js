import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null); // Initialize profile state as null

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000'; // Use environment variable for the API base URL
        const response = await axios.get('https://farming-backend-2ccy.onrender.com/useroutes/profile', {
          withCredentials: true,
        });
        setProfile(response.data); // Set the profile data
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfile(null); // Reset profile on error
      }
    };

    fetchProfile();
  }, []); // Run only once on component mount



  return (
    <AuthContext.Provider value={[profile, setProfile]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
