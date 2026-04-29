import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-brand">
                    <div
                        className="nav-brand"
                        style={{
                            color: '#fff',
                            background: 'none',
                            WebkitTextFillColor: 'unset'
                        }}
                    >
                        <em>Breezy</em>&thinsp;™
                    </div>
                    <p>
                        Making the world's most abundant resource feel exclusive since 2026.
                        Venture-backed. Carbon-confused.
                    </p>
                </div>

                <div>
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#">API Docs</a></li>
                        <li><a href="#">Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About (It's Air)</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Kit</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Air EULA</a></li>
                        <li><a href="#">Nostril Waiver</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {currentYear} Breezy
            </div>
        </footer>
    );
};

export default Footer;