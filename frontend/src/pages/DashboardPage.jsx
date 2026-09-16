import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import "./DashboardPage.css";

const SECTIONS = [
  {
    title: "תרגול לפי נושא",
    text: "בחרו נושא מתוך חומר הבחינה ותרגלו שאלות ממוקדות.",
  },
  {
    title: "סימולציות ומבחנים",
    text: "מבחן מלא בתנאי בחינה, עם מגבלת זמן ומשוב בסיום.",
  },
  {
    title: "היסטוריית מבחנים",
    text: "צפייה במבחנים קודמים ובתשובות שסימנתם.",
  },
  {
    title: "ההתקדמות שלי",
    text: "סיכום ביצועים לפי נושא וזיהוי נקודות לשיפור.",
  },
];

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header
        actions={
          <Button variant="secondary" onClick={() => navigate("/")}>
            יציאה
          </Button>
        }
      />

      <main className="container dashboard">
        <section className="dashboard__greeting">
          <h1 className="dashboard__title">שלום, סטודנט/ית</h1>
          <p className="dashboard__text">
            כאן מרכזים את הלימוד לקראת בחינת לשכת עורכי הדין. בחרו במה להתחיל
            היום.
          </p>
        </section>

        <section className="dashboard__grid">
          {SECTIONS.map((section) => (
            <article key={section.title} className="dashboard__card">
              <h2 className="dashboard__card-title">{section.title}</h2>
              <p className="dashboard__card-text">{section.text}</p>
              <Button variant="secondary" disabled>
                בקרוב
              </Button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
