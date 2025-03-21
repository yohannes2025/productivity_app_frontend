// ProfilePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/profile/");
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (err) {
        setError(err.response.data.error);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put("/api/profile/", { name, email });
      setSuccess("Profile updated successfully");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {success && <div>{success}</div>}
        {error && <div>{error}</div>}
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

export default ProfilePage;
