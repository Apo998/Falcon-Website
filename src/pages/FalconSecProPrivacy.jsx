import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import falconSecProTranslations from '../locales/falconsecpro.json';

const FalconSecProPrivacy = () => {
  const { i18n } = useTranslation();
  // Determine language, default to 'de' if not 'en'
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'de';
  const text = falconSecProTranslations[lang].privacy.full_policy_raw;

  // Debug log to confirm which language is being used
  useEffect(() => {
    console.log('FalconSecProPrivacy: Current i18n language:', i18n.language);
    console.log('FalconSecProPrivacy: Selected lang key:', lang);
  }, [i18n.language, lang]);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <Link to="/falconsecpro-support" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: '#ffac2e', 
          marginBottom: '40px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          <ArrowLeft size={20} /> Back to Support
        </Link>

        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'rgba(255, 172, 46, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Shield size={32} color="#ffac2e" />
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#ffac2e' }}>
            {lang === 'de' ? 'Datenschutzerklärung (App)' : 'Privacy Policy (App)'}
          </h1>
        </header>

        <section style={{ 
          backgroundColor: '#1e1e1e', 
          padding: '40px', 
          borderRadius: '24px', 
          border: '1px solid #333', 
          lineHeight: '1.8',
          whiteSpace: 'pre-wrap',
          color: '#ccc',
          textAlign: 'left',
          fontSize: '1rem'
        }}>
          {text}
        </section>

      </div>
    </div>
  );
};

export default FalconSecProPrivacy;
