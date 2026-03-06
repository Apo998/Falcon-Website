import SEO from '../components/common/SEO';
import ServiceWidgets from '../components/home/ServiceWidgets';
import Clients from '../components/home/Clients';
import Hero from '../components/home/Hero';
import EmergencyBanner from '../components/home/EmergencyBanner';
import Philosophy from '../components/home/Philosophy';

const Home = () => {
  return (
    <>
      <SEO 
        title="Sicherheitsdienst Köln & NRW"
        description="Falcon Security: Ihr Partner für Sicherheitsdienst in Köln & NRW. Spezialisiert auf Objektschutz, Baustellenbewachung, Veranstaltungsschutz und Personenschutz. 24/7 einsatzbereit."
        keywords="Security Köln, Sicherheitsdienst Köln, Security NRW, Sicherheitsdienst NRW, Falcon Security, Objektschutz Köln, Baustellenbewachung Köln"
        canonical="https://falcon-koeln.de/"
      />
      <Hero />
      <Philosophy />
      <EmergencyBanner />
      <Clients />
      <ServiceWidgets />
    </>
  );
};

export default Home;
