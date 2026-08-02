import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'outline' | 'interactive';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'glass',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  const variantStyles = {
    default: 'bg-slate-900 border border-slate-800 text-slate-100 shadow-xl',
    glass: 'glass-card text-slate-100 shadow-2xl',
    outline: 'bg-transparent border border-slate-800 text-slate-100',
    interactive: 'glass-card glass-card-hover text-slate-100 cursor-pointer'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => <div className={`p-6 pb-2 ${className}`}>{children}</div>;

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => <h3 className={`text-lg font-extrabold tracking-tight text-slate-100 ${className}`}>{children}</h3>;

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => <p className={`text-xs text-slate-400 font-medium ${className}`}>{children}</p>;

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => <div className={`p-6 pt-2 ${className}`}>{children}</div>;

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => <div className={`p-6 pt-0 border-t border-slate-800/50 flex items-center justify-between ${className}`}>{children}</div>;
