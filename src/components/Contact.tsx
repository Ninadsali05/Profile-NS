import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--app-bg)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div className="space-y-12">
            <div>
              <h2
                className="text-5xl font-bold tracking-tighter mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Let's build the <br />
                <span className="text-siemens-petrol italic text-4xl">
                  Digital Enterprise.
                </span>
              </h2>

              <p
                className="text-xl leading-relaxed max-w-md"
                style={{ color: 'var(--text-secondary)' }}
              >
                Open to opportunities in Teamcenter development, customization,
                and PLM consultancy.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-6">

              {/* EMAIL CARD */}
              <a
                href="mailto:ninad2388@gmail.com"
                className="flex items-center gap-6 p-6 rounded-sm transition-all duration-300 group"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="p-4 rounded-sm bg-siemens-petrol/10 text-siemens-petrol transition-all">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Email Me
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    ninad2388@gmail.com
                  </div>
                </div>
              </a>

              {/* PHONE CARD */}
              <a
                href="tel:+919673282388"
                className="flex items-center gap-6 p-6 rounded-sm transition-all duration-300 group"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="p-4 rounded-sm bg-siemens-petrol/10 text-siemens-petrol transition-all">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Call Me
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    +91 9673282388
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm p-8 md:p-12 transition-colors duration-300"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors"
                    style={{
                      color: 'var(--text-primary)',
                      borderColor: 'var(--card-border)',
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors"
                    style={{
                      color: 'var(--text-primary)',
                      borderColor: 'var(--card-border)',
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b py-3 resize-none focus:outline-none transition-colors"
                  style={{
                    color: 'var(--text-primary)',
                    borderColor: 'var(--card-border)',
                  }}
                />
              </div>

              <button
                className="w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                }}
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
