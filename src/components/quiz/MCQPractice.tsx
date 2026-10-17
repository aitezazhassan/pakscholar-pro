'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Bookmark,
  Sparkles,
  HelpCircle,
  Check,
  X,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { SUBJECT_QUESTION_MAP, MASTER_QUESTION_BANK } from '@/data/question-bank';
import { toggleBookmark, isBookmarked } from '@/lib/storage-engine';
import { ExamMCQ, SubjectCategory } from '@/types/exam-engine';

interface MCQPracticeProps {
  subject: string;
}

// Map route slug to SubjectCategory
function normalizeSubject(slug: string): SubjectCategory {
  switch (slug) {
    case 'general-knowledge':
      return 'General Knowledge';
    case 'pakistan-studies':
      return 'Pakistan Studies';
    case 'mathematics':
      return 'Mathematics';
    case 'islamic-studies':
      return 'Islamic Studies';
    case 'english':
      return 'English';
    case 'computer-science':
      return 'Computer Science';
    default:
      return 'General Knowledge';
  }
}

export function MCQPractice({ subject }: MCQPracticeProps) {
  const normalizedCategory = normalizeSubject(subject);
  const [questions, setQuestions] = useState<ExamMCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const list = SUBJECT_QUESTION_MAP[normalizedCategory] || [];
    // Fallback to master bank if category is empty
    const activeList = list.length > 0 ? list : MASTER_QUESTION_BANK.slice(0, 10);
    setQuestions(activeList);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongCount(0);
  }, [normalizedCategory]);

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (currentQ) {
      setBookmarked(isBookmarked(currentQ.id));
    }
  }, [currentIndex, currentQ]);

  const handleSelect = (idx: number) => {
    if (!isAnswered) {
      setSelectedAnswer(idx);
      setIsAnswered(true);
      if (idx === currentQ.correctIndex) {
        setCorrectCount((prev) => prev + 1);
      } else {
        setWrongCount((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongCount(0);
  };

  const handleToggleBookmark = () => {
    if (!currentQ) return;
    const nowSaved = toggleBookmark(currentQ.id);
    setBookmarked(nowSaved);
  };

  if (!currentQ) {
    return (
      <AppleCard hoverLift={false} className="p-8 text-center">
        <p className="text-zinc-500 text-sm">No practice questions available for this subject yet.</p>
      </AppleCard>
    );
  }

  const isCompleted = currentIndex === questions.length - 1 && isAnswered;
  const isCorrect = selectedAnswer === currentQ.correctIndex;
  const netScore = Math.max(0, parseFloat((correctCount * 1.0 - wrongCount * 0.25).toFixed(2)));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Header & Progress */}
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <AppleBadge variant="neutral" size="sm">
            {currentQ.difficulty}
          </AppleBadge>
        </div>

        {/* Live Score Counter with -0.25 penalty */}
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">
            +{correctCount}
          </span>
          <span className="text-rose-600 dark:text-rose-400 font-semibold">
            -{wrongCount * 0.25}
          </span>
          <span className="text-zinc-400">|</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-bold">
            Net: {netScore}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0F5132] dark:bg-emerald-400 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <AppleCard hoverLift={false} className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">
            {currentQ.topic}
          </span>
          <div className="flex items-center gap-2">
            {currentQ.pastPaperRef && (
              <span className="text-[10px] font-mono text-[#0F5132] dark:text-emerald-400">
                {currentQ.pastPaperRef}
              </span>
            )}
            <button
              onClick={handleToggleBookmark}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-white transition-colors"
              title="Bookmark question"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#0F5132] text-[#0F5132]' : ''}`} />
            </button>
          </div>
        </div>

        <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-6 leading-relaxed">
          {currentQ.question}
        </h2>

        {/* Options */}
        <div className="space-y-2.5 text-sm">
          {currentQ.options.map((opt, oIdx) => {
            const isChosen = selectedAnswer === oIdx;
            const isAnswerKey = oIdx === currentQ.correctIndex;

            let buttonStyles =
              'bg-white dark:bg-zinc-800/60 border-black/[0.06] dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 hover:border-black/[0.15]';

            if (isAnswered) {
              if (isAnswerKey) {
                buttonStyles =
                  'bg-emerald-50 text-emerald-900 border-[#0F5132] dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-600 font-semibold';
              } else if (isChosen && !isAnswerKey) {
                buttonStyles =
                  'bg-rose-50 text-rose-900 border-rose-400 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-700';
              } else {
                buttonStyles = 'opacity-40 border-transparent bg-zinc-50 dark:bg-zinc-800/30';
              }
            }

            return (
              <button
                key={opt}
                disabled={isAnswered}
                onClick={() => handleSelect(oIdx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between ${buttonStyles}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-semibold flex items-center justify-center border ${
                      isAnswered && isAnswerKey
                        ? 'bg-[#0F5132] text-white border-[#0F5132]'
                        : isAnswered && isChosen
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-black/[0.06] dark:border-white/[0.08]'
                    }`}
                  >
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isAnswered && isAnswerKey && (
                  <Check className="w-4 h-4 text-[#0F5132] dark:text-emerald-400" />
                )}
                {isAnswered && isChosen && !isAnswerKey && (
                  <X className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card */}
        {isAnswered && (
          <div className="mt-5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.05] dark:border-white/[0.06] text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Official Reference & Explanation</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-2">
              {currentQ.explanation}
            </p>
            {currentQ.pastPaperRef && (
              <span className="text-[11px] font-mono text-[#0F5132] dark:text-emerald-400 block">
                Exam citation: {currentQ.pastPaperRef}
              </span>
            )}
          </div>
        )}

        {/* Next / Completion Button */}
        {isAnswered && !isCompleted && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F5132] hover:bg-[#0c4128] text-white text-xs font-semibold shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Next Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {isCompleted && (
          <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-center">
            <h3 className="font-bold text-sm text-[#0F5132] dark:text-emerald-400 mb-1">
              Subject Practice Set Completed!
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-3">
              You scored <strong className="text-zinc-900 dark:text-white">{correctCount}</strong> out of{' '}
              {questions.length} questions. (Net Score: {netScore})
            </p>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Practice Again
            </button>
          </div>
        )}
      </AppleCard>
    </div>
  );
}
