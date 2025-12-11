import React from 'react';
import Container from './ui/Container';
import { Calendar, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 'PASSO 1',
    title: 'Entendo a sua rotina',
    icon: Calendar,
    gradient: 'from-purple-600 to-pink-600',
    items: [
      'Entendo seus horários e compromissos',
      'Definimos juntos a sua frequência ideal de estudos(3–4x/semana ou todo dia)',
      'Tudo adaptado à sua realidade'
    ]
  },
  {
    number: 'PASSO 2',
    title: 'Plataforma + cronograma',
    icon: BookOpen,
    gradient: 'from-primary-600 to-violet-600',
    items: [
      'Primeiro você absorve o conteúdo da aula na plataforma no horário definido',
      'Aulas curtas, focadas em frases e situações reais',
      'Conteúdo direto e prático para praticarmos nossas conversas'
    ]
  },
  {
    number: 'PASSO 3',
    title: 'Prática no WhatsApp',
    icon: MessageSquare,
    gradient: 'from-fuchsia-600 to-primary-600',
    items: [
      'Depois de absorver, você pratica conversação real comigo no WhatsApp',
      'Te faço perguntas em inglês sobre o conteúdo, avalio sua pronúncia, estrutura de frases, te corrijo na hora',
      'Só avançamos quando você estiver dominando com confiança (no seu ritmo)'
    ]
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Como funciona na prática
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 via-primary-600 to-fuchsia-600"></div>

            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-primary-600/30 p-6 md:p-10 md:ml-20 hover:border-primary-600/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_80px_-20px_rgba(168,85,247,0.4)]">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Badge - Absolute positioned to overlap the line */}
                  <div className="md:absolute md:-left-20 md:top-8 mb-6 md:mb-0">
                    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-br ${step.gradient} text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 whitespace-nowrap`}>
                      {step.number}
                    </div>
                  </div>

                  <div className="relative flex flex-col md:flex-row gap-6 items-start overflow-visible">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                        {step.title}
                      </h3>
                      <ul className="space-y-4">
                        {step.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start gap-4"
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
