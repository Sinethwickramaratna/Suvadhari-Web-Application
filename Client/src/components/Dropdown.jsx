import React, { useState, useRef, useEffect } from 'react';

export default function Dropdown({ value, onChange, label, options, placeholder = "Select an option", disabled = false, searchable = false, multiple = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
            setSearchTerm('');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = searchable
        ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
        : options;

    const handleSelect = (optionValue) => {
        if (multiple) {
            const newValue = value.includes(optionValue)
                ? value.filter(v => v !== optionValue)
                : [...value, optionValue];
            onChange(newValue);
        } else {
            onChange(optionValue);
            setIsOpen(false);
            setSearchTerm('');
        }
    };

    const getSelectedLabel = () => {
        if (multiple) {
            if (!value || value.length === 0) return placeholder;
            if (value.length === 1) return options.find(opt => opt.value === value[0])?.label || placeholder;
            return `${value.length} selected`;
        }
        return options.find(opt => opt.value === value)?.label || placeholder;
    };

    const isSelected = (optionValue) => {
        if (multiple) return value?.includes(optionValue);
        return value === optionValue;
    };

    return (
        <div ref={containerRef} className={`space-y-1 relative ${disabled ? 'opacity-60 pointer-events-none cursor-not-allowed' : ''}`}>
            {label && <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">{label}</label>}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 hover:border-slate-300 flex items-center justify-between text-left"
            >
                <span className={(multiple ? value?.length > 0 : value) ? 'text-slate-800' : 'text-slate-400'}>
                    {getSelectedLabel()}
                </span>
                <span className={`material-symbols-outlined transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl shadow-black/20 border border-slate-100 z-50 w-full max-h-64 overflow-hidden flex flex-col">
                    {searchable && (
                        <div className="p-2 border-b border-slate-100">
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm outline-none focus:border-primary"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )}
                    <div className="overflow-y-auto max-h-48">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`w-full px-4 py-3 text-left transition-all flex items-center gap-3 border-b border-slate-50 last:border-b-0 hover:bg-blue-50
                                        ${isSelected(option.value) ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:text-slate-900'}
                                    `}
                                >
                                    {isSelected(option.value) ? (
                                        <span className="material-symbols-outlined text-blue-600">check</span>
                                    ) : (
                                        multiple && <div className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center"></div>
                                    )}
                                    <span className={(!isSelected(option.value) && !multiple) ? 'ml-8' : ''}>{option.label}</span>
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-slate-400 text-sm text-center">No results found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
