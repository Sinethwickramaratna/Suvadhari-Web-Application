import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
    return (
        <div className="hero-gradient min-h-screen flex flex-col font-sans relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px]"></div>
            </div>

            <main className="flex-grow flex items-center justify-center p-4 relative z-10 pt-32 pb-20">
                <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl shadow-black/40 p-12 flex flex-col items-center">
                    <div className="mb-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-primary">person</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black mb-2 tracking-tight uppercase text-slate-900">Login to Account</h1>
                        <p className="text-slate-500 text-lg leading-relaxed">Welcome back! Please enter your details.</p>
                    </div>

                    <form action="#" className="w-full space-y-6 text-left">
                        {/* Role Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">person_pin</span>
                                Select Role
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 sm:p-1 bg-slate-50 sm:bg-slate-50 rounded-xl border border-slate-100">
                                <button className="py-3 sm:py-2 px-2 sm:px-1 text-sm sm:text-xs font-bold rounded-lg bg-primary text-white shadow-sm transition-all" type="button">Patient</button>
                                <button className="py-3 sm:py-2 px-2 sm:px-1 text-sm sm:text-xs font-bold rounded-lg text-slate-400 hover:bg-slate-200 sm:hover:bg-slate-100 transition-all bg-white sm:bg-transparent shadow-sm sm:shadow-none border border-slate-100 sm:border-transparent" type="button">Doctor</button>
                                <button className="py-3 sm:py-2 px-2 sm:px-1 text-sm sm:text-xs font-bold rounded-lg text-slate-400 hover:bg-slate-200 sm:hover:bg-slate-100 transition-all bg-white sm:bg-transparent shadow-sm sm:shadow-none border border-slate-100 sm:border-transparent" type="button">Admin</button>
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="email">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                Email Address
                            </label>
                            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400" id="email" placeholder="name@hospital.com" type="email" />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="password">
                                    <span className="material-symbols-outlined text-primary text-lg">lock</span>
                                    Password
                                </label>
                                <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot Password?</a>
                            </div>
                            <div className="relative group">
                                <input className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400" id="password" placeholder="••••••••" type="password" />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary" type="button">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input className="rounded border-slate-200 text-primary focus:ring-primary/20" id="remember" type="checkbox" />
                            <label className="text-sm text-slate-500" htmlFor="remember">Remember me for 30 days</label>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-primary hover:bg-electric-blue text-white font-bold py-5 px-8 rounded-xl-custom transition-all shadow-xl shadow-blue-500/20 text-lg uppercase flex items-center justify-center gap-2" type="submit">
                            <span>Sign In</span>
                            <span className="material-symbols-outlined text-xl">login</span>
                        </button>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <span className="text-slate-400">Don't have an account?</span>
                        <a className="font-bold text-primary hover:underline" href="#">Create an account</a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
