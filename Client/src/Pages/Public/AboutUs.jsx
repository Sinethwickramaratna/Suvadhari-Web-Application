import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutUs() {
    return (
        <div className="bg-background-light text-slate-900 transition-colors duration-300">
            <Navbar />
            <main className="relative">
                {/* Hero Section */}
                <section className="relative bg-slate-900 overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
                    {/* Medical pattern overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-sm">security</span>
                            SECURE &amp; PATIENT-CENTERED
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                            ABOUT <span className="text-primary">SUVADHARI</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
                            A secure, patient-centered healthcare platform dedicated to modernizing medical experiences with technology. We bridge the gap between innovation and compassion.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/30">
                                Learn More
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all glass-effect">
                                Our Values
                            </button>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center text-center mb-16">
                            <h2 className="text-4xl font-black text-slate-900 mb-4">OUR TEAM</h2>
                            <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
                            <p className="text-slate-600 max-w-xl">
                                The brilliant minds dedicated to reshaping the healthcare landscape through innovative engineering and design.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Sineth Wickramaratna */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary hover:scale-[1.03] transition-all duration-400">
                                <div className="size-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all">
                                    <img className="w-full h-full object-cover" data-alt="Sineth Wickramaratna Co-Founder Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6iVKgKGN_aBHku_teSrmj5cqKpHjIaNsjLzZpXRnRk8wF8SXUGo-EQ4Dp-QwCHZWN0GO9BCvMMwWJAB3IFiTh2q2DYitwnlS2LI83Qjl7RwJ3hXybo7LcBRmixn0vSe7GFNS9CxYKyPgklTnALvcbao7KfAY8bjGJ0AAfnEPP7qTcgzV59OcaJNFn0IoLkS8CItg9JjS68lJiETW89SKoA9LkTefe151pkUuplzHNSujmgow6KPcAKRVXXHx_7q6wgn9ZflZcFeTq" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Sineth Wickramaratna</h3>
                                <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">Co-Founder</p>
                                <p className="text-slate-500 text-sm">NetNinjas Team</p>
                            </div>

                            {/* Nimsika Bosilu */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary hover:scale-[1.03] transition-all duration-400">
                                <div className="size-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all">
                                    <img className="w-full h-full object-cover" data-alt="Nimsika Bosilu Lead Developer Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3AN7esfg41hRb11H2w1wG8PCMXHYBfwTNjrHKADCRNcrI_MkqFDRNuZb0SHnmXJyekTvE0j4wUxM8ealzcpLXajVDZEjxP5r4yfrodnXszz6zoe3jZls98ruGVLG_F36xoJdafVza7jEjWI4rG19k9wOwel2LOKYmyijlJe3iXnDe9PaBQQ5xUK3hkT1ib4H8uIqxdWMZgTDkklX_YcIwmnABNgM8Mp9vSC9RRiZVyW2uFI-6Kjs7x5WQYw7Pp5kVOaTr8Yn5eARw" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Nimsika Bosilu</h3>
                                <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">Lead Developer</p>
                                <p className="text-slate-500 text-sm">NetNinjas Team</p>
                            </div>

                            {/* Thashira Devinda */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary hover:scale-[1.03] transition-all duration-400">
                                <div className="size-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all">
                                    <img className="w-full h-full object-cover" data-alt="Thashira Devinda UI/UX Designer Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-9X12zec_hPQxF5J69KC-CRReeX9LsOnJzbneTpN43zDZgpCBDP27ZwdKNeXuhkCNXph2fL1rAdTZd4_o2uJzXcAILV_zT8MR98lD4dr5UPBphb5YdwhHB2DAghcW8fHpKzFIjzR5BFYnT1eSDCd2d8bNO9HRZf13AHVtbem2c4JlGZZ56x57CODX7VcVwZsAawZ1fYkihNI58TDeGkn0yw7WoabZ9k_FSWIQWDjadg3-XhdgHzLOXxHBbdOo-7VH-awfDgWEaXpw" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Thashira Devinda</h3>
                                <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">UI/UX Designer</p>
                                <p className="text-slate-500 text-sm">NetNinjas Team</p>
                            </div>

                            {/* Gimsara Bulagala */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-primary hover:scale-[1.03] transition-all duration-400">
                                <div className="size-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all">
                                    <img className="w-full h-full object-cover" data-alt="Gimsara Bulagala Systems Architect Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnai564UzoPTfgd-Ul1538mCAcKTILWgmaSqVZH9LYA7_0UdmRCLWDm9FJsY5JolHNJClyLDrLTc1Ylb2wcYUDU6VaLiySx3GnX4ofc2xXK-BJaju3v5JWKXa2IbqUBzmwZC493AKLl6ldN5lbWLEEgn-HR_VU5BdDkrUpTFjmuy_nKki7eFys8ZP4_uhwlDyy2fJ1cW0o5JLgUaTk_qsJWtthGl94e61U67lqfaLUu7MLxxj9NtphLvDS0L7JAq5vn2COct2PMIrD" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Gimsara Bulagala</h3>
                                <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">Systems Architect</p>
                                <p className="text-slate-500 text-sm">NetNinjas Team</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Developer Recognition Section */}
                <section className="py-12 px-4 bg-slate-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 rounded-2xl text-white relative overflow-hidden bg-slate-900">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <div className="flex-1 text-center md:text-left relative z-10">
                                <h4 className="text-2xl font-bold mb-2">Developed by <span className="text-primary">NetNinjas</span></h4>
                                <p className="text-slate-400">The powerhouse team behind Suvadhari's innovation. Building the future of health-tech.</p>
                            </div>
                            <div className="flex flex-shrink-0 relative z-10">
                                <a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors" href="#">
                                    View Portfolio
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
