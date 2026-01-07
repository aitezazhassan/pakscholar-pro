'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

const subjects = [
    'General Knowledge',
    'Geography',
    'Computer Science',
    'Mathematics',
    'English',
    'Urdu',
    'Islamic Studies',
    'Pakistan Studies',
    'Current Affairs',
];

const difficulties = ['Easy', 'Medium', 'Hard'];

export default function AddMCQPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        question: '',
        subject: 'General Knowledge',
        difficulty: 'Medium',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: 'A',
        explanation: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/admin/mcq/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                // Reset form
                setFormData({
                    question: '',
                    subject: 'General Knowledge',
                    difficulty: 'Medium',
                    optionA: '',
                    optionB: '',
                    optionC: '',
                    optionD: '',
                    correctAnswer: 'A',
                    explanation: '',
                });
                setTimeout(() => setSuccess(false), 3000);
            }
        } catch (error) {
            console.error('Failed to add MCQ:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Header */}
            <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/admin081267/dashboard"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Dashboard</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Add New MCQ</h1>
                    <p className="text-slate-400">Create a new multiple choice question</p>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                        ✓ MCQ added successfully!
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 space-y-6">
                    {/* Question */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Question *
                        </label>
                        <textarea
                            value={formData.question}
                            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                            rows={3}
                            placeholder="Enter your question here..."
                            required
                        />
                    </div>

                    {/* Subject and Difficulty */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Subject *
                            </label>
                            <select
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                required
                            >
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Difficulty *
                            </label>
                            <select
                                value={formData.difficulty}
                                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                required
                            >
                                {difficulties.map((diff) => (
                                    <option key={diff} value={diff}>{diff}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-slate-300">
                            Options *
                        </label>

                        {['A', 'B', 'C', 'D'].map((option) => (
                            <div key={option} className="flex items-center gap-3">
                                <span className="text-white font-medium w-8">{option}.</span>
                                <input
                                    type="text"
                                    value={formData[`option${option}` as keyof typeof formData]}
                                    onChange={(e) => setFormData({ ...formData, [`option${option}`]: e.target.value })}
                                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                    placeholder={`Option ${option}`}
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    {/* Correct Answer */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Correct Answer *
                        </label>
                        <select
                            value={formData.correctAnswer}
                            onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                            required
                        >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    {/* Explanation */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Explanation
                        </label>
                        <textarea
                            value={formData.explanation}
                            onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                            rows={3}
                            placeholder="Explain why this is the correct answer..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    <span>Save MCQ</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
