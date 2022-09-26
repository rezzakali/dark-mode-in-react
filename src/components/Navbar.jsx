import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import './styles/navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand">
          Navbar
          <div className="themeWrapper">
            <button>
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <span
                    onClick={() => {
                      setDarkMode(!darkMode);
                      changeTheme(darkMode ? themes.light : themes.dark);
                    }}
                  >
                    <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
                  </span>
                )}
              </ThemeContext.Consumer>
            </button>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                aria-current="page"
                smooth="true"
                to="#"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth="true" to="#about">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth="true" to="#contact">
                Contact
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth="true" to="#blog">
                Blog
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
