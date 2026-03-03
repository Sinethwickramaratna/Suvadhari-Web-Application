import React, { useState, useRef, useEffect } from 'react';

export default function DatePicker({ value, onChange, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
    const containerRef = useRef(null);

    const daysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleDayClick = (day) => {
        const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const formattedDate = selectedDate.toISOString().split('T')[0];
        onChange(formattedDate);
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const days = [];
    for (let i = 0; i < firstDayOfMonth(currentMonth); i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth(currentMonth); i++) {
        days.push(i);
    }

    const displayDate = value ? new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Select Date';

    return (
        <div ref={containerRef} className="space-y-1 relative">
            {label && <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">{label}</label>}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 hover:border-slate-300 flex items-center justify-between"
            >
                <span>{displayDate}</span>
                <span className="material-symbols-outlined text-slate-400">calendar_month</span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl shadow-black/20 p-4 z-50 w-80 border border-slate-100">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <h3 className="font-bold text-slate-800">
                            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>

                    {/* Week Days */}
                    <div className="grid grid-cols-7 gap-2 mb-3">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center text-xs font-bold text-slate-400 py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 gap-2">
                        {days.map((day, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => day && handleDayClick(day)}
                                disabled={!day}
                                className={`aspect-square rounded-lg font-semibold transition-all text-sm
                                    ${!day ? 'invisible' : ''}
                                    ${value && new Date(value).getDate() === day && new Date(value).getMonth() === currentMonth.getMonth() ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-50 text-slate-700'}
                                    ${new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) < new Date() && value !== `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` ? 'text-slate-300 cursor-not-allowed' : 'hover:border-blue-300 border border-transparent'}`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Quick Select */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                const today = new Date().toISOString().split('T')[0];
                                onChange(today);
                                setIsOpen(false);
                            }}
                            className="flex-1 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold py-2 rounded-lg transition-colors"
                        >
                            Today
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className="flex-1 text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 font-semibold py-2 rounded-lg transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
