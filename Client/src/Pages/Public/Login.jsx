import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logger from '../../utils/logger';

export default function Login() {
    const [selectedRole, setSelectedRole] = useState('Patient');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        logger.user('Login Attempt', { email, role: selectedRole });

        try {
            const apiBaseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
            const response = await fetch(`${apiBaseURL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role: selectedRole }),
                credentials: 'include',
            });

            logger.api('POST', `${apiBaseURL}/auth/login`, response.status, { email, role: selectedRole });

            const data = await response.json();

            if (!response.ok) {
                logger.error('Login', 'Login failed', new Error(data.message));
                throw new Error(data.message || 'Login failed');
            }

            logger.info('Login', 'Login successful', { email, role: data.user.role });

            // Store user info (token is now in a secure cookie)
            localStorage.setItem('user', JSON.stringify(data.user));

            // Role-based redirection
            const roleRoutes = {
                'Patient': '/patient-dashboard',
                'Doctor': '/doctor-dashboard',
                'Admin': '/admin-dashboard',
                'Pharmacy': '/pharmacy-dashboard'
            };

            const targetRoute = roleRoutes[data.user.role] || '/dashboard';
            logger.user('Login Redirect', { route: targetRoute });
            navigate(targetRoute);

        } catch (err) {
            logger.error('Login', 'Login error', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

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

                    {error && (
                        <div className="w-full mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold flex items-center gap-2 animate-shake">
                            <span className="material-symbols-outlined text-xl">error</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
                        {/* Role Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">person_pin</span>
                                Select Role
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1 sm:p-1 bg-slate-50 sm:bg-slate-50 rounded-xl border border-slate-100 relative z-10">
                                {['Patient', 'Doctor', 'Admin', 'Pharmacy'].map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setSelectedRole(role)}
                                        className={`py-3 sm:py-2 px-2 sm:px-1 text-[11px] font-black rounded-lg transition-all shadow-sm uppercase tracking-tighter ${selectedRole === role ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/20' : 'text-slate-400 bg-white hover:bg-slate-100 border border-slate-100'}`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="email">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                id="email"
                                placeholder="name@hospital.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="password">
                                    <span className="material-symbols-outlined text-primary text-lg">lock</span>
                                    Password
                                </label>
                                <Link className="text-xs font-bold text-primary hover:underline" to="/forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <input
                                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    id="password"
                                    placeholder="••••••••"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input className="rounded border-slate-200 text-primary focus:ring-primary/20" id="remember" type="checkbox" />
                            <label className="text-sm text-slate-500" htmlFor="remember">Remember me for 30 days</label>
                        </div>

                        {/* Submit Button */}
                        <button
                            className={`w-full bg-primary hover:bg-electric-blue text-white font-bold py-5 px-8 rounded-xl-custom transition-all shadow-xl shadow-primary/20 text-lg uppercase flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Signing In...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <span className="material-symbols-outlined text-xl">login</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <span className="text-slate-400">Don't have an account?</span>
                        <Link to="/register" className="font-bold text-primary hover:underline">Create an account</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
