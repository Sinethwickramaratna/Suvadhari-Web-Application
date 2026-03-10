import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/PatientPortal/Sidebar';
import Header from '../../components/PatientPortal/Header';
import Dropdown from '../../components/Dropdown';
import logger from '../../utils/logger';

export default function FamilyMembers() {
    const [user, setUser] = useState(null);
    const [healthData, setHealthData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [familyMembers, setFamilyMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [relationship, setRelationship] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const relationships = [
        { value: 'Father', label: 'Father' },
        { value: 'Mother', label: 'Mother' },
        { value: 'Sibling', label: 'Sibling' },
        { value: 'Spouse', label: 'Spouse' },
        { value: 'Child', label: 'Child' },
        { value: 'Grandparent', label: 'Grandparent' },
        { value: 'Other', label: 'Other' }
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchHealthData = async () => {
            if (!user) return;
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/patient/dashboard`, {
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    setHealthData(data.patient);
                }
            } catch (err) {
                logger.error('FamilyMembers', 'Error fetching health data', err);
            }
        };

        fetchHealthData();
        fetchFamilyMembers();
    }, [user]);

    const fetchFamilyMembers = async () => {
        try {
            const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${apiBaseURL}/patient/family/list`, {
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setFamilyMembers(data);
            }
        } catch (err) {
            logger.error('FamilyMembers', 'Error fetching family members', err);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setSearchLoading(true);
        setError('');
        try {
            const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${apiBaseURL}/patient/family/search?query=${searchQuery}`, {
                credentials: 'include'
            });
            const data = await response.json();
            if (response.ok) {
                setSearchResults(data);
                if (data.length === 0) setError('No patients found with that name or PIN.');
            } else {
                throw new Error(data.message || 'Search failed');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setSearchLoading(false);
        }
    };

    const handleAddMember = async () => {
        if (!selectedMember || !relationship) {
            setError('Please select a member and their relationship');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${apiBaseURL}/patient/family/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    family_member_pin: selectedMember.person_pin,
                    relationship
                })
            });
            const data = await response.json();
            if (response.ok) {
                setSuccess('Family member added successfully!');
                setSelectedMember(null);
                setRelationship('');
                setSearchResults([]);
                setSearchQuery('');
                fetchFamilyMembers();
            } else {
                throw new Error(data.message || 'Failed to add member');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveMember = async (pin) => {
        if (!window.confirm('Are you sure you want to remove this family member?')) return;

        try {
            const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${apiBaseURL}/patient/family/remove`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ family_member_pin: pin })
            });
            if (response.ok) {
                fetchFamilyMembers();
            }
        } catch (err) {
            logger.error('FamilyMembers', 'Error removing member', err);
        }
    };

    if (!user) return null;

    return (
        <div className="flex h-auto min-h-screen w-full bg-background-light font-sans antialiased overflow-x-hidden">
            <Sidebar />

            <main className="flex-1 lg:ml-72 flex flex-col min-h-screen bg-[#fcfdfe] dna-bg">
                <Header user={user} healthData={healthData} />

                <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                        {/* Header */}
                        <div className="mb-10">
                            <h1 className="text-3xl font-black mb-2 tracking-tight uppercase text-slate-900">Family Network</h1>
                            <p className="text-slate-500">Connect with your family members to share healthcare data safely.</p>
                            {error && (
                                <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                                    <span className="material-symbols-outlined text-lg">error</span>
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                    {success}
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Column: Search & Add */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">person_search</span>
                                        Find Family Member
                                    </h2>
                                    <form onSubmit={handleSearch} className="flex gap-2">
                                        <input
                                            className="flex-grow px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-800 placeholder-slate-400"
                                            placeholder="Enter Name or PIN..."
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button
                                            type="submit"
                                            disabled={searchLoading}
                                            className="bg-primary hover:bg-electric-blue text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                                        >
                                            <span className="material-symbols-outlined">search</span>
                                        </button>
                                    </form>

                                    {/* Search Results */}
                                    {searchResults.length > 0 && (
                                        <div className="mt-4 border border-slate-100 rounded-xl overflow-hidden divide-y divide-slate-100 max-h-48 overflow-y-auto bg-slate-50/50">
                                            {searchResults.map((user) => (
                                                <button
                                                    key={user.person_pin}
                                                    onClick={() => setSelectedMember(user)}
                                                    className={`w-full p-4 text-left transition-all hover:bg-white flex items-center justify-between ${selectedMember?.person_pin === user.person_pin ? 'bg-white ring-2 ring-primary ring-inset' : ''}`}
                                                >
                                                    <div>
                                                        <p className="font-bold text-slate-800">{user.fullName}</p>
                                                        <p className="text-xs text-slate-400 font-mono">{user.person_pin}</p>
                                                    </div>
                                                    {selectedMember?.person_pin === user.person_pin && (
                                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Relationship Selection */}
                                <div className={`space-y-4 transition-all duration-300 ${selectedMember ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                    <h2 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">family_history</span>
                                        Define Relationship
                                    </h2>
                                    <div className="space-y-6">
                                        <Dropdown
                                            value={relationship}
                                            onChange={setRelationship}
                                            label="Relationship"
                                            placeholder="Select Relationship"
                                            options={relationships}
                                        />
                                        <button
                                            onClick={handleAddMember}
                                            disabled={loading || !relationship}
                                            className="w-full bg-primary hover:bg-electric-blue text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 text-sm uppercase flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            <span>{loading ? 'Adding...' : 'Connect Family Member'}</span>
                                            {!loading && <span className="material-symbols-outlined text-lg">person_add</span>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: List of Members */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">groups</span>
                                    Your Connections ({familyMembers.length})
                                </h2>

                                {familyMembers.length > 0 ? (
                                    <div className="space-y-3">
                                        {familyMembers.map((member) => (
                                            <div key={member.family_member_pin} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between group hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                                        {member.details?.firstName[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800">{member.details?.fullName}</p>
                                                        <p className="text-xs font-bold text-primary uppercase tracking-tighter">{member.relationship}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveMember(member.family_member_pin)}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                                                >
                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                        <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">person_off</span>
                                        <p className="text-slate-400 text-sm">No family members connected yet.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-auto border-t border-slate-100 bg-white/50 backdrop-blur-sm px-8 py-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3 opacity-50">
                            <div className="w-8 h-8 rounded-lg bg-slate-400 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm">medical_services</span>
                            </div>
                            <p className="text-sm font-bold tracking-tight text-slate-900">SUVADHARI</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </div>
                        <p className="text-sm text-slate-400 font-medium">© 2024 SUVADHARI. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
