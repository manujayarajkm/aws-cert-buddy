import React, { useState, useEffect } from 'react';
import { ExamState, Question } from '../types/exam';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';
import { QuestionMatrixDrawer } from './QuestionMatrixDrawer';
import { InstantFeedback } from './InstantFeedback';
import { formatTime } from '../engine/examEngine';
import {
  Flag,
  Grid,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Copy,
  Check,
  AlertTriangle,
  Send,
  RotateCcw
} from 'lucide-react';

export interface ExamViewProps {
  examState: ExamState;
  onSelectOption: (questionId: string, optionId: string, isMultiple: boolean) => void;
  onSubmitAnswerModeA: (questionId: string) => void;
  onToggleFlag: (questionId: string) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onJumpToQuestion: (index: number) => void;
  onFinishExam: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  examState,
  onSelectOption,
  onSubmitAnswerModeA,
  onToggleFlag,
  onNextQuestion,
  onPrevQuestion,
  onJumpToQuestion,
  onFinishExam
}) => {
  const [isMatrixOpen, setIsMatrixOpen] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const {
    questions,
    currentIndex,
    userAnswers,
    flagged,
    submittedAnswers,
    mode,
    timeRemaining,
    elapsedSeconds
  } = examState;

  const currentQ: Question = questions[currentIndex];
  const isMultiple = currentQ.questionType === 'multiple';
  const selectedOptions = userAnswers[currentQ.id] || [];
  const isFlagged = !!flagged[currentQ.id];
  const isSubmittedModeA = mode === 'practice' && submittedAnswers[currentQ.id];

  const total = questions.length;
  const isLastQuestion = currentIndex === total - 1;
  const answeredCount = Object.keys(userAnswers).filter(id => userAnswers[id]?.length > 0).length;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Top Header Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsMatrixOpen(true)}
            className="gap-2 shrink-0 border-slate-700"
          >
            <Grid className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Palette</span>
          </Button>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-slate-100 text-base">{examState.examCode}</h2>
              <Badge variant="aws">Set {examState.setId}</Badge>
              <Badge variant={mode === 'practice' ? 'info' : 'warning'} className="hidden md:inline-flex">
                {mode === 'practice' ? 'Mode A (Instant)' : 'Mode B (Exam)'}
              </Badge>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Question <span className="text-slate-100 font-bold">{currentIndex + 1}</span> of {total}
            </p>
          </div>
        </div>

        {/* Center Progress */}
        <div className="w-full sm:w-64">
          <Progress value={currentIndex + 1} max={total} showLabel />
        </div>

        {/* Right Info: Timer & End Exam */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-slate-200">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTime(timeRemaining)}</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onToggleFlag(currentQ.id)}
            className={`gap-1.5 ${isFlagged ? 'bg-amber-500/20 border-amber-500 text-amber-300' : ''}`}
          >
            <Flag className={`w-4 h-4 ${isFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Flag'}</span>
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={onFinishExam}
          >
            End Exam
          </Button>
        </div>

      </div>

      {/* Main Question Card */}
      <Card variant="glass" className="p-6 sm:p-8 relative">
        
        {/* Question Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-slate-800 text-slate-300 border-slate-700">
              {currentQ.domainName}
            </Badge>
            {currentQ.difficulty && (
              <Badge variant="outline" className="text-[10px]">
                {currentQ.difficulty}
              </Badge>
            )}
          </div>

          {isMultiple && (
            <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold animate-pulse">
              Select {currentQ.selectCount || 2} Options
            </div>
          )}
        </div>

        {/* Question Scenario */}
        <div className="mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed">
            {currentQ.scenario}
          </h3>
        </div>

        {/* Code Snippet Block (If present) */}
        {currentQ.codeSnippet && (
          <div className="mb-6 relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-4">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2 border-b border-slate-800/80 pb-2">
              <span className="font-mono text-amber-400 font-semibold">Code / Configuration Snippet</span>
              <button
                onClick={() => handleCopyCode(currentQ.codeSnippet!)}
                className="flex items-center gap-1 hover:text-slate-200 transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-amber-200/90 overflow-x-auto custom-scrollbar p-2 whitespace-pre-wrap">
              <code>{currentQ.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Choice Options */}
        <div className="space-y-3.5 mb-8">
          {currentQ.options.map(opt => {
            const isSelected = selectedOptions.includes(opt.id);
            const isCorrectOpt = currentQ.correctAnswer.includes(opt.id);

            let optionStyle = 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200';

            if (mode === 'practice' && isSubmittedModeA) {
              // Mode A reveal styles
              if (isCorrectOpt) {
                optionStyle = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-medium ring-1 ring-emerald-500/50';
              } else if (isSelected && !isCorrectOpt) {
                optionStyle = 'bg-rose-950/60 border-rose-500/80 text-rose-200 ring-1 ring-rose-500/50';
              }
            } else if (isSelected) {
              optionStyle = 'bg-amber-500/15 border-amber-500 ring-2 ring-amber-500/40 text-white font-semibold shadow-md shadow-amber-500/10';
            }

            return (
              <div
                key={opt.id}
                onClick={() => {
                  if (mode === 'practice' && isSubmittedModeA) return; // locked after submission in Mode A
                  onSelectOption(currentQ.id, opt.id, isMultiple);
                }}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer select-none ${optionStyle}`}
              >
                {/* Option Choice Badge (A, B, C, D) */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {opt.id}
                </div>

                {/* Text */}
                <div className="flex-1 pt-1 text-sm leading-relaxed">
                  {opt.text}
                </div>

                {/* Select Indicator */}
                <div className="pt-1">
                  {isMultiple ? (
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 accent-amber-500 pointer-events-none rounded"
                    />
                  ) : (
                    <input
                      type="radio"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 accent-amber-500 pointer-events-none"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mode A: Submit Answer Action */}
        {mode === 'practice' && !isSubmittedModeA && (
          <div className="flex justify-end mb-4">
            <Button
              variant="primary"
              size="md"
              disabled={selectedOptions.length === 0}
              onClick={() => onSubmitAnswerModeA(currentQ.id)}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Answer & Check Explanation</span>
            </Button>
          </div>
        )}

        {/* Mode A: Instant Feedback Component */}
        {mode === 'practice' && isSubmittedModeA && (
          <InstantFeedback
            question={currentQ}
            userSelection={selectedOptions}
            onNext={onNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
          <Button
            variant="secondary"
            size="md"
            onClick={onPrevQuestion}
            disabled={currentIndex === 0}
            className="gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <span className="text-xs text-slate-400 hidden sm:block">
            {answeredCount} of {total} Questions Answered
          </span>

          <Button
            variant="primary"
            size="md"
            onClick={onNextQuestion}
            className="gap-1.5"
          >
            <span>{isLastQuestion ? 'Finish Exam' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      </Card>

      {/* Navigation Matrix Drawer Modal */}
      <QuestionMatrixDrawer
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
        questions={questions}
        currentIndex={currentIndex}
        userAnswers={userAnswers}
        flagged={flagged}
        submittedAnswers={submittedAnswers}
        mode={mode}
        onSelectQuestion={onJumpToQuestion}
        onFinishExam={onFinishExam}
      />

    </div>
  );
};
