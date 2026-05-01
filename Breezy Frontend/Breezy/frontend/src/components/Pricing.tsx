import React from 'react';

interface PricingProps {
    onShowToast: (msg: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onShowToast }) => {
    return (
        <section className="pricing" id="pricing">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-label">Pricing</div>
                <div className="section-title">Choose your atmosphere</div>
                <p className="section-sub" style={{ margin: '0 auto' }}>
                    All plans include unlimited access to Earth's atmosphere (terms apply).
                </p>

                <div className="pricing-grid">
                    {/* Casual Breather */}
                    <div className="price-card">
                        <h3>Casual Breather</h3>
                        <p className="desc">For the air-curious</p>
                        <div className="price"><sup>$</sup>9<sub>/mo</sub></div>
                        <ul>
                            <li>Up to 23,000 breaths/day</li>
                            <li>Standard atmospheric blend</li>
                            <li>Email support (we may reply)</li>
                            <li>1 nostril optimization</li>
                        </ul>
                        <button
                            className="btn btn-secondary"
                            onClick={() => onShowToast('🫁 Welcome aboard, Casual Breather!')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Power Inhaler */}
                    <div className="price-card popular">
                        <div className="popular-tag">Most Popular</div>
                        <h3>Power Inhaler</h3>
                        <p className="desc">For serious oxygen enthusiasts</p>
                        <div className="price"><sup>$</sup>29<sub>/mo</sub></div>
                        <ul>
                            <li>Unlimited breaths</li>
                            <li>3 premium altitude blends</li>
                            <li>Priority support (we will reply)</li>
                            <li>Dual-nostril optimization</li>
                            <li>Monthly Air Report™</li>
                        </ul>
                        <button
                            className="btn btn-primary"
                            onClick={() => onShowToast('🎉 Power Inhaler activated! Take a deep breath.')}
                        >
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise Lung */}
                    <div className="price-card">
                        <h3>Enterprise Lung</h3>
                        <p className="desc">For teams that breathe together</p>
                        <div className="price"><sup>$</sup>99<sub>/mo</sub></div>
                        <ul>
                            <li>Everything in Power Inhaler</li>
                            <li>Dedicated Air Account Manager</li>
                            <li>Custom scent profiles</li>
                            <li>SSO (Single Sniff-On)</li>
                            <li>SLA: 99.9% oxygen uptime</li>
                        </ul>
                        <button
                            className="btn btn-secondary"
                            onClick={() => onShowToast('📞 Our Air Sales team will reach out within 1 business breath.')}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Pricing;