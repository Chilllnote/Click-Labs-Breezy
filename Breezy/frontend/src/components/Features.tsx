import React from 'react';

const featureData = [
    { icon: '🏔️', title: 'Mountain-Sourced™', color: '#dbeafe', desc: 'Harvested at peak altitude by Air Sommeliers.' },
    { icon: '🧬', title: 'DNA-Matched Blends', color: '#fce7f3', desc: 'AI analyzes your 23andMe data for bespoke ratios.' },
    { icon: '🌿', title: 'Carbon-Neutral Carbon', color: '#d1fae5', desc: 'We offset CO2 by thinking really hard about trees.' },
    { icon: '⚡', title: 'Instant Delivery', color: '#fef3c7', desc: 'Patented "Open a Window" technology.' },
    { icon: '🔬', title: 'Lab-Verified Purity', color: '#ede9fe', desc: 'Tested by scientists who definitely exist.' },
    { icon: '🤝', title: 'Community Breathing', color: '#ffe4e6', desc: 'Join our Discord of 50k+ breathers.' }
];

const Features: React.FC = () => (
    <section className="features" id="features">
        <div className="container">
            <div className="section-label">Why Breezy</div>
            <div className="section-title">Air, but make it ✨ premium ✨</div>
            <div className="features-grid">
                {featureData.map((f, i) => (
                    <div className="feature-card" key={i}>
                        <div className="feature-icon" style={{ background: f.color }}>{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Features;