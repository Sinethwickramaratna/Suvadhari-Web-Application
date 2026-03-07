import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(location.state?.email || '');
    const [code, setCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const validations = {
        length: password.length >= 8,
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validations.length || !validations.special || !validations.uppercase || !validations.number) {
            setError('Please meet all password requirements');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!code) {
            setError('Verification code is required');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, code, newPassword: password })
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/reset-password-success');
            } else {
                setError(data.message || 'Error resetting password');
            }
        } catch (err) {
            setError('Failed to connect to the server');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="hero-gradient min-h-screen flex flex-col font-sans relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
            </div>

            <main className="flex-grow flex items-center justify-center p-4 relative z-10 pt-32 pb-20">
                <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl shadow-black/40 p-12 flex flex-col items-center">
                    <div className="mb-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-primary">lock_reset</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black mb-2 tracking-tight uppercase text-slate-900">Reset Password</h1>
                        <p className="text-slate-500 text-lg leading-relaxed">Please enter and confirm your new password to secure your medical account.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 flex items-center gap-2">
                                <span className="material-symbols-outlined">error</span>
                                {error}
                            </div>
                        )}

                        {/* Email Field (ReadOnly) */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="email">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-3 bg-slate-100 border border-slate-100 rounded-xl outline-none text-slate-500 cursor-not-allowed"
                                id="email"
                                type="email"
                                value={email}
                                readOnly
                            />
                        </div>

                        {/* Verification Code Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="code">
                                <span className="material-symbols-outlined text-primary text-lg">verified</span>
                                Verification Code
                            </label>
                            <input
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400 text-center tracking-[8px] font-mono text-xl"
                                id="code"
                                placeholder="000000"
                                type="text"
                                maxLength="6"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            />
                            <p className="text-[10px] text-slate-400 font-medium text-center uppercase tracking-wider">Enter the 6-digit code sent to your email</p>
                        </div>

                        {/* New Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="new-password">
                                <span className="material-symbols-outlined text-primary text-lg">lock</span>
                                New Password
                            </label>
                            <div className="relative group">
                                <input
                                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    id="new-password"
                                    name="new-password"
                                    placeholder="Enter new password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Confirm New Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2" htmlFor="confirm-password">
                                <span className="material-symbols-outlined text-primary text-lg">enhanced_encryption</span>
                                Confirm New Password
                            </label>
                            <div className="relative group">
                                <input
                                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="Confirm new password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Requirements Checklist */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Password Requirements:</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className={`flex items-center gap-2 text-xs font-medium ${validations.length ? 'text-slate-800' : 'text-slate-500'}`}>
                                    {validations.length ? (
                                        <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                    )}
                                    At least 8 characters
                                </div>
                                <div className={`flex items-center gap-2 text-xs font-medium ${validations.special ? 'text-slate-800' : 'text-slate-500'}`}>
                                    {validations.special ? (
                                        <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                    )}
                                    One special character
                                </div>
                                <div className={`flex items-center gap-2 text-xs font-medium ${validations.uppercase ? 'text-slate-800' : 'text-slate-500'}`}>
                                    {validations.uppercase ? (
                                        <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                    )}
                                    One uppercase letter
                                </div>
                                <div className={`flex items-center gap-2 text-xs font-medium ${validations.number ? 'text-slate-800' : 'text-slate-500'}`}>
                                    {validations.number ? (
                                        <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-[16px] opacity-40">radio_button_unchecked</span>
                                    )}
                                    One number
                                </div>
                            </div>
                        </div>

                        {/* Update Button */}
                        <button
                            className="w-full py-5 px-8 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom shadow-xl shadow-blue-500/20 transition-all text-lg uppercase flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={isLoading || !validations.length || !validations.special || !validations.uppercase || !validations.number}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Updating...</span>
                                </>
                            ) : (
                                <>
                                    <span>Update Password</span>
                                    <span className="material-symbols-outlined text-xl">check_circle</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Back to Login */}
                    <div className="mt-8 flex items-center justify-center gap-2">
                        <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-primary hover:underline flex items-center justify-center gap-1.5 transition-colors">
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Login
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
