import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img_test from "../Assets/logo.png";
import { BsDiscord } from "react-icons/bs";
import "../style.css";

const partners = [
  { name: "Partenaire 1", logo: img_test, url: "https://partenaire1.com", desc: "Description du partenaire" },
  { name: "Partenaire 2", logo: img_test, url: "https://partenaire2.com", desc: "Description du partenaire" },
  { name: "Partenaire 3", logo: img_test, url: "https://partenaire3.com", desc: "Description du partenaire" },
  { name: "Partenaire 4", logo: img_test, url: "https://partenaire4.com", desc: "Description du partenaire" },
  { name: "Partenaire 5", logo: img_test, url: "https://partenaire5.com", desc: "Description du partenaire" },
  { name: "Partenaire 6", logo: img_test, url: "https://partenaire6.com", desc: "Description du partenaire" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
};

function PartnersCarousel() {
  return (
    <section id="partenaires">
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 className="text-center mb-5" style={{ textTransform: "uppercase", color: "#fff" }}>NOS PARTENAIRES</h1>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={2000}
          infinite={true}
          showDots={true}
          arrows={true}
          slidesToSlide={1}
        >
          {partners.map((partner, idx) => (
            <div className="partner-card-carousel" key={idx}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="partner-img-wrapper">
                  <img src={partner.logo} alt={partner.name} />
                  <div className="partner-overlay">{partner.desc}</div>
                </div>
              </a>
              <div className="partner-name-btn">
                <span className="icon"><BsDiscord /></span>
                {partner.name}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default PartnersCarousel;