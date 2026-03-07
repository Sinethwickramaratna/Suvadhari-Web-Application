import React, { useState, useRef, useEffect } from 'react';

export default function DatePicker({ value, onChange, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState('days'); // 'days', 'months', 'years'
    const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
    const [yearInput, setYearInput] = useState(currentMonth.getFullYear().toString());
    const containerRef = useRef(null);

    const years = Array.from({ length: new Date().getFullYear() - 1920 + 1 }, (_, i) => 1920 + i).reverse();
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const handlePrevMonth = () => {
        const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
        setCurrentMonth(prev);
        setYearInput(prev.getFullYear().toString());
    };

    const handleNextMonth = () => {
        const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
        setCurrentMonth(next);
        setYearInput(next.getFullYear().toString());
    };

    const handleDayClick = (day) => {
        const year = currentMonth.getFullYear();
        const month = String(currentMonth.getMonth() + 1).padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');
        const formattedDate = `${year}-${month}-${formattedDay}`;
        onChange(formattedDate);
        setIsOpen(false);
    };

    const handleMonthSelect = (monthIndex) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));
        setView('days');
    };

    const handleYearSelect = (year) => {
        setCurrentMonth(new Date(year, currentMonth.getMonth()));
        setYearInput(year.toString());
        setView('days');
    };

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
            setView('days');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const days = [];
    for (let i = 0; i < firstDayOfMonth(currentMonth); i++) days.push(null);
    for (let i = 1; i <= daysInMonth(currentMonth); i++) days.push(i);

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
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            type="button"
                            onClick={handlePrevMonth}
                            className={`p-2 hover:bg-slate-100 rounded-lg transition-colors ${view !== 'days' ? 'invisible' : ''}`}
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>

                        <div className="flex gap-1">
                            <button
                                type="button"
                                onClick={() => setView(view === 'months' ? 'days' : 'months')}
                                className="font-bold text-slate-800 hover:text-primary transition-colors px-1 rounded hover:bg-slate-50"
                            >
                                {currentMonth.toLocaleDateString('en-US', { month: 'long' })}
                            </button>
                            {view === 'years' ? (
                                <input
                                    type="text"
                                    value={yearInput}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                        setYearInput(val);
                                        if (val.length === 4) {
                                            const year = parseInt(val);
                                            if (year >= 1900 && year <= 2100) {
                                                setCurrentMonth(new Date(year, currentMonth.getMonth()));
                                            }
                                        }
                                    }}
                                    onBlur={() => {
                                        if (yearInput.length < 4) {
                                            setYearInput(currentMonth.getFullYear().toString());
                                        }
                                    }}
                                    className="w-16 font-bold text-slate-800 border-b-2 border-primary outline-none text-center bg-transparent"
                                    autoFocus
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setView(view === 'years' ? 'days' : 'years')}
                                    className="font-bold text-slate-800 hover:text-primary transition-colors px-1 rounded hover:bg-slate-50"
                                >
                                    {currentMonth.getFullYear()}
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleNextMonth}
                            className={`p-2 hover:bg-slate-100 rounded-lg transition-colors ${view !== 'days' ? 'invisible' : ''}`}
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>

                    {/* Views */}
                    {view === 'days' && (
                        <>
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                    <div key={day} className="text-center text-[10px] font-black uppercase text-slate-400 py-1">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {days.map((day, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => day && handleDayClick(day)}
                                        disabled={!day}
                                        className={`aspect-square rounded-lg font-semibold transition-all text-xs
                                            ${!day ? 'invisible' : ''}
                                            ${value && new Date(value).getDate() === day && new Date(value).getMonth() === currentMonth.getMonth() && new Date(value).getFullYear() === currentMonth.getFullYear() ? 'bg-primary text-white shadow-lg' : 'hover:bg-blue-50 text-slate-700'}`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                    {view === 'months' && (
                        <div className="grid grid-cols-3 gap-2">
                            {months.map((month, index) => (
                                <button
                                    key={month}
                                    type="button"
                                    onClick={() => handleMonthSelect(index)}
                                    className={`py-3 text-xs font-bold rounded-lg transition-all
                                        ${currentMonth.getMonth() === index ? 'bg-primary text-white' : 'hover:bg-slate-100 text-slate-600'}`}
                                >
                                    {month.slice(0, 3)}
                                </button>
                            ))}
                        </div>
                    )}

                    {view === 'years' && (
                        <div className="grid grid-cols-4 gap-2 h-48 overflow-y-auto pr-1 customize-scrollbar">
                            {years.map(year => (
                                <button
                                    key={year}
                                    type="button"
                                    onClick={() => handleYearSelect(year)}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all
                                        ${currentMonth.getFullYear() === year ? 'bg-primary text-white' : 'hover:bg-slate-100 text-slate-600'}`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                const today = new Date();
                                setCurrentMonth(today);
                                setView('days');
                            }}
                            className="flex-1 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-primary transition-colors"
                        >
                            Reset to Today
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
