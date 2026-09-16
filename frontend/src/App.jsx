import "./App.css";

function App() {
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
      </div>
    </div>
  );
}

export default App;