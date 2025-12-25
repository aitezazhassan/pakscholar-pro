'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data organized by category
const faqData = [
    {
        category: 'General Questions',
        questions: [
            {
                q: 'What is PakScholar Pro?',
                a: 'PakScholar Pro is a free educational platform designed to help Pakistani students prepare for PPSC, FPSC, and CSS examinations. We provide comprehensive study materials, practice tests, past papers, and resources completely free of charge.'
            },
            {
                q: 'Is PakScholar Pro really free?',
                a: 'Yes! 100% free with no hidden charges. All study materials, practice tests, and resources are accessible without any payment. We believe quality education should be available to every Pakistani student regardless of their financial background.'
            },
            {
                q: 'Who can use PakScholar Pro?',
                a: 'Anyone preparing for PPSC, FPSC, or CSS exams can use our platform. You must be at least 13 years old (or have parental consent if under 18). Both beginners and advanced learners will find valuable resources here.'
            },
            {
                q: 'Which exams does PakScholar Pro cover?',
                a: 'We focus primarily on PPSC (Punjab Public Service Commission), FPSC (Federal Public Service Commission), and CSS (Central Superior Services) examinations. Our content covers the core subjects that appear in these competitive exams.'
            },
            {
                q: 'Is PakScholar Pro affiliated with PPSC or FPSC?',
                a: 'No. We are an independent educational platform. We are NOT affiliated with, endorsed by, or connected to PPSC, FPSC, or any government examination body. Always verify information from official sources.'
            }
        ]
    },
    {
        category: 'Account & Access',
        questions: [
            {
                q: 'Do I need to create an account?',
                a: 'Currently, all content is accessible without an account. However, creating an account (when available) will allow you to track progress, save bookmarks, and access personalized features in the future.'
            },
            {
                q: 'How do I create an account?',
                a: 'Account creation feature is coming soon. When launched, you\'ll be able to sign up using your email address. We\'ll never share your personal information with third parties.'
            },
            {
                q: 'What if I forget my password?',
                a: 'Once account features are active, you\'ll be able to reset your password using the"Forgot Password" link on the login page. A password reset link will be sent to your registered email address.'
            },
            {
                q: 'How can I delete my account?',
                a: 'You can request account deletion by contacting us at support@pakscholarpro.com. We\'ll delete your personal data within 30 days as outlined in our Privacy Policy.'
            },
            {
                q: 'Can I use one account on multiple devices?',
                a: 'Yes, when accounts are available, you\'ll be able to access your account from any device (computer, tablet, phone) by logging in with your credentials.'
            }
        ]
    },
    {
        category: 'Content & Subjects',
        questions: [
            {
                q: 'What subjects are covered?',
                a: 'We cover six core subjects: Pakistan Studies, Islamic Studies, Mathematics, English, General Science, and Current Affairs. Each subject includes comprehensive study materials aligned with PPSC/FPSC syllabi.'
            },
            {
                q: 'How often is content updated?',
                a: 'Current Affairs is updated monthly. Other subjects are reviewed regularly and updated when exam patterns change or new material becomes available. We strive to keep all content accurate and up-to-date.'
            },
            {
                q: 'Are past papers available?',
                a: 'Yes! We have a collection of past papers from previous PPSC and FPSC exams. Visit the Past Papers section to access them. Note: Always check official sources for the most current exam information.'
            },
            {
                q: 'Can I download study materials?',
                a: 'Currently, materials are accessible online through our platform. Some resources may be downloadable in the future. We\'re working to make content available offline for better accessibility.'
            },
            {
                q: 'How comprehensive is the syllabus coverage?',
                a: 'We cover the essential topics from official PPSC and FPSC syllabi. However, we recommend using our platform as a supplementary resource alongside official study materials and textbooks.'
            },
            {
                q: 'Is the content in English or Urdu?',
                a: 'Most content is in English, as PPSC/FPSC exams are primarily conducted in English. Some sections may include Urdu terms where relevant to Pakistani context.'
            }
        ]
    },
    {
        category: 'Practice Tests',
        questions: [
            {
                q: 'How do practice tests work?',
                a: 'Practice tests contain multiple-choice questions (MCQs) similar to actual exams. Select your answers, and you\'ll receive instant feedback with explanations for each question to help you learn.'
            },
            {
                q: 'Are practice tests timed?',
                a: 'Some tests have time limits to simulate real exam conditions, while others allow self-paced practice. Check each test\'s description for timing details.'
            },
            {
                q: 'Can I retake practice tests?',
                a: 'Yes! You can retake any practice test as many times as you want. This helps reinforce learning and track your improvement over time.'
            },
            {
                q: 'How is scoring calculated?',
                a: 'Scoring is based on the number of correct answers. Each question typically has equal weightage. Some tests may show percentage scores or grades to help you understand your performance level.'
            },
            {
                q: 'Do practice test scores guarantee exam success?',
                a: 'No. Practice tests help you prepare and identify weak areas, but they do NOT guarantee success in actual PPSC/FPSC exams. Your actual exam performance depends on many factors.'
            }
        ]
    },
    {
        category: 'Technical Issues',
        questions: [
            {
                q: 'Which browsers are supported?',
                a: 'PakScholar Pro works best on modern browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Make sure your browser is updated to the latest version for optimal performance.'
            },
            {
                q: 'Is there a mobile app?',
                a: 'Currently, we don\'t have a dedicated mobile app. However, our website is fully responsive and works well on mobile browsers. You can access it from any smartphone or tablet.'
            },
            {
                q: 'Why is the page loading slowly?',
                a: 'Slow loading can be due to internet connection speed or browser issues. Try refreshing the page, clearing your browser cache, or switching to a different network. If the problem persists, contactus.'
            },
            {
                q: 'I found a bug. How do I report it?',
                a: 'Please report bugs or technical issues by contacting us at support@pakscholarpro.com. Include details about what went wrong, which browser you\'re using, and steps to reproduce the issue.'
            },
            {
                q: 'Can I use PakScholar Pro offline?',
                a: 'Currently, an internet connection is required to access content. We\'re exploring offline features for the future to help students with limited internet access.'
            }
        ]
    },
    {
        category: 'Exam-Specific Questions',
        questions: [
            {
                q: 'What is the PPSC exam pattern?',
                a: 'PPSC exams typically include MCQs and may have written portions depending on the post. Subjects include General Knowledge, Pakistan Studies, Islamic Studies, English, and relevant technical subjects. Check PPSC\'s official website for specific job requirements.'
            },
            {
                q: 'What is the FPSC exam pattern?',
                a: 'FPSC exams vary by position but generally include MCQs and written tests. Common subjects are English, Pakistan Studies, Islamic Studies, Current Affairs, and specialized subjects. Visit FPSC\'s official site for detailed information.'
            },
            {
                q: 'How is CSS different from PPSC/FPSC?',
                a: 'CSS (Central Superior Services) is Pakistan\'s premier civil service exam with both written and interview stages. It has compulsory subjects (English, Urdu, Islamic Studies, Pakistan Affairs, Essay) and optional subjects. It\'s more comprehensive than PPSC/FPSC.'
            },
            {
                q: 'Does PakScholar Pro guarantee exam selection?',
                a: 'No. We provide study materials and practice resources, but we cannot guarantee selection in any exam. Success depends on your preparation, effort, and performance on the actual exam day.'
            },
            {
                q: 'Where can I find official exam dates?',
                a: 'Check official websites: PPSC.gop.pk for Punjab exams, FPSC.gov.pk for Federal exams, and CSS.gov.pk for CSS exams. We may share general information,but always verify from official courses.'
            },
            {
                q: 'How should I use PakScholar Pro for exam preparation?',
                a: 'Use our platform to supplement your study routine: review subject materials, take practice tests regularly, identify weak areas, use past papers to understand exam patterns, and stay updated with Current Affairs.'
            }
        ]
    }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isopen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isopen)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#01411C]"
            >
                <span className="pr-4 font-semibold text-gray-900">{question}</span>
                {isopen ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#01411C]" />
                ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
                )}
            </button>
            {isopen && (
                <div className="pb-5 pr-12 text-gray-700 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function FAQ() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600">
                        Find answers to common questions about PakScholar Pro
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqData.map((category, idx) => (
                        <section key={idx}>
                            <h2 className="mb-6 text-2xl font-bold text-gray-900">
                                {category.category}
                            </h2>
                            <div className="rounded-lg border-2 border-gray-200 bg-white">
                                {category.questions.map((item, qIdx) => (
                                    <FAQItem key={qIdx} question={item.q} answer={item.a} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        Still have questions?
                    </h3>
                    <p className="mb-6 text-gray-700">
                        Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        Contact Support
                    </Link>
                </div>

                {/* Back Link */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center font-medium text-[#01411C] hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
