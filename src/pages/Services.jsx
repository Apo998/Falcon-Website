import { useTranslation } from 'react-i18next';

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
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>{t('header.services')}</h1>
                <p>{t('home.heroSubtitle')}</p>
            </div>
        </div>
    );
};

export default Services;
