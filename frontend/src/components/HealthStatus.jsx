import { useEffect, useState } from "react";
import "./HealthStatus.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Subtle development indicator for backend connectivity (GET /health).
 */
function HealthStatus() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unexpected status ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        if (!cancelled) {
          setStatus("online");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("offline");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const label = {
    checking: "בודק חיבור לשרת…",
    online: "השרת מחובר",
    offline: "אין חיבור לשרת",
  }[status];

  return (
    <span className={`health health--${status}`} title={`${API_BASE_URL}/health`}>
      <span className="health__dot" aria-hidden="true" />
      {label}
    </span>
  );
}

export default HealthStatus;
