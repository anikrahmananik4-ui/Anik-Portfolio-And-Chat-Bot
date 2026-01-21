
import React from 'react';
import { SKILLS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const SkillCard: React.FC<{ skill: typeof SKILLS[0] }> = ({ skill }) => {
  const data = [
    { value: skill.level },
    { value: 100 - skill.level }
  ];
  
  return (
    <div className="glass p-6 border-blue-500/20 group hover:border-blue-500/50 transition-all">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-orbitron text-sm text-blue-100 uppercase tracking-wider">{skill.name}</h4>
        <span className="text-blue-400 font-orbitron text-xs">{skill.level}%</span>
      </div>
      
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      
      <div className="mt-4 flex gap-2">
        <span className="text-[10px] px-2 py-0.5 border border-blue-500/30 text-blue-400 font-orbitron uppercase">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-orbitron text-4xl font-black text-white uppercase mb-4">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-blue-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
