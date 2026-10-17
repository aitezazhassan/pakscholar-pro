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
import { MASTER_QUESTION_BANK } from '@/data/question-bank';
import { saveExamResult, toggleBookmark, isBookmarked } from '@/lib/storage-engine';
import { ExamMCQ, ExamSessionResult } from '@/types/exam-engine';

export default function PpscSimulatorPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [testLength, setTestLength] = useState<number>(10);
  const [activeQuestions, setActiveQuestions] = useState<ExamMCQ[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});

  // Initialize questions on mount or testLength change
  useEffect(() => {
    const shuffled = [...MASTER_QUESTION_BANK].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, testLength));
  }, [testLength]);

  // Timer Effect
  useEffect(() => {
    if (!examStarted || examCompleted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishTest();
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

  const handleBookmarkCurrent = () => {
    const current = activeQuestions[currentQuestionIdx];
    if (!current) return;
    const nowSaved = toggleBookmark(current.id);
    setBookmarkedIds((prev) => ({ ...prev, [String(current.id)]: nowSaved }));
  };

  const calculateResults = (): ExamSessionResult => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    const subjectPerformance: Record<
      string,
      { total: number; correct: number; wrong: number; score: number }
    > = {};

    activeQuestions.forEach((q, idx) => {
      const sub = q.subject;
      if (!subjectPerformance[sub]) {
        subjectPerformance[sub] = { total: 0, correct: 0, wrong: 0, score: 0 };
      }
      subjectPerformance[sub].total++;

      if (selectedAnswers[idx] === undefined) {
        unattempted++;
      } else if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
        subjectPerformance[sub].correct++;
        subjectPerformance[sub].score += 1.0;
      } else {
        wrong++;
        subjectPerformance[sub].wrong++;
        subjectPerformance[sub].score -= 0.25;
      }
    });

    const rawScore = correct * 1.0;
    const penalty = wrong * 0.25;
    const netScore = Math.max(0, parseFloat((rawScore - penalty).toFixed(2)));
    const percentage = parseFloat(((netScore / activeQuestions.length) * 100).toFixed(1));
    const passed = percentage >= 50.0;

    return {
      examId: `mock-${Date.now()}`,
      examTitle: `PPSC Mock Exam (${activeQuestions.length} Questions)`,
      completedAt: new Date().toISOString(),
      totalQuestions: activeQuestions.length,
      attempted: correct + wrong,
      correct,
      wrong,
      unattempted,
      rawScore,
      penalty,
      netScore,
      percentage,
      passed,
      timeTakenSeconds: (testLength === 10 ? 15 * 60 : 35 * 60) - timeLeft,
      answers: selectedAnswers,
      subjectPerformance,
    };
  };

  const handleFinishTest = () => {
    setExamCompleted(true);
    const res = calculateResults();
    saveExamResult(res);
  };

  const currentQ = activeQuestions[currentQuestionIdx] || MASTER_QUESTION_BANK[0];
  const results = examCompleted ? calculateResults() : null;

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ========================================================= */}
        {/* SCREEN 1: INTRO / LAUNCHPAD */}
        {/* ========================================================= */}
        {!examStarted && !examCompleted && (
          <div className="max-w-2xl mx-auto text-center py-10">
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

            {/* Test Duration Selector */}
            <div className="mb-8 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 inline-flex items-center gap-1.5 text-xs font-semibold">
              <button
                onClick={() => {
                  setTestLength(10);
                  setTimeLeft(15 * 60);
                }}
                className={`px-4 py-2 rounded-xl transition-all ${
                  testLength === 10
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
                }`}
              >
                10-Q Sprint (15 Min)
              </button>
              <button
                onClick={() => {
                  setTestLength(25);
                  setTimeLeft(35 * 60);
                }}
                className={`px-4 py-2 rounded-xl transition-all ${
                  testLength === 25
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
                }`}
              >
                25-Q Half Mock (35 Min)
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8 text-xs text-center">
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Questions</span>
                <span className="text-lg font-bold text-zinc-900 dark:text-white mt-1 block">
                  {testLength} MCQs
                </span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Time Limit</span>
                <span className="text-lg font-bold text-[#0F5132] dark:text-emerald-400 mt-1 block">
                  {testLength === 10 ? '15:00' : '35:00'} Mins
                </span>
              </AppleCard>
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Passing Cutoff</span>
                <span className="text-lg font-bold text-amber-700 dark:text-amber-400 mt-1 block">50% Marks</span>
              </AppleCard>
            </div>

            <button
              onClick={() => {
                setExamStarted(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0F5132] hover:bg-[#0c4128] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <Target className="w-4 h-4" />
              <span>Begin Timed Mock Test ({testLength} Questions)</span>
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
                  {currentQuestionIdx + 1} of {activeQuestions.length}
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
                  onClick={handleBookmarkCurrent}
                  className="p-2 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 transition-colors"
                  title="Bookmark question"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarkedIds[String(currentQ.id)] ? 'fill-[#0F5132] text-[#0F5132]' : ''
                    }`}
                  />
                </button>
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
                  onClick={handleFinishTest}
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
                    <span className="font-medium">
                      Question {currentQuestionIdx + 1} • {currentQ.topic || currentQ.subject}
                    </span>
                    {currentQ.pastPaperRef && (
                      <span className="text-[11px] font-mono text-[#0F5132] dark:text-emerald-400">
                        {currentQ.pastPaperRef}
                      </span>
                    )}
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
                    disabled={currentQuestionIdx === activeQuestions.length - 1}
                    onClick={() =>
                      setCurrentQuestionIdx((p) => Math.min(activeQuestions.length - 1, p + 1))
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
                    {activeQuestions.map((_, qIdx) => {
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
                      <span>Unattempted ({activeQuestions.length - Object.keys(selectedAnswers).length})</span>
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
                Calculated strictly in accordance with official PPSC scoring rules. Results saved to your study log.
              </p>
            </div>

            {/* Scorecard Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <AppleCard hoverLift={false} className="p-4">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block font-medium">Net Score</span>
                <span className="text-2xl font-extrabold text-[#0F5132] dark:text-emerald-400 mt-1 block">
                  {results.netScore} / {activeQuestions.length}
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
              {activeQuestions.map((q, idx) => {
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
                  const shuffled = [...MASTER_QUESTION_BANK].sort(() => 0.5 - Math.random());
                  setActiveQuestions(shuffled.slice(0, testLength));
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
