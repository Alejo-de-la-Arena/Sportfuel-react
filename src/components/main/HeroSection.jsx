import heroImg from '../../assets/img/creatine-img-pexels.avif'
import { products } from '../data/mockFetch';
import './MainStyle.css';

const HeroSection = () => {
    return (
            <section className="hero">
                <div className="hero-overlay"></div>
                <img src={heroImg} alt="Hero Image" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-tagline">Unlock Your Potential</h1>
                    <p className="hero-subtitle">Elevate your fitness journey with premium sports supplements.</p>
                    <button className="cta-button"><a href="#Products">Explore Products</a></button>
                </div>
            </section>
    );
}

export default HeroSection;