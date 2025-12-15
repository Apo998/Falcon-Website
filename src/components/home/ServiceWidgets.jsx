import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './ServiceWidgets.css';

const ServiceWidgets = () => {
    const { t } = useTranslation();

    return (
        <section className="service-widgets-section">
            <div className="services-title-container">
                <h2 className="services-title">{t('home.servicesTitle')}</h2>
                <div className="animated-line"></div>
            </div>

            <div className="service-widgets-grid">
                {services.filter(s => s.id !== 'revierfahren').map((service) => (
                    <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="service-widget"
                    >
                        <img src={`${import.meta.env.BASE_URL}${service.img.startsWith('/') ? service.img.slice(1) : service.img}`} alt={t(`services.${service.id}`)} />
                        <div className="service-widget-overlay">
                            <h3 className="service-widget-title">{t(`services.${service.id}`)}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServiceWidgets;
