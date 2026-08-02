import React, { useState } from 'react';
import { UserStats, UserProfile } from '../types/exam';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { formatTime } from '../engine/examEngine';
import { EXAM_CATALOG } from '../data/examCatalog';
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
  ChevronRight,
  ArrowLeft,
  Eye,
  ExternalLink
} from 'lucide-react';

export interface AnalyticsViewProps {
  stats: UserStats;
  currentUser: UserProfile | null;
  onHomeClick: () => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  stats,
  currentUser,
  onHomeClick
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'trends' | 'suggestions' | 'history'>('overview');
  const [isAttendedModalOpen, setIsAttendedModalOpen] = useState<boolean>(false);

  const totalTaken = stats.totalExamsTaken;
  const passedCount = stats.passedExamsCount;
  const passRate = totalTaken > 0 ? Math.round((passedCount / totalTaken) * 100) : 0;
  const avgScore = stats.averageScore || 0;

  // Readiness Index (0 - 100%)
  const readinessIndex = totalTaken === 0
    ? 0
    : Math.min(100, Math.round((avgScore / 1000) * 80 + (passRate / 100) * 20));

  const getReadinessBadge = () => {
    if (readinessIndex >= 80) return { text: 'HIGHLY EXAM READY', color: 'bg-emerald-500 text-slate-950', desc: 'Your average score consistently exceeds the AWS passing threshold (720/1000). You are fully prepared to sit for the official AWS certification exam!' };
    if (readinessIndex >= 65) return { text: 'MODERATE READINESS', color: 'bg-amber-500 text-slate-950', desc: 'You are close to official exam readiness. We recommend completing 2-3 more practice sets focusing on your lower-accuracy domains.' };
    return { text: 'PRACTICE NEEDED', color: 'bg-rose-500 text-white', desc: 'Review step-by-step answer explanations and attempt Practice Mode A sets before scheduling your official sitting.' };
  };

  const readiness = getReadinessBadge();

  // Aggregate domain performance across recorded results
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

  const weakDomains = domainAnalysisList.filter(d => d.pct < 75);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onHomeClick}
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Exam Selector</span>
          </button>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-amber-400" />
            <span>Candidate Progress & Performance Dashboard</span>
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Real-time readiness index, score trajectories, domain analytics, and personalized study recommendations.
          </p>
        </div>

        {/* User Card */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-black text-lg shadow">
            {currentUser ? currentUser.name.charAt(0).toUpperCase() : 'G'}
          </div>
          <div>
            <span className="text-sm font-bold text-slate-100 block">
              {currentUser ? currentUser.name : 'Guest Candidate'}
            </span>
            <span className="text-xs text-amber-400 font-mono">
              {currentUser ? `@${currentUser.username}` : 'Practice Profile'}
            </span>
          </div>
        </div>
      </div>

      {/* Tab Selector Bar */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'overview'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          Overview & Readiness Index
        </button>

        <button
          onClick={() => setActiveTab('trends')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'trends'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          Score Trajectory & Graphs
        </button>

        <button
          onClick={() => setActiveTab('suggestions')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'suggestions'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          Study Suggestions ({weakDomains.length})
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'history'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          Attempt History ({stats.recentResults.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          
          {/* Exam Readiness Hero Banner */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border-amber-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">AWS Exam Readiness Index</span>
              <span className={`px-3 py-1 rounded-full text-xs font-black shadow ${readiness.color}`}>
                {readiness.text}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-5xl font-black text-amber-400 font-mono tracking-tight">
                {readinessIndex}%
              </div>
              <div className="flex-1 space-y-2 w-full">
                <Progress value={readinessIndex} barClassName="from-amber-500 via-orange-400 to-emerald-400" />
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {readiness.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              variant="glass"
              className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:border-amber-500/60 hover:bg-slate-900/90 transition-all group relative overflow-hidden"
              onClick={() => setIsAttendedModalOpen(true)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Exams Attended</span>
                  <span className="text-2xl font-black text-slate-100">{totalTaken}</span>
                  <span className="text-[10px] text-amber-400 font-bold block group-hover:underline">
                    Click to view detailed list →
                  </span>
                </div>
              </div>
              <Badge variant="warning" className="text-[10px] uppercase font-bold shrink-0">
                {stats.recentResults.length} Sittings
              </Badge>
            </Card>

            <Card variant="glass" className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Pass Rate</span>
                <span className="text-2xl font-black text-emerald-400">{passRate}%</span>
                <span className="text-[10px] text-slate-400 block">Above 720 threshold</span>
              </div>
            </Card>

            <Card variant="glass" className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Avg Scaled Score</span>
                <span className="text-2xl font-black text-amber-400">{avgScore}</span>
                <span className="text-[10px] text-slate-400 block">On 100-1000 scale</span>
              </div>
            </Card>

            <Card variant="glass" className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 fill-rose-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Active Streak</span>
                <span className="text-2xl font-black text-slate-100">{stats.currentStreakDays} Days</span>
                <span className="text-[10px] text-slate-400 block">Practice consistency</span>
              </div>
            </Card>
          </div>

          {/* Certification Set Completion Progress */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle>Certification Set Mastery Matrix (10 Sets Each)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                    <Code className="w-4 h-4" />
                    <span>AWS Certified Developer – Associate (DVA-C02)</span>
                  </span>
                  <span className="text-slate-300 font-mono">{stats.dvaCompletedSets.length} / 10 Sets Completed</span>
                </div>
                <Progress value={stats.dvaCompletedSets.length} max={10} barClassName="from-amber-500 to-orange-500" />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="flex items-center gap-2 text-blue-400 text-sm font-bold">
                    <Database className="w-4 h-4" />
                    <span>AWS Certified Data Engineer – Associate (DEA-C01)</span>
                  </span>
                  <span className="text-slate-300 font-mono">{stats.deaCompletedSets.length} / 10 Sets Completed</span>
                </div>
                <Progress value={stats.deaCompletedSets.length} max={10} barClassName="from-blue-500 to-indigo-500" />
              </div>

            </CardContent>
          </Card>

        </div>
      )}

      {/* TAB 2: TRENDS & GRAPHS */}
      {activeTab === 'trends' && (
        <div className="space-y-8">
          
          {/* AWS Scaled Score Trajectory Bar Chart */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>AWS Scaled Score Trajectory (100 – 1000 Scale)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {stats.recentResults.length > 0 ? (
                <div className="h-64 w-full flex items-end gap-3 pt-8 pb-4 px-4 border-b border-l border-slate-800 relative">
                  
                  {/* Passing line indicator at 720 */}
                  <div className="absolute left-0 right-0 top-[28%] border-b border-dashed border-emerald-500/60 flex justify-between text-xs text-emerald-400 px-3 pointer-events-none z-10">
                    <span className="bg-slate-950/80 px-2 py-0.5 rounded font-bold">AWS Passing Benchmark (720 / 1000)</span>
                  </div>

                  {stats.recentResults.slice().reverse().map((res, i) => {
                    const heightPct = Math.max(12, Math.min(100, (res.scaledScore / 1000) * 100));
                    const isPass = res.passed;

                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                        {/* Tooltip on hover */}
                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 border border-slate-700 text-slate-100 text-xs p-2 rounded-xl shadow-2xl z-20 whitespace-nowrap pointer-events-none">
                          <span className="font-bold">{res.examCode} Set {res.setId}</span>: {res.scaledScore}/1000 ({res.percentage}%)
                        </div>

                        <div
                          style={{ height: `${heightPct}%` }}
                          className={`w-full rounded-t-xl transition-all ${
                            isPass
                              ? 'bg-gradient-to-t from-emerald-600 via-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/20'
                              : 'bg-gradient-to-t from-rose-600 via-amber-500 to-orange-400 shadow-lg shadow-rose-500/20'
                          }`}
                        />
                        <span className="text-xs font-mono font-bold text-slate-300">Set {res.setId}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-slate-400 italic text-center py-12">
                  Complete practice sets to generate your AWS score trajectory graph.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Domain Performance Bar Breakdown */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-amber-400" />
                <span>Domain Accuracy Breakdown Across All sittings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {domainAnalysisList.length > 0 ? (
                <div className="space-y-4">
                  {domainAnalysisList.map((dom, i) => (
                    <div key={i} className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="font-bold text-slate-200">{dom.name}</span>
                        <span className="font-mono font-black text-slate-100">{dom.pct}%</span>
                      </div>
                      <Progress
                        value={dom.pct}
                        barClassName={
                          dom.pct >= 80
                            ? 'from-emerald-500 to-teal-400'
                            : dom.pct >= 65
                            ? 'from-amber-500 to-orange-400'
                            : 'from-rose-500 to-red-600'
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-400 italic text-center py-12">
                  No domain performance data recorded yet. Start practicing to populate domain analytics!
                </p>
              )}
            </CardContent>
          </Card>

        </div>
      )}

      {/* TAB 3: STUDY SUGGESTIONS */}
      {activeTab === 'suggestions' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-100 block mb-0.5">Personalized Study Recommendations</span>
              <p className="text-xs text-slate-300">
                Our analytics engine continuously evaluates your accuracy per domain to generate targeted practice suggestions.
              </p>
            </div>
          </div>

          {weakDomains.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weakDomains.map((dom, i) => (
                <Card key={i} variant="glass" className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-slate-100">{dom.name}</span>
                    <Badge variant="danger" className="text-xs font-bold">
                      Accuracy: {dom.pct}%
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Accuracy in this domain is currently below 75%. Review official AWS documentation and attempt Practice Mode A sets emphasizing this domain.
                  </p>
                  <Button variant="secondary" size="sm" onClick={onHomeClick} className="gap-2 text-xs">
                    <span>Practice Questions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <Card variant="glass" className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-slate-100 text-lg">Outstanding Domain Performance!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                You have maintained high accuracy across evaluated AWS domains. Keep taking full exam simulations to solidify your readiness for official test center sittings.
              </p>
            </Card>
          )}
        </div>
      )}

      {/* TAB 4: ATTEMPT HISTORY LOG TABLE */}
      {activeTab === 'history' && (
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Detailed Exam Attempt History Log ({stats.recentResults.length})</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            {stats.recentResults.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Exam Code</th>
                      <th className="py-3 px-4">Set ID</th>
                      <th className="py-3 px-4">Mode</th>
                      <th className="py-3 px-4">Scored Correct</th>
                      <th className="py-3 px-4">Beta Correct</th>
                      <th className="py-3 px-4">AWS Scaled Score</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {stats.recentResults.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-3 px-4 text-slate-300">{res.date}</td>
                        <td className="py-3 px-4 font-bold text-amber-400">{res.examCode}</td>
                        <td className="py-3 px-4 text-slate-200">Set {res.setId}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className="text-[10px]">
                            {res.mode === 'practice' ? 'Instant' : 'Simulation'}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-mono">{res.scoredCorrect} / 50</td>
                        <td className="py-3 px-4 font-mono text-slate-400">{res.unscoredCorrect} / 15</td>
                        <td className="py-3 px-4 font-mono font-black text-amber-400 text-sm">
                          {res.scaledScore} / 1000
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={res.passed ? 'success' : 'danger'}>
                            {res.passed ? 'PASSED' : 'FAILED'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic text-center py-12">
                No recorded exam attempt logs yet. Complete a practice set to build your attempt history!
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Attended Exams Details Modal */}
      <Modal
        isOpen={isAttendedModalOpen}
        onClose={() => setIsAttendedModalOpen(false)}
        title={`Attended Exams & Performance Breakdown (${stats.recentResults.length} Total Sittings)`}
        maxWidth="2xl"
        footer={
          <Button variant="secondary" onClick={() => setIsAttendedModalOpen(false)} className="cursor-pointer">
            Close Breakdown
          </Button>
        }
      >
        {stats.recentResults.length > 0 ? (
          <div className="space-y-4">
            {stats.recentResults.map((res, index) => {
              const meta = EXAM_CATALOG[res.examCode];
              const examTitle = meta?.title || res.examCode;

              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
                >
                  {/* Header: Exam Title, Set & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="aws" className="text-[10px] font-black">{res.examCode}</Badge>
                        <Badge variant="outline" className="text-[10px]">Set {res.setId}</Badge>
                        <span className="text-[11px] text-slate-400">{res.date}</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-sm">{examTitle}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant={res.passed ? 'success' : 'danger'} className="px-3 py-1 text-xs font-extrabold">
                        {res.passed ? 'PASSED' : 'NEEDS PRACTICE'}
                      </Badge>
                    </div>
                  </div>

                  {/* Score & Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">AWS Scaled Score</span>
                      <span className={`text-base font-black font-mono ${res.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {res.scaledScore} / 1000
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Scored Questions</span>
                      <span className="text-slate-200 font-bold font-mono">
                        {res.scoredCorrect} / 50 <span className="text-[10px] text-slate-400">({res.percentage}%)</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Unscored Beta</span>
                      <span className="text-indigo-300 font-bold font-mono">
                        {res.unscoredCorrect} / 15
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Spent</span>
                      <span className="text-slate-200 font-bold font-mono">
                        {formatTime(res.timeSpentSeconds)}
                      </span>
                    </div>
                  </div>

                  {/* Mode & Domain Performance Badges */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Exam Mode: <strong className="text-slate-200">{res.mode === 'practice' ? 'Mode A (Instant Feedback)' : 'Mode B (Full Simulation)'}</strong></span>
                    </div>

                    {res.domainScores && res.domainScores.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 block">Domain Accuracy Breakdown:</span>
                        <div className="flex flex-wrap gap-2">
                          {res.domainScores.map((d, dIdx) => (
                            <span
                              key={dIdx}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                                d.percentage >= 80
                                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                                  : d.percentage >= 65
                                  ? 'bg-amber-950/50 border-amber-500/40 text-amber-300'
                                  : 'bg-rose-950/50 border-rose-500/40 text-rose-300'
                              }`}
                            >
                              {d.domainName}: <strong className="font-mono">{d.percentage}%</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
            <h4 className="font-bold text-slate-200 text-base">No Exam Sittings Recorded Yet</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Complete any 65-question practice exam set to record detailed performance logs here.
            </p>
          </div>
        )}
      </Modal>

    </div>
  );
};
