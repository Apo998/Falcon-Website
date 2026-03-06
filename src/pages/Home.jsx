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
        title="Sicherheitsdienst und Dienstleistung in Köln und NRW"
        description="Die Falcon GmbH steht für Sicherheit- und Dienstleistungen des einundzwanzigsten Jahrhunderts. Als modernes Sicherheitsunternehmen aus Köln verbinden wir erfahrenes Fachpersonal mit digitalen Kontrollsystemen, vernetzten Live-Schaltungen und präziser Einsatzplanung."
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
