import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RegistrationSuccess() {
    return (
        <div className="hero-gradient min-h-screen flex flex-col font-sans relative overflow-hidden">
            <Navbar />

            {/* Background Glow Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
            </div>

            <main className="flex-grow flex items-center justify-center p-4 relative z-10 pt-32 pb-20">
                <div className="max-w-xl w-full bg-white rounded-2xl-custom shadow-layered p-12 flex flex-col items-center text-center border border-gray-100">
                    <div className="mb-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-primary">verified</span>
                        </div>
                    </div>

                    <h2 className="text-4xl font-black mb-4 tracking-tight text-secondary">REGISTRATION SUCCESSFUL!</h2>

                    <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                        Your account has been created successfully. You can now log in to access your secure healthcare dashboard and manage your appointments.
                    </p>

                    <div className="w-full mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4 text-left">
                        <span className="material-symbols-outlined text-primary mt-1">info</span>
                        <div>
                            <p className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-1">Next Step</p>
                            <p className="text-slate-600">Proceed to login using your registered email and password to begin your healthcare journey.</p>
                        </div>
                    </div>

                    <Link
                        to="/login"
                        className="w-full bg-primary hover:bg-electric-blue text-white font-bold py-5 px-8 rounded-xl-custom transition-all shadow-xl shadow-blue-500/20 text-lg uppercase flex items-center justify-center gap-2"
                    >
                        <span>Proceed to Login</span>
                        <span className="material-symbols-outlined text-xl">login</span>
                    </Link>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <span className="text-slate-400 font-medium">Need assistance?</span>
                        <Link to="/contact" className="font-bold text-primary hover:underline transition-colors">Contact Support Center</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
