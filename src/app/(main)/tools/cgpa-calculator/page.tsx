'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Loader2, Calculator, GraduationCap, Lock, Shield, BookOpen, ArrowLeft, Info } from 'lucide-react';

interface Course {
    code: string;
    name: string;
    creditHours: number;
    marks: number;
    grade: string;
    gradePoints: number;
    qualityPoints: number;
}

interface Semester {
    semester: number;
    semesterName: string;
    courses: Course[];
    totalCreditHours: number;
    totalQualityPoints: number;
    gpa: number;
}

interface StudentResult {
    studentInfo: {
        name: string;
        registrationNo: string;
        program: string;
        faculty: string;
    };
    semesters: Semester[];
    cgpa: number;
    totalCreditHours: number;
    totalQualityPoints: number;
    status: string;
}

interface APIResponse {
    success: boolean;
    data?: StudentResult;
    error?: string;
    isDemo?: boolean;
    message?: string;
}

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
        result: null as StudentResult | null,
        isDemo: false,
        message: ''
    });

    const [stats, setStats] = useState({
        totalCalculations: 12547,
        activeUsers: 3421
    });

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

    const handleSubmit = async () => {
        if (!validation.isValid) {
            setState(prev => ({ ...prev, error: 'Please enter a valid registration number' }));
            return;
        }

        if (!formData.dataConsent) {
            setState(prev => ({ ...prev, error: 'Please agree to data access consent' }));
            return;
        }

        setState({ loading: true, error: null, success: false, result: null, isDemo: false, message: '' });

        try {
            const response = await fetch('/api/cgpa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    registrationNo: formData.registrationNo,
                    includeTwoDegree: formData.secondDegree
                })
            });

            const data: APIResponse = await response.json();

            if (!response.ok) {
                setState({
                    loading: false,
                    error: data.error || 'Failed to calculate CGPA',
                    success: false,
                    result: null,
                    isDemo: false,
                    message: ''
                });
                return;
            }

            if (data.success && data.data) {
                setState({
                    loading: false,
                    error: null,
                    success: true,
                    result: data.data,
                    isDemo: data.isDemo || false,
                    message: data.message || ''
                });
                setStats(prev => ({ totalCalculations: prev.totalCalculations + 1, activeUsers: prev.activeUsers }));
            } else {
                setState({
                    loading: false,
                    error: data.error || 'No result data found',
                    success: false,
                    result: null,
                    isDemo: false,
                    message: ''
                });
            }
        } catch {
            setState({
                loading: false,
                error: 'Network error. Please check your connection and try again.',
                success: false,
                result: null,
                isDemo: false,
                message: ''
            });
        }
    };

    const handleReset = () => {
        setFormData({ registrationNo: '', dataConsent: false, secondDegree: false });
        setState({ loading: false, error: null, success: false, result: null, isDemo: false, message: '' });
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
                            <h1 className="text-3xl md:text-4xl font-bold">UAF CGPA Calculator</h1>
                            <p className="text-emerald-100 mt-1">Automatic CGPA calculation from LMS data</p>
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
                                    <p className="text-gray-600 text-sm">Enter your AG number to get instant results from LMS</p>
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

                            {state.isDemo && state.message && (
                                <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
                                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-amber-800 font-medium">Demo Mode</p>
                                        <p className="text-amber-700 text-sm mt-1">{state.message}</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Registration Number Input */}
                                <div>
                                    <label htmlFor="registrationNo" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Registration Number (AG Number) *
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
                                                I agree and allow this site to access my result data from the UAF LMS system for calculation purposes. *
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
                                                Include 2nd degree features (e.g., B.Ed)
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
                                                <span>Fetching from LMS...</span>
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
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">Your Results</h3>
                                        {state.isDemo && (
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                                Demo Data
                                            </span>
                                        )}
                                    </div>

                                    {/* CGPA Card */}
                                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white mb-6 shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-emerald-100 text-sm font-medium">Cumulative GPA</p>
                                                <p className="text-5xl font-bold mt-2">{state.result.cgpa.toFixed(2)}</p>
                                                <p className="text-emerald-100 text-sm mt-2">{state.result.status}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="mb-3">
                                                    <p className="text-emerald-100 text-xs">Total Credit Hours</p>
                                                    <p className="text-2xl font-bold">{state.result.totalCreditHours}</p>
                                                </div>
                                                <div>
                                                    <p className="text-emerald-100 text-xs">Quality Points</p>
                                                    <p className="text-2xl font-bold">{state.result.totalQualityPoints.toFixed(1)}</p>
                                                </div>
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
                                                <p className="text-gray-600">Faculty</p>
                                                <p className="font-medium text-gray-900">{state.result.studentInfo.faculty}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Semester Details */}
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-gray-900">Semester Breakdown</h4>
                                        {state.result.semesters.map((sem, idx) => (
                                            <details key={idx} className="group bg-gray-50 rounded-lg" open={idx === 0}>
                                                <summary className="cursor-pointer p-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition flex items-center justify-between">
                                                    <span>{sem.semesterName} - GPA: <span className="text-emerald-600">{sem.gpa.toFixed(2)}</span></span>
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
                                                                    <th className="text-center py-2 text-gray-600 font-medium">QP</th>
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
                                                                            <span className={`inline-block px-2 py-0.5 rounded font-medium ${course.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-800' :
                                                                                    course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                                                                                        course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                                                                                            course.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' :
                                                                                                'bg-red-100 text-red-800'
                                                                                }`}>
                                                                                {course.grade}
                                                                            </span>
                                                                        </td>
                                                                        <td className="py-2 text-center font-semibold text-gray-900">{course.gradePoints.toFixed(1)}</td>
                                                                        <td className="py-2 text-center text-gray-700">{course.qualityPoints.toFixed(1)}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="border-t-2 border-gray-300 bg-gray-100">
                                                                    <td colSpan={2} className="py-2 font-semibold text-gray-900">Semester Total</td>
                                                                    <td className="py-2 text-center font-semibold text-gray-900">{sem.totalCreditHours}</td>
                                                                    <td className="py-2 text-center text-gray-700">-</td>
                                                                    <td className="py-2 text-center text-gray-700">-</td>
                                                                    <td className="py-2 text-center text-gray-700">-</td>
                                                                    <td className="py-2 text-center font-semibold text-gray-900">{sem.totalQualityPoints.toFixed(1)}</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </details>
                                        ))}
                                    </div>

                                    {/* CGPA Formula */}
                                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <h4 className="font-semibold text-emerald-800 mb-2">CGPA Calculation Formula</h4>
                                        <p className="text-sm text-emerald-700">
                                            CGPA = Total Quality Points / Total Credit Hours = {state.result.totalQualityPoints.toFixed(1)} / {state.result.totalCreditHours} = <strong>{state.result.cgpa.toFixed(2)}</strong>
                                        </p>
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
                                    <span>Enter your UAF registration number (AG No.)</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                    <span>Grant consent to access your LMS data</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                    <span>System fetches your results from UAF LMS</span>
                                </li>
                                <li className="flex space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                                    <span>CGPA calculated instantly with full breakdown</span>
                                </li>
                            </ol>
                        </div>

                        {/* Grade Scale */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">UAF Grading Scale</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between"><span className="text-gray-600">85-100</span><span className="font-medium text-emerald-600">A (4.0)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">80-84</span><span className="font-medium text-emerald-600">A- (3.7)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">75-79</span><span className="font-medium text-blue-600">B+ (3.3)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">70-74</span><span className="font-medium text-blue-600">B (3.0)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">65-69</span><span className="font-medium text-blue-600">B- (2.7)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">60-64</span><span className="font-medium text-yellow-600">C+ (2.3)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">55-59</span><span className="font-medium text-yellow-600">C (2.0)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">50-54</span><span className="font-medium text-orange-600">C- (1.7)</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">&lt;50</span><span className="font-medium text-red-600">F (0.0)</span></div>
                            </div>
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

                {/* Disclaimer */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
                    <p className="text-sm text-gray-600">
                        This is an unofficial tool for UAF students. The calculator fetches data directly from UAF LMS and performs calculations in real-time.
                        We do not store any personal information. For official results, please refer to your university's official channels.
                        If you encounter any errors, please contact us.
                    </p>
                </div>
            </div>
        </main>
    );
}
