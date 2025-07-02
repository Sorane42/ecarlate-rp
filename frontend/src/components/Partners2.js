import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img_test from "../Assets/logo.png";

// Exemple de partenaires (remplace par tes vraies données)
const partners = [
  { name: "Partenaire 1", logo: img_test, url: "https://partenaire1.com" },
  { name: "Partenaire 2", logo: img_test, url: "https://partenaire2.com" },
  { name: "Partenaire 3", logo: img_test, url: "https://partenaire3.com" },
  { name: "Partenaire 4", logo: img_test, url: "https://partenaire4.com" },
  { name: "Partenaire 5", logo: img_test, url: "https://partenaire5.com" },
];

export default function Partners2() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ marginBottom: "2rem", color: "#fff" }}>NOS PARTENAIRES</h1>
      <div style={{ width: "100%", maxWidth: 500 }}>
        <Carousel
          indicators={partners.length > 1}
          interval={null}
          style={{ borderRadius: "32px", overflow: "hidden", background: "rgba(24,24,27,0.85)" }}
        >
          {partners.map((partner) => (
            <Carousel.Item key={partner.name}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  padding: "2.5rem 1rem 2rem 1rem",
                  minHeight: 350,
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "contain",
                    marginBottom: "2rem",
                  }}
                />
                <span style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
                  {partner.name}
                </span>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}