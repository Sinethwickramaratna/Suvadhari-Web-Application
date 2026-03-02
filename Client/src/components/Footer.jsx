import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-32 pb-16 border-t border-gray-100" data-purpose="site-footer" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <span className="text-2xl font-bold text-primary tracking-tight mb-6 block">SUVADHARI</span>
                        <p className="text-slate-500 mb-6 leading-relaxed">
                            Secure. Intelligent. Patient-Centered Healthcare. Your data is protected with industry-standard encryption, role-based access, and continuous monitoring.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholder Icons */}
                            <a className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a>
                            <a className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h6>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Home</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Features</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">How It Works</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* For Users */}
                    <div>
                        <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">For Users</h6>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Patient Portal</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Doctor Portal</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Medical Staff Access</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Access Requests</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">AI Assistant</a></li>
                        </ul>
                    </div>
                    {/* Contact & Resources */}
                    <div>
                        <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Support &amp; Resources</h6>
                        <ul className="space-y-4 mb-6">
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Terms &amp; Conditions</a></li>
                        </ul>
                        <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Contact Information</h6>
                        <p className="text-slate-500 text-sm mb-2"><strong>Email:</strong> support@suvadhari.lk</p>
                        <p className="text-slate-500 text-sm mb-2"><strong>Phone:</strong> +94 72 210 5684</p>
                        <p className="text-slate-500 text-sm"><strong>Location:</strong> Sri Lanka</p>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 text-center">
                    <p className="text-slate-400 text-sm">© {new Date().getFullYear()} SUVADHARI. All Rights Reserved. Developed by NetNinjas.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
