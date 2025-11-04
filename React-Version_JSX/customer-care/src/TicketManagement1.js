// src/TicketManagement.js
import React from "react";
import { Link } from "react-router-dom";

function TicketManagement() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Ticket Management</h2>
      <p>Here you can view, create, and manage support tickets.</p>
      <Link to="/dashboard" style={{ color: "#007bff" }}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default TicketManagement;

