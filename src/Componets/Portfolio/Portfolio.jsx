// src/components/Portfolio.js
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Portfolio.css';
import { PortfolioDetails } from '../../Date';

function Portfolio() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const maxLength = 120;

  const metaTitle = 'Portafolio - PyroWeb | Proyectos Digitales Innovadores';
  const metaDescription = 'Explora el portafolio de PyroWeb, con proyectos como Turnero Web y Catálogo Web, combinando tecnología y creatividad.';
  const metaKeywords = 'portafolio, PyroWeb, proyectos digitales, Turnero Web, Catálogo Web, desarrollo web';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://tu-sitio.com/assets/turnero-video.webp" />
      </Helmet>
      <section className="portfolio" id="portfolio">
        <h2 className="portfolio-title">Nuestro Portafolio</h2>
        <p className="portfolio-subtitle">
          Explora algunos de nuestros proyectos destacados, donde hemos combinado tecnología y creatividad para dar vida a soluciones únicas para nuestros clientes.
        </p>
        <div className="portfolio-grid">
          {PortfolioDetails.map((item) => (
            <div className="portfolio-card" key={item.id}>
              <h3 className="portfolio-item-title">{item.title}</h3>
              <div className="portfolio-media">
                {item.type === 'image' && <img src={item.media} alt={item.title} />}
                {item.type === 'gif' && <img src={item.media} alt={item.title} />}
                {item.type === 'video' && <video src={item.media} controls muted playsInline />}
              </div>
              <p className="portfolio-item-description">
                {expanded[item.id] || item.description.length <= maxLength
                  ? item.description
                  : `${item.description.slice(0, maxLength)}...`}
                {item.description.length > maxLength && (
                  <span className="portfolio-read-more" onClick={() => toggleExpand(item.id)}>
                    {expanded[item.id] ? ' Ver menos' : ' Ver más'}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;