import React, { useState } from 'react';
import { UserStats, UserProfile, ExamResult } from '../types/exam';
import { Modal } from './ui/Modal';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';
import {
  BarChart3,
  Trophy,
  CheckCircle2,
  Zap,
  Code,
  Database,
  Clock,
  User,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  AlertCircle,
  Lightbulb,
  Target,
  ArrowRight,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  currentUser: UserProfile | null;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  stats,
  currentUser
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'trends' | 'suggestions' | 'history'>('overview');

  const totalTaken = stats.totalExamsTaken;
  const passedCount = stats.passedExamsCount;
  const passRate = totalTaken > 0 ? Math.round((passedCount / totalTaken) * 100) : 0;
  const avgScore = stats.averageScore || 0;

  // Calculate Readiness Index (0 - 100%)
  const readinessIndex = totalTaken === 0
    ? 0
    : Math.min(100, Math.round((avgScore / 1000) * 80 + (passRate / 100) * 20));

  const getReadinessBadge = () => {
    if (readinessIndex >= 80) return { text: 'HIGHLY EXAM READY', color: 'bg-emerald-500 text-slate-950', desc: 'Your performance consistently exceeds the AWS passing threshold (720/1000). You are ready to sit for the official exam!' };
    if (readinessIndex >= 65) return { text: 'MODERATE READINESS', color: 'bg-amber-500 text-slate-950', desc: 'You are close to exam readiness. Complete 2-3 more practice sets focusing on weaker domains.' };
    return { text: 'PRACTICE NEEDED', color: 'bg-rose-500 text-white', desc: 'Focus on core domains and review explanation notes before attempting full simulations.' };
  };

  const readiness = getReadinessBadge();

  // Aggregate domain performance across all recorded results
  const aggregatedDomains: Record<string, { total: number; correct: number }> = {};
  stats.recentResults.forEach(r => {
    r.domainScores?.forEach(d => {
      if (!aggregatedDomains[d.domainName]) {
        aggregatedDomains[d.domainName] = { total: 0, correct: 0 };
      }
      aggregatedDomains[d.domainName].total += d.total;
      aggregatedDomains[d.domainName].correct += d.correct;
    });
  });

  const domainAnalysisList = Object.entries(aggregatedDomains).map(([name, data]) => {
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    return { name, pct, total: data.total, correct: data.correct };
  }).sort((a, b) => a.pct - b.pct);

  // Weaker domains needing focus
  const weakDomains = domainAnalysisList.filter(d => d.pct < 75);
  const strongDomains = domainAnalysisList.filter(d => d.pct >= 75);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Candidate Progress Dashboard & Exam Analytics"
      maxWidth="lg"
    >
      <div className="space-y-6">
        
        {/* Candidate Profile Header Card */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg">
              {currentUser ? currentUser.name.charAt(0).toUpperCase() : 'C'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-100">
                  {currentUser ? currentUser.name : 'AWS Candidate'}
                </span>
                <Badge variant="outline" className="text-[10px] text-amber-400 border-amber-500/30">
                  Verified Candidate
                </Badge>
              </div>
              <span className="text-xs text-slate-400">
                {currentUser ? `@${currentUser.username} • ${currentUser.email}` : 'Local Candidate Profile'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-semibold">Cloud Progress Engine Active</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview Metrics
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              activeTab === 'trends' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Score Trends & Graphs
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              activeTab === 'suggestions' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Study Suggestions ({weakDomains.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              activeTab === 'history' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Attempt Log ({stats.recentResults.length})
          </button>
        </div>

        {/* TAB 1: OVERVIEW METRICS */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Exam Readiness Hero Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AWS Exam Readiness Index</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${readiness.color}`}>
                  {readiness.text}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-amber-400 font-mono">
                  {readinessIndex}%
                </div>
                <div className="flex-1 space-y-1">
                  <Progress value={readinessIndex} barClassName="from-amber-500 to-emerald-400" />
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {readiness.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* High-level KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Exams Attended</span>
                <span className="text-2xl font-black text-slate-100">{totalTaken}</span>
                <span className="text-[10px] text-slate-400">Total Practice sittings</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Pass Rate</span>
                <span className="text-2xl font-black text-emerald-400">{passRate}%</span>
                <span className="text-[10px] text-slate-400">Above 720 threshold</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Avg AWS Scaled Score</span>
                <span className="text-2xl font-black text-amber-400">{avgScore}</span>
                <span className="text-[10px] text-slate-400">On 100 - 1000 scale</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Active Practice Streak</span>
                <span className="text-2xl font-black text-amber-500 flex items-center gap-1">
                  <Zap className="w-5 h-5 fill-amber-500" />
                  <span>{stats.currentStreakDays}d</span>
                </span>
                <span className="text-[10px] text-slate-400">Consecutive days</span>
              </div>
            </div>

            {/* Set Completion Progress */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h4 className="font-bold text-sm text-slate-200">Practice Set Mastery Progress (10 Sets Each)</h4>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5 font-semibold">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Code className="w-4 h-4" />
                      <span>AWS Certified Developer – Associate (DVA-C02)</span>
                    </span>
                    <span className="text-slate-300">{stats.dvaCompletedSets.length} / 10 Sets Completed</span>
                  </div>
                  <Progress value={stats.dvaCompletedSets.length} max={10} barClassName="from-amber-500 to-orange-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 font-semibold">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Database className="w-4 h-4" />
                      <span>AWS Certified Data Engineer – Associate (DEA-C01)</span>
                    </span>
                    <span className="text-slate-300">{stats.deaCompletedSets.length} / 10 Sets Completed</span>
                  </div>
                  <Progress value={stats.deaCompletedSets.length} max={10} barClassName="from-blue-500 to-indigo-500" />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: SCORE TRENDS & GRAPHS */}
        {activeTab === 'trends' && (
          <div className="space-y-6">
            
            {/* Historical Score Trajectory Graph */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>AWS Scaled Score Trajectory (Passing Threshold: 720)</span>
                </h4>
              </div>

              {stats.recentResults.length > 0 ? (
                <div className="h-44 w-full flex items-end gap-2 pt-6 pb-2 px-2 border-b border-l border-slate-800 relative">
                  {/* Threshold line at 720 score */}
                  <div className="absolute left-0 right-0 top-[28%] border-b border-dashed border-emerald-500/50 flex justify-between text-[10px] text-emerald-400 px-2 pointer-events-none">
                    <span>AWS Pass Threshold (720)</span>
                  </div>

                  {stats.recentResults.slice().reverse().map((res, i) => {
                    const heightPct = Math.max(10, Math.min(100, (res.scaledScore / 1000) * 100));
                    const isPass = res.passed;

                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                        {/* Tooltip */}
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 border border-slate-700 text-slate-100 text-[10px] p-1.5 rounded-lg shadow-xl z-20 whitespace-nowrap pointer-events-none">
                          <span className="font-bold">{res.examCode} Set {res.setId}</span>: {res.scaledScore}/1000 ({res.percentage}%)
                        </div>

                        <div
                          style={{ height: `${heightPct}%` }}
                          className={`w-full rounded-t-lg transition-all ${
                            isPass ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-gradient-to-t from-rose-600 to-amber-500'
                          }`}
                        />
                        <span className="text-[10px] font-mono text-slate-400">Set {res.setId}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic text-center py-8">Complete practice sets to generate your score trend chart.</p>
              )}
            </div>

            {/* Domain Mastery Breakdown Charts */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h4 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span>Domain Mastery Accuracy Across Attempts</span>
              </h4>

              {domainAnalysisList.length > 0 ? (
                <div className="space-y-3">
                  {domainAnalysisList.map((dom, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-300">{dom.name}</span>
                        <span className="font-mono font-bold text-slate-100">{dom.pct}%</span>
                      </div>
                      <Progress
                        value={dom.pct}
                        barClassName={
                          dom.pct >= 80 ? 'from-emerald-500 to-teal-400' : dom.pct >= 65 ? 'from-amber-500 to-orange-400' : 'from-rose-500 to-red-500'
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic text-center py-6">No domain score data accumulated yet.</p>
              )}
            </div>

          </div>
        )}

        {/* TAB 3: STUDY SUGGESTIONS & ACTION ITEMS */}
        {activeTab === 'suggestions' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Smart recommendations based on your historical question domain accuracy:</span>
            </div>

            {weakDomains.length > 0 ? (
              <div className="space-y-3">
                {weakDomains.map((dom, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-100">{dom.name}</span>
                      <Badge variant="danger" className="text-[10px]">
                        Accuracy: {dom.pct}%
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Recommended Focus: Review official AWS documentation and re-attempt practice sets emphasizing {dom.name.split(':')[1] || dom.name}.
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-slate-100 text-sm">Strong Domain Performance!</h5>
                <p className="text-xs text-slate-300">
                  You have achieved high accuracy across evaluated domains. Continue taking full exam simulations to maintain readiness.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: ATTEMPT LOG */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {stats.recentResults.length > 0 ? (
              <div className="space-y-2 max-h-72 overflow-y-auto custom-scrollbar">
                {stats.recentResults.map((res, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-100">{res.examCode} Set {res.setId}</span>
                        <Badge variant={res.passed ? 'success' : 'danger'}>
                          {res.passed ? 'PASSED' : 'FAILED'}
                        </Badge>
                        <Badge variant="outline" className="text-[10px]">
                          {res.mode === 'practice' ? 'Instant Mode' : 'Simulation Mode'}
                        </Badge>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        {res.date} • {res.scoredCorrect}/50 Scored Correct ({res.unscoredCorrect}/15 Beta)
                      </span>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-sm font-extrabold text-amber-400 block">{res.scaledScore} / 1000</span>
                      <span className="text-[11px] text-slate-400">{res.percentage}% Accuracy</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic text-center py-8">No exam attempt logs recorded yet.</p>
            )}
          </div>
        )}

      </div>
    </Modal>
  );
};
