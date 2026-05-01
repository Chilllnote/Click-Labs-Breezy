import React from 'react';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            {/* Hero Section for About Page */}
            <section className="about-hero" style={{ paddingTop: '100px', textAlign: 'center' }}>
                <div className="container">
                    <div className="section-label">Our Story</div>
                    <h1 className="section-title">We believe air should be a premium experience.</h1>
                    <p className="section-sub" style={{ margin: '0 auto', maxWidth: '700px' }}>
                        Founded in 2026, Breezy started with a simple question: "Why is everyone breathing for free?"
                        Today, we are the leading provider of artisanal, subscription-based oxygen.
                    </p>
                </div>
            </section>

            {/* The FAQ component you requested */}
            <FAQ />

            {/* Optional: A simple text section to round it out */}
            <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
                <h3>Our Mission</h3>
                <p style={{ color: 'var(--slate-500)', maxWidth: '600px', margin: '20px auto' }}>
                    To disrupt the respiratory industry by adding unnecessary complexity
                    and recurring monthly billing to the very act of existing.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;