
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-3xl font-black text-white uppercase mb-12 text-center">
          Career Trajectory
        </h2>
        
        <div className="relative space-y-12">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 opacity-30 -translate-x-1/2 hidden lg:block" />
          
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className={`glass p-8 border-blue-500/20 hover:border-blue-500/40 transition-all ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <span className="font-orbitron text-blue-400 text-xs mb-2 block">{exp.period}</span>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-blue-200 font-medium mb-4">{exp.company}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
              
              <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 hidden lg:block" />
              
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
