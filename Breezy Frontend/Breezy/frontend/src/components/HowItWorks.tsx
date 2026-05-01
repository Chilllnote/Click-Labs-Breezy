import React, { useEffect } from 'react';

const HowItWorks: React.FC = () => {
    useEffect(() => {
        /**
         * INTERSECTION OBSERVER LOGIC
         * Triggers when a step enters the center 2% of the viewport on mobile.
         */
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Check for mobile width (768px is standard)
            const isMobile = window.innerWidth <= 768;

            entries.forEach(entry => {
                if (entry.isIntersecting && isMobile) {
                    // Adds class for CSS animations/scaling
                    entry.target.classList.add('in-view');
                } else {
                    // Removes class when it leaves the focus area
                    entry.target.classList.remove('in-view');
                }
            });
        };

        const observerOptions = {
            root: null, // use the browser viewport
            rootMargin: '-49% 0px -49% 0px', // creates a narrow 2% "trigger zone" in the middle
            threshold: 0
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Select and observe all steps
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => observer.observe(step));

        // CLEANUP: Important for React to stop the observer when component unmounts
        return () => {
            steps.forEach(step => observer.unobserve(step));
            observer.disconnect();
        };
    }, []);

    return (
        <section className="how" id="how">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-label">How It Works</div>
                <div className="section-title">Three steps to better breathing</div>
                <p className="section-sub" style={{ margin: '0 auto' }}>
                    It's so simple, you've probably been doing it wrong your whole life.
                </p>

                <div className="steps">
                    {/* Step 1 */}
                    <div className="step">
                        <div className="step-num">1</div>
                        <h3>Take Our Quiz</h3>
                        <p>
                            Answer 47 deeply personal questions so we can recommend the air
                            you were already breathing.
                        </p>
                    </div>

                    <div className="step-connector"></div>

                    {/* Step 2 */}
                    <div className="step">
                        <div className="step-num">2</div>
                        <h3>We "Curate"</h3>
                        <p>
                            Our team spends 0 minutes hand-selecting the exact same air from
                            our warehouse (the sky).
                        </p>
                    </div>

                    <div className="step-connector"></div>

                    {/* Step 3 */}
                    <div className="step">
                        <div className="step-num">3</div>
                        <h3>Breathe & Subscribe</h3>
                        <p>
                            Inhale, exhale, repeat. If you stop, it's not our fault but also
                            please don't cancel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;