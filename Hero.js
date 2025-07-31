import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" data-aos="zoom-in">
        <h1>Votre Garage de Confiance</h1>
        <p>Entretien, réparation et vente de véhicules</p>
        <a href="#services" className="btn" data-aos="fade-up" data-aos-delay="300">
          Découvrir nos services
        </a>
      </div>
    </section>
  );
}
