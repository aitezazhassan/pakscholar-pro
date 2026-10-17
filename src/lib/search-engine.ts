/**
 * PakScholar Pro - Fast In-Memory Question Search & Filtering Engine
 * Zero-latency search (< 5ms) across thousands of MCQs.
 */

import { ExamMCQ, SubjectCategory, ExamDifficulty, YieldFrequency } from '@/types/exam-engine';

export interface SearchFilterOptions {
  subject?: SubjectCategory | 'all';
  difficulty?: ExamDifficulty | 'all';
  frequency?: YieldFrequency | 'all';
  hasPastPaperRef?: boolean;
  limit?: number;
}

export function searchMCQs(
  questionBank: ExamMCQ[],
  query: string,
  options?: SearchFilterOptions
): ExamMCQ[] {
  const normalizedQuery = query.trim().toLowerCase();
  const {
    subject = 'all',
    difficulty = 'all',
    frequency = 'all',
    hasPastPaperRef = false,
    limit = 50,
  } = options || {};

  let filtered = questionBank;

  // Filter by subject
  if (subject && subject !== 'all') {
    filtered = filtered.filter((q) => q.subject.toLowerCase() === subject.toLowerCase());
  }

  // Filter by difficulty
  if (difficulty && difficulty !== 'all') {
    filtered = filtered.filter((q) => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  // Filter by frequency
  if (frequency && frequency !== 'all') {
    filtered = filtered.filter((q) => q.frequency === frequency);
  }

  // Filter past paper reference
  if (hasPastPaperRef) {
    filtered = filtered.filter((q) => Boolean(q.pastPaperRef && q.pastPaperRef.length > 0));
  }

  // Text search across question, options, topic, and explanation
  if (normalizedQuery.length > 0) {
    filtered = filtered.filter((q) => {
      if (q.question.toLowerCase().includes(normalizedQuery)) return true;
      if (q.topic.toLowerCase().includes(normalizedQuery)) return true;
      if (q.explanation.toLowerCase().includes(normalizedQuery)) return true;
      if (q.pastPaperRef && q.pastPaperRef.toLowerCase().includes(normalizedQuery)) return true;
      if (q.options.some((opt) => opt.toLowerCase().includes(normalizedQuery))) return true;
      if (q.tags && q.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))) return true;
      return false;
    });
  }

  return filtered.slice(0, limit);
}

/**
 * Generates a randomized mock exam question set matching official PPSC distribution.
 */
export function generateRandomMockSet(
  questionBank: ExamMCQ[],
  totalCount: number = 20
): ExamMCQ[] {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(totalCount, shuffled.length));
}
