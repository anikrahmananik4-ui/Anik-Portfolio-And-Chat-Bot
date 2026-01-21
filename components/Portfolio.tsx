
import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24 glass">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-orbitron text-4xl font-black text-white uppercase mb-4">
              Project Matrix
            </h2>
            <p className="text-slate-400 font-orbitron text-sm uppercase tracking-widest">
              Classified Deployments & Explorations
            </p>
          </div>
          <button className="hidden md:block font-orbitron text-blue-400 text-xs border-b border-blue-500 pb-1 hover:text-white transition-all uppercase">
            View All Core Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 border border-blue-900/40 rounded-xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-orbitron text-blue-400 bg-blue-500/10 px-2 py-1 border border-blue-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-500 font-orbitron uppercase">#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
