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
      </div>
    </footer>
  );
};

export default Footer;
