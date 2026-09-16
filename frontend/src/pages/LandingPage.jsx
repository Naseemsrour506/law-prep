import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import HealthStatus from "../components/HealthStatus";
import "./LandingPage.css";

const HIGHLIGHTS = [
  {
    title: "תרגול ממוקד",
    text: "שאלות אמריקאיות לפי נושאי הליבה של הבחינה, עם הסברים.",
  },
  {
    title: "סימולציות מלאות",
    text: "מבחני תרגול בתנאי בחינה, כדי להתרגל ללחץ ולניהול הזמן.",
  },
  {
    title: "מעקב התקדמות",
    text: "נתונים ברורים על נקודות החוזק והנושאים שדורשים חזרה.",
  },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header
        actions={
          <Button variant="secondary" onClick={() => navigate("/login")}>
            התחברות
          </Button>
        }
      />

      <main className="landing">
        <section className="container landing__hero">
          <h1 className="landing__title">Law Prep</h1>
          <h2 className="landing__subtitle">הכנה למבחן לשכת עורכי הדין</h2>
          <p className="landing__description">
            פלטפורמה ללימוד עצמי לקראת בחינות ההסמכה של לשכת עורכי הדין בישראל.
            תרגלו שאלות לפי נושא, בצעו סימולציות מלאות ועקבו אחרי ההתקדמות שלכם
            במקום אחד.
          </p>

          <div className="landing__actions">
            <Button onClick={() => navigate("/login")}>התחברות</Button>
            <Button variant="secondary" onClick={() => navigate("/register")}>
              הרשמה
            </Button>
          </div>
        </section>

        <section className="container landing__highlights">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="landing__card">
              <h3 className="landing__card-title">{item.title}</h3>
              <p className="landing__card-text">{item.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="landing__footer">
        <div className="container landing__footer-inner">
          <span>Law Prep</span>
          <HealthStatus />
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
