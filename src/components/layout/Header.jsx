import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServices = (e) => {
        e.preventDefault();
        setIsServicesOpen(!isServicesOpen);
    };

    const handleClientsClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        if (location.pathname === '/') {
            const element = document.getElementById('clients');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('clients');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src="/logo.png" alt="Falcon" />
            </Link>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav>
                <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="tel:+4922156035898" className="nav-link phone-link" onClick={() => setIsMenuOpen(false)}>
                            <Phone size={18} />
                            <span>+49 221 56035898</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            {t('header.about')}
                        </Link>
                    </li>
                    <li className={`dropdown ${isServicesOpen ? 'open' : ''}`}>
                        <button
                            className="nav-link"
                            onClick={toggleServices}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', display: 'flex', alignItems: 'center' }}
                        >
                            {t('header.services')} <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/services/veranstaltungsschutz" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.veranstaltungsschutz')}</Link>
                            <Link to="/services/kaufhausdetektive" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.kaufhausdetektive')}</Link>
                            <Link to="/services/baustellenueberwachung" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.baustellenueberwachung')}</Link>
                            <Link to="/services/zugangskontrollen" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.zugangskontrollen')}</Link>
                            <Link to="/services/objektschutz" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.objektschutz')}</Link>
                            <Link to="/services/revierfahren" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.revierfahren')}</Link>
                            <Link to="/services/schutzdienst" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.schutzdienst')}</Link>
                            <Link to="/services/personenschutz" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.personenschutz')}</Link>
                            <Link to="/services/ausbildung" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.ausbildung')}</Link>
                            <Link to="/services/andere" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>{t('services.andere')}</Link>
                        </div>
                    </li>
                    <li>
                        <a href="/#clients" className="nav-link" onClick={handleClientsClick}>
                            {t('header.clients')}
                        </a>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            {t('header.contact')}
                        </Link>
                    </li>
                    <li className="language-switcher-item">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
