import heroImg from '../../assets/img/creatine-img-pexels.avif'
import { Link } from 'react-router-dom';
import './MainStyle.css';

const HeroSection = () => {
    return (
            <section className="hero">
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero Image" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-tagline">Unlock Your Potential</h1>
                    <p className="hero-subtitle">Elevate your fitness journey with premium sports supplements.</p>
                    <Link to="/ItemListContainer">
                    <button className="cta-button">Explore Products</button>
                    </Link>
                </div>
            </section>
    );
}

export default HeroSection;