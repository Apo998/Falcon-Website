import SEO from '../components/common/SEO';
import AboutContent from '../components/about/AboutContent';
import Team from '../components/about/Team';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <SEO 
        title="Über uns"
        description="Erfahren Sie mehr über Falcon Security. Seit über 5 Jahren Ihr zuverlässiger Partner für Sicherheit in ganz Nordrhein-Westfalen."
        keywords="Falcon Security Team, Über Falcon GmbH, Sicherheitsunternehmen Köln, Sicherheit NRW"
        canonical="https://falcon-koeln.de/about"
      />
      <AboutContent />
      <Team />
    </div>
  );
};

export default About;
