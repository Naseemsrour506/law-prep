import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormContainer from "../components/AuthFormContainer";
import TextField from "../components/TextField";
import Button from "../components/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const EMPTY_FORM = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "יש להזין שם מלא";
    }

    if (!form.email.trim()) {
      nextErrors.email = "יש להזין כתובת אימייל";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = "כתובת האימייל אינה תקינה";
    }

    if (!form.password) {
      nextErrors.password = "יש להזין סיסמה";
    } else if (form.password.length < MIN_PASSWORD_LENGTH) {
      nextErrors.password = `הסיסמה חייבת להכיל לפחות ${MIN_PASSWORD_LENGTH} תווים`;
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "יש לאמת את הסיסמה";
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "הסיסמאות אינן תואמות";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // ההרשמה מול השרת תתווסף בהמשך.
    navigate("/dashboard");
  }

  return (
    <AuthFormContainer
      title="יצירת חשבון"
      subtitle="הרשמה מהירה כדי להתחיל לתרגל לקראת בחינת הלשכה."
      onSubmit={handleSubmit}
      footerText="כבר יש לכם חשבון?"
      footerLinkText="התחברות"
      footerLinkTo="/login"
    >
      <TextField
        id="fullName"
        label="שם מלא"
        autoComplete="name"
        placeholder="ישראל ישראלי"
        value={form.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />

      <TextField
        id="email"
        label="אימייל"
        type="email"
        autoComplete="email"
        placeholder="name@example.com"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <TextField
        id="password"
        label="סיסמה"
        type="password"
        autoComplete="new-password"
        placeholder="לפחות 8 תווים"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <TextField
        id="confirmPassword"
        label="אימות סיסמה"
        type="password"
        autoComplete="new-password"
        placeholder="הזינו את הסיסמה שוב"
        value={form.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button type="submit" fullWidth>
        הרשמה
      </Button>
    </AuthFormContainer>
  );
}

export default RegisterPage;
