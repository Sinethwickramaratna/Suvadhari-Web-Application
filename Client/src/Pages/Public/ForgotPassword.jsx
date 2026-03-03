import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simply navigate to the next step, passing the email in state
        navigate('/verify-email', { state: { email } });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow pt-32 pb-20 flex items-center justify-center p-4 hero-gradient relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-0">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
                </div>

                <div className="w-full max-w-xl relative z-10">
                    {/* Forgot Password Card */}
                    <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 p-12 flex flex-col items-center">
                        <div className="text-center mb-10">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-6xl text-primary">lock_reset</span>
                            </div>
                            <h1 className="text-3xl font-black mb-2 tracking-tight uppercase text-slate-900">Forgot Password?</h1>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Enter your email to receive a password reset link
                            </p>
                        </div>

                        <form className="w-full space-y-6 text-left" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="email">
                                    <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                    Email Address
                                </label>
                                <input
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    id="email"
                                    placeholder="name@email.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="w-full py-5 px-8 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom shadow-xl shadow-blue-500/20 transition-all text-lg uppercase flex items-center justify-center gap-2 active:scale-[0.98]" type="submit">
                                <span>Send Reset Link</span>
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-primary hover:underline flex items-center justify-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                Back to Login
                            </Link>
                        </div>
                    </div>

                    {/* Copyright Note */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-xs tracking-widest uppercase">
                            © {new Date().getFullYear()} SUVADHARI Medical Systems. All rights reserved.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
