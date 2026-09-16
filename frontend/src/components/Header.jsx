import { Link } from "react-router-dom";
import "./Header.css";

/**
 * App header. `actions` renders optional content on the far side (e.g. buttons).
 */
function Header({ actions = null }) {
  return (
    <header className="app-header">
      <div className="container app-header__inner">
        <Link to="/" className="app-header__brand">
          Law Prep
        </Link>
        {actions ? <div className="app-header__actions">{actions}</div> : null}
      </div>
    </header>
  );
}

export default Header;
