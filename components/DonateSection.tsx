import React from 'react';
import { Heart, ExternalLink, Users, Shield, Sparkles } from 'lucide-react';

export const DonateSection: React.FC = () => {
    // URL de donación - CAMBIAR POR LA URL REAL
    const donationUrl = "https://athenea-nine.vercel.app/donate";

    return (
        <section id="donate" className="py-24 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-athena-purple/5 to-black" />

            {/* Animated hearts background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-athena-purple/10 animate-float"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.5}s`,
                            fontSize: `${2 + (i % 3)}rem`
                        }}
                    >
                        💜
                    </div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Main card */}
                <div className="bg-gradient-to-br from-slate-900/90 to-athena-purple/10 backdrop-blur-xl rounded-3xl border border-athena-purple/30 p-8 md:p-12 shadow-2xl shadow-athena-purple/20">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-athena-purple/20 border border-athena-purple/30 mb-6">
                            <Heart className="w-8 h-8 text-athena-purple" fill="currentColor" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Dona a las <span className="text-athena-purple">Víctimas</span>
                        </h2>

                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Tu donación ayuda a mujeres en situación de violencia a construir su camino hacia la libertad.
                            Cada aporte se convierte en pasajes, refugio, documentos legales y una nueva vida.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-black/30 rounded-2xl p-6 border border-white/5 text-center">
                            <Users className="w-8 h-8 text-athena-purple mx-auto mb-3" />
                            <p className="text-3xl font-bold text-white mb-1">100%</p>
                            <p className="text-slate-400 text-sm">Va directamente a las víctimas</p>
                        </div>
                        <div className="bg-black/30 rounded-2xl p-6 border border-white/5 text-center">
                            <Shield className="w-8 h-8 text-athena-green mx-auto mb-3" />
                            <p className="text-3xl font-bold text-white mb-1">On-Chain</p>
                            <p className="text-slate-400 text-sm">Transparencia total en blockchain</p>
                        </div>
                        <div className="bg-black/30 rounded-2xl p-6 border border-white/5 text-center">
                            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-white mb-1">4.5% APY</p>
                            <p className="text-slate-400 text-sm">Fondos generan yield mientras esperan</p>
                        </div>
                    </div>

                    {/* Impact examples */}
                    <div className="bg-black/20 rounded-2xl p-6 mb-10 border border-white/5">
                        <p className="text-center text-slate-400 text-sm uppercase tracking-wider mb-4">Tu donación puede cubrir:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { amount: "$30", desc: "Pasaje a lugar seguro" },
                                { amount: "$100", desc: "Alimentos para una semana" },
                                { amount: "$200", desc: "Trámites legales" },
                                { amount: "$500", desc: "Primer mes de alquiler" }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-800/50 rounded-xl px-4 py-3 border border-white/5">
                                    <span className="text-athena-purple font-bold">{item.amount}</span>
                                    <span className="text-slate-300 ml-2">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <a
                            href={donationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-athena-purple via-athena-purple/90 to-athena-purple/80 hover:from-athena-purple/90 hover:via-athena-purple hover:to-athena-purple text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-athena-purple/30 hover:shadow-athena-purple/50 hover:scale-105 active:scale-95 text-lg group"
                        >
                            <Heart className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" />
                            Donar Ahora
                            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>

                        <p className="mt-4 text-slate-500 text-sm">
                            Aceptamos ETH, USDC, FRAX y más criptomonedas
                        </p>
                    </div>

                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-slate-500 text-sm">
                    <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4" /> Verificado en Fraxtal
                    </span>
                    <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4" /> Sin intermediarios
                    </span>
                    <span className="flex items-center gap-2">
                        💜 Powered by Athena AI
                    </span>
                </div>
            </div>
        </section>
    );
};
