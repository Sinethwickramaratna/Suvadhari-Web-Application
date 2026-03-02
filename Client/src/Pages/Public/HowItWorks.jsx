import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HowItWorks() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden dna-pattern">
            <Navbar />
            <main className="flex-1 relative">
                {/* Hero Section */}
                <section className="relative bg-slate-900 overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32" data-purpose="how-it-works-hero">
                    {/* Medical pattern overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-sm">info</span>
                            HOW IT WORKS
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                            SIMPLE. SECURE.<br />
                            <span className="text-primary">PATIENT-CONTROLLED.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
                            SUVADHARI Makes Managing Healthcare Information Easy for Everyone Involved.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/30">
                                Get Started Now
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto max-w-5xl px-6 py-20">
                    <div className="relative space-y-24 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-primary/0 before:via-primary/20 before:to-primary/0 hidden md:block">
                        {/* Step 1 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="flex justify-end text-right">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">person_add</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Create an Account</h3>
                                    <p className="text-slate-600">Sign up as a patient, doctor, or medical staff and access a personalized dashboard designed for your specific needs.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">1</span>
                            </div>
                            <div className="pl-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="Illustration of user profile creation dashboard"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="order-2 md:order-1 pr-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="Secure data storage visualization"></div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">2</span>
                            </div>
                            <div className="order-1 flex justify-start text-left md:order-2">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">shield_locked</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Store &amp; Manage Records</h3>
                                    <p className="text-slate-600">Medical records are securely stored in one centralized system and updated by authorized professionals, ensuring data integrity.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="flex justify-end text-right">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">vpn_key</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Request &amp; Grant Access</h3>
                                    <p className="text-slate-600">Doctors request access to patient records. Patients approve access for a limited time, maintaining full control over their privacy.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">3</span>
                            </div>
                            <div className="pl-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="Permission request pop-up notification"></div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="order-2 md:order-1 pr-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="Medical reports preview screen"></div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">4</span>
                            </div>
                            <div className="order-1 flex justify-start text-left md:order-2">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">visibility</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Access Information Instantly</h3>
                                    <p className="text-slate-600">Authorized users can securely view medical histories, reports, and summaries when needed, facilitating faster treatment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="flex justify-end text-right">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">smart_toy</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Get Smart Assistance</h3>
                                    <p className="text-slate-600">Use intelligent search and AI tools to quickly find critical health information and identify patterns in medical history.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">5</span>
                            </div>
                            <div className="pl-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="AI-powered medical search interface"></div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <div className="order-2 md:order-1 pr-12 opacity-50">
                                <div className="h-64 w-full rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" data-alt="Activity log and notification alerts"></div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-primary p-2 text-white shadow-lg">
                                <span className="flex h-10 w-10 items-center justify-center font-black">6</span>
                            </div>
                            <div className="order-1 flex justify-start text-left md:order-2">
                                <div className="how-it-works-card rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined text-3xl">notifications_active</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900">Track &amp; Stay Informed</h3>
                                    <p className="text-slate-600">All data access is logged, and users receive notifications for requests and updates to ensure complete transparency.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Process (Simplified Vertical) */}
                    <div className="space-y-8 md:hidden">
                        <div className="how-it-works-card flex flex-col items-center rounded-2xl p-8 text-center bg-white shadow-sm">
                            <span className="mb-4 text-4xl font-black text-primary/30">1</span>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900">Create an Account</h3>
                            <p className="text-slate-600">Sign up as a patient, doctor, or medical staff.</p>
                        </div>
                        <div className="how-it-works-card flex flex-col items-center rounded-2xl p-8 text-center bg-white shadow-sm">
                            <span className="mb-4 text-4xl font-black text-primary/30">2</span>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900">Store &amp; Manage Records</h3>
                            <p className="text-slate-600">Centralized secure medical record storage.</p>
                        </div>
                        <div className="how-it-works-card flex flex-col items-center rounded-2xl p-8 text-center bg-white shadow-sm">
                            <span className="mb-4 text-4xl font-black text-primary/30">3</span>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900">Request &amp; Grant Access</h3>
                            <p className="text-slate-600">Maintain full control over who sees your data.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-slate-50 py-24 border-y border-slate-100">
                    <div className="container mx-auto max-w-4xl px-6 text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl text-slate-900">Ready to take control of your healthcare?</h2>
                        <p className="mb-10 text-slate-600">Join thousands of users managing their records securely with SUVADHARI.</p>
                        <button className="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 hover:brightness-110">
                            Create Your Account
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
