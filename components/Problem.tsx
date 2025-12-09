import React from 'react';
import { EyeOff, Globe, ServerOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Problem: Economic Violence</h2>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-16">
          Globally, <span className="text-white font-bold">99% of domestic violence cases</span> involve financial abuse.
          Abusers control bank accounts and destroy phones to remove proof.
          Athena gives you a private vault and an immutable memory.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl glass border border-white/5 text-left transition-all hover:bg-white/5 group">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <EyeOff className="w-6 h-6 text-athena-purple" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero Trace</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Data vanishes from the main UI instantly. The "Calculator" disguise ensures
              your financial planning remains invisible to prying eyes.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass border border-white/5 text-left transition-all hover:bg-white/5 group">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-athena-green" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Decentralized Power</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Funds are stored on Fraxtal L2, not centralized banks.
              Your assets cannot be frozen, blocked, or accessed without your private keys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};