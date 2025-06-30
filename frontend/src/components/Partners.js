import React, { useState } from "react";
import StarBackground from "./StarBackground";
import img_test from "../Assets/logo.png";

// Exemple de partenaires (remplace par tes vraies données)
const partners = [
  { name: "Partenaire 1", logo: img_test, url: "https://partenaire1.com" },
  { name: "Partenaire 2", logo: img_test, url: "https://partenaire2.com" },
  { name: "Partenaire 3", logo: img_test, url: "https://partenaire3.com" },
  { name: "Partenaire 4", logo: img_test, url: "https://partenaire4.com" },
  { name: "Partenaire 5", logo: img_test, url: "https://partenaire5.com" },
];

export default function Partners() {
  const [index, setIndex] = useState(0);

  // Affiche 3 partenaires à la fois
  const visiblePartners = partners.slice(index, index + 3);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < partners.length - 3) setIndex(index + 1);
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <StarBackground />
      <main className="partners-main">
        <h1 style={{ marginBottom: "2rem" }}>NOS PARTENAIRES</h1>
        <div className="partners-carousel">
          <button
            onClick={prev}
            disabled={index === 0}
            className="partners-arrow"
            aria-label="Précédent"
          >
            &#8592;
          </button>
          <div className="partners-list">
            {visiblePartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
                <span className="partner-name">{partner.name}</span>
              </a>
            ))}
          </div>
          <button
            onClick={next}
            disabled={index >= partners.length - 3}
            className="partners-arrow"
            aria-label="Suivant"
          >
            &#8594;
          </button>
        </div>
      </main>
    </div>
  );
}