import React, { useEffect, useState, useCallback } from "react";

export const STATUS_VALUES = ["open", "in_progress", "closed"];

export default function TicketForm({ initial = {}, onCancel, onSubmit }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [priority, setPriority] = useState(initial.priority || "");
  const [status, setStatus] = useState(initial.status || "open");
  const [errors, setErrors] = useState({});

  // ✅ Memoize validate so it doesn't trigger warnings
  const validate = useCallback(() => {
    const e = {};
    if (!title || title.trim().length < 3)
      e.title = "Title is required (min 3 characters).";
    if (!STATUS_VALUES.includes(status))
      e.status = `Status must be one of: ${STATUS_VALUES.join(", ")}`;
    if (description && description.length > 2000)
      e.description = "Description is too long (max 2000 chars).";
    if (priority && !["low", "medium", "high"].includes(priority))
      e.priority = "Invalid priority value.";
    setErrors(e);
    return e;
  }, [title, description, status, priority]); // dependencies for validation

  // ✅ Effect now references a stable function
  useEffect(() => {
    validate();
  }, [validate]);

  function handleSubmit(e) {
    e.preventDefault();
    const eerrors = validate();
    if (Object.keys(eerrors).length) return;
    onSubmit({
      ...initial,
      title: title.trim(),
      description: description.trim(),
      priority: priority || null,
      status,
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <label>
        Title *
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <div style={{ color: "red", fontSize: 12 }}>{errors.title}</div>}
      </label>

      <label>
        Status *
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {STATUS_VALUES.map((s) => (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          ))}
        </select>
        {errors.status && <div style={{ color: "red", fontSize: 12 }}>{errors.status}</div>}
      </label>

      <label>
        Priority
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">—</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        {errors.priority && <div style={{ color: "red", fontSize: 12 }}>{errors.priority}</div>}
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
        {errors.description && <div style={{ color: "red", fontSize: 12 }}>{errors.description}</div>}
      </label>

      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
