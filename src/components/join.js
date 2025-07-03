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
          <div className="container" style={{margin: "2em auto"}}>
            <div className="row">
              <div className="col-12 col-md-6 order-2 order-md-1 mb-3 mb-md-0 text-center">
                <div className="join-ip">
                  <h2>LE SERVEUR :</h2>
                  <h2>83.143.117.51:20002</h2>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2 text-center">
                <div className="join-discord">
                  <h2 style={{ marginBottom: "0"}}>NOTRE DISCORD</h2>
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
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}