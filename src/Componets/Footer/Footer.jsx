// src/components/Footer.js
// src/components/Footer.js
import React from 'react';
import { SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl';
import './Footer.css';
import { brandingAssets } from '../../Date';
import { Link } from 'react-scroll';

function Footer() {
  const logoBlancoNaranja = brandingAssets.find(asset => asset.id === '5')?.img;

  return (
    <footer className="footer">
      <div className="footer-logo-placeholder">
        <img src={logoBlancoNaranja} alt="Logo PyroWeb" />
      </div>
      <div className="footer-nav">
        <Link to="home" smooth={true} duration={500}>
          Inicio
        </Link>
        <Link to="services" smooth={true} duration={500}>
          Servicios
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          Portafolio
        </Link>
        <Link to="faq" smooth={true} duration={500}>
          Preguntas Frecuentes
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contacto
        </Link>
      </div>
      <div>
        <h3>Te encendemos en el mundo digital</h3>
        <p>pyroweb.bs.as@gmail.com</p>
        <p>+54 11 6948 8320</p>
      </div>
      <div className="footer-pyro">
        <p>© 2025 PyroWeb. Todos los derechos reservados.</p>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/dev.pyroweb/" target="_blank">
          <SlSocialInstagram />
        </a>
        <a href="https://youtube.com/@pyroweb-y8k?si=EV8Q4kgsBH8yv7pg" target="_blank">
          <SlSocialYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;