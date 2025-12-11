'use client';

import React, { useState } from 'react';
import Container from './ui/Container';
import { Shield, Play, Instagram } from 'lucide-react';

export default function SocialProof() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 'thamy',
      title: 'Veja a evolução da Thamy em 3 meses!',
      video: '/depoimentos/Thamy.mp4',
      thumbnail: '/depoimentos/Thamy.jpg',
    },
    {
      id: 'luiz',
      title: 'Luiz atingiu fluência total em 6 meses',
      video: '/depoimentos/Luiz.mp4',
      thumbnail: '/depoimentos/Luiz.jpg',
    },
    {
      id: 'bruno',
      title: 'Veja a evolução do Bruno que já tinha tentado diversos métodos',
      video: '/depoimentos/Bruno.mp4',
      thumbnail: '/depoimentos/Bruno.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-primary-950/50 border border-primary-600/30 backdrop-blur-sm rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-primary-300 font-semibold">Garantia Total</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Método validado com mais de 5.000 alunos
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Programa pensado para você se comunicar no dia a dia em 6 meses. Se ao final você não estiver conseguindo se comunicar em inglês no cotidiano, eu devolvo seu dinheiro.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group w-full sm:w-64">
              <div className="bg-dark-800/30 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-primary-600/20 hover:border-primary-600/40 transition-all duration-300 hover:scale-105">
                <div className="relative bg-dark-900" style={{ aspectRatio: '9/16' }}>
                  {playingVideo === testimonial.id ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      src={testimonial.video}
                    >
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <>
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setPlayingVideo(testimonial.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                      >
                        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-2xl">
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-heading font-semibold text-white text-center">
                    {testimonial.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-base text-gray-400 mb-3">
            Mais depoimentos no Instagram
          </p>
          <a 
            href="https://instagram.com/ingles.garantido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-500 hover:text-primary-400 text-sm transition"
          >
            <Instagram className="w-4 h-4 mr-1.5" />
            @ingles.garantido
          </a>
          
          <div className="flex justify-center mt-6">
            <div className="w-40 bg-dark-800/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-600/10">
              <div className="relative bg-dark-900" style={{ aspectRatio: '9/16' }}>
                <video
                  className="w-full h-full object-cover opacity-80"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/depoimentos/centenas.mp4"
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="text-center bg-dark-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-600/20">
            <div className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
              +5.000
            </div>
            <div className="text-xl text-gray-300 font-medium">
              Alunos fluentes
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
