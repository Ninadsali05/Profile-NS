import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-siemens-stone bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-mono font-bold text-lg tracking-tighter flex items-center gap-2">
          <div className="w-4 h-4 bg-siemens-petrol rounded-sm" />
          {"<Hey>"}<span className="text-siemens-petrol">.{"</There>"}</span>
        </div>
        <div className="text-sm text-siemens-dark/40 font-medium">
          © {new Date().getFullYear()} Ninad Sali. Built with help of AI and passion
        </div>
        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-siemens-dark/60">
          <a href="#" className="hover:text-siemens-petrol transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-siemens-petrol transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
