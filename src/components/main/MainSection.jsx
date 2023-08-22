import React from 'react';
import './MainStyle.css';

function MainSection() {
    return (
        <main>
            <section className="hero">
                <div className="hero-overlay"></div>
                <img src="/assets/img/creatine-img-pexels.avif" alt="Hero Image" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-tagline">Unlock Your Potential</h1>
                    <p className="hero-subtitle">Elevate your fitness journey with premium sports supplements.</p>
                    <a href="#Products" className="cta-button">Explore Products</a>
                </div>
            </section>

            <section className="featured-products">
                <h2 className="section-title">Featured Products</h2>
                <div className="product-carousel">
                    <div className="product-card">
                        <img src="./assets/img/SportFuel-PPW.png" alt="Product 1" className="product-image" />
                        <h3 className="product-title">Premium Whey Protein</h3>
                        <p className="product-description">Fuel your workouts with our high-quality whey protein powder.</p>
                        <span className="product-price">$29.99</span>
                        <a href="#" className="product-button">Shop Now</a>
                    </div>
                    <div className="product-card">
                        <img src="./assets/img/SportFuel-crt.png" alt="Product 2" className="product-image" />
                        <h3 className="product-title">Advanced Creatine Blend</h3>
                        <p className="product-description">Boost your strength and endurance with our advanced creatine formula.</p>
                        <span className="product-price">$19.99</span>
                        <a href="#" className="product-button">Shop Now</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainSection;