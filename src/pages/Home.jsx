import ServiceWidgets from '../components/home/ServiceWidgets';
import Clients from '../components/home/Clients';
import Hero from '../components/home/Hero';
import EmergencyBanner from '../components/home/EmergencyBanner';
import Philosophy from '../components/home/Philosophy';

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <EmergencyBanner />
      <Clients />
      <ServiceWidgets />
      {/* Add more sections here */}
    </>
  );
};

export default Home;
