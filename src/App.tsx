import React, { useState, useEffect, useRef } from 'react';
import { ExamCode, ExamMode, ExamState, ExamResult, UserProfile, UserStats } from './types/exam';
import { loadQuestionsForSet } from './engine/questionLoader';
import { evaluateExam } from './engine/examEngine';
import { getUserStats, saveExamResult } from './engine/storage';
import { Navbar } from './components/Navbar';
import { ExamSelector } from './components/ExamSelector';
import { ExamView } from './components/ExamView';
import { ResultsView } from './components/ResultsView';
import { AnalyticsView } from './components/AnalyticsView';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'selector' | 'exam' | 'results' | 'analytics'>('selector');
  const [examState, setExamState] = useState<ExamState | null>(null);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [userStats, setUserStats] = useState<UserStats>(getUserStats());
  
  // User Authentication State (Null = Guest User)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('aws_exam_user');
    return saved ? JSON.parse(saved) : null; // Guest by default
  });

  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [authInitialRegisterMode, setAuthInitialRegisterMode] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  // Sync user dashboard stats from API server on mount / user change
  const fetchUserBackendDashboard = async (userId: number) => {
    try {
      const res = await fetch(`http://localhost:4000/api/users/${userId}/dashboard`);
      if (res.ok) {
        const data = await res.json();
        if (data.stats) {
          setUserStats(data.stats);
        }
      }
    } catch (err) {
      console.log('Backend API offline, using local storage stats:', err);
    }
  };

  useEffect(() => {
    if (currentUser?.id) {
      fetchUserBackendDashboard(currentUser.id);
    } else {
      setUserStats(getUserStats());
    }
  }, [currentUser?.id]);

  // Open Auth Modal
  const handleOpenAuthModal = (isRegisterMode: boolean = false) => {
    setAuthInitialRegisterMode(isRegisterMode);
    setIsAuthOpen(true);
  };

  // Login / Register Success
  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('aws_exam_user', JSON.stringify(user));
    fetchUserBackendDashboard(user.id);
  };

  // Log Out (Transition back to Guest user)
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('aws_exam_user');
    setUserStats(getUserStats());
  };

  // Start Exam Set
  const handleStartExam = (examCode: ExamCode, setId: number, mode: ExamMode) => {
    // Automatically scramble questions and options on every attempt
    const questions = loadQuestionsForSet(examCode, setId, true);

    if (questions.length === 0) {
      alert(`No questions found for ${examCode} Set ${setId}`);
      return;
    }

    // Official 130 minutes limit for 65 questions
    const totalDurationSeconds = 130 * 60;

    const initialExamState: ExamState = {
      examCode,
      setId,
      mode,
      questions,
      currentIndex: 0,
      userAnswers: {},
      flagged: {},
      submittedAnswers: {},
      timeRemaining: totalDurationSeconds,
      elapsedSeconds: 0,
      isStarted: true,
      isCompleted: false,
      startTime: Date.now()
    };

    setExamState(initialExamState);
    setExamResult(null);
    setCurrentView('exam');
  };

  // Timer interval tick
  useEffect(() => {
    if (currentView === 'exam' && examState && examState.isStarted && !examState.isCompleted) {
      timerRef.current = window.setInterval(() => {
        setExamState(prev => {
          if (!prev) return null;
          if (prev.timeRemaining <= 1) {
            handleFinishExam();
            return { ...prev, timeRemaining: 0 };
          }
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
            elapsedSeconds: prev.elapsedSeconds + 1
          };
        });
      }, 1000);
    } else {
      if (timerRef.current) window.clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [currentView, examState?.isStarted, examState?.isCompleted]);

  // Option select handler
  const handleSelectOption = (questionId: string, optionId: string, isMultiple: boolean) => {
    if (!examState) return;

    setExamState(prev => {
      if (!prev) return null;
      const currentSelected = prev.userAnswers[questionId] || [];

      let updatedSelected: string[];
      if (isMultiple) {
        if (currentSelected.includes(optionId)) {
          updatedSelected = currentSelected.filter(id => id !== optionId);
        } else {
          updatedSelected = [...currentSelected, optionId];
        }
      } else {
        updatedSelected = [optionId];
      }

      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionId]: updatedSelected
        }
      };
    });
  };

  // Mode A submit check answer
  const handleSubmitAnswerModeA = (questionId: string) => {
    if (!examState) return;
    setExamState(prev => {
      if (!prev) return null;
      return {
        ...prev,
        submittedAnswers: {
          ...prev.submittedAnswers,
          [questionId]: true
        }
      };
    });
  };

  // Flag question for review
  const handleToggleFlag = (questionId: string) => {
    if (!examState) return;
    setExamState(prev => {
      if (!prev) return null;
      return {
        ...prev,
        flagged: {
          ...prev.flagged,
          [questionId]: !prev.flagged[questionId]
        }
      };
    });
  };

  // Navigation handlers
  const handleNextQuestion = () => {
    if (!examState) return;
    if (examState.currentIndex >= examState.questions.length - 1) {
      handleFinishExam();
    } else {
      setExamState(prev => prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null);
    }
  };

  const handlePrevQuestion = () => {
    if (!examState) return;
    if (examState.currentIndex > 0) {
      setExamState(prev => prev ? { ...prev, currentIndex: prev.currentIndex - 1 } : null);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (!examState) return;
    if (index >= 0 && index < examState.questions.length) {
      setExamState(prev => prev ? { ...prev, currentIndex: index } : null);
    }
  };

  // Finish exam evaluation
  const handleFinishExam = async () => {
    if (!examState) return;

    if (timerRef.current) window.clearInterval(timerRef.current);

    const result = evaluateExam(
      examState.examCode,
      examState.setId,
      examState.mode,
      examState.questions,
      examState.userAnswers,
      examState.elapsedSeconds
    );

    // Local save
    const updatedStats = saveExamResult(result);
    setUserStats(updatedStats);

    // Save to backend database if logged in
    if (currentUser?.id) {
      try {
        await fetch(`http://localhost:4000/api/users/${currentUser.id}/results`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(result)
        });
        fetchUserBackendDashboard(currentUser.id);
      } catch (err) {
        console.log('Error saving result to backend:', err);
      }
    }

    setExamResult(result);
    setExamState(prev => prev ? { ...prev, isCompleted: true } : null);
    setCurrentView('results');
  };

  // Retake set handler
  const handleRetakeExam = () => {
    if (examState) {
      handleStartExam(examState.examCode, examState.setId, examState.mode);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground custom-scrollbar">
      
      {/* Top Navbar */}
      <Navbar
        examState={examState}
        currentUser={currentUser}
        onOpenAnalytics={() => setCurrentView('analytics')}
        onOpenAuthModal={handleOpenAuthModal}
        onLogout={handleLogout}
        onHomeClick={() => setCurrentView('selector')}
        streakDays={userStats.currentStreakDays}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'selector' && (
          <ExamSelector
            onStartExam={handleStartExam}
            dvaCompletedSets={userStats.dvaCompletedSets}
            deaCompletedSets={userStats.deaCompletedSets}
          />
        )}

        {currentView === 'exam' && examState && (
          <ExamView
            examState={examState}
            onSelectOption={handleSelectOption}
            onSubmitAnswerModeA={handleSubmitAnswerModeA}
            onToggleFlag={handleToggleFlag}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onJumpToQuestion={handleJumpToQuestion}
            onFinishExam={handleFinishExam}
          />
        )}

        {currentView === 'results' && examResult && examState && (
          <ResultsView
            result={examResult}
            questions={examState.questions}
            userAnswers={examState.userAnswers}
            onRetake={handleRetakeExam}
            onHomeClick={() => setCurrentView('selector')}
          />
        )}

        {currentView === 'analytics' && (
          <AnalyticsView
            stats={userStats}
            currentUser={currentUser}
            onHomeClick={() => setCurrentView('selector')}
          />
        )}
      </main>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
        initialRegisterMode={authInitialRegisterMode}
      />

      {/* Custom Animated Footer */}
      <Footer />

    </div>
  );
};

export default App;
