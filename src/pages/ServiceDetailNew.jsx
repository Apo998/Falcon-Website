import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';

const ServiceDetailNew = () => {
    const { serviceId } = useParams();
    const { t } = useTranslation();

    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const styles = {
        pageWrapper: {
            backgroundColor: '#111', // Dark background for the whole page area
            minHeight: '100vh',
            color: 'white',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
            fontFamily: 'sans-serif',
        },
        hero: {
            backgroundColor: '#ffac2e', // Falcon brand color
            color: 'white',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginBottom: '2rem',
        },
        heroTitle: {
            fontSize: '2.2rem',
            margin: 0,
            fontWeight: '600',
        },
        contentContainer: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        content: {
            lineHeight: '1.8',
            color: 'white', // White text as requested
            fontSize: '1.15rem',
        },
    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>{t(`services.${service.id}`)}</h1>
            </div>

            <div style={styles.container}>
                <div style={styles.contentContainer}>
                    <div style={styles.content}>
                        <div dangerouslySetInnerHTML={{ __html: t(`services.${service.id}_desc`) }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailNew;
