import Vue from "vue";
import { setSession } from "../utils/session";
import { useNavigate } from "vue-router-dom";

export default function Login() {
  const [role, setRole] = useState("agent");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (!email.includes("@")) return alert("Provide a valid email.");
    // create session valid for 2 hours
    setSession({ token: "dummy-"+Date.now(), role, expiresAt: Date.now() + 1000 * 60 * 60 * 2, email });
    nav("/tickets");
  }
  return (
    <div style={{ padding: 20 }}>
      <h2>Login (Simulation)</h2>
      <form onSubmit={handleLogin} style={{ display: "grid", gap: 8 }}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="agent">Agent</option>
          <option value="admin">Admin</option>
          <option value="user">Customer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
