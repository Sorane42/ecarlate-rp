import React from "react";
import LogoDSO from "../Assets/logo_DSO.png";
import Logo1LegionAssaut from "../Assets/logo_1LegionAssaut.png";
import LogoSC from "../Assets/logo_SC.png";
import LogoForcesSpeciales from "../Assets/logo_Forces_speciales.png";

const regiments = [
  {
    name: "Département de Sécurité Opérationnelle",
    logo: LogoDSO,
    description: "Description du Département de Sécurité Opérationnelle.",
  },
  {
    name: "1ère Légion d'Assaut",
    logo: Logo1LegionAssaut,
    description: "Description de la 1ère Légion d'Assaut.",
  },
  {
    name: "Starfighter Corps",
    logo: LogoSC,
    description: "Description du Starfighter Corps.",
  },
  {
    name: "Forces spéciales",
    logo: LogoForcesSpeciales,
    description: "Description des Forces spéciales.",
  },
];

export default function Regiment() {
  return (
    <section id="regiments">
      <div className="container" style={{ padding: "4rem 0" }}>
        <h1 className="text-center mb-5" style={{ textTransform: "uppercase", color: "#fff" }}>Les régiments</h1>
        <div className="row justify-content-center">
          {regiments.map((reg, idx) => (
            <div
              className="col-12 col-md-6 regiment-col"
              key={idx}
              style={{
                minHeight: 370,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 0"
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: 4,
                  textTransform: "uppercase",
                  color: "#fff",
                  textAlign: "center",
                  minHeight: 64
                }}
              >
                {reg.name}
              </h3>
              <div className="regiment-logo-wrapper" style={{ margin: "8px 0" }}>
                <img src={reg.logo} alt={reg.name} />
              </div>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: 320,
                  color: "#fff",
                  minHeight: "48px"
                }}
              >
                {reg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}