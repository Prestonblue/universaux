import React from "react";

export default function Services() {
  const services = [
    { title: "Réparation Mécanique", desc: "Diagnostic et réparation professionnelle pour tous types de véhicules." },
    { title: "Entretien", desc: "Vidange, freins, pneus et plus encore pour garder votre voiture en parfait état." },
    { title: "Vente de Véhicules", desc: "Voitures d'occasion contrôlées et garanties." },
  ];

  return (
    <section id="services" className="services">
      <h2 data-aos="fade-up">Nos Services</h2>
      <div className="service-list">
        {services.map((s, index) => (
          <div className="service-card" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
