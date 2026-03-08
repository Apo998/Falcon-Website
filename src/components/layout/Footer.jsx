import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Smartphone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        
        {/* Left: Contact Info */}
        <div className="footer-contact">
          <h3>Falcon GmbH</h3>
          <address style={{ fontStyle: 'normal' }}>
            <p>Mathias-Brüggen-Straße 1<br />50827 Köln</p>
          </address>
          <a href="tel:+4922156035898" className="contact-link" aria-label="Telefon: +49 221 56035898">
            <Phone size={14} /> <span>+49 221 56035898</span>
          </a>
          <a href="tel:+4915206390306" className="contact-link" aria-label="Mobil: +49 152 06390306">
            <Smartphone size={14} /> <span>+49 152 06390306</span>
          </a>
        </div>

        {/* Center: Links and Copyright */}
        <div className="footer-info">
          <nav className="footer-links" aria-label="Rechtliche Links">
            <Link to="/impressum" className="footer-link">{t('footer.impressum')}</Link>
            <Link to="/datenschutz" className="footer-link">{t('footer.datenschutz')}</Link>
            <Link to="/falconsecpro-support" className="footer-link">{t('footer.unsere_app')}</Link>
          </nav>
          <p className="copyright">&copy; {currentYear} Falcon GmbH. Alle Rechte vorbehalten.</p>
        </div>

        {/* Right: Designer */}
        <div className="footer-designer">
           <div className="designer-group">
              <span>Designed by</span>
              <a href="https://www.asa-e-business.com" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie ASA e-business">
                <img src={`${import.meta.env.BASE_URL}asa-logo-final.png`} alt="ASA e-business logo" className="footer-logo" />
              </a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
