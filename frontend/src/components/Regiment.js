import React from "react";
import logo1 from "../Assets/bataillon_logo.png";
import logo2 from "../Assets/purge_logo.png";
import logo3 from "../Assets/starfighter_logo.png";

const regiments = [
  {
    name: "Bataillon d'assaut",
    logo: logo1,
    description: "Description du Bataillon d'assaut.",
  },
  {
    name: "Purge Trooper",
    logo: logo2,
    description: "Description du Purge Trooper.",
  },
  {
    name: "Starfighter Corps",
    logo: logo3,
    description: "Description du Starfighter Corps.",
  },
];

export default function Regiment() {
  return (
    <div className="container" style={{ padding: "4rem 0" }}>
      <h1 className="text-center mb-5" style={{ textTransform: "uppercase", color: "#fff" }}>Les régiments</h1>
      <div className="row justify-content-center">
        {regiments.map((reg, idx) => (
          <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 regiment-col" key={idx}>
            <h3 style={{ fontWeight: "bold", marginBottom: 12, textTransform: "uppercase", color: "#fff" }}>{reg.name}</h3>
            <div className="regiment-logo-wrapper">
              <img
                src={reg.logo}
                alt={reg.name}
              />
            </div>
            <p style={{ textAlign: "center", maxWidth: 320, color: "#fff" }}>{reg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}