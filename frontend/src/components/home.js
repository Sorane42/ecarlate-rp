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
        if (
          data &&
          data.data &&
          data.data.length > 0 &&
          data.data[0].attributes
        ) {
          setPlayers(data.data[0].attributes.players);
        } else {
          setPlayers("N/A");
        }
      })
      .catch(() => setPlayers("N/A"));
  }, []);

  return (
    <div className="home-bg"
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
  );
};

export default Home;