import { ExamCode, Question, QuestionSetMeta } from '../types/exam';

// Import all JSON question files dynamically using Vite's glob import
const jsonModules = import.meta.glob('../data/**/*.json', { eager: true });

// Data structures to hold parsed question sets
const questionsByExamAndSet: Record<string, Record<number, Question[]>> = {};

// Parse and register all discovered JSON modules automatically
for (const path in jsonModules) {
  const moduleData = (jsonModules[path] as { default?: Question[] })?.default || (jsonModules[path] as Question[]);

  if (Array.isArray(moduleData) && moduleData.length > 0) {
    const firstQ = moduleData[0];
    const examCode = firstQ.examCode as ExamCode;
    const setId = firstQ.setId;

    if (examCode && setId) {
      if (!questionsByExamAndSet[examCode]) {
        questionsByExamAndSet[examCode] = {};
      }
      questionsByExamAndSet[examCode][setId] = moduleData;
    }
  }
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
 * Get all available question sets for a specific exam code.
 */
export function getAvailableQuestionSets(examCode: ExamCode): QuestionSetMeta[] {
  const setMap = questionsByExamAndSet[examCode] || {};
  const setNumbers = Object.keys(setMap).map(Number).sort((a, b) => a - b);

  return setNumbers.map(setId => {
    const questions = setMap[setId] || [];
    let difficulty: QuestionSetMeta['difficulty'] = 'Intermediate';
    if (setId <= 3) difficulty = 'Beginner';
    else if (setId <= 7) difficulty = 'Intermediate';
    else if (setId <= 9) difficulty = 'Advanced';
    else difficulty = 'Expert Exam Simulation';

    return {
      setId,
      title: `Practice Set ${setId}`,
      description: `${questions.length || 65} scenario-based AWS questions (50 Scored, 15 Experimental)`,
      questionCount: questions.length || 65,
      difficulty
    };
  });
}

/**
 * Load questions for a given exam code and set number.
 * @param scramble - If true, scrambles the sequence of questions on every attempt (AWS retake best practice).
 */
export function loadQuestionsForSet(examCode: ExamCode, setId: number, scramble: boolean = true): Question[] {
  const examMap = questionsByExamAndSet[examCode];
  if (!examMap || !examMap[setId]) {
    console.warn(`No questions found for ${examCode} Set ${setId}`);
    return [];
  }

  const rawQuestions = examMap[setId];
  return scramble ? scrambleQuestionSet(rawQuestions) : rawQuestions;
}

/**
 * Register a new question set programmatically.
 */
export function registerQuestionSet(examCode: ExamCode, setId: number, questions: Question[]) {
  if (!questionsByExamAndSet[examCode]) {
    questionsByExamAndSet[examCode] = {};
  }
  questionsByExamAndSet[examCode][setId] = questions;
}
