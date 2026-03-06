import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Falcon Security - <span>Sicherheitsdienst</span> Köln & NRW</h1>
        <p>{t('home.heroSubtitle')}</p>
        <Link to="/contact" className="cta-button">
          {t('home.contactBtn')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
