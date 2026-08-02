import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ExamResult, Question, UserAnswers } from '../types/exam';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';
import { formatTime, isQuestionAnswerCorrect } from '../engine/examEngine';
import {
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Target,
  Clock,
  BookOpen,
  ExternalLink,
  Flame,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap
} from 'lucide-react';

export interface ResultsViewProps {
  result: ExamResult;
  questions: Question[];
  userAnswers: UserAnswers;
  onRetake: () => void;
  onHomeClick: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  questions,
  userAnswers,
  onRetake,
  onHomeClick
}) => {
  const [filterTab, setFilterTab] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  // Trigger celebration confetti on mount if passed or high score
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF9900', '#10B981', '#38BDF8', '#F59E0B', '#6366F1']
      });
    } catch (err) {
      console.log('Confetti effect unavailable', err);
    }
  };

  useEffect(() => {
    if (result.passed) {
      triggerConfetti();
    }
  }, [result.passed]);

  const toggleExpand = (qId: string) => {
    setExpandedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const filteredQuestions = questions.filter(q => {
    const isCorrect = isQuestionAnswerCorrect(q, userAnswers[q.id]);
    if (filterTab === 'correct') return isCorrect;
    if (filterTab === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Dopamine Celebration Hero Banner */}
      <div className={`relative rounded-3xl overflow-hidden p-6 sm:p-10 border shadow-2xl transition-all ${
        result.passed
          ? 'glass-panel border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-slate-950 to-slate-950'
          : 'glass-panel border-amber-500/40 bg-gradient-to-r from-amber-950/60 via-slate-950 to-slate-950'
      }`}>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Trophy className="w-96 h-96 text-amber-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>{result.examTitle} • Set {result.setId}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight leading-tight">
              {result.dopamineTitle}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {result.dopamineMessage}
            </p>

            {/* Achievement Badge Earned */}
            {result.badgeEarned && (
              <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Achievement Unlocked</span>
                  <span className="text-sm font-extrabold text-slate-100">{result.badgeEarned.title}</span>
                </div>
              </div>
            )}
          </div>

          {/* Scaled AWS Score Gauge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl shrink-0 min-w-[240px]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">AWS Scaled Score</span>
            
            <div className="relative flex items-center justify-center my-2">
              <span className={`text-5xl font-black font-mono tracking-tight ${
                result.passed ? 'gradient-text-aws' : 'text-slate-200'
              }`}>
                {result.scaledScore}
              </span>
              <span className="text-xs text-slate-500 font-bold absolute -bottom-3">/ 1000</span>
            </div>

            <div className="mt-4 mb-2">
              {result.passed ? (
                <Badge variant="success" className="px-4 py-1 text-sm font-black shadow-lg shadow-emerald-500/20">
                  PASSED (Threshold {result.passingScore})
                </Badge>
              ) : (
                <Badge variant="danger" className="px-4 py-1 text-sm font-black shadow-lg shadow-rose-500/20">
                  NEEDS PRACTICE (Pass: {result.passingScore})
                </Badge>
              )}
            </div>

            <button
              onClick={triggerConfetti}
              className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold mt-2 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Re-trigger Celebration</span>
            </button>
          </div>

        </div>
      </div>

      {/* Overview Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card variant="glass" className="p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Scored Accuracy</span>
            <span className="text-xl font-extrabold text-slate-100">{result.percentage}%</span>
            <span className="text-[10px] text-slate-400">({result.scoredCorrect}/50 Scored)</span>
          </div>
        </Card>

        <Card variant="glass" className="p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Scored Correct</span>
            <span className="text-xl font-extrabold text-emerald-400">{result.scoredCorrect} / {result.scoredTotal}</span>
            <span className="text-[10px] text-slate-400">AWS Scaled Score Base</span>
          </div>
        </Card>

        <Card variant="glass" className="p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Unscored Beta</span>
            <span className="text-xl font-extrabold text-indigo-300">{result.unscoredCorrect} / {result.unscoredTotal}</span>
            <span className="text-[10px] text-slate-400">15 Experimental Questions</span>
          </div>
        </Card>

        <Card variant="glass" className="p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">Time Taken</span>
            <span className="text-xl font-extrabold text-slate-100 font-mono">{formatTime(result.timeSpentSeconds)}</span>
          </div>
        </Card>
      </div>

      {/* Domain Mastery Breakdown & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Domain Scores List */}
        <Card variant="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <CardTitle>Domain Performance Breakdown</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {result.domainScores.map(dom => (
              <div key={dom.domainId} className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">{dom.domainName}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-100">{dom.correct}/{dom.total} ({dom.percentage}%)</span>
                    <Badge variant={dom.status === 'Mastered' ? 'success' : dom.status === 'Solid' ? 'info' : 'danger'} className="text-[10px]">
                      {dom.status}
                    </Badge>
                  </div>
                </div>
                <Progress
                  value={dom.percentage}
                  barClassName={
                    dom.percentage >= 80 ? 'from-emerald-500 to-teal-400' : dom.percentage >= 65 ? 'from-amber-500 to-orange-400' : 'from-rose-500 to-red-600'
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Strengths vs Focus Areas */}
        <Card variant="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <CardTitle>Personalized AWS Focus Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            
            {/* Strengths */}
            <div>
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Areas You Are Strong At:</span>
              </h5>
              {result.strengths.length > 0 ? (
                <ul className="space-y-2">
                  {result.strengths.map((str, i) => (
                    <li key={i} className="text-xs text-slate-300 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 italic">Complete more practice questions to build strong domain mastery.</p>
              )}
            </div>

            {/* Areas to look into */}
            <div>
              <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Areas Needing Review:</span>
              </h5>
              {result.improvements.length > 0 ? (
                <ul className="space-y-2">
                  {result.improvements.map((imp, i) => (
                    <li key={i} className="text-xs text-slate-300 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-emerald-400 font-semibold">Great job! You achieved top performance across all domains!</p>
              )}
            </div>

          </CardContent>
        </Card>

      </div>

      {/* Detailed Question Review Tab */}
      <Card variant="glass">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <CardTitle>Detailed Answer Explanations ({questions.length})</CardTitle>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterTab === 'all' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              onClick={() => setFilterTab('correct')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterTab === 'correct' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Correct ({result.scoredCorrect + result.unscoredCorrect})
            </button>
            <button
              onClick={() => setFilterTab('incorrect')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                filterTab === 'incorrect' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Incorrect ({result.totalQuestions - (result.scoredCorrect + result.unscoredCorrect)})
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {filteredQuestions.map((q, idx) => {
            const userSel = userAnswers[q.id] || [];
            const isCorrect = isQuestionAnswerCorrect(q, userSel);
            const isExpanded = expandedQuestions[q.id];
            const isScoredQuestion = q.isScored !== false;

            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all ${
                  isCorrect
                    ? 'bg-slate-900/50 border-slate-800'
                    : 'bg-rose-950/20 border-rose-500/30'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      Q{idx + 1}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge variant={isCorrect ? 'success' : 'danger'}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </Badge>
                        {isScoredQuestion ? (
                          <Badge variant="outline" className="text-[10px] text-amber-400 border-amber-500/30">
                            AWS Scored Question
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px] text-indigo-400 border-indigo-500/30 bg-indigo-500/10">
                            Unscored Beta (Experimental)
                          </Badge>
                        )}
                        <span className="text-xs text-slate-400">{q.domainName}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-2">
                        {q.scenario}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-slate-400 pt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-800/80 space-y-4 text-xs">
                    
                    {/* Choices list */}
                    <div className="space-y-2">
                      {q.options.map(opt => {
                        const isUserChoice = userSel.includes(opt.id);
                        const isCorrectChoice = q.correctAnswer.includes(opt.id);

                        let optStyle = 'bg-slate-900/80 border-slate-800 text-slate-300';
                        if (isCorrectChoice) {
                          optStyle = 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-semibold';
                        } else if (isUserChoice && !isCorrectChoice) {
                          optStyle = 'bg-rose-950/60 border-rose-500/60 text-rose-200';
                        }

                        return (
                          <div key={opt.id} className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${optStyle}`}>
                            <div className="flex items-center gap-3">
                              <span className="font-bold font-mono">{opt.id}.</span>
                              <span>{opt.text}</span>
                            </div>
                            <div className="shrink-0 font-bold">
                              {isCorrectChoice && <span className="text-emerald-400">✓ Correct</span>}
                              {isUserChoice && !isCorrectChoice && <span className="text-rose-400">✗ Your Choice</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Step-by-step AWS Explanation */}
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 block">AWS Detailed Explanation:</span>
                      <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                      {q.awsDocUrl && (
                        <a
                          href={q.awsDocUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber-400 hover:underline pt-1 font-semibold"
                        >
                          <span>Official AWS Documentation</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Button variant="secondary" size="lg" onClick={onHomeClick} className="w-full sm:w-auto gap-2">
          <Layers className="w-5 h-5" />
          <span>Select Another Exam / Set</span>
        </Button>

        <Button variant="primary" size="lg" onClick={onRetake} className="w-full sm:w-auto gap-2">
          <RotateCcw className="w-5 h-5" />
          <span>Retake This Set ({result.examCode} Set {result.setId})</span>
        </Button>
      </div>

    </div>
  );
};
