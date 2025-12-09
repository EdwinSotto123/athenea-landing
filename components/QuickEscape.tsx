import React from 'react';
import { LogOut } from 'lucide-react';

export const QuickEscape: React.FC = () => {
  const handleEscape = () => {
    // Immediate redirect to a benign site
    window.location.replace('https://weather.google.com');
  };

  return (
    <button
      onClick={handleEscape}
      className="fixed bottom-6 right-6 z-[100] bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2 group ring-4 ring-red-900/30"
      aria-label="Quick Exit"
    >
      <span className="hidden group-hover:inline transition-all">EXIT SITE</span>
      <LogOut className="w-5 h-5" />
    </button>
  );
};