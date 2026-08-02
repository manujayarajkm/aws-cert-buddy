import { UserStats, ExamResult } from '../types/exam';

const STORAGE_KEYS = {
  STATS: 'aws_exam_user_stats',
  BOOKMARKS: 'aws_exam_bookmarks',
  IN_PROGRESS_EXAM: 'aws_exam_in_progress'
};

const DEFAULT_STATS: UserStats = {
  totalExamsTaken: 0,
  passedExamsCount: 0,
  currentStreakDays: 1,
  averageScore: 0,
  dvaCompletedSets: [],
  deaCompletedSets: [],
  recentResults: []
};

/**
 * Reads user statistics from storage.
 */
export function getUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) return DEFAULT_STATS;
    return JSON.parse(raw) as UserStats;
  } catch (err) {
    console.error('Failed to read user stats from storage', err);
    return DEFAULT_STATS;
  }
}

/**
 * Saves a completed exam result and updates user stats (streak, averages, completed sets).
 */
export function saveExamResult(result: ExamResult): UserStats {
  const currentStats = getUserStats();

  const newTotal = currentStats.totalExamsTaken + 1;
  const newPassed = currentStats.passedExamsCount + (result.passed ? 1 : 0);

  const prevTotalScoreSum = currentStats.averageScore * currentStats.totalExamsTaken;
  const newAverage = Math.round((prevTotalScoreSum + result.scaledScore) / newTotal);

  // Update completed sets tracking
  const dvaSets = new Set(currentStats.dvaCompletedSets);
  const deaSets = new Set(currentStats.deaCompletedSets);

  if (result.examCode === 'DVA-C02') {
    dvaSets.add(result.setId);
  } else if (result.examCode === 'DEA-C01') {
    deaSets.add(result.setId);
  }

  const updatedStats: UserStats = {
    totalExamsTaken: newTotal,
    passedExamsCount: newPassed,
    currentStreakDays: currentStats.currentStreakDays, // Can be expanded with date checks
    averageScore: newAverage,
    dvaCompletedSets: Array.from(dvaSets),
    deaCompletedSets: Array.from(deaSets),
    recentResults: [result, ...currentStats.recentResults].slice(0, 20) // Keep last 20 exam results
  };

  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats));
  } catch (err) {
    console.error('Failed to save user stats', err);
  }

  return updatedStats;
}

/**
 * Bookmark/Save question functionality.
 */
export function getBookmarkedQuestions(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleQuestionBookmark(questionId: string): string[] {
  const bookmarks = getBookmarkedQuestions();
  const exists = bookmarks.includes(questionId);
  const updated = exists ? bookmarks.filter(id => id !== questionId) : [...bookmarks, questionId];

  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update bookmarks', err);
  }

  return updated;
}
