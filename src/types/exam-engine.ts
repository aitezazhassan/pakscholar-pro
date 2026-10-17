/**
 * PakScholar Pro - Core Exam Engine Types
 * Precision schemas for PPSC/FPSC 100-mark competitive exams.
 */

export type SubjectCategory =
  | 'General Knowledge'
  | 'Pakistan Studies'
  | 'Mathematics'
  | 'Islamic Studies'
  | 'English'
  | 'Everyday Science'
  | 'Computer Science'
  | 'Current Affairs'
  | 'Urdu';

export type ExamDifficulty = 'Easy' | 'Medium' | 'Hard';

export type YieldFrequency = 'High Yield' | 'Very High Yield' | 'Frequent Cutoff' | 'Core Standard';

export interface ExamMCQ {
  id: string | number;
  subject: SubjectCategory;
  topic: string;
  question: string;
  questionUrdu?: string;
  options: string[];
  correctIndex: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  difficulty: ExamDifficulty;
  pastPaperRef?: string; // e.g. "PPSC Assistant Director 2024", "PPSC Tehsildar 2023"
  frequency?: YieldFrequency;
  tags?: string[];
}

export interface FullMockExam {
  id: string;
  title: string;
  targetExam: 'PPSC General Ability' | 'PMS Model Paper' | 'FPSC Inspector' | 'Custom Speed Sprint';
  durationMinutes: number; // Default 90 or 120
  totalMarks: number; // 100
  negativeMarkingRatio: number; // 0.25
  cutoffPercentage: number; // 50
  subjectBreakdown: Partial<Record<SubjectCategory, number>>;
  questions: ExamMCQ[];
}

export interface ExamSessionResult {
  examId: string;
  examTitle: string;
  completedAt: string; // ISO string
  totalQuestions: number;
  attempted: number;
  correct: number;
  wrong: number;
  unattempted: number;
  rawScore: number;
  penalty: number;
  netScore: number;
  percentage: number;
  passed: boolean;
  timeTakenSeconds: number;
  answers: Record<number, number>; // questionIdx -> selectedOptionIdx
  subjectPerformance: Record<
    string,
    { total: number; correct: number; wrong: number; score: number }
  >;
}

export interface CurrentAffairsDigestItem {
  id: string;
  date: string;
  time?: string;
  category: 'Pakistan Affairs' | 'Economy' | 'International' | 'Legal & Judiciary' | 'Science & Tech';
  title: string;
  summary: string;
  entities: string[];
  highYield: boolean;
  examAngle: string;
  pastPaperLikelihood?: 'High' | 'Very High';
  linkedMCQ?: ExamMCQ;
}

export interface ProvinceAlmanacData {
  id: string;
  name: string;
  capital: string;
  population: string;
  area: string;
  literacy: string;
  assemblySeats: string;
  districts: string;
  governor: string;
  chiefMinister: string;
  highCourtChiefJustice: string;
  majorRivers: string[];
  nationalParks: string[];
  keyHistoricalFacts: string[];
}

export interface UserStudyState {
  bookmarks: (string | number)[];
  recentExamResults: ExamSessionResult[];
  weakSubjectStats: Record<string, { attempted: number; wrong: number }>;
  totalQuestionsPracticed: number;
  netAccuracyPercentage: number;
}
