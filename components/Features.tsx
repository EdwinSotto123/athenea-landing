import React from 'react';
import { BrainCircuit, Wallet, FileKey, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-athena-purple" />,
    title: "Strategic Intelligence",
    subtitle: "The Planner",
    description: "Conversational AI that assesses your situation and builds a concrete, step-by-step roadmap tailored to your needs. It calculates costs and predicts timelines.",
    gradient: "from-athena-purple/20 to-transparent"
  },
  {
    icon: <Wallet className="w-8 h-8 text-athena-green" />,
    title: "Invisible Wealth",
    subtitle: "The Vault",
    description: "Save in stablecoins (sFRAX). Earn yield and receive anonymous donations via Angels Pool. Accessed only via secret codes inside a functional calculator interface.",
    gradient: "from-athena-green/20 to-transparent"
  },
  {
    icon: <FileKey className="w-8 h-8 text-blue-400" />,
    title: "Immutable Truth",
    subtitle: "The Locker",
    description: "Store photos, audio, and documents on IPFS & Blockchain. Legally admissible evidence of abuse that creates a permanent record no one can delete.",
    gradient: "from-blue-500/20 to-transparent"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-athena-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-athena-purple tracking-widest uppercase mb-3">Core Protocol</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Three Pillars of Independence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-white/10 transition-colors">
                  {pillar.icon}
                </div>

                <h4 className="text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">{pillar.subtitle}</h4>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {pillar.description}
                </p>

                <div className="flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};