// src/components/FAQ.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda en crear una landing page?',
      answer: 'Dependiendo de los requisitos, una landing page puede estar lista en 1-2 semanas. Contáctanos para una estimación personalizada.',
    },
    {
      question: '¿Pueden ayudarme con el alojamiento y el dominio de mi sitio?',
      answer: 'Sí, ofrecemos soporte para la gestión de dominios y alojamiento. Podemos recomendarte opciones y configurarlo todo por ti, asegurando un proceso sin complicaciones.',
    },
    {
      question: '¿Pueden integrar inteligencia artificial en mi app?',
      answer: '¡Claro! Podemos integrar IA para automatización o análisis, adaptándonos a tus necesidades específicas.',
    },
    {
      question: '¿Cuál es el costo aproximado de un proyecto?',
      answer: 'El costo varía según el alcance del proyecto (número de páginas, funcionalidades, etc.). Te ofrecemos una cotización personalizada después de evaluar tus requerimientos. Contáctanos para una estimación gratuita.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const metaTitle = 'Preguntas Frecuentes - PyroWeb | Soluciones Digitales';
  const metaDescription = 'Encuentra respuestas a tus dudas sobre landing pages, soporte post-lanzamiento e integración de IA con PyroWeb.';
  const metaKeywords = 'preguntas frecuentes, PyroWeb, soporte, landing pages, IA, desarrollo web';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://pyroweb.com.ar/assets/isotipo-naranja.png" /> {/* Ajusta la URL */}
      </Helmet>
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
          <a href="#contact" className="faq-cta">Obtén más ayuda</a>
        </div>
      </section>
    </>
  );
}

export default FAQ;