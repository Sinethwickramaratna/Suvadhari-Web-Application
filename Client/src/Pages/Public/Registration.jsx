import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Registration() {
    const [selectedRole, setSelectedRole] = useState('Patient');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const passwordValidations = {
        length: password.length >= 8,
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally make an API call to register the user
        // Afterwards, redirect to email verification
        navigate('/verify-email', { state: { email, source: 'registration' } });
    };

    return (
        <div className="hero-gradient min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Background Glow Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 py-12 pt-32">
                <div className="w-full max-w-2xl py-12 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 p-10 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-4xl text-primary">person_add</span>
                            </div>
                            <h1 className="text-3xl font-black mb-2 tracking-tight uppercase text-secondary">Join Our Network</h1>
                            <p className="text-slate-500">Complete your healthcare profile to get started.</p>
                        </div>

                        {/* Registration Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Role Selection */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">person_pin</span>
                                    Select Role
                                </label>
                                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-50 rounded-xl border border-slate-100">
                                    <button
                                        className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${selectedRole === 'Patient' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100'}`}
                                        type="button"
                                        onClick={() => setSelectedRole('Patient')}
                                    >
                                        Patient
                                    </button>
                                    <button
                                        className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${selectedRole === 'Doctor' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100'}`}
                                        type="button"
                                        onClick={() => setSelectedRole('Doctor')}
                                    >
                                        Doctor
                                    </button>
                                    <button
                                        className={`py-2 px-1 text-xs font-bold rounded-lg transition-all ${selectedRole === 'Admin' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:bg-slate-100'}`}
                                        type="button"
                                        onClick={() => setSelectedRole('Admin')}
                                    >
                                        Admin
                                    </button>
                                </div>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">First Name</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                        placeholder="John"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Last Name</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                        placeholder="Doe"
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Full Legal Name */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Full Name (Legal)</label>
                                <input
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    placeholder="Johnathan Quinton Doe"
                                    type="text"
                                />
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Email Address</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                        placeholder="john@example.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Phone Number</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                        placeholder="+94 7X XXX XXXX"
                                        type="tel"
                                    />
                                </div>
                            </div>

                            {/* Gender and DOB */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Gender</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800">
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Date of Birth</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800"
                                        type="date"
                                    />
                                </div>
                            </div>

                            {/* ID Number */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">ID Number (National ID/Passport)</label>
                                <input
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    placeholder="19XXXXXXXXXX"
                                    type="text"
                                />
                            </div>

                            {/* Allergies/Medical Conditions */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Allergies or Medical Conditions</label>
                                <textarea
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400 resize-none"
                                    placeholder="Please list any allergies or chronic conditions (If any)"
                                    rows="2"
                                ></textarea>
                            </div>

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Password</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Confirm Password</label>
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800"
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Requirements Checklist */}
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Password Requirements:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className={`flex items-center gap-2 text-xs font-medium ${passwordValidations.length ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {passwordValidations.length ? (
                                            <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                        ) : (
                                            <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                        )}
                                        At least 8 characters
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-medium ${passwordValidations.special ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {passwordValidations.special ? (
                                            <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                        ) : (
                                            <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                        )}
                                        One special character
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-medium ${passwordValidations.uppercase ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {passwordValidations.uppercase ? (
                                            <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                        ) : (
                                            <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                        )}
                                        One uppercase letter
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-medium ${passwordValidations.number ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {passwordValidations.number ? (
                                            <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                        ) : (
                                            <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                        )}
                                        One number
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="w-full bg-primary hover:bg-electric-blue text-white font-bold py-5 px-8 rounded-xl-custom transition-all shadow-xl shadow-blue-500/20 text-lg uppercase flex items-center justify-center gap-2"
                                type="submit"
                            >
                                <span>Register Account</span>
                                <span className="material-symbols-outlined text-xl">how_to_reg</span>
                            </button>

                            {/* Login Link */}
                            <div className="mt-8 flex items-center justify-center gap-2">
                                <span className="text-slate-400">Already have an account?</span>
                                <Link to="/login" className="font-bold text-primary hover:underline">Log in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
