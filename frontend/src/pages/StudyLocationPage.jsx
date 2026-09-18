import { useState } from "react";
import Header from "../components/Header";
import "./StudyLocationPage.css";

const STUDY_LOCATIONS = [
  {
    value: "israel",
    title: "לימודים בישראל",
    description:
      "למי שלמד או לומד משפטים במוסד אקדמי בישראל — אוניברסיטה או מכללה.",
  },
  {
    value: "abroad",
    title: "לימודים בחו״ל",
    description:
      "למי שלמד או לומד משפטים מחוץ לישראל, למשל בירדן, בג׳נין או במוסד אקדמי זר אחר.",
  },
];

function StudyLocationPage() {
  // Temporary client-side state; will be persisted to the backend in a later step.
  const [studyLocation, setStudyLocation] = useState(null);

  const selectedOption = STUDY_LOCATIONS.find(
    (option) => option.value === studyLocation,
  );

  return (
    <div className="page">
      <Header />

      <main className="container study-location">
        <p className="study-location__eyebrow">התאמה אישית</p>
        <h1 className="study-location__title" id="study-location-title">
          איפה למדת או אתה לומד משפטים?
        </h1>
        <p className="study-location__subtitle">
          כך נוכל להתאים את תהליך ההכנה לבחינה לרקע האקדמי שלך.
        </p>

        <div
          className="study-location__options"
          role="radiogroup"
          aria-labelledby="study-location-title"
        >
          {STUDY_LOCATIONS.map((option) => {
            const isSelected = option.value === studyLocation;

            return (
              <label
                key={option.value}
                className={`location-option${isSelected ? " location-option--selected" : ""}`}
              >
                <input
                  type="radio"
                  name="studyLocation"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => setStudyLocation(option.value)}
                  className="location-option__input"
                />
                <span className="location-option__indicator" aria-hidden="true" />
                <span className="location-option__title">{option.title}</span>
                <span className="location-option__description">
                  {option.description}
                </span>
              </label>
            );
          })}
        </div>

        <p className="study-location__status" aria-live="polite">
          {selectedOption
            ? `בחרת: ${selectedOption.title}. השלב הבא בהתאמה האישית יתווסף בקרוב.`
            : ""}
        </p>
      </main>
    </div>
  );
}

export default StudyLocationPage;
