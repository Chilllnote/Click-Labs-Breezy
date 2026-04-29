import React, { useState } from 'react';

interface NewsletterProps {
    onShowToast: (msg: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ onShowToast }) => {
    const [email, setEmail] = useState('');

    const handleSignup = () => {
        if (email && email.includes('@')) {
            onShowToast('🎉 Welcome to Breezy! Check your inbox (or just inhale).');
            setEmail('');
        } else {
            onShowToast('⚠️ Please enter a valid email. We need it for... air reasons.');
        }
    };

    return (
        <section className="newsletter" id="signup">
            <div className="container">
                <div className="nl-box">
                    <h2>Ready to breathe different?</h2>
                    <p>Join 12,847 breathers. Get weekly air quality insights and exclusive nostril tips.</p>
                    <div className="nl-form">
                        <input
                            type="email"
                            placeholder="you@breathe.io"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="emailInput"
                        />
                        <button className="btn btn-primary" onClick={handleSignup}>
                            Subscribe Free →
                        </button>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginTop: '14px' }}>
                        No spam. Just air. Unsubscribe by holding your breath for 60 seconds.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;