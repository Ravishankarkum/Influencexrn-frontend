// src/pages/Profile.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(res.data);
      } catch (err) {
        alert("Failed to load profile");
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>User Profile</h2>
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Profile;
