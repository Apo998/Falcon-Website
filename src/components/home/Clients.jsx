import { useTranslation } from 'react-i18next';
import './Clients.css';

const Clients = () => {
  const { t } = useTranslation();

  const clients = [
    { id: 1, src: '/clients/client1.jpg', alt: 'Client 1' },
    { id: 2, src: '/clients/client2.png', alt: 'Client 2' },
    { id: 3, src: '/clients/client3.png', alt: 'Client 3' },
    { id: 4, src: '/clients/client4.png', alt: 'Client 4' },
    { id: 5, src: '/clients/client5.png', alt: 'Client 5' },
    { id: 6, src: '/clients/client6.png', alt: 'Client 6' },
    { id: 7, src: '/clients/client7.png', alt: 'Client 7' },
    { id: 8, src: '/clients/client8.png', alt: 'Client 8' },
    { id: 9, src: '/clients/client9.png', alt: 'Client 9' },
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-title-container">
        <h2 className="clients-title">{t('home.clientsTitle') || 'Unsere Kunden'}</h2>
        <div className="animated-line"></div>
      </div>
      
      <div className="clients-grid">
        {clients.map((client) => (
          <img 
            key={client.id} 
            src={client.src} 
            alt={client.alt} 
            className="client-logo" 
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
