import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { showToast } from '../utils/toast'; // Import the utility

interface LayoutContext {
    showToast: (msg: string) => void;
}

const PricingPage: React.FC = () => {
    // Use the same context as HomePage to keep toasts consistent

    return (
        <div className="pricing-page-wrapper">
            {/* Optional: Add a spacer or hero sub-header if the 
          navbar overlaps your pricing title */}
            <div style={{ paddingTop: '80px' }}>
                <Pricing onShowToast={showToast} />
            </div>

            <Stats />
            <Testimonials />
        </div>
    );
};

export default PricingPage;