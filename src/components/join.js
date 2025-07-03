import React, { useRef, useEffect } from "react";
import StarBackground from "./StarBackground";
import { FaDiscord } from "react-icons/fa";
import img from "../Assets/join_serv_img.jpg";
import { useState } from "react";

export default function Join() {
  return (
    <section id="serveur">
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
              <img src={img} alt="Logo" />
          </div>
          <div
            className="join-info"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "2em",
              flexWrap: "wrap",
              margin: "2em auto"
            }}
          >
            <div className="join-ip" style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
              <h2>LE SERVEUR :</h2>
              <h2>83.143.117.51:20002</h2>
            </div>
            <div className="join-discord" style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
              <h2 style={{ marginBottom: "0" }}>NOTRE DISCORD</h2>
              <a
                href="https://discord.gg/jbsVZrPkNM"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFF", fontSize: "3rem", textDecoration: "none" }}
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}