import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
  className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] bg-clip-text text-transparent pb-2"
  style={{
    backgroundImage:
      "linear-gradient(to bottom, var(--app-text), #00a8b0)",
  }}
>
              Hi, I'm <br />
              <span className="italic">Ninad Sali.</span>
            </h1>
            <span className="inline-block px-3 py-1 rounded-sm bg-siemens-petrol/10 text-siemens-petrol text-xs font-bold tracking-widest uppercase mt-4 border-l-2 border-siemens-petrol">
              PLM Teamcentre Professional
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed mx-auto opacity-80"
          >
            Transitioning from Mechatronics Engineering to PLM Development. 
            Specializing in Teamcenter customization, workflow automation, and 
            engineering data management.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a 
              href="/resume.pdf" 
              download="ResumeSection.pdf"
              className="group flex items-center gap-2 px-8 py-4 bg-siemens-petrol text-white rounded-sm hover:opacity-90 transition-all font-bold uppercase tracking-wider text-sm"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" className="p-2 opacity-50 hover:opacity-100 hover:text-siemens-petrol transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:ninad2388@gmail.com" className="p-2 opacity-50 hover:opacity-100 hover:text-siemens-petrol transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
