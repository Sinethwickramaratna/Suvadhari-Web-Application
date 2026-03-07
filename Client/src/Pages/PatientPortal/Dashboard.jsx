import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
    const [user, setUser] = useState(null);
    const [healthData, setHealthData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchHealthData = async () => {
            if (!user) return;
            console.log("[Dashboard] Fetching health data for profile:", user.profileId);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/patient/dashboard`, {
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("[Dashboard] Health data received:", data.patient);
                    setHealthData(data.patient);
                } else {
                    console.error("[Dashboard] Failed to fetch health data. Status:", response.status);
                    if (response.status === 401) {
                        console.warn("[Dashboard] Session may have expired or cookie is missing.");
                    }
                }
            } catch (err) {
                console.error("[Dashboard] Error fetching health data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHealthData();
    }, [user]);

    if (!user) return null;

    return (
        <div className="flex h-auto min-h-screen w-full bg-background-light font-sans antialiased overflow-x-hidden">
            {/* Sidebar Navigation */}
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
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-blue-500/20 font-semibold" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-semibold">Overview</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">description</span>
                        <span className="text-sm font-medium">Medical Records</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">history</span>
                        <span className="text-sm font-medium">My History</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span className="text-sm font-medium">Doctor Appointment</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">medication</span>
                        <span className="text-sm font-medium">Pharmacy</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">verified_user</span>
                        <span className="text-sm font-medium">Doctor Access</span>
                    </a>

                    <div className="pt-8 pb-4">
                        <p className="px-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Account</p>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </div>
                </nav>

                <div className="p-6">
                    <button className="w-full py-4 px-4 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-600/20">
                        <span className="material-symbols-outlined">emergency</span>
                        Emergency SOS
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-72 flex flex-col min-h-screen bg-[#fcfdfe] dna-bg">
                {/* Top Bar */}
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
                                    await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {
                                        method: 'POST',
                                        credentials: 'include'
                                    });
                                } catch (err) {
                                    console.error("Logout failed", err);
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
                                <h4 className="font-bold text-slate-900 leading-none">{healthData?.name || user.email.split('@')[0]}</h4>
                                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Patient ID: {healthData?.patientId || user.profileId || 'SV-NEW'}</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                                <span className="material-symbols-outlined text-primary">person</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
                    {/* Welcome Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                                Welcome, {healthData?.name || user.email.split('@')[0]}!
                            </h2>
                            <p className="text-slate-500 mt-2 font-medium">
                                Age: {healthData?.age || '--'} <span className="mx-2">•</span>
                                Blood Type: {healthData?.bloodType || '--'} <span className="mx-2">•</span>
                                Weight: {healthData?.weight ? `${healthData.weight}kg` : '--kg'} <span className="mx-2">•</span>
                                Height: {healthData?.height ? `${healthData.height}cm` : '--cm'}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:bg-blue-600 transition-all font-sans">
                                <span className="material-symbols-outlined text-lg">add</span> New Appointment
                            </button>
                        </div>
                    </div>

                    {/* Quick Action Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: 'description', label: 'Medical Records', value: '8', sub: 'Total documents stored', color: 'blue' },
                            { icon: 'pending_actions', label: 'Pending Requests', value: '3', sub: 'Requiring attention', color: 'amber' },
                            { icon: 'family_history', label: 'Family History', value: 'Updated', sub: '2 days ago', color: 'green' },
                            { icon: 'person_search', label: 'Doctor Access', value: '4', sub: 'Verified practitioners', color: 'purple' }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-primary/50 transition-all cursor-pointer">
                                <div className={`w-12 h-12 rounded-xl bg-${card.color}-100 text-${card.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined">{card.icon}</span>
                                </div>
                                <h3 className="font-bold text-slate-900">{card.label}</h3>
                                <p className={`font-black text-slate-900 mt-1 ${card.value === 'Updated' ? 'text-sm' : 'text-2xl'}`}>{card.value}</p>
                                <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left & Center Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Health Summary */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">analytics</span>
                                        My Health Summary
                                    </h2>
                                    <button className="text-primary text-sm font-bold hover:underline">View All Trends</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Conditions</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-bold border border-red-200">Diabetes Type 2</span>
                                            <span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold border border-orange-200">Hypertension</span>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <p className="text-xs text-slate-500 font-medium">Last Visit</p>
                                            <p className="text-sm font-bold mt-1">Oct 14, 2023 with Dr. Perera</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Latest Vital Stats</h3>
                                        <div className="space-y-2">
                                            {[
                                                { label: 'Blood Type', value: healthData?.bloodType || '--', color: 'text-red-500', icon: 'bloodtype' },
                                                { label: 'Current Weight', value: healthData?.weight ? `${healthData.weight} kg` : '--', color: 'text-blue-500', icon: 'monitor_weight' },
                                                { label: 'Current Height', value: healthData?.height ? `${healthData.height} cm` : '--', color: 'text-slate-900', icon: 'height' }
                                            ].map((res, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100/50">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`material-symbols-outlined text-sm ${res.color}`}>{res.icon}</span>
                                                        <span className="text-sm font-medium text-slate-600">{res.label}</span>
                                                    </div>
                                                    <span className={`text-sm font-black ${res.color}`}>{res.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Medical Records Table */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold">Recent Medical Records</h2>
                                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
                                        <span className="material-symbols-outlined">filter_list</span>
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-slate-500 text-[10px] uppercase tracking-widest font-bold border-b border-slate-100">
                                                <th className="px-4 py-4">Record Name</th>
                                                <th className="px-4 py-4">Date</th>
                                                <th className="px-4 py-4">Doctor</th>
                                                <th className="px-4 py-4 text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {[
                                                { name: 'Annual Lab Report 2023', date: 'Oct 28, 2023', doctor: 'Dr. Kamal Perera', icon: 'lab_profile', iconColor: 'text-blue-500' },
                                                { name: 'Diabetes Follow-Up', date: 'Oct 15, 2023', doctor: 'Dr. Nirmal Jayasundara', icon: 'medical_information', iconColor: 'text-amber-500' },
                                                { name: 'Blood Test Result', date: 'Sep 30, 2023', doctor: 'General Lab Center', icon: 'bloodtype', iconColor: 'text-red-500' }
                                            ].map((record, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className={`material-symbols-outlined ${record.iconColor}`}>{record.icon}</span>
                                                            <span className="text-sm font-bold text-slate-800">{record.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-slate-500">{record.date}</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-slate-700">{record.doctor}</td>
                                                    <td className="px-4 py-4 text-right">
                                                        <button className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">View</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 text-center">
                                    <button className="text-sm font-bold text-primary hover:underline">View All Medical Records</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">notifications_active</span>
                                    Notifications
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-blue-600">person_add</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Dr. Kamal Perera requested access</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Requested access to your latest HbA1c lab reports.</p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-xs shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all">Approve</button>
                                                <button className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">Deny</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-green-600">verified</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Approval successful</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Dr. Nirmal Jayasundara authorized to view your profile.</p>
                                            <span className="text-[10px] text-slate-400 font-medium mt-2 block">2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">medication_liquid</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Prescription Ready</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Metformin 500mg ready at City Pharmacy.</p>
                                            <span className="text-[10px] text-slate-400 font-medium mt-2 block">Yesterday</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-3 rounded-xl border-2 border-slate-100 text-slate-400 text-sm font-bold hover:bg-slate-50 hover:text-slate-600 transition-all">
                                    Clear History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-auto border-t border-slate-100 bg-white/50 backdrop-blur-sm px-8 py-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3 opacity-50">
                            <div className="w-8 h-8 rounded-lg bg-slate-400 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm">medical_services</span>
                            </div>
                            <p className="text-sm font-bold tracking-tight text-slate-900">SUVADHARI</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </div>
                        <p className="text-sm text-slate-400 font-medium">© 2024 SUVADHARI. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default PatientDashboard;
