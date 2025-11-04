import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulated user credentials
  const mockUser = {
    email: "user@example.com",
    password: "123456",
    token: "mock-auth-token"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    // Simulated login
    if (email === mockUser.email && password === mockUser.password) {
      localStorage.setItem("token", mockUser.token);
      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setError("Invalid email or password!");
      toast.error("Login failed! Please check your credentials.", {
        position: "top-center",
        autoClose: 3000
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          required
        />
        <br />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <ToastContainer />

{/* Back to Home link */}
      <p>
        <Link to="/">← Back to Home</Link>
      </p>

    </div>
  );
}

export default Login;

