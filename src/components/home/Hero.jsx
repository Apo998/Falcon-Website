import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Professional Services by <span>Falcon</span></h1>
        <p>Ihre Sicherheit ist unser Anspruch – und unser Versprechen</p>
        <Link to="/contact" className="cta-button">
          KONTAKT UNS
        </Link>
      </div>
    </section>
  );
};

export default Hero;
