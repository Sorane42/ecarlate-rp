import React from "react";
import StarBackground from "../components/StarBackground";
import NavbarReglement from "../components/NavbarReglement";
import Footer from "../components/footer";

export default function MentionsLegales() {
  return (
    <div className="mentions-legales">
        <div className="mentions-content" >
        <NavbarReglement />
        <StarBackground />
        <h1 style={{ textAlign: "center", marginBottom: 32, paddingTop: "110px" }}>Mentions légales</h1>
        <p>
            <strong>Ce site est un projet de fans, non affilié à Disney ou Lucasfilm.</strong><br />
            Star Wars™ est une marque déposée de Lucasfilm Ltd. Ce site n’a aucune vocation commerciale et ne génère aucun revenu. Aucun droit d’auteur sur Star Wars n’est revendiqué.
        </p>
        {/*<p>
            <strong>Responsable du site :</strong><br />
            Ecarlate RP<br />
            Contact : empire.ecarlate@gmail.com
        </p>*/}
        <p>
            <strong>Création et développement du site :</strong><br />
            Site réalisé par <a href="https://www.linkedin.com/in/sacha-desquesnes/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", color: "#fff", textDecoration: "none" }}>Sacha DESQUESNES</a> pour la communauté Ecarlate RP.
        </p>
        {/*<p>
            <strong>Hébergement :</strong><br />
            [Indique ici l’hébergeur si tu veux, sinon retire cette section]
        </p>*/}
        <p>
            <strong>Utilisation des données :</strong><br />
            Ce site ne collecte aucune donnée personnelle à des fins commerciales. Les éventuelles données collectées via Discord ou autres plateformes sont soumises à leurs propres politiques de confidentialité.
        </p>
        {/*<p style={{ fontSize: "0.95em", opacity: 0.7 }}>
            Pour toute question ou demande de retrait de contenu, merci de contacter l’équipe via le Discord ou l’adresse email ci-dessus.
        </p>*/}
        </div>
        <Footer />
    </div>
  );
}