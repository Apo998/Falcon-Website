import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';

const Services = () => {
    const { t } = useTranslation();

    const styles = {
        page: {
            paddingTop: '80px',
        },
        hero: {
            backgroundColor: '#ffac2e',
            color: 'white',
            padding: '4rem 2rem',
            textAlign: 'center',
        },
        heroTitle: {
            fontSize: '3rem',
            marginBottom: '1rem',
        }
    };

    return (
        <div style={styles.page}>
            <SEO 
                title="Unsere Leistungen"
                description="Umfassende Sicherheitsdienstleistungen in Köln & NRW: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Personenschutz und Revierdienst."
                keywords="Objektschutz Köln, Baustellenbewachung NRW, Veranstaltungsschutz Köln, Personenschutz NRW, Revierdienst"
                canonical="https://falcon-koeln.de/services"
            />
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>{t('header.services')}</h1>
                <p>{t('home.heroSubtitle')}</p>
            </div>
        </div>
    );
};

export default Services;
