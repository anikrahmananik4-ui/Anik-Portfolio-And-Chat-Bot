
import React from 'react';
import { USER_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24 glass">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-orbitron text-4xl font-black text-white uppercase mb-6">
              Establish Link
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Synchronize with the neural network. Direct communication lines are open for collaborative ventures.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass border-blue-500/20 rounded flex items-center justify-center text-blue-400 group-hover:border-blue-500 group-hover:text-blue-300 transition-all">
                  📧
                </div>
                <div>
                  <div className="text-xs font-orbitron text-blue-500/60 uppercase">Secure Mail</div>
                  <div className="text-white font-medium">{USER_DATA.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass border-blue-500/20 rounded flex items-center justify-center text-blue-400 group-hover:border-blue-500 group-hover:text-blue-300 transition-all">
                  📱
                </div>
                <div>
                  <div className="text-xs font-orbitron text-blue-500/60 uppercase">Direct Frequency</div>
                  <div className="text-white font-medium">{USER_DATA.phone}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="glass p-8 border-blue-500/20 space-y-6">
              <div>
                <label className="block font-orbitron text-[10px] text-blue-500/60 uppercase mb-2">IDENTIFICATION NAME</label>
                <input 
                  type="text" 
                  placeholder="Subject name" 
                  className="w-full bg-slate-900 border border-blue-500/20 px-4 py-3 rounded outline-none focus:border-blue-500 text-white font-inter placeholder:text-slate-700"
                />
              </div>
              <div>
                <label className="block font-orbitron text-[10px] text-blue-500/60 uppercase mb-2">CONTACT COORDINATES</label>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-slate-900 border border-blue-500/20 px-4 py-3 rounded outline-none focus:border-blue-500 text-white font-inter placeholder:text-slate-700"
                />
              </div>
              <div>
                <label className="block font-orbitron text-[10px] text-blue-500/60 uppercase mb-2">ENCODED MESSAGE</label>
                <textarea 
                  rows={4}
                  placeholder="Transmit your intent..." 
                  className="w-full bg-slate-900 border border-blue-500/20 px-4 py-3 rounded outline-none focus:border-blue-500 text-white font-inter placeholder:text-slate-700 resize-none"
                />
              </div>
              <button className="w-full py-4 bg-blue-600 font-orbitron text-white text-sm uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500 transition-all">
                Execute Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
