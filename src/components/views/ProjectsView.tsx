import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../../constants';
import { Cpu, Database, Settings, Code2, Workflow, Box } from 'lucide-react';

export const ProjectsView = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tighter text-siemens-dark mb-4 uppercase">Project Portfolio</h2>
          <p className="text-siemens-dark/50 max-w-2xl mx-auto">Categorized technical implementations across Mechatronics, PLM, and Automation sectors.</p>
        </motion.div>

        <div className="space-y-16">
          {/* Mechatronics Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Mechatronics Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.mechatronics.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </section>

          {/* PLM Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">PLM Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.plm.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </section>

          {/* Automation Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Automation Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.automation.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

function ProjectCard({ project, index }: { project: any, index: number, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-sm border border-siemens-stone bg-white hover:border-siemens-petrol hover:shadow-xl transition-all overflow-hidden"
    >
      <div className="h-48 overflow-hidden bg-siemens-stone/30 relative">
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/600`} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-siemens-dark/20 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 group-hover:text-siemens-petrol transition-colors">{project.title}</h4>
        <p className="text-sm text-siemens-dark/60 leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 rounded-sm bg-siemens-stone text-[10px] font-bold text-siemens-dark/40 uppercase tracking-widest border border-siemens-stone">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
