import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // optional

function GetStarted() {
  return (
    <div className="page get-started-page">
      <h2>Get Started</h2>
      <p>Create your account to begin managing customer tickets.</p>

      {/* Registration form */}
      <form className="register-form">
        <input type="text" placeholder="Full Name" required /><br/>
        <input type="email" placeholder="Email" required />< br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Register</button>
      </form>

      {/* Back to Home link */}
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

export default GetStarted;

