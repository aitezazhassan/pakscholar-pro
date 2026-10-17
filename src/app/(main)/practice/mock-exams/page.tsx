'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Timer,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Trophy,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  Flame,
} from 'lucide-react';
import Link from 'next/link';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { CyberBadge } from '@/components/ui/CyberBadge';

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
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60); // 15 minutes for 10-Q sample

  // Timer Effect
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

  // Score Calculation with Official PPSC -0.25 Negative Marking
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ========================================================= */}
        {/* SCREEN 1: INTRO / LAUNCHPAD */}
        {/* ========================================================= */}
        {!examStarted && !examCompleted && (
          <div className="max-w-3xl mx-auto text-center py-12">
            <CyberBadge variant="amber" size="md" pulse className="mb-4">
              <ShieldAlert className="w-3.5 h-3.5 mr-1 inline" /> OFFICIAL PPSC MARKING CRITERIA
            </CyberBadge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              PPSC High-Yield Mock Simulator
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 mb-8 leading-relaxed">
              Test your preparation under actual exam constraints. Every correct response yields{' '}
              <strong className="text-emerald-400 font-mono">+1.00</strong> mark, while each wrong guess incurs a{' '}
              <strong className="text-amber-400 font-mono">-0.25</strong> penalty.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8 font-mono text-xs">
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">TOTAL QUESTIONS</span>
                <span className="text-xl font-bold text-white">10 MCQs (Sprint)</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">ALLOWED TIME</span>
                <span className="text-xl font-bold text-emerald-400">15:00 Mins</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">CUTOFF CRITERIA</span>
                <span className="text-xl font-bold text-amber-400">50% Minimum</span>
              </div>
            </div>

            <button
              onClick={() => {
                setExamStarted(true);
                setTimeLeft(15 * 60);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 font-mono"
            >
              <Target className="w-5 h-5" />
              <span>Begin Timed Mock Test Now</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 2: ACTIVE EXAM SIMULATOR */}
        {/* ========================================================= */}
        {examStarted && !examCompleted && (
          <div>
            {/* Top HUD Bar */}
            <div className="mb-6 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400">QUESTION:</span>
                <span className="text-sm font-bold text-white bg-zinc-800 px-2.5 py-1 rounded border border-white/10">
                  {currentQuestionIdx + 1} / {SAMPLE_EXAM_QUESTIONS.length}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-emerald-400 border border-white/10 hidden sm:inline">
                  {currentQ.subject}
                </span>
              </div>

              {/* Countdown Timer with warning color */}
              <div className="flex items-center gap-2">
                <Timer className={`w-4 h-4 ${timeLeft < 180 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`} />
                <span
                  className={`text-lg font-bold ${
                    timeLeft < 180 ? 'text-rose-400 animate-pulse' : 'text-white'
                  }`}
                >
                  {formatTimer(timeLeft)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFlag}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    flaggedQuestions[currentQuestionIdx]
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 font-bold'
                      : 'bg-zinc-800/80 text-zinc-400 border-white/10 hover:text-white'
                  }`}
                >
                  {flaggedQuestions[currentQuestionIdx] ? '★ Flagged' : '☆ Mark for Review'}
                </button>
                <button
                  onClick={() => setExamCompleted(true)}
                  className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30 transition-all"
                >
                  Finish Test
                </button>
              </div>
            </div>

            {/* Main Question & Navigation Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Current Question */}
              <div className="lg:col-span-8 space-y-4">
                <SpotlightCard className="p-6 sm:p-8 bg-zinc-900/60 border-white/10">
                  <span className="text-xs font-mono text-zinc-500 mb-2 block uppercase tracking-wider">
                    Question {currentQuestionIdx + 1} • {currentQ.subject}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
                    {currentQ.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3 font-mono text-sm">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQuestionIdx] === oIdx;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(oIdx)}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                              : 'bg-zinc-950/70 border-white/10 text-zinc-300 hover:border-white/30 hover:bg-zinc-900'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center border ${
                                isSelected
                                  ? 'bg-emerald-400 text-black border-emerald-400'
                                  : 'bg-zinc-800 text-zinc-400 border-white/10'
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </SpotlightCard>

                {/* Question Nav Buttons */}
                <div className="flex items-center justify-between font-mono text-xs pt-2">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx((p) => Math.max(0, p - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-emerald-500/30 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>

                  <button
                    disabled={currentQuestionIdx === SAMPLE_EXAM_QUESTIONS.length - 1}
                    onClick={() =>
                      setCurrentQuestionIdx((p) => Math.min(SAMPLE_EXAM_QUESTIONS.length - 1, p + 1))
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-400 transition-all"
                  >
                    Next Question <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Question Palette Matrix */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
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
                          className={`h-9 rounded-lg font-mono text-xs font-bold transition-all relative ${
                            isCurrent
                              ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-zinc-950'
                              : ''
                          } ${
                            isAttempted
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : isFlagged
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                              : 'bg-zinc-950 text-zinc-400 border border-white/5 hover:border-white/20'
                          }`}
                        >
                          {qIdx + 1}
                          {isFlagged && (
                            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="space-y-1.5 text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50" />
                      <span>Attempted ({Object.keys(selectedAnswers).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-amber-500/30 border border-amber-500/50" />
                      <span>Flagged for Review ({Object.values(flaggedQuestions).filter(Boolean).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-zinc-950 border border-white/10" />
                      <span>Unattempted ({SAMPLE_EXAM_QUESTIONS.length - Object.keys(selectedAnswers).length})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 3: RESULTS & MERIT TELEMETRY REPORT */}
        {/* ========================================================= */}
        {examCompleted && results && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center pb-6 border-b border-white/10">
              <CyberBadge
                variant={results.passed ? 'emerald' : 'amber'}
                size="md"
                pulse
                className="mb-3"
              >
                {results.passed ? 'MERIT QUALIFIED' : 'BELOW MERIT CUTOFF'}
              </CyberBadge>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                Examination Performance HUD
              </h1>
              <p className="text-xs font-mono text-zinc-400">
                Calculated strictly in accordance with Punjab Public Service Commission scoring rules.
              </p>
            </div>

            {/* Scorecard HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">NET MARKS</span>
                <span className="text-2xl font-extrabold text-emerald-400">
                  {results.netScore} / {SAMPLE_EXAM_QUESTIONS.length}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">PERCENTAGE</span>
                <span className="text-2xl font-extrabold text-white">{results.percentage}%</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">CORRECT (+1.0)</span>
                <span className="text-2xl font-extrabold text-emerald-400">{results.correct}</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-zinc-500 text-[10px] block">WRONG (-0.25)</span>
                <span className="text-2xl font-extrabold text-rose-400">-{results.penalty}</span>
              </div>
            </div>

            {/* Detailed Question Review List */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Full Question Breakdown & Keys
              </h3>
              {SAMPLE_EXAM_QUESTIONS.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                const isUnanswered = userAns === undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border text-xs font-mono ${
                      isCorrect
                        ? 'bg-zinc-900/60 border-emerald-500/30'
                        : isUnanswered
                        ? 'bg-zinc-900/40 border-white/10'
                        : 'bg-zinc-900/60 border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">
                        Q{idx + 1} • {q.subject}
                      </span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                          isCorrect
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : isUnanswered
                            ? 'bg-zinc-800 text-zinc-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {isCorrect ? '+1.00 MARK' : isUnanswered ? '0.00 (SKIPPED)' : '-0.25 PENALTY'}
                      </span>
                    </div>

                    <p className="text-sm font-sans font-bold text-white mb-2">{q.question}</p>

                    <div className="space-y-1 mb-3">
                      <div className="text-emerald-400 font-bold">
                        Correct: {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                      </div>
                      {!isCorrect && !isUnanswered && (
                        <div className="text-rose-400">
                          Your Choice: {String.fromCharCode(65 + userAns)}. {q.options[userAns]}
                        </div>
                      )}
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5 text-zinc-400 font-sans text-xs">
                      <strong className="text-zinc-200">Official Note:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  setExamStarted(false);
                  setExamCompleted(false);
                  setSelectedAnswers({});
                  setFlaggedQuestions({});
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-emerald-500/30 text-white font-mono text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Retake Mock Simulator
              </button>

              <Link
                href="/pro-pass"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-mono text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4" /> Unlock Full 100-Q Mocks (Elite Pass)
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
