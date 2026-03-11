import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { topSkills, experiences, achievements } from '../../constants';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const HomeView = () => {
  return (
    <div className="pb-20">
      <Hero />
      
      {/* Top Skills Bar */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-y border-siemens-stone/50">
            {topSkills.map((skill, idx) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-siemens-petrol" />
                <span
  className="text-sm font-bold uppercase tracking-widest"
  style={{ color: "var(--text-secondary)" }}
>{skill}</span>
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
  style={{ color: "var(--text-primary)" }}
>Experience Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-siemens-petrol/20 ml-4 md:ml-0 space-y-16">
              
              {/* Present Experience Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div
  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
  style={{
    backgroundColor: "var(--card-bg)",
    borderColor: "var(--card-border)",
  }}
>
                  <div className="w-1.5 h-1.5 rounded-full bg-siemens-petrol animate-pulse" />
                </div>

                <div
  className="p-8 rounded-sm group transition-colors duration-300"
  style={{
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--card-border)",
    boxShadow: "var(--card-shadow)",
  }}
>
                  <div className="flex items-center gap-2 text-xs font-bold text-siemens-petrol uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" />
                    {experiences[0].period}
                  </div>
                  <h3
  className="text-2xl font-bold mb-1"
  style={{ color: "var(--text-primary)" }}
>
                  {experiences[0].company}</h3>
                  <p className="text-siemens-petrol font-bold text-sm uppercase tracking-wider mb-4">{experiences[0].role}</p>
                  <div
  className="flex items-center gap-2 text-sm mb-6"
  style={{ color: "var(--text-secondary)" }}
>
                    <MapPin className="w-4 h-4" />
                    {experiences[0].location}
                  </div>
                  <p
  className="text-sm leading-relaxed"
  style={{ color: "var(--text-secondary)" }}
>
                    {experiences[0].points.join(' ')}
                  </p>
                </div>

                {/* Present Achievement Block */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mt-4 p-6 bg-siemens-dark text-white rounded-sm border-l-4 border-siemens-petrol shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-16 h-16" />
                  </div>
                  <div className="relative z-10 pr-12">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-siemens-petrol" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-siemens-petrol">Key Achievement</span>
                    </div>
                    <p className="text-sm italic text-siemens-stone/90 leading-relaxed">
                      "Recognized for improving Requirements traceability by 40% through the development of automated dashboards."
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Internship Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Dot for Internship */}
                <div
  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 flex items-center justify-center"
  style={{
    backgroundColor: "var(--card-bg)",
    borderColor: "var(--card-border)",
  }}
>
                  <div className="w-1.5 h-1.5 rounded-full bg-siemens-petrol" />
                </div>

              <div
  className="p-8 rounded-sm group transition-colors duration-300"
  style={{
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--card-border)",
    boxShadow: "var(--card-shadow)",
  }}
>
                  <p className="text-siemens-petrol font-bold text-sm uppercase tracking-wider mb-4">{experiences[1].role}</p>
                  <p
  className="text-sm leading-relaxed"
  style={{ color: "var(--text-secondary)" }}
>
                    {experiences[1].points.join(' ')}
                  </p>
                </div>

                {/* Internship Achievement Block */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mt-4 p-6 bg-siemens-dark text-white rounded-sm border-l-4 border-siemens-petrol shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-16 h-16" />
                  </div>
                  <div className="relative z-10 pr-12">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-siemens-petrol" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-siemens-petrol">Internship Highlight</span>
                    </div>
                    <p
  className="text-sm leading-relaxed"
  style={{ color: "var(--text-secondary)" }}
>
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
