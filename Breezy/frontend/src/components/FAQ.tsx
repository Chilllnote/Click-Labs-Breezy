import React, { useState } from 'react';

interface FAQData {
    question: string;
    answer: string | React.ReactNode;
}

const faqData: FAQData[] = [
    {
        question: "Isn't air already free?",
        answer: <>Technically, yes. But is <em>free</em> air really the air you want to be breathing? Our air comes with a receipt, and that’s called peace of mind.</>
    },
    {
        question: "What if I forget to breathe?",
        answer: "That’s actually a medical concern and not something we can help with. But our Power Inhaler plan does include breathing reminders via push notification every 4 seconds."
    },
    {
        question: "Can I cancel anytime?",
        answer: "You can cancel your subscription anytime! You’ll just need to fill out a 23-page form, attend an exit interview with our Air Retention Specialist, and solve a CAPTCHA that’s actually a lung capacity test."
    },
    {
        question: "Is this a real product?",
        answer: "This is a test site for A/B testing and other experiments. But honestly, at this point in tech, would you really be surprised if someone funded this? We’ve seen worse on Product Hunt."
    },
    {
        question: "Do you have an API?",
        answer: "Yes! Our REST API supports GET /air and POST /exhale endpoints. Rate limited to 12 breaths per minute (we recommend not exceeding this in production or in life)."
    }
];

const FAQ: React.FC = () => {
    // Track which index is open. null means all are closed.
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-label">FAQ</div>
                <div className="section-title">Questions we made up</div>
                <p className="section-sub" style={{ margin: '0 auto' }}>
                    Transparent answers to the questions literally nobody asked.
                </p>

                <div className="faq-list" style={{ textAlign: 'left' }}>
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <button
                                className={`faq-q ${activeIndex === index ? 'open' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                {item.question}
                            </button>
                            <div className={`faq-a ${activeIndex === index ? 'open' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;