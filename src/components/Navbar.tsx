import React from 'react';
import { motion } from 'motion/react';
import icon from './icon.png';

import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-siemens-dark text-white border-b border-siemens-petrol/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => setActiveTab('home')}
          className="font-mono font-bold text-xl tracking-tighter flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full border-2 border-siemens-petrol overflow-hidden bg-siemens-stone">
            <img 
              src={icon} 
              alt="User Icon" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {"<Hey>"}<span className="text-siemens-petrol">.{"</There>"}</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <button 
            onClick={() => setActiveTab('home')}
            className={`transition-colors ${activeTab === 'home' ? 'text-siemens-petrol' : 'text-siemens-stone/60 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`transition-colors ${activeTab === 'about' ? 'text-siemens-petrol' : 'text-siemens-stone/60 hover:text-white'}`}
          >
            About Me
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`transition-colors ${activeTab === 'projects' ? 'text-siemens-petrol' : 'text-siemens-stone/60 hover:text-white'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 rounded-sm transition-all ${activeTab === 'contact' ? 'bg-white text-siemens-dark' : 'bg-siemens-petrol text-white hover:bg-white hover:text-siemens-dark'}`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
