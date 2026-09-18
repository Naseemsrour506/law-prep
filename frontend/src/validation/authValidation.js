// Limits mirror the backend UserCreate schema.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 128;

function validateEmail(email) {
  if (!email.trim()) {
    return "יש להזין כתובת אימייל";
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    return "כתובת האימייל אינה תקינה";
  }
  return undefined;
}

function validateNewPassword(password) {
  if (!password) {
    return "יש להזין סיסמה";
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `הסיסמה חייבת להכיל לפחות ${PASSWORD_MIN_LENGTH} תווים`;
  }
  if (password.length > PASSWORD_MAX_LENGTH) {
    return `הסיסמה יכולה להכיל עד ${PASSWORD_MAX_LENGTH} תווים`;
  }
  return undefined;
}

function validateFullName(fullName) {
  const trimmed = fullName.trim();
  if (!trimmed) {
    return "יש להזין שם מלא";
  }
  if (trimmed.length < NAME_MIN_LENGTH) {
    return `השם חייב להכיל לפחות ${NAME_MIN_LENGTH} תווים`;
  }
  if (trimmed.length > NAME_MAX_LENGTH) {
    return `השם יכול להכיל עד ${NAME_MAX_LENGTH} תווים`;
  }
  return undefined;
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return "יש לאמת את הסיסמה";
  }
  if (password !== confirmPassword) {
    return "הסיסמאות אינן תואמות";
  }
  return undefined;
}

/** Drops fields without an error so callers can check `hasErrors`. */
function compact(errors) {
  return Object.fromEntries(
    Object.entries(errors).filter(([, message]) => message),
  );
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}

export function validateLogin({ email, password }) {
  return compact({
    email: validateEmail(email),
    password: password ? undefined : "יש להזין סיסמה",
  });
}

export function validateRegister({ fullName, email, password, confirmPassword }) {
  return compact({
    fullName: validateFullName(fullName),
    email: validateEmail(email),
    password: validateNewPassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  });
}
