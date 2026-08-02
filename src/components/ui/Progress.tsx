import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ProgressProps {
  value: number; // 0 to 100
  max?: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  className,
  barClassName,
  showLabel = false
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className={twMerge(clsx('w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 p-0.5', className))}>
        <div
          className={twMerge(clsx('h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 ease-out shadow-sm shadow-amber-500/30', barClassName))}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
