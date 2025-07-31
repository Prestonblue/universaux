import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">Contactez-nous</h2>
      <form data-aos="fade-up" data-aos-delay="200">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
