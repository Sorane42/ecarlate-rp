import React, { useRef, useEffect } from "react";
import StarBackground from "./StarBackground";
import { FaDiscord } from "react-icons/fa";
import img from "../Assets/join_serv_img.jpg";
import { useState } from "react";

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
            <img src={img} alt="Logo" />
        </div>
        <div className="container" style={{margin: "2em auto"}}>
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column align-items-md-end align-items-start mb-3 mb-md-0">
              <div className="join-ip" style={{textAlign: "right"}}>
                <h2>LE SERVEUR :</h2>
                <h2>83.143.117.51:20002</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column align-items-md-start align-items-end">
              <div className="join-discord" style={{textAlign: "left"}}>
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
          </div>
        </div>
      </main>
    </div>
  );
}