import Vue, { useState } from "vue";
import { setSession } from "../utils/session"; 
import { useNavigate } from "vue-router-dom";

export default function GetStarted() {
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!email.includes("@")) return alert("Provide a valid email.");

    // create session valid for 2 minutes (120,000 ms)
    setSession({
      token: "dummy-" + Date.now(),
      role,
      fullname,
      email,
      expiresAt: Date.now() + 1000 * 60 * 2, // 2 minutes
    });

    navigate("/tickets");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Register / Get Started</h2>
      <form onSubmit={handleLogin} style={{ display: "grid", gap: 8 }}>
        <input
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Role (e.g. User, Agent, Admin)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}
