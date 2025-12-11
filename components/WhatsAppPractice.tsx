import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { CheckCircle } from 'lucide-react';

export default function WhatsAppPractice() {
  const benefits = [
    'Eu faço perguntas em inglês sobre o conteúdo da aula',
    'Você responde em inglês, em áudio, com frases completas',
    'Eu corrijo pronúncia, vocabulário e estrutura na hora',
    'Se estiver seguro, a gente evolui para o próximo conteúdo',
    'Se ainda tiver trava, ficamos ali até destravar',
    'Suporte e tira dúvidas pelo WhatsApp',
    'Acesso à plataforma e ao professor a qualquer momento do dia',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Prática guiada comigo, todos os dias
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-dark-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-10 border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300">
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-7 h-7 rounded-full bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="ml-4 text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Button 
              href="https://wa.me/5519992119886?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20prática%20no%20WhatsApp"
              variant="primary"
              className="text-xl py-5 px-10"
            >
              Quero começar agora
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
