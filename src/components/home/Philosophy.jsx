import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Philosophy.css';

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="philosophy" ref={sectionRef}>
      <div className="philosophy-container">
        <div className="philosophy-title-container">
          <h2 className={`philosophy-title ${isVisible ? 'animate-in' : ''}`}>
            {t('home.philosophy.title')}
          </h2>
          <div className="animated-line"></div>
        </div>
        <div className={`philosophy-content ${isVisible ? 'animate-in' : ''}`}>
          <p className="philosophy-paragraph">
            {t('home.philosophy.p1')}
          </p>
          <p className="philosophy-paragraph">
            {t('home.philosophy.p2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
