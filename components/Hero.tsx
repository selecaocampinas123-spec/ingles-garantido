import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Sparkles, Zap, Users, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Container className="relative z-10 py-12 md:py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950/50 border border-primary-600/30 backdrop-blur-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Não é cursinho gravado</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Não é um "cursinho" gravado.<br />
            É um método para{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              destravar sua conversação
            </span>{' '}
            em semanas
          </h1>

          {/* Video Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary-600/20 hover:ring-primary-600/40 transition-all duration-300">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TVn5ttHithk?rel=0&modestbranding=1"
                title="Inglês Garantido - Como funciona"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Benefits Cards - Interactive with Gradient */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: MessageCircle, text: 'Prática diária no WhatsApp', gradient: 'from-purple-600 to-pink-600' },
              { icon: Zap, text: 'Aula ao vivo semanal', gradient: 'from-primary-600 to-violet-600' },
              { icon: Users, text: 'Acompanhamento individual', gradient: 'from-violet-600 to-purple-600' },
              { icon: Sparkles, text: 'Plantão de dúvidas todos os dias', gradient: 'from-fuchsia-600 to-primary-600' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-dark-800/80 backdrop-blur-sm border border-primary-600/30 group-hover:border-transparent rounded-2xl p-6 transition-all duration-500 group-hover:bg-transparent">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600/30 to-primary-700/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-6">
                      <item.icon className="w-7 h-7 text-primary-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white leading-tight transition-colors duration-300">{item.text}</p>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              href="https://wa.me/5519992119886?text=Olá!%20Quero%20destravar%20meu%20inglês"
              variant="primary"
            >
              Quero destravar meu inglês
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
