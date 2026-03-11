import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { topSkills, experiences } from '../../constants';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const HomeView = () => {
  return (
    <div className="pb-20">
      <Hero />

      {/* Top Skills */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 py-8 border-y border-siemens-stone/50">
            {topSkills.map(skill => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-siemens-petrol" />
                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Journey */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold tracking-tighter mb-12 text-center uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience Journey
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-siemens-petrol/20 space-y-16">

              {/* PRESENT EXPERIENCE */}
              <motion.div className="relative pl-12">
                <div
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                  }}
                />

                <div
                  className="p-8 rounded-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-siemens-petrol uppercase mb-2">
                    <Calendar className="w-3 h-3" />
                    {experiences[0].period}
                  </div>

                  <h3
                    className="text-2xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {experiences[0].company}
                  </h3>

                  <p className="text-siemens-petrol font-bold text-sm uppercase mb-4">
                    {experiences[0].role}
                  </p>

                  <div
                    className="flex items-center gap-2 text-sm mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <MapPin className="w-4 h-4" />
                    {experiences[0].location}
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {experiences[0].points.join(' ')}
                  </p>
                </div>

                {/* KEY ACHIEVEMENT — FIXED */}
                <motion.div
                  className="mt-4 p-6 rounded-sm border-l-4 border-siemens-petrol bg-siemens-dark shadow-lg relative overflow-hidden"
                  style={{ color: 'var(--text-on-dark, #f5f5f5)' }}
                >
                  <Award className="absolute -top-2 -right-2 w-16 h-16 opacity-10" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-siemens-petrol" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-siemens-petrol">
                        Key Achievement
                      </span>
                    </div>

                    <p className="text-sm italic leading-relaxed">
                      "Recognized for improving Requirements traceability by 40% through the development of automated dashboards."
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* INTERNSHIP */}
              <motion.div className="relative pl-12">
                <div
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                  }}
                />

                <div
                  className="p-8 rounded-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <p className="text-siemens-petrol font-bold text-sm uppercase mb-4">
                    {experiences[1].role}
                  </p>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {experiences[1].points.join(' ')}
                  </p>
                </div>

                {/* INTERNSHIP HIGHLIGHT — FIXED */}
                <motion.div
                  className="mt-4 p-6 rounded-sm border-l-4 border-siemens-petrol bg-siemens-dark shadow-lg relative overflow-hidden"
                  style={{ color: 'var(--text-on-dark, #f5f5f5)' }}
                >
                  <Award className="absolute -top-2 -right-2 w-16 h-16 opacity-10" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-siemens-petrol" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-siemens-petrol">
                        Internship Highlight
                      </span>
                    </div>

                    <p className="text-sm italic leading-relaxed">
                      "Preparation of automated checklist for material selection depending upon their properties and product requirement."
                    </p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
