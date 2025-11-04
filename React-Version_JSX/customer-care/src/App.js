import { BrowserRouter as Router, Routes, Route, Link, Navigate }  from "react-router-dom";
import logo from "./Logo.jpg";
import Login from "./Login";
import GetStarted from "./GetStarted";
import Dashboard from "./Dashboard";
import TicketManagement from "./TicketManagement";
import "./App.css";
//import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

// Home component for the landing page
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

	  <div className="hero">
          <div className="circle small"></div>
          <div className="circle medium"></div>
          <div className="circle large"></div>

          <h1>Welcome to TicketCare</h1>
    	  <p>
            Simplify your customer support with a fast, reliable ticket
            management system.
          </p>
	  <nav>
          <Link className="Login-link" to="/login">
            Login
          </Link>{" "}
          |{" "}
          <Link className="GetStarted-link" to="/get-started">
            Get Started
          </Link>
        </nav>
        </div>

        {/* Hero and Features sections */}
	  {/* <HeroSection /> */}
        <FeaturesSection />

        {/* Internal links using React Router */}
	  {/* <nav>
          <Link className="Login-link" to="/login">
            Login
          </Link>{" "}
          |{" "}
          <Link className="GetStarted-link" to="/get-started">
            Get Started
          </Link>
        </nav> */}
      </header>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
	 <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
	<Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <TicketManagement />
            </ProtectedRoute>
          }
        />  
      </Routes>

      {/* Consistent footer */}
      <footer className="App-footer">
        <p>
          © {new Date().getFullYear()} Ticket Management System | Powered by
          React
        </p>
      </footer>
    </Router>
  );
}

export default App;

