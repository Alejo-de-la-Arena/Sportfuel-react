import React from 'react'
import { Link } from 'react-router-dom';
import proteinImg from '../../assets/img/SportFuel-PPW.png'
import creatineImg from '../../assets/img/SportFuel-crt.png'
import './MainStyle.css';


const FeaturedProducts = () => {
    return (
            <section className="featured-products">
                <h2 className="section-title">Featured Products</h2>
                <div className="product-carousel">
                    <div className="product-card">
                        <img src={proteinImg} alt="Product 1" className="product-image" />
                        <h3 className="product-title">Premium Whey Protein</h3>
                        <p className="product-description">Fuel your workouts with our high-quality whey protein powder with an amazing flavour.</p>
                        <span className="product-price">$20.000</span>
                        <Link to="/ItemListContainer"> 
                        <button className="product-button">Shop Now</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src={creatineImg} alt="Product 2" className="product-image" />
                        <h3 className="product-title">Advanced Creatine Blend</h3>
                        <p className="product-description">Boost your strength and endurance with our advanced creatine formula.</p>
                        <span className="product-price">$17.000</span>
                        <Link to="/ItemListContainer"> 
                        <button className="product-button">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default FeaturedProducts