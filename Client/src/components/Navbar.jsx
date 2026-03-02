import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Helper to handle smooth scrolling or navigation
    const getHashLink = (hash) => {
        if (location.pathname === '/') {
            return hash;
        }
        return `/${hash}`;
    };

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/20" data-purpose="main-navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-primary tracking-tight">SUVADHARI</span>
                    </Link>
                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link className="text-slate-600 hover:text-primary font-medium transition-colors" to="/">Home</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium transition-colors" to="/features">Features</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium transition-colors" to="/how-it-works">How It Works</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium transition-colors" to="/about">About Us</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium transition-colors" to="/contact">Contact</Link>
                    </div>
                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="px-5 py-2 text-primary font-semibold hover:bg-accent rounded-custom transition-all">Log In</Link>
                        <button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-custom shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all">Register</button>
                    </div>
                    {/* Mobile Menu Button (Icon Only) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-slate-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
