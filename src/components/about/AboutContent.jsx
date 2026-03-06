import { useTranslation } from 'react-i18next';

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>{t('about_page.title')}</h1>
        <p className="subtitle">{t('about_page.subtitle')}</p>
      </header>

      <div className="about-content">
        <div className="about-text">
          <p>{t('about_page.content.p1')}</p>
          <p>{t('about_page.content.p2')}</p>
          <p>{t('about_page.content.p3')}</p>
          <p>{t('about_page.content.p4')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
