import React from 'react';

interface HeroProps { onShowToast: (msg: string) => void; }

const Hero: React.FC<HeroProps> = ({ onShowToast }) => (
    <section className="hero" id="hero">
        <div className="badge"><span></span> Now serving 47 countries</div>
        <h1>Premium <em>Artisanal Air</em>, Delivered Fresh</h1>
        <p>Hand-curated atmospheric blends sourced from the world's finest altitudes.</p>
        <div className="hero-buttons">
            <button className="btn btn-primary">Start Breathing Better →</button>
            <button className="btn btn-secondary" onClick={() => onShowToast('📺 Playing: "The Art of Nothing"')}>
                ▶ Watch the Story
            </button>
        </div>
        <div className="social-proof">
            <div className="avatars">
                {['#fcd34d', '#a5f3fc', '#c4b5fd', '#fda4af', '#86efac'].map((c, i) => (
                    <span key={i} style={{ background: c }}>{['🧑', '👩', '🧔', '👱', '👩‍🦰'][i]}</span>
                ))}
            </div>
            <p><strong>12,847</strong> breathers joined this month</p>
        </div>
    </section>
);
export default Hero;