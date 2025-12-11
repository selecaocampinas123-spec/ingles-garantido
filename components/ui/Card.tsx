import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-transform hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}
