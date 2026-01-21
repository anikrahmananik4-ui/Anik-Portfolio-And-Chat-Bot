
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24 glass">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-white/10 aspect-square">
              <img 
                src="https://picsum.photos/800/800?seed=anik" 
                alt="Sahadatur Rahman Anik" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-60 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 font-orbitron text-xs text-blue-400 tracking-widest bg-slate-950/80 p-2 border border-blue-500/30">
                USER_ID: SR_ANIK_01
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h3 className="font-orbitron text-3xl font-bold mb-6 text-white uppercase flex items-center gap-4">
              <span className="w-8 h-[2px] bg-blue-500" />
              The Bio Archive
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I am Sahadatur Rahman Anik, a creative visionary exploring the intersection of human consciousness and artificial intelligence. My work focuses on building seamless interfaces that define the "Neural Age".
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass border-blue-500/20">
                <div className="text-blue-400 font-orbitron text-xs mb-1">NATIONALITY</div>
                <div className="text-white font-medium">Bangladesh</div>
              </div>
              <div className="p-4 glass border-blue-500/20">
                <div className="text-blue-400 font-orbitron text-xs mb-1">LOCATION</div>
                <div className="text-white font-medium">Dhaka City Hub</div>
              </div>
              <div className="p-4 glass border-blue-500/20">
                <div className="text-blue-400 font-orbitron text-xs mb-1">DNA TYPE</div>
                <div className="text-white font-medium">Synthesized-Creative</div>
              </div>
              <div className="p-4 glass border-blue-500/20">
                <div className="text-blue-400 font-orbitron text-xs mb-1">STATUS</div>
                <div className="text-white font-medium">Online / Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
