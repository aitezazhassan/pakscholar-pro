'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Timer,
  Target,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Trophy,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Bookmark,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

interface ExamQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const SAMPLE_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    subject: 'Pakistan Studies',
    question: 'Under the 1973 Constitution of Pakistan, which Article deals with the disqualification of lawmakers on grounds of defection?',
    options: ['Article 58(2)(b)', 'Article 63-A', 'Article 62(1)(f)', 'Article 245'],
    correctIndex: 1,
    explanation: 'Article 63-A of the Constitution of Pakistan prescribes rules and procedures for disqualification on grounds of defection.',
  },
  {
    id: 2,
    subject: 'Mathematics',
    question: 'The ratio of ages of two persons is 3 : 5. If the sum of their ages is 64 years, what is the age of the elder person?',
    options: ['24 years', '32 years', '40 years', '48 years'],
    correctIndex: 2,
    explanation: 'Sum of ratio parts = 3 + 5 = 8 parts. 1 part = 64 / 8 = 8 years. Elder person = 5 * 8 = 40 years.',
  },
  {
    id: 3,
    subject: 'General Knowledge',
    question: 'Which strait separates Asia from North America and connects the Arctic Ocean with the Bering Sea?',
    options: ['Strait of Gibraltar', 'Bering Strait', 'Strait of Malacca', 'Bosphorus Strait'],
    correctIndex: 1,
    explanation: 'The Bering Strait connects the Bering Sea with the Chukchi Sea of the Arctic Ocean, separating Russia from Alaska.',
  },
  {
    id: 4,
    subject: 'Islamic Studies',
    question: 'The Treaty of Hudaibiyah was signed in which Hijri year?',
    options: ['4 A.H.', '6 A.H.', '8 A.H.', '9 A.H.'],
    correctIndex: 1,
    explanation: 'The Treaty of Hudaibiyah was concluded in Zul-Qadah, 6 A.H. between the Muslims of Medina and the Quraish of Mecca.',
  },
  {
    id: 5,
    subject: 'Computer Science',
    question: 'In computer networking, which protocol is responsible for resolving an IP address to a physical MAC address?',
    options: ['DNS', 'DHCP', 'ARP', 'ICMP'],
    correctIndex: 2,
    explanation: 'ARP (Address Resolution Protocol) maps dynamic IP addresses to a permanent physical machine address (MAC) in a local network.',
  },
  {
    id: 6,
    subject: 'English',
    question: 'Select the correct synonym for the word "EPHEMERAL":',
    options: ['Permanent', 'Transitory', 'Sacred', 'Immense'],
    correctIndex: 1,
    explanation: '"Ephemeral" means lasting for a very short time; transitory, fleeting.',
  },
  {
    id: 7,
    subject: 'Pakistan Studies',
    question: 'Who served as the first Chief Election Commissioner of Pakistan?',
    options: ['Khan F.M. Khan', 'Justice Sajjad Ahmad Jan', 'Justice Muhammad Rustam Kiyani', 'Akhter Hussain'],
    correctIndex: 0,
    explanation: 'Khan F.M. Khan was appointed as the first Chief Election Commissioner of Pakistan on March 25, 1956.',
  },
  {
    id: 8,
    subject: 'Mathematics',
    question: 'If 12 men can complete a construction project in 18 days, in how many days can 9 men complete the identical project?',
    options: ['20 days', '22 days', '24 days', '27 days'],
    correctIndex: 2,
    explanation: 'Total man-days = 12 * 18 = 216 man-days. Days required by 9 men = 216 / 9 = 24 days.',
  },
  {
    id: 9,
    subject: 'General Knowledge',
    question: 'What is the capital city of Kazakhstan, formerly known as Nur-Sultan?',
    options: ['Almaty', 'Astana', 'Tashkent', 'Bishkek'],
    correctIndex: 1,
    explanation: 'In September 2022, Kazakhstan officially renamed its capital back to Astana from Nur-Sultan.',
  },
  {
    id: 10,
    subject: 'Current Affairs',
    question: 'Which city hosted the 23rd Council of Heads of Government of the Shanghai Cooperation Organisation (SCO) in October 2024?',
    options: ['Tashkent', 'Islamabad', 'Beijing', 'Moscow'],
    correctIndex: 1,
    explanation: 'Islamabad, Pakistan hosted the 23rd SCO Council of Heads of Government on October 15–16, 2024.',
  },
];

export default function PpscSimulatorPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);

  useEffect(() => {
    if (!examStarted || examCompleted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setExamCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, examCompleted]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIdx]: optionIdx,
    }));
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestionIdx]: !prev[currentQuestionIdx],
    }));
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    SAMPLE_EXAM_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === undefined) {
        unattempted++;
      } else if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const rawScore = correct * 1.0;
    const penalty = wrong * 0.25;
    const netScore = Math.max(0, parseFloat((rawScore - penalty).toFixed(2)));
    const percentage = parseFloat(((netScore / SAMPLE_EXAM_QUESTIONS.length) * 100).toFixed(1));
    const passed = percentage >= 50.0;

    return { correct, wrong, unattempted, rawScore, penalty, netScore, percentage, passed };
  };

  const currentQ = SAMPLE_EXAM_QUESTIONS[currentQuestionIdx];
  const results = examCompleted ? calculateResults() : null;

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ========================================================= */}
        {/* SCREEN 1: INTRO / LAUNCHPAD */}
        {/* ========================================================= */}
        {!examStarted && !examCompleted && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <AppleBadge variant="amber" size="md" className="mb-4">
              OFFICIAL PPSC -0.25 PENALTY RULES
            </AppleBadge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              PPSC Mock Exam Simulator
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Test your speed and precision under authentic exam conditions. Each correct answer earns{' '}
              <strong className="text-[#0F5132] dark:text-emerald-400">+1.00</strong> mark, while incorrect answers deduct{' '}
              <strong className="text-amber-700 dark:text-amber-400">-0.25</strong> marks.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8 text-xs text-center">
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Questions</span>
                <span className="text-lg font-bold text-zinc-900 dark:text-white mt-1 block">10 MCQs</span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Time Limit</span>
                <span className="text-lg font-bold text-[#0F5132] dark:text-emerald-400 mt-1 block">15:00 Mins</span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Passing Cutoff</span>
                <span className="text-lg font-bold text-amber-700 dark:text-amber-400 mt-1 block">50% Marks</span>
              </AppleCard>
            </div>

            <button
              onClick={() => {
                setExamStarted(true);
                setTimeLeft(15 * 60);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0F5132] hover:bg-[#0c4128] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <Target className="w-4 h-4" />
              <span>Begin Timed Mock Test</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 2: ACTIVE EXAM SIMULATOR */}
        {/* ========================================================= */}
        {examStarted && !examCompleted && (
          <div>
            {/* Top Status Bar */}
            <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 dark:text-zinc-400">Question</span>
                <span className="text-sm font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg">
                  {currentQuestionIdx + 1} of {SAMPLE_EXAM_QUESTIONS.length}
                </span>
                <AppleBadge variant="neutral" size="sm" className="hidden sm:inline-flex">
                  {currentQ.subject}
                </AppleBadge>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2">
                <Timer className={`w-4 h-4 ${timeLeft < 180 ? 'text-rose-600 dark:text-rose-400 animate-pulse' : 'text-[#0F5132] dark:text-emerald-400'}`} />
                <span
                  className={`text-base font-bold font-mono ${
                    timeLeft < 180 ? 'text-rose-600 dark:text-rose-400' : 'text-zinc-900 dark:text-white'
                  }`}
                >
                  {formatTimer(timeLeft)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFlag}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    flaggedQuestions[currentQuestionIdx]
                      ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700/50'
                      : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-black/[0.08] dark:border-white/[0.1] hover:bg-zinc-50'
                  }`}
                >
                  {flaggedQuestions[currentQuestionIdx] ? '★ Flagged' : '☆ Review Later'}
                </button>
                <button
                  onClick={() => setExamCompleted(true)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/40 hover:bg-rose-100 transition-all"
                >
                  Finish Test
                </button>
              </div>
            </div>

            {/* Main Question & Navigation Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Current Question */}
              <div className="lg:col-span-8 space-y-4">
                <AppleCard hoverLift={false} className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>Question {currentQuestionIdx + 1}</span>
                    <span>{currentQ.subject}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-6 leading-relaxed">
                    {currentQ.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-2.5 text-sm">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQuestionIdx] === oIdx;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(oIdx)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-[#0F5132] dark:border-emerald-500 text-zinc-900 dark:text-white font-medium'
                              : 'bg-white dark:bg-zinc-800/50 border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-200 hover:border-black/[0.15] dark:hover:border-white/[0.2]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-6 h-6 rounded-lg text-xs font-semibold flex items-center justify-center border ${
                                isSelected
                                  ? 'bg-[#0F5132] text-white border-[#0F5132] dark:bg-emerald-500 dark:border-emerald-500'
                                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-black/[0.06] dark:border-white/[0.08]'
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0F5132] dark:text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </AppleCard>

                {/* Question Nav Buttons */}
                <div className="flex items-center justify-between text-xs pt-2">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx((p) => Math.max(0, p - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] text-zinc-700 dark:text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 font-medium transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </button>

                  <button
                    disabled={currentQuestionIdx === SAMPLE_EXAM_QUESTIONS.length - 1}
                    onClick={() =>
                      setCurrentQuestionIdx((p) => Math.min(SAMPLE_EXAM_QUESTIONS.length - 1, p + 1))
                    }
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0F5132] hover:bg-[#0c4128] text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Next Question <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Question Palette Matrix */}
              <div className="lg:col-span-4 space-y-4">
                <AppleCard hoverLift={false} className="p-5">
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-3">
                    Question Palette
                  </h3>

                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {SAMPLE_EXAM_QUESTIONS.map((_, qIdx) => {
                      const isAttempted = selectedAnswers[qIdx] !== undefined;
                      const isFlagged = flaggedQuestions[qIdx];
                      const isCurrent = currentQuestionIdx === qIdx;

                      return (
                        <button
                          key={qIdx}
                          onClick={() => setCurrentQuestionIdx(qIdx)}
                          className={`h-9 rounded-lg text-xs font-semibold transition-all relative ${
                            isCurrent
                              ? 'ring-2 ring-[#0F5132] dark:ring-emerald-400 ring-offset-2'
                              : ''
                          } ${
                            isAttempted
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 text-[#0F5132] dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50'
                              : isFlagged
                              ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50'
                              : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-black/[0.04] dark:border-white/[0.06] hover:bg-zinc-100'
                          }`}
                        >
                          {qIdx + 1}
                          {isFlagged && (
                            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="space-y-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
                      <span>Attempted ({Object.keys(selectedAnswers).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded bg-amber-500" />
                      <span>Review Later ({Object.values(flaggedQuestions).filter(Boolean).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded bg-zinc-300 dark:bg-zinc-700" />
                      <span>Unattempted ({SAMPLE_EXAM_QUESTIONS.length - Object.keys(selectedAnswers).length})</span>
                    </div>
                  </div>
                </AppleCard>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 3: RESULTS & SCORECARD */}
        {/* ========================================================= */}
        {examCompleted && results && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <AppleBadge
                variant={results.passed ? 'emerald' : 'amber'}
                size="md"
                className="mb-3"
              >
                {results.passed ? 'MERIT QUALIFIED' : 'BELOW MERIT CUTOFF'}
              </AppleBadge>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
                Exam Performance Scorecard
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Calculated strictly in accordance with official PPSC scoring rules.
              </p>
            </div>

            {/* Scorecard Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Net Score</span>
                <span className="text-2xl font-extrabold text-[#0F5132] dark:text-emerald-400 mt-1 block">
                  {results.netScore} / {SAMPLE_EXAM_QUESTIONS.length}
                </span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Percentage</span>
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 block">
                  {results.percentage}%
                </span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Correct (+1.0)</span>
                <span className="text-2xl font-extrabold text-[#0F5132] dark:text-emerald-400 mt-1 block">
                  {results.correct}
                </span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Wrong (-0.25)</span>
                <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-400 mt-1 block">
                  -{results.penalty}
                </span>
              </AppleCard>
            </div>

            {/* Detailed Question Review List */}
            <div className="space-y-3.5 pt-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">
                Question Breakdown & Official Explanations
              </h3>
              {SAMPLE_EXAM_QUESTIONS.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                const isUnanswered = userAns === undefined;

                return (
                  <AppleCard hoverLift={false} key={q.id} className="p-5 text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                        Q{idx + 1} • {q.subject}
                      </span>
                      <AppleBadge
                        variant={isCorrect ? 'emerald' : isUnanswered ? 'neutral' : 'amber'}
                        size="sm"
                      >
                        {isCorrect ? '+1.00 Mark' : isUnanswered ? 'Skipped' : '-0.25 Penalty'}
                      </AppleBadge>
                    </div>

                    <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2 leading-relaxed">
                      {q.question}
                    </p>

                    <div className="space-y-1 mb-3">
                      <div className="text-[#0F5132] dark:text-emerald-400 font-medium">
                        Correct: {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                      </div>
                      {!isCorrect && !isUnanswered && (
                        <div className="text-rose-600 dark:text-rose-400 font-medium">
                          Your Answer: {String.fromCharCode(65 + userAns)}. {q.options[userAns]}
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/[0.04] dark:border-white/[0.06] text-zinc-600 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white">Explanation:</strong> {q.explanation}
                    </div>
                  </AppleCard>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => {
                  setExamStarted(false);
                  setExamCompleted(false);
                  setSelectedAnswers({});
                  setFlaggedQuestions({});
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-50 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Mock Exam
              </button>

              <Link
                href="/pro-pass"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F5132] hover:bg-[#0c4128] text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" /> Full 100-Q Mock Series (Elite Pass)
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
