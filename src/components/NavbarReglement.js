import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { FaDiscord } from "react-icons/fa";
import "../style.css";

const NavbarReglement = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="nav-container">
          {/* Burger menu for mobile */}
          <input
            className="checkbox"
            type="checkbox"
            id="nav-toggle-reglement"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <label htmlFor="nav-toggle-reglement" className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <ul className="menu-items" style={{ marginLeft: "auto" }}>
            <li>
              <a
                href="/"
                className="nav-link"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  padding: "0.7rem 1.2rem",
                  letterSpacing: "1px",
                  paddingLeft: "0",
                  paddingRight: "0"
                }}
              >
                Retour à l'accueil
              </a>
            </li>
            <li>
              <a href="https://discord.gg/jbsVZrPkNM" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="navbar-hr" />
      </div>
      {/* Responsive menu overlay */}
      <style>
        {`
          @media (max-width: 768px) {
            #nav-toggle-reglement:not(:checked) ~ .menu-items {
              transform: translateX(100%);
            }
            #nav-toggle-reglement:checked ~ .menu-items {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavbarReglement;