import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock, Calculator, AlertTriangle, CheckCircle, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isDisguised, setIsDisguised] = useState(true);

  // Toggle the disguise animation automatically to show the "Stealth" feature
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDisguised(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-8 z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-athena-purple/10 border border-athena-purple/20 text-athena-purple text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-athena-purple animate-pulse"></span>
            Stealth Protocol Active
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            Freedom is a Plan.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-athena-purple to-athena-green opacity-90">
              Not a Dream.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Athena is an autonomous AI agent designed to empower victims of domestic violence through financial sovereignty.
            Secure. Anonymous. Untraceable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://athenea-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 inline-block text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-athena-purple via-white to-athena-green opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="flex items-center gap-2">
                Download Beta <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <button className="px-8 py-4 bg-transparent border border-white/10 text-slate-300 rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
              <Lock className="w-4 h-4 text-athena-green" />
              View Whitepaper
            </button>
          </div>
        </div>

        {/* Visual Content: Phone Mockup */}
        <div className="flex justify-center items-center order-1 lg:order-2 perspective-1000">
          <div className="relative w-[300px] h-[600px] bg-black border-4 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden animate-float">

            {/* Screen Content */}
            <div className="absolute inset-0 overflow-hidden bg-slate-900 transition-opacity duration-700">

              {/* LAYOUT A: Calculator (Disguise) */}
              <div
                className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out transform ${isDisguised ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
              >
                <div className="h-1/3 bg-slate-800 flex items-end justify-end p-6">
                  <span className="text-5xl font-light text-white">1,999</span>
                </div>
                <div className="flex-1 bg-slate-900 p-4 grid grid-cols-4 gap-4">
                  {['AC', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((key, i) => (
                    <div
                      key={key}
                      className={`rounded-full flex items-center justify-center text-xl font-medium
                        ${key === '=' ? 'bg-orange-500 text-white col-span-2 aspect-auto rounded-2xl' :
                          ['÷', '×', '-', '+'].includes(key) ? 'bg-orange-500 text-white aspect-square' :
                            ['AC', '±', '%'].includes(key) ? 'bg-slate-400 text-black aspect-square' :
                              'bg-slate-700 text-white aspect-square'}
                      `}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              </div>

              {/* LAYOUT B: Athena Dashboard (Reality) */}
              <div
                className={`absolute inset-0 flex flex-col bg-black transition-all duration-700 ease-in-out transform ${!isDisguised ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                  }`}
              >
                {/* Header */}
                <div className="p-6 pt-12 flex justify-between items-center bg-gradient-to-b from-athena-purple/20 to-transparent">
                  <div>
                    <h3 className="text-athena-purple font-mono text-sm">ATHENA AGENT</h3>
                    <p className="text-white font-bold text-xl">Hello, Traveler</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <div className="w-2 h-2 bg-athena-green rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="mx-6 p-6 rounded-2xl glass border-l-4 border-l-athena-green relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-400 text-sm">Freedom Fund (sFRAX)</p>
                  <h2 className="text-3xl font-bold text-white mt-1">$2,450.00</h2>
                  <div className="flex items-center gap-2 mt-2 text-athena-green text-xs font-mono">
                    <CheckCircle className="w-3 h-3" /> Yield Active: 4.5% APY
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-full bg-athena-purple/20 flex items-center justify-center text-athena-purple">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">Evidence Locker</span>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-full bg-athena-green/20 flex items-center justify-center text-athena-green">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">Panic Mode</span>
                  </div>
                </div>

                {/* Chat Snippet */}
                <div className="mx-6 mt-auto mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-400 mb-2 font-mono">ATHENA AI:</p>
                  <p className="text-sm text-slate-200">
                    Based on your input, I suggest saving $15/day to reach your goal by December.
                  </p>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none opacity-30"></div>
            </div>
          </div>

          {/* Floor Reflection */}
          <div className="absolute -bottom-16 w-[300px] h-[40px] bg-black/50 blur-xl rounded-[100%] scale-x-125 z-[-1]"></div>
        </div>

      </div>
    </section>
  );
};