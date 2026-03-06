import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import SEO from '../components/common/SEO';

const ServiceDetailNew = () => {
    const { serviceId } = useParams();
    const { t } = useTranslation();

    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const serviceTitle = t(`services.${service.id}`);
    const serviceDescription = t(`services.${service.id}_desc`).replace(/<[^>]*>?/gm, '').substring(0, 160);

    const styles = {
        pageWrapper: {
            backgroundColor: '#111', 
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
            backgroundColor: '#ffac2e',
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
            color: 'white',
            fontSize: '1.15rem',
        },
    };

    return (
        <div style={styles.pageWrapper}>
            <SEO 
                title={serviceTitle}
                description={serviceDescription}
                keywords={`${serviceTitle}, Security Köln, Sicherheitsdienst NRW, Falcon Security`}
                canonical={`https://falcon-koeln.de/services/${serviceId}`}
            />
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>{serviceTitle}</h1>
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
