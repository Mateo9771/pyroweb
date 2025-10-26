// src/components/Hero.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './Hero.css';
import {brandingAssets, HeroDetails} from '../../Date';

function Hero() {
  
  const logoNaranja = brandingAssets.find(asset => asset.id === '8')?.img;

  const title = HeroDetails.find(item => item.class === 'hero-title')?.detail;
  const subtitle = HeroDetails.find(item => item.class === 'hero-subtitle')?.detail;
  const ctaText = HeroDetails.find(item => item.class === 'hero-cta')?.detail;

  // Generar metaetiquetas dinámicas
  const metaTitle = `${title} - Innovación Digital`; // Ejemplo combinando título
  const metaDescription = subtitle || 'Soluciones digitales innovadoras con PyroWeb.';
  const metaKeywords = 'desarrollo web, landing page, app web, IA, PyroWeb';


  return (
      <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {/* Opcional: Open Graph para redes sociales */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={logoNaranja || ''} />
      </Helmet>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <a href="#contact" className="hero-cta">{ctaText}</a>
        </div>
        <div className="hero-image-placeholder">
          <img src={logoNaranja} alt="Logo naranja" />
        </div>
      </section>
    </>
  );
}

export default Hero;