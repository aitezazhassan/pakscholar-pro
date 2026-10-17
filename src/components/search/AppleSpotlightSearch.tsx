'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Command, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MASTER_QUESTION_BANK } from '@/data/question-bank';
import { searchMCQs } from '@/lib/search-engine';
import { ExamMCQ } from '@/types/exam-engine';
import { AppleBadge } from '@/components/ui/AppleBadge';

interface AppleSpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppleSpotlightSearch({ isOpen, onClose }: AppleSpotlightSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ExamMCQ[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setResults(MASTER_QUESTION_BANK.slice(0, 5));
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults(MASTER_QUESTION_BANK.slice(0, 5));
    } else {
      const matches = searchMCQs(MASTER_QUESTION_BANK, query, { limit: 8 });
      setResults(matches);
      setSelectedIdx(0);
    }
  }, [query]);

  // Handle keyboard shortcuts (Esc, Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results.length, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-black/[0.06] dark:border-white/[0.08] gap-3">
            <Search className="w-5 h-5 text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 10,000+ PPSC MCQs, topics, past papers..."
              className="w-full bg-transparent text-sm sm:text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none"
            />
            {query.length > 0 && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded border border-black/[0.08] dark:border-white/[0.1] bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-500 font-mono">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
            {results.length === 0 ? (
              <div className="py-12 text-center text-xs text-zinc-500 dark:text-zinc-400">
                No matching questions found for "{query}".
              </div>
            ) : (
              results.map((q, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <div
                    key={q.id}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`p-3.5 rounded-xl transition-all cursor-pointer text-xs ${
                      isSelected
                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <AppleBadge variant="neutral" size="sm">
                          {q.subject}
                        </AppleBadge>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                          {q.topic}
                        </span>
                      </div>
                      {q.pastPaperRef && (
                        <span className="text-[10px] font-mono text-[#0F5132] dark:text-emerald-400">
                          {q.pastPaperRef}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium mb-2 leading-relaxed">{q.question}</p>

                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/[0.03] dark:border-white/[0.04]">
                      <span className="text-[#0F5132] dark:text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Correct: {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                      </span>
                      <span>Difficulty: {q.difficulty}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Quick Footer Shortcut Helper */}
          <div className="px-4 py-2.5 border-t border-black/[0.05] dark:border-white/[0.06] bg-zinc-50/70 dark:bg-zinc-900/70 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Instant In-Memory Search Engine</span>
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>ESC Close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
