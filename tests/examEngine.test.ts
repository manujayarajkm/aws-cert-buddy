import { describe, it, expect } from 'vitest';
import { evaluateExam, isQuestionAnswerCorrect, formatTime } from '../src/engine/examEngine';
import { Question } from '../src/types/exam';

describe('Exam Engine Unit Tests', () => {
  const sampleQuestions: Question[] = Array.from({ length: 65 }).map((_, idx) => ({
    id: `q-${idx + 1}`,
    setId: 1,
    examCode: 'DVA-C02',
    domainId: 'dva-d1',
    domainName: 'Domain 1: Development with AWS Services',
    questionType: idx % 10 === 0 ? 'multiple' : 'single',
    isScored: idx < 50, // 50 scored, 15 unscored
    scenario: `Scenario question ${idx + 1}`,
    options: [
      { id: 'A', text: 'Option A' },
      { id: 'B', text: 'Option B' },
      { id: 'C', text: 'Option C' },
      { id: 'D', text: 'Option D' }
    ],
    correctAnswer: idx % 10 === 0 ? ['A', 'C'] : ['B'],
    explanation: 'Test explanation note'
  }));

  it('should correctly evaluate single-choice and multiple-choice answers', () => {
    const singleChoiceQuestion = sampleQuestions[1]; // Single choice, correct: ['B']
    expect(isQuestionAnswerCorrect(singleChoiceQuestion, ['B'])).toBe(true);
    expect(isQuestionAnswerCorrect(singleChoiceQuestion, ['A'])).toBe(false);

    const multiChoiceQuestion = sampleQuestions[0]; // Multiple choice, correct: ['A', 'C']
    expect(isQuestionAnswerCorrect(multiChoiceQuestion, ['A', 'C'])).toBe(true);
    expect(isQuestionAnswerCorrect(multiChoiceQuestion, ['C', 'A'])).toBe(true);
    expect(isQuestionAnswerCorrect(multiChoiceQuestion, ['A'])).toBe(false);
  });

  it('should calculate scaled AWS scores (100 to 1000 scale) based strictly on 50 scored questions', () => {
    // Test evaluation output scaledScore property
    const perfectScore = evaluateExam('DVA-C02', 1, 'simulation', sampleQuestions.map(q => ({ ...q, isScored: true })), sampleQuestions.reduce((acc, q) => ({ ...acc, [q.id]: q.correctAnswer }), {}), 3600);
    expect(perfectScore.scaledScore).toBe(1000);

    const zeroScore = evaluateExam('DVA-C02', 1, 'simulation', sampleQuestions.map(q => ({ ...q, isScored: true })), sampleQuestions.reduce((acc, q) => ({ ...acc, [q.id]: ['WRONG'] }), {}), 3600);
    expect(zeroScore.scaledScore).toBe(100);
  });

  it('should evaluate full 65-question exam with 50 scored vs 15 unscored beta split', () => {
    const userAnswers: Record<string, string[]> = {};
    // Answer first 40 questions correctly
    sampleQuestions.forEach((q, idx) => {
      if (idx < 40) {
        userAnswers[q.id] = q.correctAnswer;
      } else {
        userAnswers[q.id] = ['D']; // Incorrect choice
      }
    });

    const result = evaluateExam('DVA-C02', 1, 'simulation', sampleQuestions, userAnswers, 3600);

    expect(result.totalQuestions).toBe(65);
    expect(result.scoredTotal).toBe(50);
    expect(result.unscoredTotal).toBe(15);
    expect(result.examCode).toBe('DVA-C02');
    expect(result.passed).toBeDefined();
    expect(result.domainScores.length).toBeGreaterThan(0);
  });

  it('should format seconds into HH:MM:SS / MM:SS string correctly', () => {
    expect(formatTime(90)).toBe('01:30');
    expect(formatTime(3665)).toBe('01:01:05');
  });
});
