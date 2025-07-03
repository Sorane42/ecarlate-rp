import React from "react";
import "../style.css";
import { FaDiscord, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <hr className="footer-hr"></hr>
    <div className="container footer-container" style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  minHeight: 80
}}>
      <div className="footer-logo" style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        Ecarlate RP
      </div>
      <ul className="footer-items" style={{
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    margin: 0,
    padding: 0,
    listStyle: "none"
  }}>
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
        <li>
          <a href="https://www.instagram.com/empire_rp_ecarlate/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-copyright" style={{ textAlign: "center", marginTop: 12 }}>
      Projet de fans, non affilié à Disney/Lucasfilm.
      <br />
      <a href="/mentions-legales" style={{ color: "#fff", textDecoration: "underline" }}>
        Mentions légales
      </a>
      <br />
      &copy; {new Date().getFullYear()} Ecarlate RP.
    </div>
  </footer>
);

export default Footer;