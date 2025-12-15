import React from 'react';
import { ExternalLink, TrendingUp, Shield, Coins } from 'lucide-react';

export const AgentToken: React.FC = () => {
    const agentUrl = "https://app.iqai.com/agents/0xce4f65d10b16ff7ab32581d3f66d570ac76d03b4";

    return (
        <section id="agent" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-athena-purple/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-athena-purple font-mono text-sm uppercase tracking-widest mb-4 block">
                        On-Chain AI Agent
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Athena es un <span className="text-athena-purple">Agente Tokenizado</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Desplegado en Fraxtal L2 usando IQAI's Agent Tokenization Platform.
                        Cada acción on-chain es verificable y transparente.
                    </p>
                </div>

                {/* Token card */}
                <div className="max-w-xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-athena-purple/30 p-8 shadow-2xl shadow-athena-purple/10">
                        {/* Token header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-athena-purple to-athena-purple/50 flex items-center justify-center text-3xl shadow-lg shadow-athena-purple/30">
                                    💜
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">$ATHENA</h3>
                                    <p className="text-slate-400">Agent Token on Fraxtal</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                                ADK-TS
                            </span>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                                    <Coins className="w-4 h-4" />
                                    Network
                                </div>
                                <p className="text-white font-bold">Fraxtal L2</p>
                            </div>
                            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                                    <Shield className="w-4 h-4" />
                                    Framework
                                </div>
                                <p className="text-white font-bold">IQAI ADK-TS</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-slate-300">
                                <span className="text-athena-purple">✓</span>
                                Wallet custodial autónoma
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <span className="text-athena-purple">✓</span>
                                Hashes de evidencia on-chain
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <span className="text-athena-purple">✓</span>
                                Protocolo SOS de emergencia
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <span className="text-athena-purple">✓</span>
                                Logs de actividad verificables
                            </div>
                        </div>

                        {/* CTA button */}
                        <a
                            href={agentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-athena-purple to-athena-purple/80 hover:from-athena-purple/90 hover:to-athena-purple/70 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-athena-purple/20 hover:shadow-athena-purple/40 group"
                        >
                            Ver Agente en IQAI
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Contract address */}
                        <p className="text-center text-slate-500 text-xs mt-4 font-mono">
                            Agent: 0xce4f...03b4 • Token: 0xee30...5892
                        </p>
                    </div>
                </div>

                {/* Activity logs preview */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <h4 className="text-center text-slate-400 mb-6 text-sm uppercase tracking-wider">Actividad Reciente del Agente</h4>
                    <div className="space-y-3">
                        {[
                            "💜 ¡Luna AB. ha iniciado su camino hacia la libertad!",
                            "🔐 Aurora CD. aseguró evidencia (FOTO) en blockchain",
                            "✨ ¡Esperanza EF. tiene su Freedom Goal definida! Meta: $1,100"
                        ].map((log, i) => (
                            <div
                                key={i}
                                className="bg-slate-900/50 border border-white/5 rounded-lg px-4 py-3 text-slate-300 text-sm font-mono hover:border-athena-purple/30 transition-colors"
                            >
                                {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
