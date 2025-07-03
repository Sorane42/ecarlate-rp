import React, { useEffect, useState } from "react";
import bgImage from "../Assets/home.png";
import logoText from "../Assets/logo_text.png";
import { FaUser } from "react-icons/fa";

const SERVER_ID = "83.143.117.51:20002";

const Home = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.battlemetrics.com/servers?filter[search]=${SERVER_ID}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Filtre le bon serveur dans la liste
        const server = data.data.find(
          (srv) =>
            srv.attributes &&
            srv.attributes.ip &&
            srv.attributes.port &&
            `${srv.attributes.ip}:${srv.attributes.port}` === SERVER_ID
        );
        if (server && server.attributes) {
          const attr = server.attributes;
          setPlayers(
            typeof attr.players === "number"
              ? attr.players
              : Array.isArray(attr.players)
              ? attr.players.length
              : "N/A"
          );
        } else {
          setPlayers("N/A");
        }
      })
      .catch(() => setPlayers("N/A"));
  }, []);

  return (
    <section id="home">
      <div
        className="home-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="logo-text">
          <img src={logoText} alt="Logo texte" />
        </div>
        <div className="home-content">
          <h1>Serveur Roleplay Star Wars Garry’s Mod</h1>
        </div>
        <div className="server-info">
          <span style={{ fontWeight: "bold" }}>Serveur :</span> {SERVER_ID}
          <FaUser />{" "}
          {players !== null ? players : "0"}
        </div>
      </div>
    </section>
  );
};

export default Home;