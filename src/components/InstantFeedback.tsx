import React from 'react';
import { Question } from '../types/exam';
import { isQuestionAnswerCorrect } from '../engine/examEngine';
import { CheckCircle2, XCircle, ExternalLink, Lightbulb, ShieldAlert } from 'lucide-react';
import { Button } from './ui/Button';

export interface InstantFeedbackProps {
  question: Question;
  userSelection: string[] | undefined;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const InstantFeedback: React.FC<InstantFeedbackProps> = ({
  question,
  userSelection,
  onNext,
  isLastQuestion
}) => {
  const isCorrect = isQuestionAnswerCorrect(question, userSelection);

  return (
    <div className={`mt-6 p-6 rounded-2xl border transition-all animate-in fade-in slide-in-from-bottom-3 duration-300 ${
      isCorrect
        ? 'bg-emerald-950/40 border-emerald-500/50 shadow-xl shadow-emerald-950/30'
        : 'bg-rose-950/40 border-rose-500/50 shadow-xl shadow-rose-950/30'
    }`}>
      
      {/* Result Status Banner */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <XCircle className="w-6 h-6" />
            </div>
          )}

          <div>
            <h4 className={`text-lg font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
            </h4>
            <p className="text-xs text-slate-300">
              Correct Answer: <strong className="text-amber-400 font-mono font-bold">{question.correctAnswer.join(', ')}</strong>
            </p>
          </div>
        </div>

        <Button
          variant={isCorrect ? 'success' : 'primary'}
          size="md"
          onClick={onNext}
          className="gap-2"
        >
          <span>{isLastQuestion ? 'View Final Results' : 'Next Question'}</span>
        </Button>
      </div>

      {/* Explanation Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>AWS Expert Explanation:</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 font-normal">
          {question.explanation}
        </p>

        {question.awsDocUrl && (
          <div className="pt-2 flex items-center gap-2">
            <a
              href={question.awsDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              <span>Official AWS Documentation Reference</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

    </div>
  );
};
