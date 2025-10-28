import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "is-active" : "";
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <Link className="brand" to="/">
            <span className="brand-logo">F1</span>
          </Link>

          <button
            id="nav-toggle"
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="top-nav">
            <ul id="primary-menu" className={`menu ${menuOpen ? "open" : ""}`}>
              <li>
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/season" className={isActive("/season")}>
                  Season
                </Link>
              </li>
              <li>
                <Link to="/drivers" className={isActive("/drivers")}>
                  Drivers
                </Link>
              </li>
              <li>
                <Link to="/constructors" className={isActive("/constructors")}>
                  Constructors
                </Link>
              </li>
              <li>
                <Link to="/circuits" className={isActive("/circuits")}>
                  Circuits
                </Link>
              </li>
              <li>
                <Link to="/history" className={isActive("/history")}>
                  History
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive("/about")}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="container">
          <p>2025 Formula 1 Fan Site</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
