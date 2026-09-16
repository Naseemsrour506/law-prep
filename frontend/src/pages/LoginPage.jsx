import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormContainer from "../components/AuthFormContainer";
import TextField from "../components/TextField";
import Button from "../components/Button";

const EMPTY_FORM = { email: "", password: "" };

function LoginPage() {
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

    if (!form.email.trim()) {
      nextErrors.email = "יש להזין כתובת אימייל";
    }

    if (!form.password) {
      nextErrors.password = "יש להזין סיסמה";
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

    // ההתחברות מול השרת תתווסף בהמשך.
    navigate("/dashboard");
  }

  return (
    <AuthFormContainer
      title="התחברות"
      subtitle="הזינו את פרטי החשבון שלכם כדי להמשיך בלימוד."
      onSubmit={handleSubmit}
      footerText="עדיין אין לכם חשבון?"
      footerLinkText="יצירת חשבון"
      footerLinkTo="/register"
    >
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
        autoComplete="current-password"
        placeholder="הזינו סיסמה"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Button type="submit" fullWidth>
        התחברות
      </Button>
    </AuthFormContainer>
  );
}

export default LoginPage;
