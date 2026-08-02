import React from 'react';
import { Heart, ExternalLink, Cloud } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-300">AWS Certification Suite</span>
          <span className="text-slate-600">•</span>
          <span>Official Exam Simulation Portal</span>
        </div>

        {/* Center/Right: "Made with ❤️ from Manu Jayaraj" */}
        <div className="flex items-center gap-1.5 font-medium text-slate-300">
          <span>Made with</span>
          <span className="inline-block animate-pulse text-rose-500 hover:scale-125 transition-transform duration-300">
            ❤️
          </span>
          <span>from</span>
          <a
            href="https://github.com/manujayarajkm/aws-cert-buddy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors group"
          >
            <span>Manu Jayaraj</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
    </footer>
  );
};
