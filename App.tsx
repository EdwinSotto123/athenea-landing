import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';
import { QuickEscape } from './components/QuickEscape';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-athena-purple selection:text-white relative">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
      
      {/* Ambient Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-athena-purple/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-athena-green/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <TechStack />
      </main>

      <Footer />
      <QuickEscape />
    </div>
  );
}