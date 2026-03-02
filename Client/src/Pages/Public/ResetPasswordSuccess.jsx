import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ResetPasswordSuccess() {
    return (
        <div className="hero-gradient min-h-screen flex flex-col font-sans relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
            </div>

            <main className="flex-grow flex items-center justify-center p-4 relative z-10 pt-32 pb-20">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl shadow-black/40 p-12 flex flex-col items-center text-center">

                    {/* Success Icon */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 blur-2xl rounded-full bg-emerald-500/20"></div>
                        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 border-2 border-emerald-100 text-emerald-500 shadow-inner">
                            <span className="material-symbols-outlined text-6xl font-bold">check_circle</span>
                        </div>
                    </div>

                    {/* Message Heading */}
                    <div className="flex flex-col gap-4 mb-8">
                        <h1 className="text-3xl font-black tracking-tight uppercase text-slate-900">
                            Password Reset Successful
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Your password has been updated. You can now log in with your new credentials to access the SUVADHARI platform.
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="w-full">
                        <Link
                            className="w-full py-4 px-6 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-lg uppercase"
                            to="/login"
                        >
                            <span>Back to Login</span>
                            <span className="material-symbols-outlined text-xl">login</span>
                        </Link>
                    </div>

                    {/* Visual Decorative Element */}
                    <div className="mt-8 opacity-30">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
