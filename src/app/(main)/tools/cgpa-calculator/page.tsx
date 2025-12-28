'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Loader2, Calculator, GraduationCap, Lock, Shield, BookOpen, ArrowLeft } from 'lucide-react';

export default function CGPACalculatorPage() {
    const [formData, setFormData] = useState({
        registrationNo: '',
        dataConsent: false,
        secondDegree: false
    });

    const [validation, setValidation] = useState({
        isValid: false,
        error: ''
    });

    const [state, setState] = useState({
        loading: false,
        error: null as string | null,
        success: false,
        result: null as ResultType | null
    });

    const [stats, setStats] = useState({
        totalCalculations: 12547,
        activeUsers: 3421
    });

    interface Course {
        code: string;
        name: string;
        creditHours: number;
        marks: number;
        grade: string;
        points: number;
    }

    interface Semester {
        semester: number;
        courses: Course[];
        gpa: number;
        totalCreditHours: number;
    }

    interface ResultType {
        studentInfo: {
            name: string;
            registrationNo: string;
            program: string;
            semester: string;
        };
        semesters: Semester[];
        cgpa: number;
        totalCreditHours: number;
        totalQualityPoints: number;
    }

    // Real-time validation
    useEffect(() => {
        const regNoPattern = /^\d{4}-ag-\d{4}$/i;
        const value = formData.registrationNo.trim().toLowerCase();

        if (!value) {
            setValidation({ isValid: false, error: '' });
            return;
        }

        if (!regNoPattern.test(value)) {
            setValidation({
                isValid: false,
                error: 'Invalid format. Use: YYYY-ag-XXXX (e.g., 2021-ag-1000)'
            });
            return;
        }

        const year = parseInt(value.split('-')[0]);
        const currentYear = new Date().getFullYear();

        if (year < 2000 || year > currentYear) {
            setValidation({
                isValid: false,
                error: `Year must be between 2000 and ${currentYear}`
            });
            return;
        }

        setValidation({ isValid: true, error: '' });
    }, [formData.registrationNo]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const simulateCalculation = async (): Promise<ResultType> => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        return {
            studentInfo: {
                name: 'Student Name',
                registrationNo: formData.registrationNo.toUpperCase(),
                program: 'BS Computer Science',
                semester: 'Fall 2024'
            },
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { code: 'CS-101', name: 'Intro to Computing', creditHours: 3, marks: 85, grade: 'A', points: 4.0 },
                        { code: 'MATH-101', name: 'Calculus I', creditHours: 3, marks: 78, grade: 'B+', points: 3.5 },
                        { code: 'ENG-101', name: 'English I', creditHours: 3, marks: 82, grade: 'A-', points: 3.7 }
                    ],
                    gpa: 3.73,
                    totalCreditHours: 9
                },
                {
                    semester: 2,
                    courses: [
                        { code: 'CS-102', name: 'Programming Fund.', creditHours: 4, marks: 88, grade: 'A', points: 4.0 },
                        { code: 'MATH-102', name: 'Calculus II', creditHours: 3, marks: 75, grade: 'B', points: 3.0 },
                        { code: 'PHY-101', name: 'Physics', creditHours: 3, marks: 80, grade: 'A-', points: 3.7 }
                    ],
                    gpa: 3.61,
                    totalCreditHours: 10
                }
            ],
            cgpa: 3.67,
            totalCreditHours: 19,
            totalQualityPoints: 69.73
        };
    };

    const handleSubmit = async () => {
        if (!validation.isValid) {
            setState(prev => ({ ...prev, error: 'Please enter a valid registration number' }));
            return;
        }

        if (!formData.dataConsent) {
            setState(prev => ({ ...prev, error: 'Please agree to data access consent' }));
            return;
        }

        setState({ loading: true, error: null, success: false, result: null });

        try {
            const result = await simulateCalculation();
            setState({ loading: false, error: null, success: true, result });
            setStats(prev => ({ totalCalculations: prev.totalCalculations + 1, activeUsers: prev.activeUsers }));
        } catch {
            setState({ loading: false, error: 'Failed to calculate CGPA. Please try again.', success: false, result: null });
        }
    };

    const handleReset = () => {
        setFormData({ registrationNo: '', dataConsent: false, secondDegree: false });
        setState({ loading: false, error: null, success: false, result: null });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && validation.isValid && formData.dataConsent && !state.loading) {
            handleSubmit();
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-emerald-600">Home</Link>
                        <span>/</span>
                        <Link href="/tools" className="hover:text-emerald-600">Tools</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">CGPA Calculator</span>
                    </div>
                </div>
            </div>

            {/* Hero Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">CGPA Calculator</h1>
                            <p className="text-emerald-100 mt-1">Calculate your cumulative GPA instantly</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Banner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-100 text-sm font-medium">Total Calculations</p>
                                <p className="text-3xl font-bold mt-1">{stats.totalCalculations.toLocaleString()}</p>
                            </div>
                            <Calculator className="w-12 h-12 text-emerald-200 opacity-80" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-teal-100 text-sm font-medium">Active Students</p>
                                <p className="text-3xl font-bold mt-1">{stats.activeUsers.toLocaleString()}</p>
                            </div>
                            <GraduationCap className="w-12 h-12 text-teal-200 opacity-80" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Calculator Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <Calculator className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Calculate Your CGPA</h2>
                                    <p className="text-gray-600 text-sm">Enter your details to get instant results</p>
                                </div>
                            </div>

                            {/* Alert Messages */}
                            {state.error && (
                                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-red-800 font-medium">Error</p>
                                        <p className="text-red-700 text-sm mt-1">{state.error}</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Registration Number Input */}
                                <div>
                                    <label htmlFor="registrationNo" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Registration Number *
                                    </label>
                                    <input
                                        type="text"
                                        id="registrationNo"
                                        name="registrationNo"
                                        value={formData.registrationNo}
                                        onChange={handleInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="2021-ag-1000"
                                        className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${validation.error
                                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                                : formData.registrationNo && validation.isValid
                                                    ? 'border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500'
                                                    : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'
                                            }`}
                                        disabled={state.loading}
                                        autoComplete="off"
                                        spellCheck="false"
                                    />
                                    {validation.error && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>{validation.error}</span>
                                        </p>
                                    )}
                                    {formData.registrationNo && validation.isValid && (
                                        <p className="mt-2 text-sm text-emerald-600 flex items-center space-x-1">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>Valid registration number format</span>
                                        </p>
                                    )}
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4">
                                    <label className="flex items-start space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="dataConsent"
                                            checked={formData.dataConsent}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 mt-0.5"
                                            disabled={state.loading}
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition">
                                                I agree and allow this site to access my result data from the LMS system for calculation purposes. *
                                            </span>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Your data is processed in real-time and not stored on our servers.
                                            </p>
                                        </div>
                                    </label>

                                    <label className="flex items-start space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="secondDegree"
                                            checked={formData.secondDegree}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 mt-0.5"
                                            disabled={state.loading}
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition">
                                                Include second degree features (e.g., B.Ed)
                                            </span>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Enable this if you&apos;re pursuing a second degree alongside your primary degree.
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="flex space-x-4">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={state.loading || !validation.isValid || !formData.dataConsent}
                                        className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                                    >
                                        {state.loading ? (
                                            <span className="flex items-center justify-center space-x-2">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Calculating...</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center space-x-2">
                                                <Calculator className="w-5 h-5" />
                                                <span>Calculate CGPA</span>
                                            </span>
                                        )}
                                    </button>

                                    {state.result && (
                                        <button
                                            onClick={handleReset}
                                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Results Section */}
                            {state.result && (
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Your Results</h3>

                                    {/* CGPA Card */}
                                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white mb-6 shadow-lg">
                                        <p className="text-emerald-100 text-sm font-medium">Cumulative GPA</p>
                                        <p className="text-5xl font-bold mt-2">{state.result.cgpa.toFixed(2)}</p>
                                        <div className="mt-4 pt-4 border-t border-emerald-400 flex justify-between text-sm">
                                            <div>
                                                <p className="text-emerald-100">Total Credit Hours</p>
                                                <p className="text-xl font-semibold mt-1">{state.result.totalCreditHours}</p>
                                            </div>
                                            <div>
                                                <p className="text-emerald-100">Quality Points</p>
                                                <p className="text-xl font-semibold mt-1">{state.result.totalQualityPoints.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Student Info */}
                                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Student Information</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-600">Name</p>
                                                <p className="font-medium text-gray-900">{state.result.studentInfo.name}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Registration No</p>
                                                <p className="font-medium text-gray-900">{state.result.studentInfo.registrationNo}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Program</p>
                                                <p className="font-medium text-gray-900">{state.result.studentInfo.program}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Semester</p>
                                                <p className="font-medium text-gray-900">{state.result.studentInfo.semester}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Semester Details */}
                                    <div className="space-y-4">
                                        {state.result.semesters.map((sem, idx) => (
                                            <details key={idx} className="group bg-gray-50 rounded-lg">
                                                <summary className="cursor-pointer p-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition flex items-center justify-between">
                                                    <span>Semester {sem.semester} - GPA: {sem.gpa.toFixed(2)}</span>
                                                    <span className="text-sm text-gray-600">({sem.totalCreditHours} Credit Hours)</span>
                                                </summary>
                                                <div className="p-4 pt-0">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-sm">
                                                            <thead>
                                                                <tr className="border-b border-gray-200">
                                                                    <th className="text-left py-2 text-gray-600 font-medium">Code</th>
                                                                    <th className="text-left py-2 text-gray-600 font-medium">Course</th>
                                                                    <th className="text-center py-2 text-gray-600 font-medium">CH</th>
                                                                    <th className="text-center py-2 text-gray-600 font-medium">Marks</th>
                                                                    <th className="text-center py-2 text-gray-600 font-medium">Grade</th>
                                                                    <th className="text-center py-2 text-gray-600 font-medium">GP</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {sem.courses.map((course, cIdx) => (
                                                                    <tr key={cIdx} className="border-b border-gray-100 last:border-0">
                                                                        <td className="py-2 text-gray-900 font-medium">{course.code}</td>
                                                                        <td className="py-2 text-gray-700">{course.name}</td>
                                                                        <td className="py-2 text-center text-gray-700">{course.creditHours}</td>
                                                                        <td className="py-2 text-center text-gray-700">{course.marks}</td>
                                                                        <td className="py-2 text-center">
                                                                            <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                                                                                {course.grade}
                                                                            </span>
                                                                        </td>
                                                                        <td className="py-2 text-center font-semibold text-gray-900">{course.points.toFixed(1)}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Security Notice */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <div className="flex items-center space-x-3 mb-4">
                                <Shield className="w-6 h-6 text-emerald-600" />
                                <h3 className="font-bold text-gray-900">Security & Privacy</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span>End-to-end encrypted data transmission</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span>No data storage - calculations in real-time only</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span>HTTPS secure connection enforced</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span>Compliant with university data policies</span>
                                </li>
                            </ul>
                        </div>

                        {/* How It Works */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">How It Works</h3>
                            <ol className="space-y-3 text-sm text-gray-600">
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                    <span>Enter your UAF registration number</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                    <span>Grant consent to access your LMS data</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                    <span>System fetches your results securely</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                                    <span>CGPA calculated instantly with breakdown</span>
                                </li>
                            </ol>
                        </div>

                        {/* More Tools */}
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
                            <h3 className="font-bold mb-4">Explore More</h3>
                            <p className="text-emerald-100 text-sm mb-4">
                                Check out our other preparation tools and resources.
                            </p>
                            <div className="space-y-2">
                                <Link href="/mcq-bank" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition">
                                    <BookOpen className="w-5 h-5" />
                                    <span>MCQ Bank</span>
                                </Link>
                                <Link href="/practice" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition">
                                    <GraduationCap className="w-5 h-5" />
                                    <span>Mock Exams</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
