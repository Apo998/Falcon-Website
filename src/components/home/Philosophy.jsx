import { useEffect, useRef, useState } from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="philosophy" ref={sectionRef}>
      <div className="philosophy-container">
        <div className="philosophy-title-container">
          <h2 className={`philosophy-title ${isVisible ? 'animate-in' : ''}`}>
            Warum sich für die Falcon entscheiden?
          </h2>
          <div className="animated-line"></div>
        </div>
        <div className={`philosophy-content ${isVisible ? 'animate-in' : ''}`}>
          <p className="philosophy-paragraph">
            Die Falcon GmbH steht für Sicherheits- und Servicedienstleistungen des einundzwanzigsten Jahrhunderts. 
            Als modernes Sicherheitsunternehmen aus Köln verbinden wir erfahrenes Fachpersonal mit digitalen 
            Kontrollsystemen, vernetzten Live-Schaltungen und präziser Einsatzplanung.
          </p>
          <p className="philosophy-paragraph">
            Diese Kombination ermöglicht es uns, unseren Kunden ein zeitgemäßes, transparentes und vollumfassendes 
            Leistungsangebot bereitzustellen. Jede Sicherheitslösung wird individuell entwickelt und exakt auf die 
            Anforderungen Ihres Unternehmens, Ihrer Veranstaltung oder Ihres privaten Umfelds abgestimmt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
