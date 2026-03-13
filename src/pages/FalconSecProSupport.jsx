import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Lock,
  ChevronDown,
  ChevronUp,
  Activity,
  ArrowRight
} from 'lucide-react';
import falconSecProTranslations from '../locales/falconsecpro.json';
import './FalconSecPro.css';

const FalconSecProSupport = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'de';
  const t = falconSecProTranslations[lang];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = Object.values(t.faq).filter(item => typeof item === 'object');

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src="/falcon-secpro-logo.png" 
            alt="Falcon SecPro Logo" 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '24px', 
              margin: '0 auto 32px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }} 
          />
          <h1>{t.hero.title}</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '24px', color: '#eee' }}>{t.hero.subtitle}</h2>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            backgroundColor: 'rgba(255, 172, 46, 0.1)', 
            border: '1px solid rgba(255, 172, 46, 0.2)', 
            borderRadius: '100px',
            marginBottom: '24px',
            color: '#ffac2e',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            {t.hero.internalNotice}
          </div>

          <p style={{ color: '#888', marginBottom: '40px', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6' }}>{t.hero.description}</p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <nav className="support-nav">
        <a href="#contact">Support</a>
        <a href="#faq">FAQ</a>
        <a href="#checklist">Checkliste</a>
        <a href="#privacy">Datenschutz</a>
      </nav>

      <div className="support-container">
        
        {/* Support Channels */}
        <section id="contact" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>{t.contact.title}</h2>
          <div className="support-grid">
            <div className="support-card">
              <Mail color="#ffac2e" size={32} style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '12px' }}>E-Mail Support</h3>
              <p style={{ marginBottom: '20px', color: '#eee', textAlign: 'center' }}>{t.contact.email}</p>
              <a href={`mailto:${t.contact.email}`} style={{ color: '#ffac2e', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
                Nachricht schreiben <ArrowRight size={18} />
              </a>
            </div>
            <div className="support-card">
              <Activity color="#ffac2e" size={32} style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '12px' }}>System Status</h3>
              <p style={{ marginBottom: '20px', color: '#eee', textAlign: 'center' }}>Alle Systeme operativ.</p>
              <span style={{ color: '#4CAF50', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4CAF50' }}></span>
                {t.contact.status}
              </span>
            </div>
          </div>
          <div style={{ marginTop: '24px', backgroundColor: 'rgba(255, 172, 46, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255, 172, 46, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <AlertTriangle color="#ffac2e" size={28} />
              <h4 style={{ color: '#ffac2e', margin: 0, fontSize: '1.1rem' }}>{t.contact.emergencyTitle}</h4>
            </div>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem', textAlign: 'center' }}>{t.contact.emergencyText}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>{t.faq.title}</h2>
          <div className="support-faq-container">
            {faqData.map((item, index) => (
              <div key={index} style={{ borderBottom: index === faqData.length - 1 ? 'none' : '1px solid #333' }}>
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{ 
                    width: '100%', 
                    padding: '24px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    color: 'white', 
                    backgroundColor: openFaq === index ? '#252525' : 'transparent',
                    textAlign: 'left',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{item.q}</span>
                  {openFaq === index ? <ChevronUp size={24} color="#ffac2e" /> : <ChevronDown size={24} color="#666" />}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 24px 24px', backgroundColor: '#252525', color: '#aaa' }}>
                    <p style={{ margin: 0, lineHeight: '1.6', textAlign: 'left' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Checklist Section */}
        <section id="checklist" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>{t.checks.title}</h2>
          <div className="checklist-grid">
            {[t.checks.step1, t.checks.step2, t.checks.step3, t.checks.step4].map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
                <CheckCircle color="#ffac2e" size={20} />
                <span style={{ color: '#eee' }}>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="privacy-section-box">
          <Lock size={48} color="#ffac2e" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>{t.privacy.title}</h2>
          <p style={{ color: '#aaa', marginBottom: '32px', lineHeight: '1.6', textAlign: 'center' }}>{t.privacy.text}</p>
          
          <div style={{ 
            marginTop: '30px', 
            marginBottom: '32px',
            padding: '20px', 
            backgroundColor: 'rgba(255, 172, 46, 0.05)', 
            borderRadius: '12px', 
            textAlign: 'left', 
            border: '1px solid rgba(255, 172, 46, 0.2)' 
          }}>
            <p style={{ color: '#ffac2e', fontSize: '0.9rem', margin: 0, lineHeight: '1.5', textAlign: 'left' }}>
              <strong>{t.privacy.dataPoints}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <Link to="/falconsecpro-privacy" style={{ color: '#ffac2e', fontWeight: 'bold', textDecoration: 'underline' }}>
              {t.privacy.links.privacy}
            </Link>
          </div>
        </section>

        {/* Technical Info */}
        <section style={{ 
          marginTop: '80px', 
          padding: '40px 0',
          borderTop: '1px solid #222',
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '12px' 
        }}>
          <Smartphone size={24} style={{ color: '#444' }} />
          <p style={{ color: '#555', fontSize: '0.85rem', margin: 0, letterSpacing: '0.5px' }}>
            {t.techInfo.version} | {t.techInfo.update}
          </p>
        </section>
      </div>
    </div>
  );
};

export default FalconSecProSupport;
