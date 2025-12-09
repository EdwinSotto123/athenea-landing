import React from 'react';
import { Cloud, Database, Cpu, HardDrive } from 'lucide-react';

const techs = [
  { name: 'Google Cloud / Vertex AI', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Fraxtal L2', icon: <Database className="w-6 h-6" /> },
  { name: 'IQAI ATP & ADK', icon: <Cpu className="w-6 h-6" /> },
  { name: 'IPFS Storage', icon: <HardDrive className="w-6 h-6" /> },
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 font-mono text-sm mb-8 uppercase tracking-widest">Powered by Secure Infrastructure</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white cursor-default group">
              <span className="group-hover:text-athena-purple transition-colors">{tech.icon}</span>
              <span className="font-bold text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};