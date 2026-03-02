import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactUs() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-slate-900 overflow-hidden py-24 lg:py-32" data-purpose="contact-hero">
                    {/* Medical pattern overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-sm">support_agent</span>
                            CONTACT US
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                            WE'RE HERE TO <span className="text-primary">HELP</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
                            Reach Out to Us for Inquiries, Support, or Collaboration Opportunities.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <a className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/30" href="#message-form">
                                Get In Touch
                                <span className="material-symbols-outlined">arrow_downward</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Cards Section */}
                <section className="max-w-6xl mx-auto px-4 py-12 -mt-16 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Email Card */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary">mail</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4">Drop us a line anytime</p>
                            <a className="text-primary font-bold hover:underline" href="mailto:support@suvadhari.lk">support@suvadhari.lk</a>
                        </div>
                        {/* Phone Card */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary">call</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4">Mon-Fri from 8am to 5pm</p>
                            <a className="text-primary font-bold hover:underline" href="tel:+94722105684">+94 72 210 5684</a>
                        </div>
                        {/* Location Card */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4">Visit our main headquarters</p>
                            <span className="text-slate-900 dark:text-white font-bold" data-location="Sri Lanka">Sri Lanka</span>
                        </div>
                    </div>
                </section>

                {/* Message Form & Info */}
                <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-slate-50/50" id="message-form">
                    <div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900">Send us a Message</h2>
                        <p className="text-slate-600 mb-8 max-w-md">
                            Have a specific question or want to partner with us? Fill out the form below and our team will get back to you within 24 hours.
                        </p>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input className="px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input className="px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input className="px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input className="px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+94 7X XXX XXXX" type="tel" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea className="px-4 py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help you?" rows="4"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl-custom hover:bg-electric-blue shadow-lg shadow-blue-500/20 transition-all" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900 text-slate-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="material-symbols-outlined text-primary">support_agent</span>
                                Support &amp; Assistance
                            </h3>
                            <p className="mb-6 leading-relaxed text-slate-400">
                                Encountering technical issues with the SUVADHARI platform? Our specialized technical support team is available to assist you with account access, medical records synchronization, or any app-related glitches.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                                    <span className="text-slate-300">24/7 Server monitoring</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                                    <span className="text-slate-300">Secure data encryption support</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl text-primary">check_circle</span>
                                    <span className="text-slate-300">Patient portal troubleshooting</span>
                                </div>
                            </div>
                            <button className="mt-8 text-primary font-black flex items-center gap-2 hover:gap-3 transition-all">
                                Go to Support Center <span className="material-symbols-outlined text-primary">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
