import React from 'react';

const steps = [
  {
    num: "01",
    title: "Download & Disguise",
    desc: "Install the app. It appears as a fully functional calculator on your home screen. No notifications. No branding."
  },
  {
    num: "02",
    title: "Consult & Plan",
    desc: "Enter your secret PIN. Chat with Athena AI to assess your needs and create a financial roadmap tailored to your location."
  },
  {
    num: "03",
    title: "Secure & Act",
    desc: "Deposit funds into the yield-bearing vault. Upload evidence to the blockchain locker. Execute SOS withdrawal when you are ready."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">How Athena Works</h2>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-athena-purple/30 flex items-center justify-center text-athena-purple font-mono font-bold group-hover:bg-athena-purple group-hover:text-black transition-all">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-athena-purple/20 via-slate-900/50 to-slate-900"></div>
             
             {/* Abstract UI Representation */}
             <div className="relative z-10 w-64 space-y-4">
                <div className="h-4 w-3/4 bg-slate-700 rounded animate-pulse"></div>
                <div className="h-32 w-full bg-slate-800 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                   <div className="flex justify-between">
                     <div className="w-8 h-8 rounded bg-slate-700"></div>
                     <div className="w-20 h-4 rounded bg-slate-700"></div>
                   </div>
                   <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full w-2/3 bg-athena-green shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-full bg-slate-800 rounded-lg border border-white/5"></div>
                   <div className="h-10 w-1/3 bg-athena-purple rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};