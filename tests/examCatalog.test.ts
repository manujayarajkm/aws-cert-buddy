import { describe, it, expect } from 'vitest';
import { EXAM_CATALOG, TIER_CATALOG } from '../src/data/examCatalog';

describe('AWS Exam Catalog Tier Coverage Unit Tests', () => {
  it('should contain all 4 official AWS Tiers', () => {
    expect(TIER_CATALOG.length).toBe(4);
    const tierNames = TIER_CATALOG.map(t => t.tier);
    expect(tierNames).toContain('Foundational');
    expect(tierNames).toContain('Associate');
    expect(tierNames).toContain('Professional');
    expect(tierNames).toContain('Specialty');
  });

  it('should contain all 12 official AWS certifications with formatted title codes in brackets', () => {
    const examCodes = Object.keys(EXAM_CATALOG);
    expect(examCodes.length).toBe(12);

    examCodes.forEach(code => {
      const exam = EXAM_CATALOG[code];
      expect(exam.code).toBe(code);
      expect(exam.title).toContain(`(${code})`);
      expect(exam.costUSD).toBeGreaterThan(0);
      expect(exam.durationMinutes).toBeGreaterThan(0);
      expect(exam.domains.length).toBeGreaterThan(0);
    });
  });

  it('should mark all 12 AWS certifications as active available practice exams', () => {
    Object.keys(EXAM_CATALOG).forEach(code => {
      expect(EXAM_CATALOG[code].isAvailable).toBe(true);
    });
  });
});
