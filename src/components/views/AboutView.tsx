import React from 'react';
import { motion } from 'motion/react';
import { education, certifications, skillGroups } from '../../constants';
import { GraduationCap, Award, CheckCircle2, Layers, Cpu, Settings, Workflow } from 'lucide-react';

export const AboutView = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'PLM Core': return <Cpu className="w-5 h-5" />;
      case 'Engineering & CAD': return <Settings className="w-5 h-5" />;
      case 'Other Skills': return <Workflow className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 space-y-24">
      <div className="max-w-7xl mx-auto">
        {/* Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-siemens-dark mb-8 uppercase">About Me</h2>
          <p className="text-xl text-siemens-dark/70 leading-relaxed italic">
            "Aspiring PLM professional with 3+ years in automotive product development and engineering lifecycle management. 
            Expertise in BMIDE customization, ITK development, and workflow automation, along with CAD-PLM integration. 
            Experienced in EBOM/MBOM management and engineering change processes, enhancing data traceability and 
            optimizing digital product lifecycle workflows."
          </p>
        </motion.div>

        {/* Education & Certifications - Refined Editorial Style */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm border border-siemens-stone bg-white shadow-sm relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-siemens-petrol/5 rounded-full -mr-16 -mt-16" />
            
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm shadow-lg shadow-siemens-petrol/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-siemens-dark">Education</h3>
              </div>
            </div>
            
            <div className="space-y-10 relative z-10">
              {education.map((edu, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-lg font-bold text-siemens-dark group-hover:text-siemens-petrol transition-colors">{edu.school}</h4>
                    <span className="text-[10px] font-bold text-siemens-dark/40 uppercase tracking-widest">{edu.period}</span>
                  </div>
                  <p className="text-siemens-petrol font-bold text-sm mb-3">{edu.degree}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.details.split(' | ').map((detail, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-medium px-2 py-0.5 bg-siemens-stone text-siemens-dark/60 rounded-sm">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm border border-siemens-stone bg-white shadow-sm relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-siemens-petrol/5 rounded-full -mr-16 -mt-16" />

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm shadow-lg shadow-siemens-petrol/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-siemens-dark">Certifications</h3>
              </div>
            </div>
            
            <div className="grid gap-3 relative z-10">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-siemens-stone/30 rounded-sm border border-transparent hover:border-siemens-petrol/20 hover:bg-white transition-all group">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-siemens-petrol group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-siemens-dark/80">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Elaborate Skills */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Layers className="w-8 h-8 text-siemens-petrol" />
              <h2 className="text-3xl font-bold tracking-tighter uppercase">Expertise Sectors</h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-siemens-stone/30 ml-8" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-sm bg-siemens-dark text-white border border-white/5 shadow-2xl overflow-hidden group hover:border-siemens-petrol transition-all duration-500"
              >
                {/* Decorative Background Element */}
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  {React.cloneElement(getIcon(group.category) as React.ReactElement, { className: "w-32 h-32" })}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-siemens-petrol/20 text-siemens-petrol rounded-sm">
                      {getIcon(group.category)}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-siemens-petrol">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 bg-white/5 text-xs font-bold text-siemens-stone/80 rounded-sm border border-white/5 hover:border-siemens-petrol/50 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-siemens-petrol group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
