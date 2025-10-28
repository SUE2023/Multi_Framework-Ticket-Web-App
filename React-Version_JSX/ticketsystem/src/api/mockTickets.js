// mockTickets.js - simulates API using localStorage
const TKEY = "ticketapp_tickets";

function readStore() {
  try {
    const raw = localStorage.getItem(TKEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function writeStore(arr) {
  localStorage.setItem(TKEY, JSON.stringify(arr));
}

// small helper to simulate delay / network failure optionally
async function maybeDelay() {
  await new Promise(r => setTimeout(r, 150));
}
function simulateFailure(risk = 0.05) {
  if (Math.random() < risk) throw new Error("Network error");
}

export async function fetchTickets() {
  await maybeDelay();
  simulateFailure(0.04);
  return readStore();
}
export async function createTicket(ticket) {
  await maybeDelay();
  simulateFailure(0.03);
  const all = readStore();
  all.unshift(ticket);
  writeStore(all);
  return ticket;
}
export async function updateTicket(id, changes) {
  await maybeDelay();
  simulateFailure(0.03);
  const all = readStore();
  const idx = all.findIndex(t => t.id === id);
  if (idx === -1) throw new Error("Ticket not found");
  all[idx] = { ...all[idx], ...changes, updatedAt: Date.now() };
  writeStore(all);
  return all[idx];
}
export async function deleteTicket(id) {
  await maybeDelay();
  simulateFailure(0.03);
  const all = readStore();
  writeStore(all.filter(t => t.id !== id));
  return true;
}
