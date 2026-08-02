export type ExamTier = 'Foundational' | 'Associate' | 'Professional' | 'Specialty';

export type ExamCode =
  | 'CLF-C02'
  | 'AIF-C01'
  | 'SAA-C03'
  | 'DVA-C02'
  | 'SOA-C02'
  | 'DEA-C01'
  | 'MLA-C01'
  | 'SAP-C02'
  | 'DOP-C02'
  | 'ANS-C01'
  | 'SCS-C02'
  | 'MLS-C01';

export type ExamMode = 'practice' | 'simulation'; // Mode A: instant feedback, Mode B: results at end

export type QuestionType = 'single' | 'multiple';

export interface QuestionOption {
  id: string; // e.g., "A", "B", "C", "D", "E"
  text: string;
}

export interface Question {
  id: string;
  setId: number; // Set 1 to 10
  examCode: string;
  domainId: string;
  domainName: string;
  questionType: QuestionType; // single choice or multiple choice
  selectCount?: number; // e.g., 2 if "Select TWO"
  scenario: string;
  codeSnippet?: string;
  options: QuestionOption[];
  correctAnswer: string[]; // e.g. ["A"] or ["B", "E"]
  explanation: string;
  awsDocUrl?: string;
  difficulty?: 'Standard' | 'Challenging' | 'Complex';
  isScored?: boolean; // AWS Exam Standard: 50 Scored, 15 Unscored (Beta)
}

export interface ExamDomain {
  id: string;
  name: string;
  weightPercentage: number;
  description: string;
}

export interface ExamMeta {
  code: ExamCode;
  title: string; // Actual name with (CODE) in brackets e.g. AWS Certified Developer – Associate (DVA-C02)
  nameOnly: string; // e.g. AWS Certified Developer – Associate
  tier: ExamTier;
  subtitle: string;
  description: string;
  targetAudience: string;
  recommendedExperience: string;
  costUSD: number; // e.g. 150
  passingScore: number; // e.g. 720
  maxScore: number; // 1000
  durationMinutes: number; // e.g. 130
  totalQuestionSets: number; // 10 sets if active
  questionsPerSet: number; // 65 questions
  scoredQuestionsCount: number; // 50 scored
  unscoredQuestionsCount: number; // 15 unscored beta
  isAvailable: boolean; // true for DVA-C02 and DEA-C01, false for others ("Coming Soon")
  domains: ExamDomain[];
  badgeColor: string;
  iconName: string;
}

export interface QuestionSetMeta {
  setId: number;
  title: string;
  description: string;
  questionCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert Exam Simulation';
}

export type UserAnswers = Record<string, string[]>;
export type FlaggedQuestions = Record<string, boolean>;
export type SubmittedAnswers = Record<string, boolean>; // Used in Practice Mode A

export interface ExamState {
  examCode: ExamCode;
  setId: number;
  mode: ExamMode;
  questions: Question[];
  currentIndex: number;
  userAnswers: UserAnswers;
  flagged: FlaggedQuestions;
  submittedAnswers: SubmittedAnswers;
  timeRemaining: number; // in seconds
  elapsedSeconds: number;
  isStarted: boolean;
  isCompleted: boolean;
  startTime?: number;
}

export interface DomainScore {
  domainId: string;
  domainName: string;
  total: number;
  correct: number;
  percentage: number;
  status: 'Mastered' | 'Solid' | 'Needs Review';
}

export interface ExamResult {
  examCode: ExamCode;
  examTitle: string;
  setId: number;
  mode: ExamMode;
  date: string;
  scaledScore: number; // 100 - 1000 scale calculated on SCORED questions only
  rawScore: number; // e.g. 42/50 scored correct
  percentage: number;
  passed: boolean;
  passingScore: number;
  totalQuestions: number; // 65
  scoredTotal: number; // 50
  scoredCorrect: number;
  scoredIncorrect: number;
  unscoredTotal: number; // 15
  unscoredCorrect: number;
  unansweredCount: number;
  timeSpentSeconds: number;
  domainScores: DomainScore[];
  strengths: string[];
  improvements: string[];
  dopamineTitle: string;
  dopamineMessage: string;
  badgeEarned?: {
    title: string;
    description: string;
    icon: string;
  };
}

export interface UserProfile {
  id: number;
  username: string;
  name: string;
  email: string;
}

export interface UserStats {
  totalExamsTaken: number;
  passedExamsCount: number;
  currentStreakDays: number;
  averageScore: number;
  dvaCompletedSets: number[];
  deaCompletedSets: number[];
  recentResults: ExamResult[];
}
