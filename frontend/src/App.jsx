import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendStatus, setBackendStatus] = useState("בודק...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setBackendStatus("מחובר");
        }
      })
      .catch(() => {
        setBackendStatus("לא מחובר");
      });
  }, []);

  return (
    <div className="landing-page" dir="rtl">
      <div className="landing-card">
        <h1>Law Prep</h1>

        <h2>הכנה למבחן לשכת עורכי הדין</h2>

        <p>
          תרגל שאלות, בצע סימולציות ועקוב אחרי ההתקדמות שלך.
        </p>

        <div className="actions">
          <button className="primary-button">
            התחברות
          </button>

          <button className="secondary-button">
            הרשמה
          </button>
        </div>

        <p className="backend-status">
          מצב השרת: {backendStatus}
        </p>
      </div>
    </div>
  );
}

export default App;