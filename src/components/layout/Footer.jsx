import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/impressum" className="footer-link">{t('footer.impressum')}</Link>
          <Link to="/datenschutz" className="footer-link">{t('footer.datenschutz')}</Link>
        </div>
        <p>&copy; {currentYear} Falcon GmbH. {t('footer.rights')}</p>
        <div className="footer-designer">
          Designed by <a href="https://asa-e-business.com" target="_blank" rel="noopener noreferrer"><img src="/asa-logo-final.png" alt="ASA" className="footer-logo" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
