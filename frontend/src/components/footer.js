import React from "react";
import "../style.css";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-logo">
        <span>Ecarlate RP</span>
      </div>
      <ul className="footer-items">
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

    <div className="footer-copyright">
      &copy; {new Date().getFullYear()} Ecarlate RP. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;