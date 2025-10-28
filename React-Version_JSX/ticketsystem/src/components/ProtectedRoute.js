import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const session = JSON.parse(localStorage.getItem("ticketapp_session"));

  // Check if session exists and not expired
  if (!session || session.expiresAt < Date.now()) {
    localStorage.removeItem("ticketapp_session"); // cleanup expired
    alert("Session expired. Please log in again.");
    return <Navigate to="/pages/login" replace />;
  }

  return children;
}

