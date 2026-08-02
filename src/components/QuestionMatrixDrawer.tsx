import React from 'react';
import { Question, UserAnswers, FlaggedQuestions, SubmittedAnswers, ExamMode } from '../types/exam';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { Flag, CheckCircle2, Circle, HelpCircle } from 'lucide-react';

export interface QuestionMatrixDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentIndex: number;
  userAnswers: UserAnswers;
  flagged: FlaggedQuestions;
  submittedAnswers: SubmittedAnswers;
  mode: ExamMode;
  onSelectQuestion: (index: number) => void;
  onFinishExam: () => void;
}

export const QuestionMatrixDrawer: React.FC<QuestionMatrixDrawerProps> = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  userAnswers,
  flagged,
  submittedAnswers,
  mode,
  onSelectQuestion,
  onFinishExam
}) => {
  const total = questions.length;
  const answeredCount = Object.keys(userAnswers).filter(id => userAnswers[id]?.length > 0).length;
  const flaggedCount = Object.keys(flagged).filter(id => flagged[id]).length;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Question Navigation Palette"
      maxWidth="lg"
      footer={
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-slate-400">
            {answeredCount} of {total} Answered
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose}>Close</Button>
            <Button variant="destructive" onClick={() => { onClose(); onFinishExam(); }}>
              Finish Exam
            </Button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        
        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold text-[10px]">✓</div>
            <span>Answered ({answeredCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-800 border border-slate-700" />
            <span>Unanswered ({total - answeredCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500/20 border border-amber-500/60 flex items-center justify-center text-amber-400">
              <Flag className="w-2.5 h-2.5 fill-amber-400" />
            </div>
            <span>Flagged ({flaggedCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-amber-500 bg-amber-500/20" />
            <span>Current</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = userAnswers[q.id] && userAnswers[q.id].length > 0;
            const isFlagged = flagged[q.id];
            const isSubmitted = submittedAnswers[q.id];

            let bgClass = 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700';

            if (isCurrent) {
              bgClass = 'bg-amber-500/30 border-2 border-amber-400 text-white font-bold ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20';
            } else if (isAnswered) {
              bgClass = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold hover:bg-emerald-500/25';
            }

            return (
              <button
                key={q.id}
                onClick={() => { onSelectQuestion(idx); onClose(); }}
                className={`relative flex flex-col items-center justify-center h-12 rounded-xl border text-sm transition-all ${bgClass}`}
              >
                <span>{idx + 1}</span>

                {isFlagged && (
                  <Flag className="absolute top-1 right-1 w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </Modal>
  );
};
