import React from 'react'
import AboutUsImg from '../../assets/img/weightlf-sfh.avif'
import "./MainStyle.css"

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-content">
                <h2 className="section-title">About Us</h2>
                <p className="about-description">At SportFuel Hub, we are passionate about fitness and providing you with the highest quality sports supplements to help you achieve your goals. Our journey began with a vision to create a brand that stands for excellence, authenticity, and performance.</p>
                <p className="about-description">Founded by fitness enthusiasts, our mission is to empower athletes and individuals on their fitness journey. We believe in transparency, innovation, and delivering products that make a real difference in your training, recovery, and overall well-being.</p>
                <a href="#" className="cta-button">Learn More</a>
                <div className="hidden-content">
                    <p className="about-description">Our commitment to your success drives us to continuously research, develop, and deliver cutting-edge supplements that enhance your athletic potential and contribute to your overall health and vitality.</p>
                    <p className="about-description">We pride ourselves on offering a diverse range of products tailored to meet various fitness goals and dietary preferences. Our dedicated team is here to support you on your journey to greatness.</p>
                </div>
            </div>
            <img src={AboutUsImg} alt="About Us Image" className="about-image" />
        </section>
    )
}

export default AboutUs