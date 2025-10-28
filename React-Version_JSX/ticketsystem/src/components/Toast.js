// Toast.js - simple toast stack
import React from "react";
export default function Toast({ toasts, remove }) {
  return (
    <div style={{
      position: "fixed", right: 20, top: 20, zIndex: 9999,
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          padding: "10px 14px", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
          background: t.type === "error" ? "#ffeef0" : "#e6ffed", color: "#111",
          borderLeft: t.type === "error" ? "4px solid #f63" : "4px solid #2c9"
        }}>
          <strong>{t.title}</strong>
          <div style={{ fontSize: 13 }}>{t.message}</div>
          <div style={{ textAlign: "right", marginTop: 6 }}>
            <button onClick={() => remove(t.id)}>Close</button>
          </div>
        </div>
      ))}
    </div>
  );
}
