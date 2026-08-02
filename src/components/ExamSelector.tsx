import React, { useState } from 'react';
import { ExamCode, ExamMode, ExamTier, ExamMeta } from '../types/exam';
import { EXAM_CATALOG, TIER_CATALOG, TierInfo } from '../data/examCatalog';
import { getAvailableQuestionSets } from '../engine/questionLoader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Modal } from './ui/Modal';
import {
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Play,
  Layers,
  DollarSign,
  UserCheck,
  Lock,
  ArrowRight,
  BookOpen,
  Award,
  Cpu,
  Server,
  BrainCircuit,
  Workflow,
  Network,
  ShieldCheck
} from 'lucide-react';

export interface ExamSelectorProps {
  onStartExam: (examCode: ExamCode, setId: number, mode: ExamMode) => void;
  dvaCompletedSets: number[];
  deaCompletedSets: number[];
}

export const ExamSelector: React.FC<ExamSelectorProps> = ({
  onStartExam,
  dvaCompletedSets,
  deaCompletedSets
}) => {
  const [selectedTier, setSelectedTier] = useState<ExamTier | 'All'>('All');
  const [activeExamCode, setActiveExamCode] = useState<ExamCode>('DVA-C02');
  const [selectedSet, setSelectedSet] = useState<number>(1);
  const [selectedMode, setSelectedMode] = useState<ExamMode>('practice');
  const [isInstructionModalOpen, setIsInstructionModalOpen] = useState<boolean>(false);

  const availableExams = Object.values(EXAM_CATALOG);

  const filteredExams = selectedTier === 'All'
    ? availableExams
    : availableExams.filter(e => e.tier === selectedTier);

  const currentExamMeta = EXAM_CATALOG[activeExamCode] || EXAM_CATALOG['DVA-C02'];

  const getCompletedSetsForExam = (code: ExamCode) => {
    if (code === 'DVA-C02') return dvaCompletedSets;
    if (code === 'DEA-C01') return deaCompletedSets;
    return [];
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
      case 'Workflow': return <Workflow className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'Lock': return <Lock className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Cloud className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Hero Welcome Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border-amber-500/30 p-8 sm:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Cloud className="w-96 h-96 text-amber-400" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>One-Stop AWS Certification Exam Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
            AWS Certification Practice Suite & Exam Guide
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Prepare for official AWS Certification exams across all 4 tiers (Foundational, Associate, Professional, and Specialty). Featuring authentic 65-question exam simulations, 50 scored vs 15 experimental beta questions, and retake scrambling for all 12 AWS Certifications!
          </p>

          {/* Quick stats pills */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>12 Official AWS Certification Guides</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>120 Full Practice Exam Sets Active</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>65 Questions per Set (130 Mins)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier Category Selector Tabs */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800">
          <button
            onClick={() => setSelectedTier('All')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedTier === 'All'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            All AWS Tiers (12 Certifications Active)
          </button>

          {TIER_CATALOG.map(t => (
            <button
              key={t.tier}
              onClick={() => setSelectedTier(t.tier)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedTier === t.tier
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {t.title} ({availableExams.filter(e => e.tier === t.tier).length})
            </button>
          ))}
        </div>

        {/* Selected Tier Overview Header */}
        {selectedTier !== 'All' && (
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
            {TIER_CATALOG.filter(t => t.tier === selectedTier).map(t => (
              <div key={t.tier} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="font-bold text-amber-400 block mb-0.5">Target Audience:</span>
                  <span className="text-slate-300">{t.targetAudience}</span>
                </div>
                <div>
                  <span className="font-bold text-sky-400 block mb-0.5">Recommended Experience:</span>
                  <span className="text-slate-300">{t.recommendedExperience}</span>
                </div>
                <div>
                  <span className="font-bold text-emerald-400 block mb-0.5">Official AWS Exam Cost & Duration:</span>
                  <span className="text-slate-300">{t.costInfo} • {t.durationInfo}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Certifications in Selected Tier */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map(exam => {
          const isSelected = activeExamCode === exam.code;

          return (
            <Card
              key={exam.code}
              variant="glass"
              className={`relative transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'border-amber-500/80 ring-2 ring-amber-500/30 bg-slate-900/90'
                  : 'hover:border-slate-700'
              }`}
              onClick={() => setActiveExamCode(exam.code as ExamCode)}
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${exam.badgeColor} flex items-center justify-center text-slate-950 font-bold shadow-lg`}>
                    {getIcon(exam.iconName)}
                  </div>

                  <div>
                    <Badge variant="success" className="text-[10px] font-black uppercase tracking-wider">
                      10 Sets Active
                    </Badge>
                  </div>
                </div>

                <div>
                  {/* Full actual exam name with (CODE) in brackets */}
                  <CardTitle className="text-base font-black text-slate-100 leading-snug">
                    {exam.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-amber-400 font-semibold mt-1">
                    {exam.tier} Tier • {exam.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0 text-xs">
                <p className="text-slate-300 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                {/* Exam Parameters Badges */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Exam Cost:</span>
                    <span className="font-bold text-emerald-400">${exam.costUSD} USD</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Duration:</span>
                    <span className="font-bold text-slate-200">{exam.durationMinutes} Mins</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Pass Threshold:</span>
                    <span className="font-bold text-amber-400">{exam.passingScore} / 1000</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Questions:</span>
                    <span className="font-bold text-slate-200">{exam.questionsPerSet} (50+15)</span>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-1">
                  <Button
                    variant={isSelected ? "primary" : "secondary"}
                    size="sm"
                    className="w-full justify-between gap-2"
                  >
                    <span>{isSelected ? "Selected for Practice" : "Select Practice Exam"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Selected Exam Launch Workspace (For All 12 Active AWS Certifications) */}
      {currentExamMeta && (
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border-amber-500/40 space-y-8 bg-slate-950/80">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="success" className="px-2.5 py-0.5 text-xs font-black">
                  ACTIVE EXAM ENGINE
                </Badge>
                <span className="text-xs font-bold text-slate-400">{currentExamMeta.tier} Tier</span>
              </div>
              <h3 className="text-2xl font-black text-slate-100">
                {currentExamMeta.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select from 10 distinct 65-question practice sets (50 Scored + 15 Experimental Beta).
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant={selectedMode === 'practice' ? 'primary' : 'outline'}
                onClick={() => setSelectedMode('practice')}
                className="gap-2 text-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Mode A (Instant Feedback)</span>
              </Button>

              <Button
                variant={selectedMode === 'simulation' ? 'primary' : 'outline'}
                onClick={() => setSelectedMode('simulation')}
                className="gap-2 text-xs"
              >
                <Clock className="w-4 h-4" />
                <span>Mode B (Full Simulation)</span>
              </Button>
            </div>
          </div>

          {/* Practice Set Selector Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Available Practice Sets (10 Sets for {currentExamMeta.code})</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {Array.from({ length: 10 }).map((_, idx) => {
                const setNum = idx + 1;
                const isCompleted = getCompletedSetsForExam(activeExamCode).includes(setNum);
                const isSetSelected = selectedSet === setNum;

                return (
                  <button
                    key={setNum}
                    onClick={() => setSelectedSet(setNum)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSetSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20'
                        : isCompleted
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                        : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-extrabold">Set {setNum}</span>
                      {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <span className="text-[11px] opacity-80 block font-normal">
                      65 Questions • {currentExamMeta.durationMinutes}m
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Launch Exam CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div>
              <h5 className="font-bold text-sm text-slate-100">Ready to begin {currentExamMeta.code} Set {selectedSet}?</h5>
              <p className="text-xs text-slate-400 mt-0.5">
                {selectedMode === 'practice'
                  ? 'Mode A: Step-by-step explanations revealed after each question.'
                  : 'Mode B: Full exam simulation. Results & detailed breakdown revealed at the end.'}
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsInstructionModalOpen(true)}
              className="w-full sm:w-auto gap-2 px-8 shadow-xl shadow-amber-500/20"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>Start Set {selectedSet} ({selectedMode === 'practice' ? 'Mode A' : 'Mode B'})</span>
            </Button>
          </div>

        </div>
      )}

      {/* Instructions Modal before starting exam */}
      <Modal
        isOpen={isInstructionModalOpen}
        onClose={() => setIsInstructionModalOpen(false)}
        title={`Exam Instructions – ${currentExamMeta.title} (Set ${selectedSet})`}
        maxWidth="lg"
      >
        <div className="space-y-6 text-slate-300 text-xs sm:text-sm">
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-start gap-3">
            <Sparkles className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <span className="font-bold block text-slate-100 mb-0.5">
                Mode: {selectedMode === 'practice' ? 'Practice (Mode A - Instant Feedback)' : 'Simulation (Mode B - Full Exam)'}
              </span>
              <p className="text-xs">
                {selectedMode === 'practice'
                  ? 'Answer questions at your own pace. Explanations and AWS docs links are shown immediately.'
                  : 'Complete all 65 questions under live timer conditions. Your scaled score will be revealed at the end.'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-slate-100 text-sm">Official AWS Exam Rules & Guidelines:</h5>
            <ul className="space-y-2 list-disc pl-5 text-xs leading-relaxed text-slate-300">
              <li><strong>65 Questions Total:</strong> 50 Scored Questions (determine 100-1000 scaled score) + 15 Unscored Experimental Beta Questions.</li>
              <li><strong>{currentExamMeta.durationMinutes} Minutes Duration:</strong> Real-time timer counts down automatically.</li>
              <li><strong>Single & Multiple Answer Questions:</strong> Single choice has round radio buttons; Multiple choice specifies "Select TWO" or "Select THREE".</li>
              <li><strong>Question Order Scrambling:</strong> Sequence of questions and option order is randomly scrambled on every attempt.</li>
              <li><strong>Passing Threshold:</strong> Scaled score of {currentExamMeta.passingScore}/1000 or higher.</li>
            </ul>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <Button variant="secondary" onClick={() => setIsInstructionModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setIsInstructionModalOpen(false);
                onStartExam(activeExamCode, selectedSet, selectedMode);
              }}
              className="gap-2 px-6"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Begin Exam Now</span>
            </Button>
          </div>

        </div>
      </Modal>

    </div>
  );
};
