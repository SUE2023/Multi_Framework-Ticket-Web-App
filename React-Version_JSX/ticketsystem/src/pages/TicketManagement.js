import React, { useEffect, useState } from "react";
import { fetchTickets, createTicket, updateTicket, deleteTicket } from "../api/mockTickets";
import TicketCard from "../components/TicketCard";
import TicketForm, { STATUS_VALUES } from "../components/TicketForm";
import Toast from "../components/Toast";
import { getSession, clearSession } from "../utils/session";
import { useNavigate } from "react-router-dom";

export default function TicketManagement() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);
  const [toasts, setToasts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const s = getSession();
    if (!s) {
      setToasts(t => [{ id: Date.now(), type: "error", title: "Unauthorized", message: "Your session has expired — please log in again." }, ...t]);
      return nav("/auth/login");
    }
    loadTickets();
    // eslint-disable-next-line
  }, []);

  function addToast(t) { setToasts(ts => [{ id: Date.now() + Math.random(), ...t }, ...ts]); }
  function removeToast(id) { setToasts(ts => ts.filter(t => t.id !== id)); }

  async function loadTickets() {
    setLoading(true);
    try {
      const data = await fetchTickets();
      setTickets(data);
    } catch (err) {
      addToast({ type: "error", title: "Failed to load tickets", message: "Failed to load tickets. Please retry." });
    } finally { setLoading(false); }
  }

  async function handleCreate(payload) {
    try {
      const t = { ...payload, id: String(Date.now()), createdAt: Date.now(), updatedAt: Date.now() };
      await createTicket(t);
      setTickets(ts => [t, ...ts]);
      addToast({ type: "success", title: "Created", message: "Ticket created successfully." });
      setCreating(false);
    } catch (err) {
      addToast({ type: "error", title: "Create failed", message: err.message || "Failed to create ticket." });
    }
  }

  async function handleUpdate(id, payload) {
    try {
      const updated = await updateTicket(id, payload);
      setTickets(ts => ts.map(t => t.id === id ? updated : t));
      addToast({ type: "success", title: "Updated", message: "Ticket updated successfully." });
      setEditing(null);
    } catch (err) {
      addToast({ type: "error", title: "Update failed", message: err.message || "Failed to update ticket." });
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTicket(id);
      setTickets(ts => ts.filter(t => t.id !== id));
      addToast({ type: "success", title: "Deleted", message: "Ticket deleted." });
    } catch (err) {
      addToast({ type: "error", title: "Delete failed", message: err.message || "Failed to delete ticket." });
    }
  }

  function logout() {
    clearSession();
    nav("/");
  }

  const session = getSession();

  return (
    <div style={{ padding: 20 }}>
      <Toast toasts={toasts} remove={removeToast} />
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Ticket Management</h1>
        <div>
          <button onClick={() => setCreating(true)}>New Ticket</button>
          <button onClick={logout} style={{ marginLeft: 8 }}>Logout</button>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#444" }}>{session?.role || "Guest"}</span>
        </div>
      </header>

      <section style={{ marginTop: 16 }}>
        {loading ? <div>Loading...</div> : (
          <>
            {creating && (
              <div style={{ marginBottom: 12, border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
                <h3>Create Ticket</h3>
                <TicketForm onCancel={() => setCreating(false)} onSubmit={handleCreate} />
              </div>
            )}

            {editing && (
              <div style={{ marginBottom: 12, border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
                <h3>Edit Ticket</h3>
                <TicketForm initial={editing} onCancel={() => setEditing(null)} onSubmit={(p) => handleUpdate(editing.id, p)} />
              </div>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {tickets.length === 0 ? <div>No tickets yet.</div> : tickets.map(t => (
                <TicketCard key={t.id} ticket={t}
                  onEdit={(tk) => setEditing(tk)}
                  onDelete={(id) => handleDelete(id)} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
