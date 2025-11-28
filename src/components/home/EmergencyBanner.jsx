import { Phone } from 'lucide-react';
import './EmergencyBanner.css';

const EmergencyBanner = () => {
  return (
    <div className="emergency-banner">
      <div className="emergency-banner-content">
        <Phone size={24} className="emergency-icon" color="black" />
        <span className="emergency-text">Bereitschaftsnummer:</span>
        <a href="tel:+4915206390306" className="emergency-number">
          +49 152 06390306
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;
