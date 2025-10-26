// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { brandingAssets } from '../../Date';
import { Link } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoBlancoNaranja = brandingAssets.find(asset => asset.id === '2')?.img;

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <div className="logo-placeholder">
              <img src={logoBlancoNaranja} alt="Logo pyroweb" />
            </div>
          </div>
          <nav className="nav-menu">
            <ul className={isMenuOpen ? 'active' : ''}>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Servicios
                </Link>
              </li>
               <li>
                <Link
                  to="faq"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;