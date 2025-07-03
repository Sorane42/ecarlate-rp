import React from "react";
import StarBackground from "../components/StarBackground";
import NavbarReglement from "../components/NavbarReglement";
import Footer from "../components/footer";

const regles = [
  {
    titre: "Le Freekill (FK)",
    texte: `Le Freekill, ou DM (Deathmatch) sur d'autres serveurs, est strictement interdit. Cela consiste à tuer quelqu’un sans raison valable, c’est-à-dire sans justification RP sérieuse et construite. Un meurtre doit être une décision grave pour votre personnage, résultant d’un conflit crédible ou d’un acte planifié dans un contexte logique (vengeance, trahison, mission d’exécution ordonnée, etc.). Utiliser la violence létale pour une insulte, un vol mineur ou un simple désaccord est considéré comme hors RP et sera sanctionné.`
  },
  {
    titre: "Le Metagaming",
    texte: `Le Metagaming désigne l’utilisation d’informations obtenues en dehors du cadre RP (comme Discord, une discussion vocale OOC ou le HUD du jeu) pour influencer les actions de votre personnage. Par exemple, reconnaître un joueur grâce à son pseudonyme ou savoir qu’il est recherché parce que vous avez vu une annonce HRP. Ce comportement brise l’immersion et donne un avantage injuste. Vous devez jouer uniquement avec les informations que votre personnage peut légitimement connaître.`
  },
  {
    titre: "Le Powergaming",
    texte: `Le Powergaming consiste à imposer des actions irréalistes ou abusives à un autre joueur sans lui laisser l’occasion de répondre ou de réagir. Cela inclut, par exemple, attacher un joueur sans lui laisser le temps de tenter une fuite ou simuler une action trop puissante sans contrainte logique (comme "je te tranche la gorge et tu meurs instantanément"). Le RP doit rester interactif et équilibré, chaque joueur ayant le droit de jouer ses réactions dans des limites crédibles.`
  },
  {
    titre: "Le FearRP",
    texte: `Le FearRP signifie que votre personnage doit ressentir la peur de la mort ou du danger, comme dans la réalité. Si vous êtes menacé par plusieurs personnes armées, vous ne devez pas tenter de sortir une arme ou de vous échapper sans raison valable. Vous devez jouer la peur, coopérer ou négocier pour sauver votre vie. Ignorer cette logique nuit gravement au réalisme et à la cohérence du RP.`
  },
  {
    titre: "L’Initiative RP et l’Interaction",
    texte: `Toute action RP majeure (agression, enlèvement, vol, arrestation, etc.) doit être précédée d’une interaction verbale claire et réaliste. L’initiative RP ne doit pas se traduire par une action immédiate sans dialogue ("rush tazer" ou "rush menottage" par exemple). Le but du RP est de créer des scènes vivantes et crédibles, pas de rechercher la victoire mécanique ou l’efficacité.`
  },
  {
    titre: "Le NLR (New Life Rule)",
    texte: `Le NLR interdit à un joueur de retourner sur les lieux de sa mort pendant 5 min (sauf mission). Une fois mort, votre personnage oublie les événements ayant mené à sa mort et ne doit pas chercher à se venger ou intervenir à nouveau dans la même scène. La mort est un reset narratif temporaire : vous ne pouvez pas continuer comme si de rien n’était.`
  },
  {
    titre: "Le HRP en jeu",
    texte: `Les discussions HRP (hors rôleplay) doivent se faire dans les canaux prévus à cet effet (ex : /ooc ou Discord). Écrire des messages HRP dans le chat RP ou en plein milieu d’une scène nuit à l’immersion. Si vous avez un problème technique ou un désaccord, contactez un membre du staff sans interrompre la scène RP en cours.`
  },
  {
    titre: "Le Respect de la Hiérarchie Impériale",
    texte: `Dans un univers comme Empire RP Écarlate, où l’ordre est dicté par une autorité impériale stricte, le respect de la hiérarchie est fondamental. Un soldat qui insulte un officier ou refuse un ordre clair sans raison RP s’expose à des sanctions en jeu (arrestation, exécution RP). Cela contribue à l’immersion et à la structure du RP militaire et politique du serveur.`
  },
  {
    titre: "Le RDM de Masse ou Terrorisme Gratuit",
    texte: `Les attaques à la bombe, les fusillades de masse ou les assassinats de figures clés sans préparation RP approfondie sont interdits. Ces actes doivent faire l’objet d’une planification RP sérieuse (réunions secrètes, corruption, recrutement, etc.) et d’une autorisation si nécessaire. Un acte terroriste doit être un événement marquant, pas une simple envie de "faire le chaos".`
  },
  {
    titre: "Le Respect entre Joueurs",
    texte: `Même en cas de conflit RP intense, le respect entre joueurs est obligatoire. Les insultes HRP, les provocations dans le chat, le harcèlement ou les attaques personnelles n’ont pas leur place. Ce serveur est un espace de jeu partagé : une attitude toxique sera sanctionnée. Si vous avez un litige, passez par les outils de communication prévus ou signalez-le à la modération.`
  },
  {
    titre: "Les Scènes Adultes ou Sensibles",
    texte: `Les scènes impliquant de la torture, des exécutions publiques, des menaces graves ou des thèmes sensibles doivent être jouées avec tact. Le consentement explicite des joueurs est essentiel. Évitez tout contenu qui pourrait choquer ou mettre mal à l’aise, surtout sans avertissement. Le serveur peut imposer une limite ou un cadre spécifique à ces scènes.`
  },
  {
    titre: "Interdiction d’utiliser des bugs ou des cheats",
    texte: `L’usage de bugs (glitchs) ou de logiciels de triche est strictement interdit. Cela inclut, sans s’y limiter, les bugs de collision, d’invisibilité, de duplication d’objets ou de téléportation non prévue par le jeu. Toute exploitation intentionnelle sera sanctionnée sévèrement, allant du kick à un bannissement permanent.`
  },
  {
    titre: "Interdiction du Bunny Up (se déplacer en sautant)",
    texte: `Le déplacement via "bunny hopping" est interdit. Ce comportement nuit à l'immersion RP et donne un avantage injuste en termes de mobilité. Se déplacer de manière réaliste fait partie intégrante du respect de l’univers Star Wars et de l’expérience immersive du serveur.`
  },
  {
    titre: "Interdiction du Force RP",
    texte: `Il est interdit de forcer des actions sur d'autres joueurs sans leur consentement RP. Cela inclut : forcer une exécution, une fouille, un emprisonnement ou tout autre événement RP majeur sans l'accord ou la possibilité de réaction de l'autre joueur. Le RP doit toujours être basé sur une interaction équitable et crédible.`
  },
  {
    titre: "Il est interdit de dénigrer ou d’insulter un régiment",
    texte: `Tout comportement visant à rabaisser, ridiculiser ou insulter un régiment, hors RP, est proscrit. Chaque régiment a un rôle et une valeur au sein de l’Empire. Le respect inter-régimentaire est fondamental pour une bonne ambiance et une hiérarchie cohérente.`
  },
  {
    titre: "Il est interdit d’insulter ou de harceler un ou plusieurs joueurs",
    texte: `Tout propos insultant, discriminatoire ou comportement de harcèlement (en jeu, sur Discord ou toute autre plateforme liée au serveur) est formellement interdit. L’univers RP ne justifie en aucun cas des attitudes toxiques. Le respect mutuel est une priorité.`
  },
  {
    titre: "Interdiction de faire de la publicité",
    texte: `Il est formellement interdit de faire de la publicité pour d'autres serveurs, communautés, sites web ou plateformes, que ce soit via le chat, les pseudos ou tout autre moyen de communication en jeu. Cette règle s’applique à tout type de publicité, même indirecte.`
  },
  {
    titre: "Obligation de jouer son Pain RP",
    texte: `Chaque joueur est tenu de respecter son "Pain RP", c’est-à-dire les conséquences logiques de ses blessures ou de son statut. Exemple : un soldat blessé à la jambe ne pourra pas courir comme si de rien n’était. Ce respect de la logique améliore considérablement la qualité du RP.`
  },
  {
    titre: "Obligation d’adopter un comportement RP cohérent",
    texte: `Un comportement en jeu doit rester cohérent avec l’univers de Star Wars et le rôle tenu par le joueur. Cela inclut le langage, les réactions, la hiérarchie militaire et les interactions sociales. Les comportements absurdes, incohérents ou volontairement hors contexte sont prohibés.`
  },
  {
    titre: "Obligation d’avoir un pseudo RP correct",
    texte: `Chaque joueur doit porter un nom de personnage RP crédible, en accord avec l’univers Star Wars. Les jeux de mots, références à des personnalités publiques, noms humoristiques ou vulgaires sont interdits. Des pseudos réalistes et respectueux sont attendus.`
  },
  {
    titre: "Obligation de faire spawn un véhicule dans une zone adéquate",
    texte: `Tout spawn de véhicule (chasseur, transport, etc.) doit se faire dans les zones prévues à cet effet, comme les hangars ou les plateformes d’atterrissage. Le spawn sauvage peut causer des bugs, nuire au RP ou provoquer des collisions inutiles.`
  },
  {
    titre: "Règles des propositions dans les boîtes à idées",
    texte: `Les suggestions proposées doivent respecter un format clair, structuré et constructif. Elles doivent être formulées avec respect, sans attaques personnelles ni revendications excessives. Toute proposition non sérieuse ou irrespectueuse sera ignorée.`
  }
];

const Reglement = () => (
  <div className="reglement">
    <NavbarReglement />
    <StarBackground />
    <div
      className="reglement-content"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        color: "#fff",
        padding: "40px 16px",
        paddingTop: "110px"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>
        Règlement serveur Empire [ÉCARLATE]
      </h1>
      <h2>Notions de Roleplay</h2>
      <ol style={{ paddingLeft: 0, listStylePosition: "inside" }}>
        {regles.map((regle, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: "32px",
              lineHeight: 1.7,
              listStyle: "none"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 8
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1.1rem", minWidth: 24, textAlign: "right" }}>
                {idx + 1}.
              </span>
              <span style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign: "center" }}>
                {regle.titre}
              </span>
            </div>
            <div style={{ display: "block", textAlign: "justify" }}>
              {regle.texte}
            </div>
          </li>
        ))}
      </ol>
    </div>
    <Footer />
  </div>
);

export default Reglement;