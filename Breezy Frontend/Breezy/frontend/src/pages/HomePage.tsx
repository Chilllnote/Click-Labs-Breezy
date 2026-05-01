import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Newsletter from '../components/Newsletter';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { showToast } from '../utils/toast'; // Import the utility

interface LayoutContext {
    showToast: (msg: string) => void;
}

const HomePage: React.FC = () => {
    // Grab the toast function from the MainLayout context

    return (
        <>
            <Hero onShowToast={showToast} />
            <Features />
            <HowItWorks />
            <Newsletter onShowToast={showToast} />
        </>
    );
};

export default HomePage;