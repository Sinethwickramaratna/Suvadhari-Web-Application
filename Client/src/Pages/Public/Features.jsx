import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Features() {
    return (
        <div className="antialiased overflow-x-hidden bg-slate-50 text-slate-800">
            <Navbar />
            <main className="relative">
                {/* Hero Section */}
                <section className="relative bg-slate-900 overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32" data-purpose="features-hero">
                    {/* Medical pattern overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-sm">star</span>
                            POWERFUL CAPABILITIES
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                            FEATURES BUILT FOR <br /> <span className="text-primary">SMARTER HEALTHCARE</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
                            SUVADHARI offers a complete set of tools designed to simplify healthcare data management while maintaining the highest standards of privacy, security, and efficiency.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 px-6 bg-slate-50 relative z-10" data-purpose="features-grid">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Patient Controlled Data Access</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Your Medical Data Belongs to You."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Grant/deny access, approve duration, revoke access, and maintain full visibility over who sees your records.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Centralized Medical Records</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"All Your Healthcare Information, In One Secure Place."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Store data from multiple hospitals in a secure cloud with high-level encryption for reliable access anytime.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">AI-Powered Medical Assistant</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Find Information Faster With Intelligent Support."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Natural language search helps locate diagnoses/meds instantly, reducing review time and providing clinical decision support.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Role Based Access Management</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Right Access for The Right People."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Separate dashboards with strict permissions prevent unauthorized access while ensuring total accountability.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Family Health History</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Support Preventive and Genetic Healthcare."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Link family histories to identify hereditary conditions, providing long-term insights and continuity of care.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Smart Search &amp; Summaries</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Critical Details in Seconds."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Intelligent filtering and quick summaries reduce data overload, significantly improving clinical efficiency.</p>
                        </div>

                        {/* Feature 7 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Transparent Audit Log</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Complete Visibility and Accountability."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Track every access point and modification with timestamped logs to increase trust and ethical data handling.</p>
                        </div>

                        {/* Feature 8 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Secure &amp; Scalable Architecture</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Built to Grow With Your Network."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Cloud-based infrastructure designed to support any size network with reliable performance and future-ready tech.</p>
                        </div>

                        {/* Feature 9 */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Intelligent Alerts</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"Stay Informed When It Matters Most."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Allergy/risk alerts and access request notifications provide real-time updates for better patient safety.</p>
                        </div>

                        {/* Feature 10 (Last card, centered in wide screens) */}
                        <div className="feature-card hover:feature-card-hover p-8 rounded-2xl flex flex-col h-full lg:col-start-2">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 icon-glow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-900">Sustainable &amp; Paperless</h3>
                            <p className="text-primary font-semibold text-sm mb-4">"A Step Toward Environmentally Responsible Healthcare."</p>
                            <p className="text-slate-500 text-sm leading-relaxed">Reducing paper records and repeated tests through eco-friendly digital practices for a greener future.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
