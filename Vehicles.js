import React from "react";

export default function Vehicles() {
  const cars = [
    { name: "Audi A4", price: "20 000 €", img: "images/audi.webp" },
    { name: "BMW Série 3", price: "25 000 €", img: "images/bmw.webp" },
    { name: "Mercedes C-Class", price: "30 000 €", img: "images/mercedes.webp" },
  ];

  return (
    <section id="vehicles" className="vehicles">
      <h2 data-aos="fade-up">Véhicules à Vendre</h2>
      <div className="vehicle-list">
        {cars.map((car, index) => (
          <div className="vehicle-card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <img src={car.img} alt={`Photo de ${car.name}`} loading="lazy" />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
