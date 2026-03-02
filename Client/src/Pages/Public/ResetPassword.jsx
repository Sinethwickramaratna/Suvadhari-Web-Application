import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');

    const validations = {
        length: password.length >= 8,
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password)
    };

    return (
        <div className="hero-gradient text-slate-800 min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center px-4 py-32 relative z-10 w-full">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                    <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-electric-blue rounded-full blur-[120px] animate-float-glow-reverse"></div>
                </div>

                <div className="w-full max-w-md relative z-20">
                    {/* Reset Password Card */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl-custom shadow-layered overflow-hidden border border-white/20">
                        {/* Card Header Image/Icon */}
                        <div className="h-32 bg-primary/20 flex items-center justify-center relative overflow-hidden border-b border-white/10">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg z-10 border border-white/30">
                                <span className="material-symbols-outlined text-4xl text-white">lock_reset</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-white tracking-tight">Reset Password</h1>
                                <p className="text-slate-300 mt-2 text-sm font-medium">Please enter and confirm your new password to secure your medical account.</p>
                            </div>

                            <form action="#" className="space-y-6">
                                {/* New Password Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/90" htmlFor="new-password">New Password</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors z-10">lock</span>
                                        <input
                                            className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/20 rounded-xl-custom focus:ring-2 focus:ring-primary/40 focus:border-white/50 focus:bg-white/10 outline-none transition-all text-white placeholder-white/40 shadow-inner"
                                            id="new-password"
                                            name="new-password"
                                            placeholder="Enter new password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm New Password Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/90" htmlFor="confirm-password">Confirm New Password</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors z-10">enhanced_encryption</span>
                                        <input
                                            className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/20 rounded-xl-custom focus:ring-2 focus:ring-primary/40 focus:border-white/50 focus:bg-white/10 outline-none transition-all text-white placeholder-white/40 shadow-inner"
                                            id="confirm-password"
                                            name="confirm-password"
                                            placeholder="Confirm new password"
                                            type={showConfirmPassword ? "text" : "password"}
                                        />
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            <span className="material-symbols-outlined text-xl">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Requirements Checklist */}
                                <div className="bg-black/20 backdrop-blur-sm p-5 rounded-xl-custom border border-white/10 space-y-3">
                                    <p className="text-xs font-bold text-white/70 uppercase tracking-widest">Password Requirements:</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className={`flex items-center gap-2 text-xs font-medium ${validations.length ? 'text-white/90' : 'text-white/60'}`}>
                                            {validations.length ? (
                                                <span className="material-symbols-outlined text-[16px] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[16px] opacity-50">radio_button_unchecked</span>
                                            )}
                                            At least 8 characters
                                        </div>
                                        <div className={`flex items-center gap-2 text-xs font-medium ${validations.special ? 'text-white/90' : 'text-white/60'}`}>
                                            {validations.special ? (
                                                <span className="material-symbols-outlined text-[16px] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[16px] opacity-50">radio_button_unchecked</span>
                                            )}
                                            One special character
                                        </div>
                                        <div className={`flex items-center gap-2 text-xs font-medium ${validations.uppercase ? 'text-white/90' : 'text-white/60'}`}>
                                            {validations.uppercase ? (
                                                <span className="material-symbols-outlined text-[16px] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[16px] opacity-50">radio_button_unchecked</span>
                                            )}
                                            One uppercase letter
                                        </div>
                                        <div className={`flex items-center gap-2 text-xs font-medium ${validations.number ? 'text-white/90' : 'text-white/60'}`}>
                                            {validations.number ? (
                                                <span className="material-symbols-outlined text-[16px] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[16px] opacity-50">radio_button_unchecked</span>
                                            )}
                                            One number
                                        </div>
                                    </div>
                                </div>

                                {/* Update Button */}
                                <button
                                    className="w-full py-4 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom shadow-[0_0_20px_rgba(13,127,242,0.4)] hover:shadow-[0_0_30px_rgba(13,127,242,0.6)] transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.98]"
                                    type="submit"
                                >
                                    <span>Update Password</span>
                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                </button>
                            </form>

                            {/* Back to Login */}
                            <div className="mt-8 text-center relative z-10">
                                <Link className="text-sm font-semibold text-white/70 hover:text-white hover:underline flex items-center justify-center gap-1.5 transition-colors" to="/login">
                                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
