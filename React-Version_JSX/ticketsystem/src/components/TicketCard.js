import React from "react";

const statusColor = {
  open: "#f0f6ff",
  in_progress: "#fff7e6",
  closed: "#e8fff0"
};

export default function TicketCard({ ticket, onEdit, onDelete }) {
  return (
    <div style={{
      border: "1px solid #eee", borderRadius: 10, padding: 14, width: 320,
      boxShadow: "0 4px 12px rgba(0,0,0,0.04)", background: "#fff"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
        <h3 style={{ margin: 0 }}>{ticket.title}</h3>
        <div style={{
          padding: "6px 8px", borderRadius: 6, fontSize: 12,
          background: statusColor[ticket.status] || "#f4f4f4"
        }}>{ticket.status.replace("_", " ")}</div>
      </div>
      <p style={{ marginTop: 8, minHeight: 36 }}>{ticket.description || <em>No description</em>}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "flex-end" }}>
        <button onClick={() => onEdit(ticket)}>Edit</button>
        <button onClick={() => {
          if (confirm("Delete this ticket? This action cannot be undone.")) onDelete(ticket.id);
        }}>Delete</button>
      </div>
      <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
        <div>Priority: {ticket.priority || "—"}</div>
        <div>Assigned: {ticket.assignedTo || "Unassigned"}</div>
      </div>
    </div>
  );
}
