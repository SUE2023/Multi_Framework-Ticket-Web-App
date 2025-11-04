import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./TicketManagement.css"; // create this file for styling

function TicketManagement() {
  const navigate = useNavigate();

  // Session protection
  useEffect(() => {
  	const session = localStorage.getItem("ticketapp_session");
  	if (!session) {
    	setToast("Your session has expired — please log in again.");
    	setTimeout(() => navigate("/auth/login"), 2000);
  	}
  }, [navigate]);

  // State for tickets
  const [tickets, setTickets] = useState([
    { id: 1, title: "Login issue", status: "open", description: "Unable to log in", priority: "High" },
    { id: 2, title: "Page not loading", status: "in_progress", description: "Dashboard not loading on Chrome", priority: "Medium" },
  ]);

  // Form state
  const [form, setForm] = useState({ id: null, title: "", status: "open", description: "", priority: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validation logic
  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required.";
    if (!form.status.trim()) errs.status = "Status is required.";
    else if (!["open", "in_progress", "closed"].includes(form.status))
      errs.status = "Invalid status value.";
    if (form.description.length > 150) errs.description = "Description too long (max 150 chars).";
    return errs;
  };

  // Submit form (Create or Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (form.id) {
      // Update existing ticket
      setTickets(
        tickets.map((t) => (t.id === form.id ? { ...form } : t))
      );
      showToast("Ticket updated successfully!");
    } else {
      // Create new ticket
      const newTicket = { ...form, id: Date.now() };
      setTickets([...tickets, newTicket]);
      showToast("Ticket created successfully!");
    }
    setForm({ id: null, title: "", status: "open", description: "", priority: "" });
    setErrors({});
  };

  // Edit ticket
  const handleEdit = (ticket) => {
    setForm(ticket);
  };

  // Delete ticket
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((t) => t.id !== id));
      showToast("Ticket deleted successfully!");
    }
  };

  // Toast notification
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  // Get color by status
  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "#28a745"; // green
      case "in_progress":
        return "#ffc107"; // amber
      case "closed":
        return "#6c757d"; // gray
      default:
        return "#000";
    }
  };

  return (
    <main className="ticket-page">
      <header className="ticket-header">
        <h2>Ticket Management</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      {toast && <div className="toast">{toast}</div>}

      <section className="form-section">
        <h3>{form.id ? "Edit Ticket" : "Create New Ticket"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Ticket title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}

          <select name="status" value={form.status} onChange={handleChange}>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {errors.status && <p className="error">{errors.status}</p>}

          <textarea
            name="description"
            placeholder="Description (optional)"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <input
            name="priority"
            placeholder="Priority (optional)"
            value={form.priority}
            onChange={handleChange}
          />

          <button type="submit">{form.id ? "Update Ticket" : "Add Ticket"}</button>
        </form>
      </section>

      <section className="ticket-list">
        <h3>Existing Tickets</h3>
        <div className="ticket-grid">
          {tickets.map((t) => (
            <div key={t.id} className="ticket-card" style={{ borderLeft: `6px solid ${getStatusColor(t.status)}` }}>
              <h4>{t.title}</h4>
              <span className="status-tag" style={{ backgroundColor: getStatusColor(t.status) }}>
                {t.status.replace("_", " ")}
              </span>
              <p>{t.description}</p>
              <p><strong>Priority:</strong> {t.priority || "N/A"}</p>
              <div className="card-actions">
                <button onClick={() => handleEdit(t)}>Edit</button>
                <button onClick={() => handleDelete(t.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
      </footer>
    </main>
  );
}

export default TicketManagement;

