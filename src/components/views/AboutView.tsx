import React from 'react';
import { motion } from 'motion/react';
import { education, certifications, skillGroups } from '../../constants';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Layers,
  Cpu,
  Settings,
  Workflow,
} from 'lucide-react';

export const AboutView = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'PLM Core':
        return <Cpu className="w-5 h-5" />;
      case 'Engineering & CAD':
        return <Settings className="w-5 h-5" />;
      case 'Other Skills':
        return <Workflow className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 space-y-24">
      <div className="max-w-7xl mx-auto">

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2
            className="text-4xl font-bold tracking-tighter mb-8 uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            About Me
          </h2>

          <p
            className="text-xl leading-relaxed italic"
            style={{ color: 'var(--text-secondary)' }}
          >
            "Aspiring PLM professional with 3+ years in automotive product
            development and engineering lifecycle management. Expertise in BMIDE
            customization, ITK development, and workflow automation, along with
            CAD-PLM integration. Experienced in EBOM/MBOM management and
            engineering change processes, enhancing data traceability and
            optimizing digital product lifecycle workflows."
          </p>
        </motion.div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm relative overflow-hidden"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-siemens-petrol/5 rounded-full -mr-16 -mt-16" />

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3
                className="text-2xl font-bold uppercase tracking-tighter"
                style={{ color: 'var(--text-primary)' }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-10 relative z-10">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <h4
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {edu.school}
                    </h4>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-siemens-petrol font-bold text-sm mb-3">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.details.split(' | ').map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: 'var(--card-bg)',
                          border: '1px solid var(--card-border)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm relative overflow-hidden"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-siemens-petrol/5 rounded-full -mr-16 -mt-16" />

            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 bg-siemens-petrol text-white rounded-sm shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <h3
                className="text-2xl font-bold uppercase tracking-tighter"
                style={{ color: 'var(--text-primary)' }}
              >
                Certifications
              </h3>
            </div>

            <div className="grid gap-3 relative z-10">
              {certifications.map((cert, idx) => (
                <div
  key={idx}
  className="flex items-center gap-4 p-4 rounded-sm transition-all duration-300 ease-in-out"
  style={{
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--card-border)',
    boxShadow: 'var(--card-shadow)',
    transitionProperty: 'background-color, border-color, box-shadow, color',
  }}
>
                  <div className="w-8 h-8 rounded-full bg-siemens-petrol text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* EXPERTISE SECTORS */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <Layers className="w-8 h-8 text-siemens-petrol" />
            <h2
              className="text-3xl font-bold tracking-tighter uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              Expertise Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-sm bg-siemens-dark border border-white/5 shadow-2xl overflow-hidden"
                style={{ color: 'var(--text-on-dark, #f5f5f5)' }}
              >
                <div className="absolute -right-4 -top-4 opacity-5">
                  {React.cloneElement(getIcon(group.category) as React.ReactElement, {
                    className: 'w-32 h-32',
                  })}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-siemens-petrol/20 text-siemens-petrol rounded-sm">
                      {getIcon(group.category)}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-siemens-petrol">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-bold rounded-sm border border-white/10"
                        style={{ color: 'var(--text-on-dark, #e5e7eb)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
