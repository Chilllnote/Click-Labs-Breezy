import React from 'react';

interface Testimonial {
    stars: string;
    quote: string;
    author: string;
    role: string;
    avatar: string;
    avatarBg: string;
}

const testimonialData: Testimonial[] = [
    {
        stars: '★★★★★',
        quote: '“I’ve been breathing for 34 years and never knew I was doing it wrong. Breezy changed everything. My left nostril has never been more optimized.”',
        author: 'Jordan P.',
        role: 'VP of Inhaling, Lungify',
        avatar: '🧑',
        avatarBg: '#fcd34d'
    },
    {
        stars: '★★★★★',
        quote: '“We switched our entire office to Breezy Enterprise. Productivity is the same but morale is confusingly higher. 10/10 would subscribe to air again.”',
        author: 'Sam K.',
        role: 'COO, NostrilTech',
        avatar: '👩',
        avatarBg: '#c4b5fd'
    },
    {
        stars: '★★★★☆',
        quote: '“Four stars because I briefly forgot to breathe and it wasn’t covered under the warranty. Otherwise, flawless product. The Mountain Blend slaps.”',
        author: 'Taylor R.',
        role: 'Professional Breather',
        avatar: '🧔',
        avatarBg: '#86efac'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-label">Testimonials</div>
                <div className="section-title" style={{ color: '#fff' }}>
                    Don't take our word for it
                </div>
                <p className="section-sub">Real reviews from real breathers. Probably.</p>

                <div className="test-grid">
                    {testimonialData.map((t, i) => (
                        <div className="test-card" key={i}>
                            <div className="stars">{t.stars}</div>
                            <blockquote dangerouslySetInnerHTML={{ __html: t.quote }} />
                            <div className="test-author">
                                <div
                                    className="test-avatar"
                                    style={{ background: t.avatarBg }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <strong>{t.author}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;