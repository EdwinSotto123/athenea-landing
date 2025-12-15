import React, { useState } from 'react';
import { Menu, X, Shield, Heart, Coins } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Shield className="w-8 h-8 text-athena-purple transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-athena-purple blur-md opacity-40 animate-pulse"></div>
          </div>
          <span className="text-xl font-bold tracking-wider font-mono">ATHENA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#problem" className="hover:text-white transition-colors">Mission</a>
          <a href="#features" className="hover:text-white transition-colors">Protocol</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Operation</a>
          <a href="#agent" className="hover:text-white transition-colors flex items-center gap-1">
            <Coins className="w-3.5 h-3.5" />
            $ATHENA
          </a>

          {/* Donate Button - Highlighted */}
          <a
            href="#donate"
            className="flex items-center gap-2 bg-gradient-to-r from-athena-purple to-athena-purple/80 hover:from-athena-purple/90 hover:to-athena-purple text-white px-4 py-2 rounded-full transition-all"
          >
            <Heart className="w-4 h-4" />
            Donar
          </a>

          <a href="https://athenea-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full transition-all hover:border-athena-purple/50">
            Access Beta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4">
          <a href="#problem" className="text-lg text-slate-300" onClick={() => setMobileMenuOpen(false)}>Mission</a>
          <a href="#features" className="text-lg text-slate-300" onClick={() => setMobileMenuOpen(false)}>Protocol</a>
          <a href="#how-it-works" className="text-lg text-slate-300" onClick={() => setMobileMenuOpen(false)}>Operation</a>
          <a href="#agent" className="text-lg text-slate-300 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Coins className="w-4 h-4" />
            $ATHENA Token
          </a>

          {/* Donate - Prominent */}
          <a
            href="#donate"
            className="bg-gradient-to-r from-athena-purple to-athena-purple/80 text-white px-6 py-3 rounded-lg w-full font-bold text-center flex items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Heart className="w-5 h-5" />
            Donar a Víctimas
          </a>

          <a href="https://athenea-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white px-6 py-3 rounded-lg w-full font-bold text-center block">
            Access Beta
          </a>
        </div>
      )}
    </nav>
  );
};