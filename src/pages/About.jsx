import { useTranslation } from 'react-i18next';
import Team from '../components/about/Team';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>{t('about_page.title')}</h1>
        <p className="subtitle">{t('about_page.subtitle')}</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>{t('about_page.content.p1')}</p>
          <p>{t('about_page.content.p2')}</p>
          <p>{t('about_page.content.p3')}</p>
          <p>{t('about_page.content.p4')}</p>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default About;
