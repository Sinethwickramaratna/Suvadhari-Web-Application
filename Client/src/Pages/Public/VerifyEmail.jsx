import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function VerifyEmail() {
    // Array of 6 empty strings for the 6 boxes
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    // Get email from navigation state, fallback if directly navigated
    const email = location.state?.email || 'user@email.com';

    // Timer state
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        // Redirect to forgot password if no email is provided
        if (!location.state?.email) {
            navigate('/forgot-password', { replace: true });
        }
    }, [location, navigate]);

    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [timer]);

    const handleResend = () => {
        // Logic to actually resend the code would go here
        console.log('Resending code to', email);

        // Reset timer
        setTimer(30);
        setCanResend(false);
    };

    const handleChange = (index, value) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to next input automatically
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to move to previous input
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6).replace(/\D/g, '');
        if (pastedData) {
            const newCode = [...code];
            for (let i = 0; i < pastedData.length; i++) {
                newCode[i] = pastedData[i];
            }
            setCode(newCode);
            // Focus the last filled input or the very last one
            const focusIndex = Math.min(pastedData.length, 5);
            inputRefs.current[focusIndex].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullCode = code.join('');
        if (fullCode.length === 6) {
            console.log('Verifying code:', fullCode);
            // Here you would typically make an API call to verify the code
        }
    };

    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 py-32 relative z-10 w-full">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-md w-full bg-white rounded-2xl-custom shadow-layered p-12 border border-gray-100 relative z-20">
                    <div className="flex flex-col items-center text-center">
                        {/* Icon Container */}
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-4xl text-primary">mark_email_read</span>
                        </div>

                        {/* Header Content */}
                        <h1 className="text-3xl font-bold mb-3 tracking-tight text-secondary font-black">Check Your Email</h1>
                        <p className="text-slate-500 leading-relaxed mb-10 font-medium">
                            We've sent a 6-digit verification code to <span className="text-secondary font-semibold">{email}</span>.
                            <Link to={location.state?.source === 'registration' ? '/register' : '/forgot-password'} state={{ email }} className="text-primary hover:underline ml-1 font-semibold text-sm transition-colors">Change</Link>.
                            <br /><span className="text-sm mt-1 inline-block">Please enter it below to {location.state?.source === 'registration' ? 'verify your account' : 'reset your password'}.</span>
                        </p>

                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex justify-between gap-1 sm:gap-2 mb-8 w-full">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => inputRefs.current[index] = el}
                                        className="w-10 h-12 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-bold border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                                        maxLength="1"
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={handlePaste}
                                    />
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="w-full space-y-4">
                                <button
                                    className="w-full py-4 px-6 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 mb-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={code.join('').length !== 6}
                                >
                                    Verify PIN
                                </button>

                                <button
                                    className={`w-full py-4 px-6 font-bold rounded-xl-custom transition-all flex items-center justify-center gap-2 border border-slate-200 ${canResend ? 'text-secondary hover:bg-slate-50 bg-white cursor-pointer active:scale-[0.98]' : 'text-slate-400 bg-slate-50 opacity-60 cursor-not-allowed'}`}
                                    type="button"
                                    onClick={handleResend}
                                    disabled={!canResend}
                                >
                                    <span className={`material-symbols-outlined text-xl ${!canResend && 'opacity-50'}`}>refresh</span>
                                    {canResend ? 'Resend Code' : `Resend Code (${timer}s)`}
                                </button>

                                {!canResend && (
                                    <p className="text-xs text-slate-400 mt-2">
                                        The button will be re-enabled once the timer reaches zero.
                                    </p>
                                )}

                                <div className="pt-4 mt-2">
                                    <Link className="inline-flex items-center gap-2 font-semibold hover:underline group text-slate-500 hover:text-primary transition-colors" to={location.state?.source === 'registration' ? '/register' : '/login'}>
                                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                                        Return to {location.state?.source === 'registration' ? 'Registration' : 'Login'}
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
