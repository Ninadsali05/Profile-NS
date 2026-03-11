import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../../constants';
import { Cpu, Database, Workflow } from 'lucide-react';

export const ProjectsView = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl font-bold tracking-tighter uppercase mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Project Portfolio
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Categorized technical implementations across Mechatronics, PLM, and Automation sectors.
          </p>
        </motion.div>

        <div className="space-y-16">

          {/* Mechatronics */}
          <Section
            title="Mechatronics Projects"
            icon={<Cpu className="w-6 h-6" />}
            projects={projects.mechatronics}
          />

          {/* PLM */}
          <Section
            title="PLM Projects"
            icon={<Database className="w-6 h-6" />}
            projects={projects.plm}
          />

          {/* Automation */}
          <Section
            title="Automation Projects"
            icon={<Workflow className="w-6 h-6" />}
            projects={projects.automation}
          />

        </div>
      </div>
    </div>
  );
};

/* -------------------- Section Wrapper -------------------- */

function Section({
  title,
  icon,
  projects,
}: {
  title: string;
  icon: React.ReactNode;
  projects: any[];
}) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-siemens-petrol text-white rounded-sm">
          {icon}
        </div>
        <h3
          className="text-2xl font-bold uppercase tracking-tighter"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

/* -------------------- Project Card -------------------- */

function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-sm overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4
          className="text-xl font-bold mb-2 transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h4>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors"
              style={{
                backgroundColor: 'var(--card-border)',
                color: 'var(--text-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
