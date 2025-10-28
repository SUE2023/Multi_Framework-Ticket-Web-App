import React from "react";
import logo from "./Logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import FeaturesSection from "./components/FeaturesSection";
import TicketManagement from "./pages/TicketManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import mockUsers from '../shared/mockUsers.json';

// Home component (moved inside App.js, optional)
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="hero">
          <div className="circle small"></div>
          <div className="circle medium"></div>
          <div className="circle large"></div>

          <h1>Welcome to Ticket System</h1>
          <p>
            Simplify your customer support with a fast, reliable ticket
            management system.
          </p>

          <FeaturesSection />

          <nav>
            <Link className="Login-link" to="/pages/login">
              Login
            </Link>{" "}
            |{" "}
            <Link className="GetStarted-link" to="/pages/get-started">
              Get Started
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/get-started" element={<GetStarted />} />
          <Route
            path="/pages/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pages/tickets"
            element={
              <ProtectedRoute>
                <TicketManagement />
              </ProtectedRoute>
            }
          />
        </Routes>

        <footer className="App-footer">
          <p>
            © {new Date().getFullYear()} Ticket Management System | Powered by
            React
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
