'use client';

import React, { useState, useEffect } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Clock, Zap, AlertCircle, TrendingUp, Shield } from 'lucide-react';

export default function FinalCTA() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Warning Icon */}
          <div className="flex justify-center mb-8">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center shadow-2xl transition-all duration-300 ${pulse ? 'scale-110' : 'scale-100'}`}>
              <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          {/* Main Content Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-fuchsia-600 to-purple-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 md:p-12 border-2 border-primary-500/50">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center text-white mb-4 leading-tight">
                ⚡ As vagas são limitadas —{' '}
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  apenas 100 alunos ativos
                </span>
              </h2>

              <p className="text-lg md:text-xl text-center text-gray-300 mb-10 leading-relaxed">
                Por oferecer suporte individual e práticas diárias, atendemos um número reduzido de alunos para garantir a qualidade.
              </p>

              {/* Two Main Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600/20 to-yellow-600/20 border-2 border-orange-500/50 p-6 md:p-8 hover:border-orange-500/80 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent"></div>
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center shadow-xl">
                      <Zap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-orange-300 mb-1">Últimas vagas de 2025</div>
                      <div className="text-sm md:text-base text-gray-400">Antes do reajuste</div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600/20 to-purple-600/20 border-2 border-primary-500/50 p-6 md:p-8 hover:border-primary-500/80 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent"></div>
                  <div className="relative flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-xl">
                      <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary-300 mb-1">Suporte 1:1</div>
                      <div className="text-sm md:text-base text-gray-400">Atendimento individual</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/60 backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div className="text-left">
                    <div className="text-green-300 font-bold text-base md:text-lg">Garantia de Fluência</div>
                    <div className="text-green-400/80 text-xs md:text-sm">ou seu dinheiro de volta</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center gap-4">
                <Button 
                  href="https://wa.me/5519992119886?text=Olá!%20Quero%20garantir%20minha%20vaga%20antes%20do%20reajuste"
                  variant="primary"
                  className="text-xl md:text-2xl px-10 py-6 shadow-2xl hover:shadow-primary-600/50 animate-pulse hover:animate-none"
                >
                  🔥 QUERO FICAR FLUENTE!
                </Button>
                
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                   • Resposta imediata no WhatsApp
                </p>
              </div>

              {/* Urgency bar */}
              <div className="mt-8 pt-6 border-t border-primary-600/20">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-red-400 font-semibold">Vagas limitadas disponíveis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
