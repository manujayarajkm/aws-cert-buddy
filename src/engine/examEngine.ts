import { Question, UserAnswers, ExamResult, DomainScore, ExamCode, ExamMode } from '../types/exam';
import { EXAM_CATALOG } from '../data/examCatalog';

/**
 * Checks if user answer matches the correct answer for a question.
 */
export function isQuestionAnswerCorrect(question: Question, userSelection: string[] | undefined): boolean {
  if (!userSelection || userSelection.length === 0) return false;
  if (userSelection.length !== question.correctAnswer.length) return false;

  const sortedUser = [...userSelection].sort();
  const sortedCorrect = [...question.correctAnswer].sort();

  return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
}

/**
 * Calculate scaled AWS score (100 to 1000 scale) based on scored questions.
 */
export function calculateAWSScore(correctCount: number, totalQuestions: number): number {
  if (totalQuestions === 0) return 100;
  const ratio = correctCount / totalQuestions;
  return Math.round(100 + ratio * 900);
}

/**
 * Formats time in seconds to HH:MM:SS or MM:SS format.
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, '0')}:${remMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Evaluates full exam results according to AWS Certified Exam Standards:
 * - 50 Scored Questions count towards the 100-1000 scaled score.
 * - 15 Unscored (Beta/Experimental) Questions are tracked separately.
 */
export function evaluateExam(
  examCode: ExamCode,
  setId: number,
  mode: ExamMode,
  questions: Question[],
  userAnswers: UserAnswers,
  elapsedSeconds: number
): ExamResult {
  const meta = EXAM_CATALOG[examCode];

  let scoredTotal = 0;
  let scoredCorrect = 0;
  let scoredIncorrect = 0;

  let unscoredTotal = 0;
  let unscoredCorrect = 0;

  let unansweredCount = 0;

  // Domain score tracking (Domain scores are computed on scored questions)
  const domainTracker: Record<string, { name: string; total: number; correct: number }> = {};

  meta.domains.forEach(d => {
    domainTracker[d.id] = { name: d.name, total: 0, correct: 0 };
  });

  questions.forEach(q => {
    const userSel = userAnswers[q.id];
    const isAnswered = userSel && userSel.length > 0;
    const isCorrect = isAnswered && isQuestionAnswerCorrect(q, userSel);
    const isScoredQuestion = q.isScored !== false; // Default true if unspecified

    if (isScoredQuestion) {
      scoredTotal++;
      if (!domainTracker[q.domainId]) {
        domainTracker[q.domainId] = { name: q.domainName, total: 0, correct: 0 };
      }
      domainTracker[q.domainId].total += 1;

      if (!isAnswered) {
        unansweredCount++;
      } else if (isCorrect) {
        scoredCorrect++;
        domainTracker[q.domainId].correct += 1;
      } else {
        scoredIncorrect++;
      }
    } else {
      unscoredTotal++;
      if (!isAnswered) {
        unansweredCount++;
      } else if (isCorrect) {
        unscoredCorrect++;
      }
    }
  });

  const totalQuestions = questions.length;
  // Scaled score is computed on SCORED questions only (standard AWS algorithm)
  const scaledScore = calculateAWSScore(scoredCorrect, scoredTotal || 50);
  const percentage = Math.round((scoredCorrect / (scoredTotal || 50)) * 100);
  const passed = scaledScore >= meta.passingScore;

  // Build domain breakdown score objects
  const domainScores: DomainScore[] = Object.keys(domainTracker).map(domId => {
    const data = domainTracker[domId];
    const domPct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    let status: DomainScore['status'] = 'Needs Review';
    if (domPct >= 80) status = 'Mastered';
    else if (domPct >= 65) status = 'Solid';

    return {
      domainId: domId,
      domainName: data.name,
      total: data.total,
      correct: data.correct,
      percentage: domPct,
      status
    };
  });

  // Strengths vs Improvements
  const strengths = domainScores
    .filter(d => d.percentage >= 75)
    .map(d => `${d.domainName} (${d.percentage}%)`);

  const improvements = domainScores
    .filter(d => d.percentage < 75)
    .map(d => `${d.domainName} (${d.percentage}%)`);

  // Generate Dopamine Messages & Badges
  let dopamineTitle = '';
  let dopamineMessage = '';
  let badgeEarned: ExamResult['badgeEarned'] = undefined;

  if (scaledScore >= 900) {
    dopamineTitle = '🔥 AWS CLOUD LEGEND!';
    dopamineMessage = `Phenomenal performance! You scored ${scaledScore}/1000 on the 50 scored exam questions with near-perfect domain execution. You are 100% ready for the official exam!`;
    badgeEarned = {
      title: 'AWS Grandmaster',
      description: 'Scored 900+ on AWS Associate Exam Practice',
      icon: 'Trophy'
    };
  } else if (scaledScore >= 800) {
    dopamineTitle = '⚡ CLOUD ARCHITECT CHAMPION!';
    dopamineMessage = `Outstanding job! You achieved an AWS scaled score of ${scaledScore}/1000. Your understanding of AWS services and security is top tier.`;
    badgeEarned = {
      title: 'Cloud Champion',
      description: 'Scored 800+ on AWS Associate Exam Practice',
      icon: 'Award'
    };
  } else if (passed) {
    dopamineTitle = '🎉 CERTIFIED PASS!';
    dopamineMessage = `Congratulations! You cleared the passing bar of ${meta.passingScore} with an AWS scaled score of ${scaledScore}/1000 (${scoredCorrect}/50 scored correct)!`;
    badgeEarned = {
      title: 'AWS Pass Master',
      description: 'Cleared official AWS Associate passing score threshold',
      icon: 'CheckCircle'
    };
  } else {
    dopamineTitle = '💪 RELENTLESS ACHIEVER!';
    dopamineMessage = `Solid practice effort! You achieved ${scaledScore}/1000. Review your weak domains below and retake the set to boost your confidence!`;
    badgeEarned = {
      title: 'Resilient Builder',
      description: 'Completed a 65-question AWS simulation exam',
      icon: 'Zap'
    };
  }

  return {
    examCode,
    examTitle: meta.title,
    setId,
    mode,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    scaledScore,
    rawScore: scoredCorrect,
    percentage,
    passed,
    passingScore: meta.passingScore,
    totalQuestions,
    scoredTotal,
    scoredCorrect,
    scoredIncorrect,
    unscoredTotal,
    unscoredCorrect,
    unansweredCount,
    timeSpentSeconds: elapsedSeconds,
    domainScores,
    strengths,
    improvements,
    dopamineTitle,
    dopamineMessage,
    badgeEarned
  };
}
