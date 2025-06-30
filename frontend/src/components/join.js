import React, { useRef, useEffect } from "react";
import StarBackground from "./StarBackground";
import { FaDiscord } from "react-icons/fa";
import img from "../Assets/join_serv_img.jpg";

export default function Join() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <StarBackground />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5em" }}>REJOIGNEZ L'EMPIRE</h1>
        <div className="join-img">
            <img src={img} alt="Logo" style={{maxWidth: "50%", height: "auto", marginBottom: "1em", borderRadius: "30px", borderColor: "white", borderStyle: "solid", borderWidth: "5px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "500px",
            maxWidth: "95vw",
            margin: "2em 0",
            gap: "2em"
          }}
        >
            <div className="join-ip" style={{ flex: 1, textAlign: "right", justifyItems: "center" }}>
                <h2>LE SERVEUR :</h2>
                <h2>83.143.117.51:20002</h2>
            </div>
            <div className="join-discord" style={{ flex: 1, textAlign: "left", justifyItems: "center"  }}>
              <h2>NOTRE DISCORD</h2>
              <a
                href="https://discord.gg/jbsVZrPkNM"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFF", fontSize: "1.5rem", textDecoration: "none" }}
              >
                <FaDiscord style={{ marginRight: "0.5em" }} />
              </a>
            </div>
        </div>
      </main>
    </div>
  );
}