
import React from 'react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: '🏠' },
    { id: 'about', icon: '👤' },
    { id: 'skills', icon: '⚡' },
    { id: 'portfolio', icon: '📁' },
    { id: 'experience', icon: '💼' },
    { id: 'contact', icon: '✉️' },
  ];

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-20 hidden lg:flex flex-col items-center justify-center glass z-40 border-r border-blue-500/20">
      <div className="flex flex-col gap-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative p-3 rounded-lg transition-all duration-300 group ${
              activeSection === item.id ? 'bg-blue-500 text-white' : 'text-blue-400/50 hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <div className="absolute left-full ml-4 px-2 py-1 glass rounded text-xs font-orbitron opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase tracking-wider">
              {item.id}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
