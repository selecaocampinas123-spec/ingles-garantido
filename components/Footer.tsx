import React from 'react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-primary-600/10 py-8">
      <Container>
        <div className="text-center">
          <p className="text-sm text-gray-400">
             2025 Inglês Garantido. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
