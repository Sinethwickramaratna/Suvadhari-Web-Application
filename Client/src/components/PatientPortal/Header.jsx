import React from 'react';
import { useNavigate } from 'react-router-dom';
import logger from '../../utils/logger';

const Header = ({ user, healthData }) => {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-40 glass-header border-b border-slate-200/50 px-8 py-4 flex items-center justify-between">
            <div className="relative w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                    className="w-full bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary/20 text-sm"
                    placeholder="Search records, doctors, or results..."
                    type="text"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <span className="material-symbols-outlined">chat</span>
                </button>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:text-red-600 transition-colors"
                    onClick={async () => {
                        try {
                            logger.user('Logout', { email: user.email });
                            await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {
                                method: 'POST',
                                credentials: 'include'
                            });
                        } catch (err) {
                            logger.error('Dashboard', 'Logout failed', err);
                        }
                        localStorage.removeItem('user');
                        navigate('/login');
                    }}
                    title="Logout"
                >
                    <span className="material-symbols-outlined">logout</span>
                </button>
                <div className="h-8 w-px bg-slate-200 mx-2"></div>
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <h4 className="font-bold text-slate-900 leading-none">{healthData?.name || user?.email.split('@')[0]}</h4>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Patient ID: {healthData?.patientId || user?.profileId || 'SV-NEW'}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
