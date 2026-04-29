import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ'; // Reference previous FAQ code
import './App.css';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && window.innerWidth <= 768) e.target.classList.add('in-view');
        else e.target.classList.remove('in-view');
      });
    }, { rootMargin: '-49% 0px -49% 0px' });
    document.querySelectorAll('.step').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <Header />
      <Hero onShowToast={showToast} />

      {/* Logos Section */}
      <div className="logos">
        <p>Trusted by industry leaders who breathe</p>
        <div className="logo-row">
          <span>Lungify</span><span>AirBnBreeze</span><span>OxyCorp</span><span>NostrilTech</span><span>GaspWorks</span>
        </div>
      </div>

      <Features />

      {/* Steps Section */}
      <HowItWorks />
      <Pricing onShowToast={showToast} />
      <Testimonials />
      <Stats />
      <FAQ />
      {/* Newsletter */}
      <Newsletter onShowToast={showToast} />

      {toast && <div className="toast show">{toast}</div>}

      <Footer />

      {/* TOAST */}
      <div className="toast" id="toast"></div>
    </div>
  );
};

export default App;