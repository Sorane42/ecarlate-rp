import React from "react";
import { useNavigate } from "react-router-dom";

const ReglementButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <hr className="section-hr" />
      <section
        id="reglement"
        style={{
          background: "#000",
          padding: "40px 0"
        }}
      >
        <h1 className="text-center" style={{ textTransform: "uppercase", color: "#fff" }}>Le règlement</h1>
        <p className="text-center" style={{ maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
          Avant de rejoindre notre serveur, nous vous demandons de lire notre règlement. Il est essentiel pour garantir une expérience de jeu agréable et respectueuse pour tous les membres de la communauté.
        </p>
        <button
          className="reglement-btn"
          onClick={() => navigate("/reglement")}
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            border: "none",
            background: "#222",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            margin: "20px auto",
            display: "block"
          }}
        >
          Voir le règlement complet
        </button>
      </section>
      <hr className="section-hr" />
    </>
  );
};

export default ReglementButton;