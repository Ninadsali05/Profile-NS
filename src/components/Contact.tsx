import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter text-siemens-dark mb-6">Let's build the <br /><span className="text-siemens-petrol italic text-4xl">Digital Enterprise.</span></h2>
              <p className="text-xl text-siemens-dark/70 leading-relaxed max-w-md">
                Open to opportunities in Teamcenter development, customization, and PLM consultancy.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:ninad2388@gmail.com" className="flex items-center gap-6 p-6 rounded-sm border border-siemens-stone hover:border-siemens-petrol/30 hover:bg-siemens-stone/20 transition-all group">
                <div className="p-4 rounded-sm bg-siemens-stone text-siemens-dark/40 group-hover:text-siemens-petrol group-hover:bg-siemens-petrol/10 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-siemens-dark/40 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-lg font-semibold text-siemens-dark">ninad2388@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919673282388" className="flex items-center gap-6 p-6 rounded-sm border border-siemens-stone hover:border-siemens-petrol/30 hover:bg-siemens-stone/20 transition-all group">
                <div className="p-4 rounded-sm bg-siemens-stone text-siemens-dark/40 group-hover:text-siemens-petrol group-hover:bg-siemens-petrol/10 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-siemens-dark/40 uppercase tracking-widest mb-1">Call Me</div>
                  <div className="text-lg font-semibold text-siemens-dark">+91 9673282388</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-siemens-stone/30 rounded-sm p-8 md:p-12 border border-siemens-stone">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-siemens-dark/40">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-siemens-stone py-3 focus:outline-none focus:border-siemens-petrol transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-siemens-dark/40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-siemens-stone py-3 focus:outline-none focus:border-siemens-petrol transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-siemens-dark/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-siemens-stone py-3 focus:outline-none focus:border-siemens-petrol transition-colors resize-none" placeholder="How can I help you?" />
              </div>
              <button className="w-full py-4 bg-siemens-dark text-white rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-siemens-petrol transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
