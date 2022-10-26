import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser == null) {
      navigate("/");
    }
  }, []);

  console.log(auth.currentUser);
  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={() => auth?.signOut().then(() => navigate("/"))}>
        Log ud
      </button>
    </div>
  );
}
