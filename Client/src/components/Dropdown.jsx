import React, { useState, useRef, useEffect } from 'react';

export default function Dropdown({ value, onChange, label, options, placeholder = "Select an option" }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

    return (
        <div ref={containerRef} className="space-y-1 relative">
            {label && <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">{label}</label>}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 hover:border-slate-300 flex items-center justify-between text-left"
            >
                <span className={value ? 'text-slate-800' : 'text-slate-400'}>{selectedLabel}</span>
                <span className={`material-symbols-outlined transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl shadow-black/20 border border-slate-100 z-50 w-full max-h-64 overflow-y-auto">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left transition-all flex items-center gap-3 border-b border-slate-50 last:border-b-0 hover:bg-blue-50
                                ${value === option.value ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:text-slate-900'}
                            `}
                        >
                            {value === option.value && (
                                <span className="material-symbols-outlined text-blue-600">check</span>
                            )}
                            <span className={value !== option.value ? 'ml-8' : ''}>{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
