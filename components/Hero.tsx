
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 lg:px-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h2 className="font-orbitron text-blue-500 text-lg tracking-[0.5em] mb-4 uppercase">
          Neural Interface Activated
        </h2>
        <h1 className="font-orbitron text-5xl md:text-8xl font-black mb-6 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            SAHADATUR
          </span>
          <span className="block text-white">
            RAHMAN ANIK
          </span>
        </h1>
        <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-8">
          Architecting the digital frontiers of 2035. Creative Engineer, AI Specialist, and Visual Storyteller based in Bangladesh.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 glass border-blue-500/50 text-blue-400 font-orbitron hover:bg-blue-500 hover:text-white transition-all uppercase tracking-widest text-sm">
            Explore Matrix
          </button>
          <button className="px-8 py-4 bg-blue-600 font-orbitron text-white hover:bg-blue-500 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Hire Identity
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-24 lg:translate-x-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-blue-500/50" />
          <span className="font-orbitron text-xs text-blue-500/50 tracking-widest uppercase">
            Scroll to Navigate
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
