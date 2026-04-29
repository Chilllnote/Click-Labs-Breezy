import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
        document.body.style.overflow = !isMobileOpen ? 'hidden' : '';
    };

    return (
        <>
            <div className="header-wrap">
                <div className="utility-bar">
                    <a href="#"><span className="util-icon">📱</span> Breezy App</a>
                    <a href="#"><span className="util-icon">📅</span> Consultations</a>
                    <a href="#"><span className="util-icon">📞</span> 1-888-AIR-GOOD</a>
                </div>

                <div className="mid-bar">
                    <div className="nav-brand"><em>Breezy</em>&thinsp;™</div>
                    <div className="mid-links">
                        <a href="#">Locations <span style={{ fontSize: '0.6rem' }}>▾</span></a>
                        <a href="#">Rewards Club</a>
                        <a href="#signup" className="book-btn">Book Air <span style={{ fontSize: '0.6rem' }}>▾</span></a>
                    </div>
                    <button
                        className={`hamburger ${isMobileOpen ? 'open' : ''}`}
                        onClick={toggleMobile}
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>

                <div className="main-nav">
                    <div className="location-badge">
                        <div className="location-dot">📍</div> SUMMIT
                    </div>
                    <div className="main-nav-links">
                        <a href="#features">Features</a>
                        <a href="#how">How It Works</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#testimonials">Reviews</a>
                        <a href="#">Promotions</a>
                    </div>
                    <div className="more-wrap">
                        <button className="more-btn" onClick={() => setIsMoreOpen(!isMoreOpen)}>
                            More <span className="more-arrow">▼</span>
                        </button>
                        <div className={`more-dropdown ${isMoreOpen ? 'open' : ''}`}>
                            <a href="#faq">FAQ</a>
                            <a href="#">Air Menu</a>
                            <a href="#">Careers</a>
                            <a href="#">Directions</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
                <a href="#features" onClick={toggleMobile}>Features</a>
                <a href="#how" onClick={toggleMobile}>How It Works</a>
                <a href="#pricing" onClick={toggleMobile}>Pricing</a>
                <div className="mobile-divider"></div>
                <a href="#faq" onClick={toggleMobile}>FAQ</a>
                <a href="#signup" onClick={toggleMobile}>Book Air</a>
            </div>
        </>
    );
};

export default Header;