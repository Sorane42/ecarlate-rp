import React from "react";
import Logo from "../Assets/logo.png";
import "../style.css";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => (
  <nav>
    <div className="navbar">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <ul className="menu-items">
          <li><a href="#">Rejoindre le serveur</a></li>
          <li><a href="#">Règlement</a></li>
          <li><a href="#">Partenaires</a></li>
          <li><a href="#">Autres</a></li>
          <li>
              <a href="https://discord.gg/jbsVZrPkNM" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="social-icon" />
              </a>
          </li>
          <li>
              <a href="https://www.tiktok.com/@empire.ecarlate" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
              </a>
          </li>
          <li>
              <a href="https://www.youtube.com/@EmpireRPEcarlate" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
              </a>
          </li>
        </ul>
      </div>
      <hr className="navbar-hr" />
    </div>
  </nav>
);

export default Navbar;