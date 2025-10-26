// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-subtitle">
        Estamos aquí para ayudarte a dar el siguiente paso. Completa el formulario y un miembro de nuestro equipo se pondrá en contacto contigo pronto.
      </p>
      <form className="contact-form" action="https://formsubmit.co/pyroweb.bs.as@gmail.com" method="POST">
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contact;