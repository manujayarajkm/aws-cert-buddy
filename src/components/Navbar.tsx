import React, { useState, useRef, useEffect } from 'react';
import { ExamState, UserProfile } from '../types/exam';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { formatTime } from '../engine/examEngine';
import {
  Cloud,
  BarChart3,
  Home,
  LogIn,
  UserPlus,
  LogOut,
  Layers,
  ChevronDown
} from 'lucide-react';

export interface NavbarProps {
  examState: ExamState | null;
  currentUser: UserProfile | null;
  onOpenAnalytics: () => void;
  onOpenAuthModal: (initialRegisterMode?: boolean) => void;
  onLogout: () => void;
  onHomeClick: () => void;
  streakDays?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  examState,
  currentUser,
  onOpenAnalytics,
  onOpenAuthModal,
  onLogout,
  onHomeClick
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isExamActive = examState && examState.isStarted && !examState.isCompleted;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: App Logo & Title */}
        <div
          onClick={onHomeClick}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Cloud className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-slate-100 tracking-tight group-hover:text-amber-400 transition-colors">
                AWS Certification Suite
              </span>
              <Badge variant="warning" className="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5">
                ALL TIERS
              </Badge>
            </div>
            <span className="text-[11px] text-slate-400 font-medium block">
              Official Exam Simulation Portal
            </span>
          </div>
        </div>

        {/* Center: Live Timer if in active exam */}
        {isExamActive && (
          <div className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30">
            <span className="text-xs font-semibold text-slate-400">Time Remaining:</span>
            <span className={`font-mono text-sm font-bold ${
              examState.timeRemaining < 300 ? 'text-rose-400 animate-pulse' : 'text-amber-400'
            }`}>
              {formatTime(examState.timeRemaining)}
            </span>
          </div>
        )}

        {/* Right Navigation & User Auth */}
        <div className="flex items-center gap-3">
          
          {/* Home Nav Link */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onHomeClick}
            className="gap-1.5 text-xs font-bold text-slate-300 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>Exams</span>
          </Button>

          {/* TOP RIGHT: AUTHENTICATION USER PROFILE / LOGIN & SIGN UP BUTTONS */}
          {currentUser ? (
            /* LOGGED IN USER PROFILE WITH DROPDOWN MENU */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-100 transition-colors shadow-lg cursor-pointer"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-black text-xs">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[120px] truncate">{currentUser.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-2 z-50 text-xs space-y-1 animate-in fade-in slide-in-from-top-2">
                  <div className="p-3 border-b border-slate-800">
                    <span className="font-bold text-slate-100 block">{currentUser.name}</span>
                    <span className="text-[11px] text-amber-400 font-mono">@{currentUser.username}</span>
                    <span className="text-[11px] text-slate-400 block truncate">{currentUser.email}</span>
                  </div>

                  {/* Single entry to Performance Dashboard */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onOpenAnalytics();
                    }}
                    className="w-full flex items-center gap-2 p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-amber-400 font-medium transition-colors cursor-pointer"
                  >
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <span>My Performance Dashboard</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full flex items-center gap-2 p-2.5 rounded-xl text-rose-400 hover:bg-rose-500/10 font-bold transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out (Continue as Guest)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* GUEST STATE: SHOW LOGIN AND SIGN UP BUTTONS IN TOP RIGHT */
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onOpenAuthModal(false)}
                className="gap-1.5 text-xs font-bold border-slate-700 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Log In</span>
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenAuthModal(true)}
                className="gap-1.5 text-xs font-bold shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up</span>
              </Button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};
