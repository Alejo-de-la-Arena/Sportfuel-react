import React from 'react';
import HeroSection from '../src/components/main/HeroSection';
import FeaturedProducts from '../src/components/main/FeaturedProducts';
import AboutUs from '../src/components/main/AboutUs';
import ValuePropositions from '../src/components/main/ValuePropositions';
import Testimonials from '../src/components/main/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <AboutUs />
            <ValuePropositions />
            <Testimonials />
        </div>
    );
};

export default Home;
