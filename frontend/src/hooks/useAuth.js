import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user's information from the server
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user/");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const register = async (email, password) => {
    try {
      await axios.post("/api/register/", { email, password });
      // Fetch the user's information after registration
      await fetchUser();
    } catch (error) {
      throw new Error("Error registering user: " + error.message);
    }
  };

  const login = async (email, password) => {
    try {
      await axios.post("/api/login/", { email, password });
      // Fetch the user's information after login
      await fetchUser();
    } catch (error) {
      throw new Error("Error logging in: " + error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout/");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const updateProfile = async (data) => {
    try {
      await axios.put("/api/user/", data);
      // Update the user's information in the state
      setUser({ ...user, ...data });
    } catch (error) {
      throw new Error("Error updating profile: " + error.message);
    }
  };

  return { user, register, login, logout, updateProfile };
};
