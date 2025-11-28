import { useTranslation } from 'react-i18next';
import './Legal.css';

const Impressum = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.impressumTitle')}</h1>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: t('legal.impressumContent') }} />
    </div>
  );
};

export default Impressum;
