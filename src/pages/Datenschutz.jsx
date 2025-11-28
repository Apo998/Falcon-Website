import { useTranslation } from 'react-i18next';
import './Legal.css';

const Datenschutz = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.datenschutzTitle')}</h1>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: t('legal.datenschutzContent') }} />
    </div>
  );
};

export default Datenschutz;
