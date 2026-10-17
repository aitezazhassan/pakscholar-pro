/**
 * PakScholar Pro - Master Question Bank Registry
 * Unified high-yield dataset across all core PPSC/FPSC subjects.
 */

import { ExamMCQ, SubjectCategory } from '@/types/exam-engine';
import { GENERAL_KNOWLEDGE_QUESTIONS } from './general-knowledge';
import { PAKISTAN_STUDIES_QUESTIONS } from './pakistan-studies';
import { MATHEMATICS_QUESTIONS } from './mathematics';
import { ISLAMIC_STUDIES_QUESTIONS } from './islamic-studies';
import { ENGLISH_QUESTIONS } from './english';
import { COMPUTER_SCIENCE_QUESTIONS } from './computer-science';
import { EVERYDAY_SCIENCE_QUESTIONS } from './everyday-science';
import { CURRENT_AFFAIRS_QUESTIONS } from './current-affairs-2025';

export const MASTER_QUESTION_BANK: ExamMCQ[] = [
  ...GENERAL_KNOWLEDGE_QUESTIONS,
  ...PAKISTAN_STUDIES_QUESTIONS,
  ...MATHEMATICS_QUESTIONS,
  ...ISLAMIC_STUDIES_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...COMPUTER_SCIENCE_QUESTIONS,
  ...EVERYDAY_SCIENCE_QUESTIONS,
  ...CURRENT_AFFAIRS_QUESTIONS,
];

export const SUBJECT_QUESTION_MAP: Record<SubjectCategory, ExamMCQ[]> = {
  'General Knowledge': GENERAL_KNOWLEDGE_QUESTIONS,
  'Pakistan Studies': PAKISTAN_STUDIES_QUESTIONS,
  Mathematics: MATHEMATICS_QUESTIONS,
  'Islamic Studies': ISLAMIC_STUDIES_QUESTIONS,
  English: ENGLISH_QUESTIONS,
  'Computer Science': COMPUTER_SCIENCE_QUESTIONS,
  'Everyday Science': EVERYDAY_SCIENCE_QUESTIONS,
  'Current Affairs': CURRENT_AFFAIRS_QUESTIONS,
  Urdu: [],
};

export function getQuestionsBySubject(subject: SubjectCategory): ExamMCQ[] {
  return SUBJECT_QUESTION_MAP[subject] || [];
}

export function getTotalQuestionCount(): number {
  return MASTER_QUESTION_BANK.length;
}

export function getSubjectCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  Object.entries(SUBJECT_QUESTION_MAP).forEach(([sub, list]) => {
    counts[sub] = list.length;
  });
  return counts;
}
