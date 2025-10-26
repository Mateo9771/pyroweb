// src/components/Services.js
import React, { useState } from 'react';
import './Services.css';
import { ServiceDetails } from '../../Date';

function Services() {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="services">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {ServiceDetails.map(service => (
          <div className="service-card" key={service.id}>
            <h3 className={service.titleClass}>{service.title}</h3>
            <p className={`${service.descriptionClass} ${expanded[service.id] ? '' : 'truncate'}`}>
              {service.description}
            </p>
            {service.description.length > 100 && (
              <button
                className="see-more"
                onClick={() => toggleDescription(service.id)}
              >
                {expanded[service.id] ? 'Ver menos' : 'Ver más'}
              </button>
            )}
            <div className={service.imageClass}>
              <img src={service.imageSrc} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;