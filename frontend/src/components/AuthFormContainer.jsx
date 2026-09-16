import { Link } from "react-router-dom";
import Header from "./Header";
import "./AuthFormContainer.css";

/**
 * Shared layout for the login / register screens:
 * header, centered card with title + subtitle, form slot and a footer link.
 */
function AuthFormContainer({
  title,
  subtitle,
  onSubmit,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <div className="page">
      <Header />
      <main className="auth">
        <div className="auth__card">
          <h1 className="auth__title">{title}</h1>
          {subtitle ? <p className="auth__subtitle">{subtitle}</p> : null}

          <form className="auth__form" onSubmit={onSubmit} noValidate>
            {children}
          </form>

          <p className="auth__footer">
            {footerText}{" "}
            <Link to={footerLinkTo}>{footerLinkText}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default AuthFormContainer;
