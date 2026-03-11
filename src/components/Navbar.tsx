import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from "./ThemeToggle";

import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
   <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className="fixed top-0 left-0 right-0 z-50 border-b border-siemens-petrol/20"
  style={{
    backgroundColor: "var(--navbar-bg)",
    color: "var(--navbar-text)",
  }}
>
  {/* Top bar */}
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <button
      onClick={() => setActiveTab("home")}
      className="font-mono font-bold text-xl tracking-tighter flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="w-10 h-10 rounded-full border-2 border-siemens-petrol overflow-hidden bg-siemens-stone">
        <img
          src="/Profile-NS/icon.png"
          alt="User Icon"
          className="w-full h-full object-cover"
        />
      </div>
      {"<Hey>"}
      <span className="text-siemens-petrol">.{"</There>"}</span>
    </button>

    {/* Right side */}
    <div className="flex items-center gap-4">

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
        <button
          onClick={() => setActiveTab("home")}
          className={activeTab === "home"
            ? "text-siemens-petrol"
            : "text-siemens-stone/60 hover:opacity-80"}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("about")}
          className={activeTab === "about"
            ? "text-siemens-petrol"
            : "text-siemens-stone/60 hover:opacity-80"}
        >
          About Me
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={activeTab === "projects"
            ? "text-siemens-petrol"
            : "text-siemens-stone/60 hover:opacity-80"}
        >
          Projects
        </button>

        <button
          onClick={() => setActiveTab("contact")}
          className="px-4 py-2 rounded-sm bg-siemens-petrol text-white hover:opacity-90"
        >
          Contact Me
        </button>

        <ThemeToggle />
      </div>

      {/* Mobile controls */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl font-bold text-siemens-petrol"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {mobileOpen && (
    <div
      className="md:hidden border-t border-siemens-petrol/20"
      style={{
        backgroundColor: "var(--navbar-bg)",
        color: "var(--navbar-text)",
      }}
    >
      <div className="flex flex-col px-6 py-4 gap-4 text-sm font-bold uppercase tracking-widest">
        <button onClick={() => { setActiveTab("home"); setMobileOpen(false); }}>Home</button>
        <button onClick={() => { setActiveTab("about"); setMobileOpen(false); }}>About Me</button>
        <button onClick={() => { setActiveTab("projects"); setMobileOpen(false); }}>Projects</button>
        <button
          onClick={() => { setActiveTab("contact"); setMobileOpen(false); }}
          className="mt-2 px-4 py-2 rounded-sm bg-siemens-petrol text-white"
        >
          Contact Me
        </button>
      </div>
    </div>
  )}
</motion.nav>
  );
};
