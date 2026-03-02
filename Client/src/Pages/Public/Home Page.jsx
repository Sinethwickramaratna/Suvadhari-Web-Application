import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <header className="hero-gradient pt-40 pb-32 md:pt-56 md:pb-48 text-white relative overflow-hidden" data-purpose="hero-header" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpMe-Y0mmAJpvjvHgFMLFK8cAOHNj873Am1MVQYJUeC3rUhfolz8q5QQgKRdbeB2PPXmMit_uIMdvpgqEPfuxe0OpwB572c734FpbZJiiMNrfu28emmSDBAPe_K-Gf2DZ-f5h4l8VAbDAXd5zksmbog-zddAmVbMA6-yB9tO6l0AyxpbtSkXT5OsxrtJ3xQhgRC9slWl2BValaM9NTon6fc77Wdg5sE1QF4NwS3Exb4Je4dymITkjhcgCAKjBZZ9GU2tZNyafYy0j4')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px] animate-float-glow"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px] animate-float-glow-reverse"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
                        Your Health. Your Data. <br />
                        <span className="text-gradient">One Secure Platform.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        SUVADHARI brings hospitals, doctors, and patients together through a secure, intelligent healthcare platform designed for fast decisions and complete data control.
                    </p>
                    <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl-custom shadow-glass mb-16">
                        <div className="grid md:grid-cols-3 gap-8 mb-10">
                            <div className="flex items-center justify-center space-x-3">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <span className="text-slate-200 font-medium">Access Records Instantly</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3 md:border-x border-white/10">
                                <span className="material-symbols-outlined text-primary">encrypted</span>
                                <span className="text-slate-200 font-medium">Share Data Safely</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3">
                                <span className="material-symbols-outlined text-primary">insights</span>
                                <span className="text-slate-200 font-medium">Smarter Healthcare</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="px-10 py-5 bg-primary hover:bg-electric-blue text-white font-bold rounded-xl-custom transition-all shadow-xl shadow-blue-500/20 text-lg">GET STARTED</button>
                            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-xl-custom transition-all text-lg backdrop-blur-sm">EXPLORE FEATURES</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-400 text-sm tracking-widest uppercase">
                        <span className="material-symbols-outlined text-green-400">shield</span>
                        <span>100% Secure &amp; Encrypted Data</span>
                    </div>
                </div>
            </header>

            {/* Trust Bar */}
            <section className="bg-white py-16" data-purpose="trust-bar">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-32 items-center mb-12">
                        <div className="flex items-center space-x-3 text-slate-300 hover:text-primary transition-colors cursor-default grayscale hover:grayscale-0">
                            <span className="material-symbols-outlined text-3xl">verified</span>
                            <span className="uppercase tracking-[0.2em] font-extrabold text-xs">TRUSTED</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-300 hover:text-primary transition-colors cursor-default grayscale hover:grayscale-0">
                            <span className="material-symbols-outlined text-3xl">lock</span>
                            <span className="uppercase tracking-[0.2em] font-extrabold text-xs">SECURE</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-300 hover:text-primary transition-colors cursor-default grayscale hover:grayscale-0">
                            <span className="material-symbols-outlined text-3xl">person_search</span>
                            <span className="uppercase tracking-[0.2em] font-extrabold text-xs">PATIENT-FIRST</span>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-slate-400 text-lg italic leading-relaxed font-light">"Built with Modern Security Standards and Intelligent Tools to Protect Sensitive Health Data While Improving Clinical Efficiency."</p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding bg-slate-50/50" data-purpose="mission-section" id="about">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-primary font-bold tracking-widest text-sm mb-4">WHAT WE DO?</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                        SUVADHARI is a unified digital healthcare platform for managing and sharing medical records securely—connecting patients and professionals in one place.
                    </h3>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-slate-50" data-purpose="benefits-section" id="how-it-works" style={{ backgroundImage: "linear-gradient(rgba(248, 250, 252, 0.97), rgba(248, 250, 252, 0.97)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqgmGc3So0HHPG7k-Yie3bD4npkYra-0voEJIZuI7y6ultKi5ey7ynCk-SRXTW6Td_DA9PB_u8-j9NVEb1ahJUt5D44X9Ujd0pZzv81OSQiQ74JM0rgjCdM2BCb74qnvmNGfsN5OBC6xvawSXKS5x6wIg4NxwQADcUO8AvbM83WvYym22-noFn-CzjjwnnzqrZJ3S9tGeRjlhbrt6GT0DIqYjHLdMJVuDbKEZdhB3UuF-2RnbJ9A7x285OpU6Xxt8L9Jc3wg1rd_eV')", backgroundSize: "400px", backgroundRepeat: "repeat" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold tracking-widest text-sm mb-4">HOW IT HELPS?</h2>
                        <p className="text-3xl font-bold text-secondary">Designed for Everyone in Healthcare</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Patient Card */}
                        <div className="bg-white p-10 rounded-2xl-custom shadow-layered hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-gray-50 flex flex-col">
                            <div className="mb-8 overflow-hidden rounded-xl-custom h-56 relative group">
                                <img alt="Patient" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWiOS3QZPGSc1Sr9EbYCa8JDNGMXGxCLiRqAJ8w5Ovym53DxrpOWeEc0sjruGv2rL6J635Q9ZjBqRbb2Biy_KLe5kCwIgdVPVZhPv5B6yZBosJ7IWfnm9VitMp1movUZRyJtWPycig5yuad4GjqWBO8lli-1PUoyxBaR_2eCbLy3oP1YV6pXLcQ5V5DydNf-lzaJ1ggRnW9-ytzFZgn9ddesiNTb8WIqJex0EcWbZ2dfuCYHU3hTgliqqNSiQT64y3W9LOSvLqzAFU" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="text-2xl font-black text-secondary mb-8 flex items-center">
                                <span className="w-2 h-8 bg-primary rounded-full mr-4"></span>
                                PATIENT
                            </h4>
                            <ul className="space-y-5 text-slate-500 flex-grow">
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Stay In Control Of Your Medical Data.</li>
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Share Records Only When You Choose.</li>
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Access Your Health History Anytime, Anywhere.</li>
                            </ul>
                        </div>
                        {/* Doctor Card */}
                        <div className="bg-white p-10 rounded-2xl-custom shadow-2xl hover:scale-[1.03] transition-all duration-500 ring-4 ring-primary/5 relative -top-4 flex flex-col">
                            <div className="mb-8 overflow-hidden rounded-xl-custom h-56 relative group">
                                <img alt="Doctor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnoSTlIZTvemwqODpVEoJBNsdqMeOA2ZBPJCeMVchEgn4TL23jYMtcQCPXub9SVtLNIwfWZOpx18TiuV4vmas1VM6s93PvRwmDh5sLpuLza5jipCWgbrOcVTxnaK9cANSyZ5u231CvKkT5Abtd1yznvVOE7dqlQaYY7A_n0MRIahV5ktgRrOxRU3wqkf7GSeO-7quYLddjqfh1Hpty9GM-bDu5q8CUaWCa35DY2gpJwjRhn2u1fGEquch9om9nfcPSr4jiDMXhu7pb" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="text-2xl font-black text-secondary mb-8 flex items-center">
                                <span className="w-2 h-8 bg-primary rounded-full mr-4"></span>
                                DOCTOR
                            </h4>
                            <ul className="space-y-5 text-slate-500 flex-grow">
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> View Complete Patient Histories Instantly.</li>
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Reduce Time Spent Searching Through Records.</li>
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Make Informed Decisions With Intelligent Insights.</li>
                            </ul>
                        </div>
                        {/* Medical Staff Card */}
                        <div className="bg-white p-10 rounded-2xl-custom shadow-layered hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-gray-50 flex flex-col">
                            <div className="mb-8 overflow-hidden rounded-xl-custom h-56 relative group">
                                <img alt="Medical Staff" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1CjI8RUWk_yXcxsi2wO7uRqI5-v75qGMIbzThCwmR8o3pWUlxs9l0ovUWC1jkA0RLll3BZu0fQ7hLFDrAuuu8mx7m5MsN0QO50xaVckXCtQBPlMQH-BJlhacZ-CywBbK0huYlue034t1ABpVbRNis4CZY8SoXa1NYn_IO1vOyMpAx2NEYinQDZbctiqMyiHxKFVO9YtgZBIlaRWZV7i-H-86Hukd63moGQwt1CBmFjcngb2RxoR2uBpp7GtmBX7ca2AIU8fkSgzl" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="text-2xl font-black text-secondary mb-8 flex items-center">
                                <span className="w-2 h-8 bg-primary rounded-full mr-4"></span>
                                MEDICAL STAFF
                            </h4>
                            <ul className="space-y-5 text-slate-500 flex-grow">
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Manage Verified Medical Records Securely.</li>
                                <li className="flex items-start"><span className="material-symbols-outlined text-primary text-xl mr-3">check_circle</span> Ensure Data Accuracy And Accountability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-secondary text-white" data-purpose="features-grid" id="features" style={{ backgroundImage: "linear-gradient(rgba(10, 26, 58, 0.98), rgba(10, 26, 58, 0.98)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqgmGc3So0HHPG7k-Yie3bD4npkYra-0voEJIZuI7y6ultKi5ey7ynCk-SRXTW6Td_DA9PB_u8-j9NVEb1ahJUt5D44X9Ujd0pZzv81OSQiQ74JM0rgjCdM2BCb74qnvmNGfsN5OBC6xvawSXKS5x6wIg4NxwQADcUO8AvbM83WvYym22-noFn-CzjjwnnzqrZJ3S9tGeRjlhbrt6GT0DIqYjHLdMJVuDbKEZdhB3UuF-2RnbJ9A7x285OpU6Xxt8L9Jc3wg1rd_eV')", backgroundSize: "300px", backgroundRepeat: "repeat", backgroundBlendMode: "overlay" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold tracking-widest text-sm mb-4">WHY CHOOSE SUVADHARI?</h2>
                        <p className="text-3xl font-bold">Cutting-edge features for modern care</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="glass-card p-10 rounded-2xl-custom hover:bg-white/10 hover:scale-[1.03] transition-all duration-400 group">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">manage_accounts</span>
                            </div>
                            <h5 className="text-2xl font-bold mb-4">Patient-Controlled Data Sharing</h5>
                            <p className="text-slate-400 leading-relaxed">You decide who can access your records and for how long. Total privacy control at your fingertips.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="glass-card p-10 rounded-2xl-custom hover:bg-white/10 hover:scale-[1.03] transition-all duration-400 group">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">lock_person</span>
                            </div>
                            <h5 className="text-2xl font-bold mb-4">Secure &amp; Encrypted Storage</h5>
                            <p className="text-slate-400 leading-relaxed">Industry-grade AES-256 protection for all sensitive medical information, compliant with global standards.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="glass-card p-10 rounded-2xl-custom hover:bg-white/10 hover:scale-[1.03] transition-all duration-400 group">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">query_stats</span>
                            </div>
                            <h5 className="text-2xl font-bold mb-4">Smart Search &amp; AI Assistance</h5>
                            <p className="text-slate-400 leading-relaxed">Find critical details in seconds, not minutes. AI-driven insights help you navigate complex medical data.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="glass-card p-10 rounded-2xl-custom hover:bg-white/10 hover:scale-[1.03] transition-all duration-400 group">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">hub</span>
                            </div>
                            <h5 className="text-2xl font-bold mb-4">Connected Healthcare Network</h5>
                            <p className="text-slate-400 leading-relaxed">Access records across hospitals without duplication. A unified view of the patient's entire journey.</p>
                        </div>
                        {/* Feature 5 */}
                        <div className="glass-card p-10 rounded-2xl-custom hover:bg-white/10 hover:scale-[1.03] transition-all duration-400 group md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">history_edu</span>
                            </div>
                            <h5 className="text-2xl font-bold mb-4">Transparent Access Logs</h5>
                            <p className="text-slate-400 leading-relaxed">Know exactly when and how your data is used with immutable audit logs that ensure total transparency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Infrastructure */}
            <section className="section-padding bg-white overflow-hidden" data-purpose="infrastructure-highlights">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-secondary mb-8 leading-snug">
                                SUVADHARI is Powered By Modern Cloud Technologies and Intelligent Systems to Ensure:
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                                    <div>
                                        <h6 className="font-bold text-xl">High Availability and Performance</h6>
                                        <p className="text-slate-500">Uptime you can rely on for critical medical emergencies.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                                    <div>
                                        <h6 className="font-bold text-xl">Scalability from Local Clinics to National Systems</h6>
                                        <p className="text-slate-500">Flexible infrastructure that grows with your organization.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                                    <div>
                                        <h6 className="font-bold text-xl">Secure Authentication and Role-Based Access</h6>
                                        <p className="text-slate-500">Multi-factor security ensures only authorized eyes see the data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl"></div>
                            <div className="relative bg-white rounded-2xl-custom p-16 shadow-layered border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500">
                                <div className="text-center">
                                    <div className="relative inline-block mb-6">
                                        <p className="text-7xl md:text-8xl font-black text-primary">99.9<span className="text-4xl">%</span></p>
                                        <div className="absolute -right-4 -top-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                                            <span className="material-symbols-outlined text-xl font-bold">check</span>
                                        </div>
                                    </div>
                                    <p className="text-secondary font-black tracking-[0.2em] text-lg mb-2 uppercase">SYSTEM UPTIME</p>
                                    <p className="text-slate-400 text-sm">Reliable Infrastructure for Life-Critical Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}