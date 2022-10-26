import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = () => {
  var currentUser = auth?.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser == null) {
      navigate("/login", { replace: true });
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
