
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-orbitron text-xl font-bold text-blue-500">ANIK</span>
        </div>
      </div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2 }}
        className="h-1 bg-blue-500 mt-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
      />
      
      <p className="mt-4 font-orbitron text-xs tracking-[0.3em] text-blue-400 uppercase animate-pulse">
        Initializing Neural Link...
      </p>
    </motion.div>
  );
};

export default LoadingScreen;
