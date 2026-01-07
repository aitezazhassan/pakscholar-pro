'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function CreateExamPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        duration: 60,
        passingScore: 70,
        totalQuestions: 50,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/admin/exam/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/admin081267/dashboard');
                }, 2000);
            }
        } catch (error) {
            console.error('Failed to create exam:', error);
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
                    <h1 className="text-3xl font-bold text-white mb-2">Create Mock Exam</h1>
                    <p className="text-slate-400">Build a new practice exam for students</p>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                        ✓ Exam created successfully! Redirecting...
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Exam Title *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                            placeholder="e.g., PPSC Lecturer 2025 Mock Exam"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description *
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                            rows={3}
                            placeholder="Brief description of the exam..."
                            required
                        />
                    </div>

                    {/* Duration and Passing Score */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Duration (minutes) *
                            </label>
                            <input
                                type="number"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                min="1"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Passing Score (%) *
                            </label>
                            <input
                                type="number"
                                value={formData.passingScore}
                                onChange={(e) => setFormData({ ...formData, passingScore: parseInt(e.target.value) })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                min="1"
                                max="100"
                                required
                            />
                        </div>
                    </div>

                    {/* Total Questions */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Total Questions *
                        </label>
                        <input
                            type="number"
                            value={formData.totalQuestions}
                            onChange={(e) => setFormData({ ...formData, totalQuestions: parseInt(e.target.value) })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                            min="1"
                            required
                        />
                        <p className="mt-2 text-sm text-slate-400">
                            Questions will be randomly selected from the MCQ bank
                        </p>
                    </div>

                    {/* Info Box */}
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300 text-sm">
                        <p className="font-medium mb-1">Note:</p>
                        <p>This is a simplified exam creator. Questions will be automatically selected from your MCQ bank based on the total questions specified.</p>
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
                                    <span>Creating...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    <span>Create Exam</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
