import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabaseClient';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setStatus({ type: 'success', message: t('contact.successMessage') || 'Message sent successfully!' });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: error.message || t('contact.errorMessage') || 'An error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=contact-page>
      <h1>{t('contact.pageTitle')}</h1>
      <p>{t('contact.subtitle')}</p>
      
      {status.message && (
        <div style={{
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '1rem',
          backgroundColor: status.type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
          border: status.type === 'error' ? '1px solid rgba(255,50,50,0.5)' : '1px solid rgba(50,255,50,0.5)',
          color: status.type === 'error' ? '#ff6b6b' : '#4ade80'
        }}>
          {status.message}
        </div>
      )}

      <form className=contact-form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">{t('contact.phone')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? t('contact.submitting') : t('contact.submit')}
        </button>
      </form>
    </div>
  );
};

export default Contact;

