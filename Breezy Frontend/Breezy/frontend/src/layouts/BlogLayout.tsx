import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogLayout: React.FC = () => {
    return (
        <div className="app-root">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

            <div className="toast" id="toast"></div>
        </div>
    );
};

export default BlogLayout;