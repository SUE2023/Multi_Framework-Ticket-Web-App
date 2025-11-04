import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // optional, for styling consistency

function Login() {
  return (
    <div className="page login-page">
      <h2>Login</h2>
      <p>Access your account to manage support tickets easily.</p>

      {/* Login form */}
      <form className="login-form">
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Login</button>
      </form>

      {/* Back to Home link */}
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

export default Login;
