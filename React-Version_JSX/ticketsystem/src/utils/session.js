export const SESSION_KEY = "ticketapp_session";

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (s.expiresAt && Date.now() > s.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return s;
  } catch {
    return null;
  }
}
export function setSession(obj) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(obj));
}
export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
export function requireAuth(navigate) {
  const s = getSession();
  if (!s) {
    navigate("/auth/login");
    return false;
  }
  return true;
}
