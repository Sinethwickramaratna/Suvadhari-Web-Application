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

                <div className="w-full max-w-md relative z-10">
                    {/* Forgot Password Card */}
                    <div className="glass-card p-10 rounded-2xl-custom shadow-glass border border-white/10">
                        <div className="flex flex-col gap-2 mb-8 text-center">
                            <div className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-white mb-2">Forgot Password?</h1>
                            <p className="text-slate-300 text-sm font-light">
                                Enter your email to receive a password reset link
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-slate-200 ml-1" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-xl-custom pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-500 backdrop-blur-sm"
                                        id="email"
                                        placeholder="name@email.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-electric-blue text-white font-bold h-14 rounded-xl-custom transition-all shadow-xl shadow-blue-500/20 text-lg flex items-center justify-center gap-2" type="submit">
                                <span>Send Reset Link</span>
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group">
                                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
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
