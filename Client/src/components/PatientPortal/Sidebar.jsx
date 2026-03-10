import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: 'dashboard', label: 'Overview', path: '/patient-dashboard' },
        { icon: 'description', label: 'Medical Records', path: '#' },
        { icon: 'history', label: 'My History', path: '#' },
        { icon: 'calendar_today', label: 'Doctor Appointment', path: '#' },
        { icon: 'groups', label: 'Family Members', path: '/family-members' },
        { icon: 'medication', label: 'Pharmacy', path: '#' },
        { icon: 'verified_user', label: 'Doctor Access', path: '#' },
    ];

    return (
        <aside className="w-72 bg-[#0f172a] text-white hidden lg:flex flex-col fixed inset-y-0 z-50 transition-all border-r border-white/5">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="material-symbols-outlined text-white">medical_services</span>
                </div>
                <div>
                    <h1 className="text-xl font-bold tracking-tight">SUVADHARI</h1>
                    <p className="text-xs text-slate-400 font-medium">Patient Portal</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto customize-scrollbar">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path
                                ? 'bg-primary text-white shadow-lg shadow-blue-500/20 font-semibold'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                ))}

                <div className="pt-8 pb-4">
                    <p className="px-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Account</p>
                    <Link className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" to="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </div>
            </nav>

            <div className="p-6">
                <button className="w-full py-4 px-4 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-600/20">
                    <span className="material-symbols-outlined">emergency</span>
                    Emergency SOS
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
