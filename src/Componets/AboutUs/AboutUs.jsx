// src/components/AboutUs.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';

function AboutUs() {
  const metaTitle = 'Sobre Nosotros - PyroWeb | Desarrollo Digital Innovador';
  const metaDescription = 'Conoce a PyroWeb, un equipo apasionado por el desarrollo digital. Especializados en landing pages, sitios web y apps con IA para impulsar tu negocio.';
  const metaKeywords = 'sobre nosotros, PyroWeb, desarrollo web, landing pages, apps con IA, soluciones digitales';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://pyroweb.com.ar/assets/imagotipo-en-blanco-y-naranja-transparente-01.svg" />
      </Helmet>
      <section className="about-us" id="about">
        <div className="container">
          <div><h2 className="about-title">Sobre Nosotros</h2></div>
          <div className="about-content">
            <p className="about-description">
              En PyroWeb, somos un equipo apasionado por la tecnología y el desarrollo digital. Fundada con la visión de transformar ideas en soluciones innovadoras, nos especializamos en crear landing pages, sitios web corporativos y aplicaciones web personalizadas. Con un enfoque en la escalabilidad y la integración de inteligencia artificial, ayudamos a negocios a destacar en el mundo digital.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

