import { ExamCode, ExamMode, Question, QuestionSetMeta } from '../types/exam';
import { getSeenQuestionIds, markQuestionsAsSeen } from './storage';

// Import all JSON question files dynamically using Vite's glob import
const jsonModules = import.meta.glob('../data/**/*.json', { eager: true });

// Separate data structures for Practice and Simulation sets
const practiceQuestionsByExamAndSet: Record<string, Record<number, Question[]>> = {};
const simQuestionsByExamAndSet: Record<string, Record<number, Question[]>> = {};

// Parse and register all discovered JSON modules automatically
for (const path in jsonModules) {
  const moduleData = (jsonModules[path] as { default?: Question[] })?.default || (jsonModules[path] as Question[]);

  if (Array.isArray(moduleData) && moduleData.length > 0) {
    const firstQ = moduleData[0];
    const examCode = firstQ.examCode as ExamCode;
    const setId = firstQ.setId;
    const isSimPath = path.includes('sim-set-');

    if (examCode && setId) {
      const targetStore = isSimPath ? simQuestionsByExamAndSet : practiceQuestionsByExamAndSet;
      if (!targetStore[examCode]) {
        targetStore[examCode] = {};
      }
      targetStore[examCode][setId] = moduleData;
    }
  }
}

/**
 * Normalizes scenario text for exact duplicate detection.
 */
function normalizeScenario(text: string): string {
  return text.replace(/\[.*?\]/g, '').trim().toLowerCase();
}

/**
 * Ensures an array of questions has zero duplicate scenario texts.
 */
export function deduplicateQuestions(questions: Question[]): Question[] {
  const seenScenarios = new Set<string>();
  const uniqueList: Question[] = [];

  for (const q of questions) {
    const norm = normalizeScenario(q.scenario);
    if (!seenScenarios.has(norm)) {
      seenScenarios.add(norm);
      uniqueList.push(q);
    }
  }

  return uniqueList;
}

/**
 * Gets all questions loaded for an exam across all sets for a given mode.
 */
export function getAllQuestionsForExam(examCode: ExamCode, mode: ExamMode = 'practice'): Question[] {
  const store = mode === 'simulation' ? simQuestionsByExamAndSet : practiceQuestionsByExamAndSet;
  const examMap = store[examCode] || {};
  let all: Question[] = [];
  Object.values(examMap).forEach(setQs => {
    all = all.concat(setQs);
  });
  return deduplicateQuestions(all);
}

/**
 * Fisher-Yates shuffle algorithm to scramble arrays cleanly without mutation.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Scrambles a question set: shuffles question sequence and re-indexes options.
 */
export function scrambleQuestionSet(questions: Question[]): Question[] {
  const shuffledQuestions = shuffleArray(questions);

  return shuffledQuestions.map(q => {
    // Also scramble option presentation order while maintaining correct letter mapping
    const originalOptions = [...q.options];
    const shuffledOptions = shuffleArray(originalOptions);

    // Map old option IDs to new letters A, B, C, D...
    const idMapping: Record<string, string> = {};
    const newLetters = ['A', 'B', 'C', 'D', 'E'];

    const remappedOptions = shuffledOptions.map((opt, idx) => {
      const newId = newLetters[idx] || opt.id;
      idMapping[opt.id] = newId;
      return {
        id: newId,
        text: opt.text
      };
    });

    const newCorrectAnswer = q.correctAnswer
      .map(oldId => idMapping[oldId] || oldId)
      .sort();

    return {
      ...q,
      options: remappedOptions,
      correctAnswer: newCorrectAnswer
    };
  });
}

/**
 * Get all available question sets for a specific exam code and mode.
 */
export function getAvailableQuestionSets(examCode: ExamCode, mode: ExamMode = 'practice'): QuestionSetMeta[] {
  const store = mode === 'simulation' ? simQuestionsByExamAndSet : practiceQuestionsByExamAndSet;
  const setMap = store[examCode] || practiceQuestionsByExamAndSet[examCode] || {};
  const setNumbers = Object.keys(setMap).map(Number).sort((a, b) => a - b);

  const modeLabel = mode === 'simulation' ? 'Simulation' : 'Practice';

  return setNumbers.map(setId => {
    const questions = setMap[setId] || [];
    let difficulty: QuestionSetMeta['difficulty'] = 'Intermediate';
    if (setId <= 3) difficulty = 'Beginner';
    else if (setId <= 7) difficulty = 'Intermediate';
    else if (setId <= 9) difficulty = 'Advanced';
    else difficulty = 'Expert Exam Simulation';

    return {
      setId,
      title: `${modeLabel} Set ${setId}`,
      description: `${questions.length || 65} unique scenario-based AWS questions (50 Scored, 15 Experimental)`,
      questionCount: questions.length || 65,
      difficulty
    };
  });
}

/**
 * Load questions for a given exam code, set number, and mode with deduplication & unseen prioritization.
 * @param scramble - If true, scrambles the sequence of questions on every attempt.
 * @param mode - 'practice' (Mode A) or 'simulation' (Mode B).
 * @param markAsSeen - If true, records these questions in local storage to track user exposure.
 */
export function loadQuestionsForSet(
  examCode: ExamCode,
  setId: number,
  scramble: boolean = true,
  mode: ExamMode = 'practice',
  markAsSeen: boolean = true
): Question[] {
  const store = mode === 'simulation' ? simQuestionsByExamAndSet : practiceQuestionsByExamAndSet;
  const examMap = store[examCode] || practiceQuestionsByExamAndSet[examCode];

  if (!examMap || !examMap[setId]) {
    console.warn(`No questions found for ${examCode} Set ${setId} (${mode} mode)`);
    return [];
  }

  // 1. Get raw set questions & deduplicate within set
  let rawSetQuestions = deduplicateQuestions(examMap[setId]);

  // 2. If set has fewer than target count due to deduplication, pool from global exam bank for this mode
  const targetCount = 65;
  if (rawSetQuestions.length < targetCount) {
    const allExamQs = getAllQuestionsForExam(examCode, mode);
    const existingScenarioNorms = new Set(rawSetQuestions.map(q => normalizeScenario(q.scenario)));
    
    for (const fallbackQ of allExamQs) {
      if (rawSetQuestions.length >= targetCount) break;
      const norm = normalizeScenario(fallbackQ.scenario);
      if (!existingScenarioNorms.has(norm)) {
        existingScenarioNorms.add(norm);
        rawSetQuestions.push(fallbackQ);
      }
    }
  }

  // 3. Mark as seen for user progress tracking if enabled
  if (markAsSeen) {
    const qIds = rawSetQuestions.map(q => q.id);
    markQuestionsAsSeen(examCode, qIds);
  }

  // 4. Scramble questions & option letters
  return scramble ? scrambleQuestionSet(rawSetQuestions) : rawSetQuestions;
}

/**
 * Register a new question set programmatically.
 */
export function registerQuestionSet(examCode: ExamCode, setId: number, questions: Question[], isSimulation: boolean = false) {
  const targetStore = isSimulation ? simQuestionsByExamAndSet : practiceQuestionsByExamAndSet;
  if (!targetStore[examCode]) {
    targetStore[examCode] = {};
  }
  targetStore[examCode][setId] = questions;
}
