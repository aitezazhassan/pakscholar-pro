/**
 * PakScholar Pro - Local Storage & Study Engine
 * Handles bookmarks, test records, weak topic tracking, and offline persistence.
 */

import { ExamSessionResult, UserStudyState } from '@/types/exam-engine';

const BOOKMARKS_KEY = 'pakscholar_bookmarks_v1';
const RESULTS_KEY = 'pakscholar_results_v1';
const STATS_KEY = 'pakscholar_study_stats_v1';

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

// -------------------------------------------------------------
// Bookmarks Management
// -------------------------------------------------------------

export function getBookmarks(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse bookmarks:', e);
    return [];
  }
}

export function isBookmarked(questionId: string | number): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.includes(String(questionId));
}

export function toggleBookmark(questionId: string | number): boolean {
  if (!isBrowser()) return false;
  try {
    const idStr = String(questionId);
    const bookmarks = getBookmarks();
    let updated: string[];
    let nowBookmarked = false;

    if (bookmarks.includes(idStr)) {
      updated = bookmarks.filter((id) => id !== idStr);
      nowBookmarked = false;
    } else {
      updated = [...bookmarks, idStr];
      nowBookmarked = true;
    }

    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return nowBookmarked;
  } catch (e) {
    console.error('Failed to toggle bookmark:', e);
    return false;
  }
}

export function clearAllBookmarks(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(BOOKMARKS_KEY);
}

// -------------------------------------------------------------
// Exam Session History & Weakness Diagnostics
// -------------------------------------------------------------

export function getExamHistory(): ExamSessionResult[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse exam history:', e);
    return [];
  }
}

export function saveExamResult(result: ExamSessionResult): void {
  if (!isBrowser()) return;
  try {
    const history = getExamHistory();
    // Keep most recent 50 tests to manage storage
    const updated = [result, ...history].slice(0, 50);
    localStorage.setItem(RESULTS_KEY, JSON.stringify(updated));

    // Update aggregate study stats
    updateAggregateStats(result);
  } catch (e) {
    console.error('Failed to save exam result:', e);
  }
}

function updateAggregateStats(latestResult: ExamSessionResult): void {
  if (!isBrowser()) return;
  try {
    const raw = localStorage.getItem(STATS_KEY);
    const stats: UserStudyState = raw
      ? JSON.parse(raw)
      : {
          bookmarks: [],
          recentExamResults: [],
          weakSubjectStats: {},
          totalQuestionsPracticed: 0,
          netAccuracyPercentage: 0,
        };

    stats.totalQuestionsPracticed += latestResult.attempted;

    // Track subject accuracy & weaknesses
    if (latestResult.subjectPerformance) {
      Object.entries(latestResult.subjectPerformance).forEach(([sub, data]) => {
        if (!stats.weakSubjectStats[sub]) {
          stats.weakSubjectStats[sub] = { attempted: 0, wrong: 0 };
        }
        stats.weakSubjectStats[sub].attempted += data.total;
        stats.weakSubjectStats[sub].wrong += data.wrong;
      });
    }

    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to update study stats:', e);
  }
}

export function getUserStudyProfile(): UserStudyState {
  if (!isBrowser()) {
    return {
      bookmarks: [],
      recentExamResults: [],
      weakSubjectStats: {},
      totalQuestionsPracticed: 0,
      netAccuracyPercentage: 0,
    };
  }

  try {
    const raw = localStorage.getItem(STATS_KEY);
    const stats: UserStudyState = raw
      ? JSON.parse(raw)
      : {
          bookmarks: [],
          recentExamResults: [],
          weakSubjectStats: {},
          totalQuestionsPracticed: 0,
          netAccuracyPercentage: 0,
        };

    stats.bookmarks = getBookmarks();
    stats.recentExamResults = getExamHistory().slice(0, 10);
    return stats;
  } catch (e) {
    console.error('Failed to get user study profile:', e);
    return {
      bookmarks: [],
      recentExamResults: [],
      weakSubjectStats: {},
      totalQuestionsPracticed: 0,
      netAccuracyPercentage: 0,
    };
  }
}
