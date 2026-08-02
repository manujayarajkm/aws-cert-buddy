import { describe, it, expect } from 'vitest';
import { loadQuestionsForSet, getAvailableQuestionSets } from '../src/engine/questionLoader';

describe('Question Loader & Scrambler Unit Tests', () => {
  it('should retrieve available question sets for active exams DVA-C02 and DEA-C01', () => {
    const dvaSets = getAvailableQuestionSets('DVA-C02');
    const deaSets = getAvailableQuestionSets('DEA-C01');

    expect(dvaSets.length).toBe(10);
    expect(deaSets.length).toBe(10);
  });

  it('should load 65 questions per set for DVA-C02 Set 1', () => {
    const questions = loadQuestionsForSet('DVA-C02', 1, false);
    expect(questions.length).toBe(65);
    expect(questions[0].setId).toBe(1);
    expect(questions[0].examCode).toBe('DVA-C02');
  });

  it('should scramble questions and re-map option keys while maintaining valid correct answers', () => {
    const originalQuestions = loadQuestionsForSet('DVA-C02', 1, false);
    const scrambledQuestions = loadQuestionsForSet('DVA-C02', 1, true);

    expect(scrambledQuestions.length).toBe(originalQuestions.length);

    // Each question should still have 4 options and valid non-empty correct answer IDs
    scrambledQuestions.forEach(q => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctAnswer.length).toBeGreaterThan(0);
      q.correctAnswer.forEach(ansId => {
        expect(['A', 'B', 'C', 'D', 'E']).includes(ansId);
      });
    });
  });
});
