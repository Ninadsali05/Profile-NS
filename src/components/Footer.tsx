import React from 'react';

export const Footer = () => {
  return (
    <footer
      className="py-12 px-6 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--app-bg)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo / Signature */}
        <div
          className="font-mono font-bold text-lg tracking-tighter flex items-center gap-2"
          style={{ color: 'var(--text-primary)' }}
        >
          <div className="w-4 h-4 bg-siemens-petrol rounded-sm" />
          {"<Hey>"}
          <span className="text-siemens-petrol">.{ "</There>" }</span>
        </div>

        {/* Copyright */}
        <div
          className="text-sm font-medium text-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          © {new Date().getFullYear()} Ninad Sali. Built with help of AI and passion
        </div>

        {/* Social Links */}
        <div
          className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest"
          style={{ color: 'var(--text-secondary)' }}
        >
          <a
            href="#"
            className="transition-colors hover:text-siemens-petrol"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="transition-colors hover:text-siemens-petrol"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
