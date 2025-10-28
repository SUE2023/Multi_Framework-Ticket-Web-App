import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // Simulated ticket statistics
  const stats = {
    total: 120,
    open: 45,
    resolved: 75,
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Tickets</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card open">
          <h3>Open Tickets</h3>
          <p>{stats.open}</p>
        </div>
        <div className="stat-card resolved">
          <h3>Resolved Tickets</h3>
          <p>{stats.resolved}</p>
        </div>
      </div>

      <nav className="dashboard-nav">
        <Link to="/tickets" className="nav-link">
          Go to Ticket Management
        </Link>
      </nav>
    </div>
  );
}

export default Dashboard;
