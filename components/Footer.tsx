import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">Your new life begins with a plan.</h2>
            <p className="text-slate-400">Secure your future today.</p>
          </div>
          <a href="https://athenea-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block">
            Get Athena Now
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 text-sm text-slate-400">
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-athena-purple transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-athena-purple transition-colors">Emergency Guide</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Open Source</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-athena-purple transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-athena-purple transition-colors">Audit Report</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
              <p className="text-xs text-slate-500 mb-2">Athena Project (ADK-TS)</p>
              <p className="text-xs text-slate-600">
                Built for the IQAI & Frax Hackathon.
                <br />Universidad Nacional de Ingeniería (UNI).
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-600 mt-12 pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Athena Freedom Protocol. Zero Knowledge Architecture.
        </div>
      </div>
    </footer>
  );
};