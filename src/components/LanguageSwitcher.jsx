import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${i18n.language === 'de' ? 'active' : ''}`} 
        onClick={() => changeLanguage('de')}
        aria-label="Switch to German"
      >
        DE
      </button>
      <span className="separator">|</span>
      <button 
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
