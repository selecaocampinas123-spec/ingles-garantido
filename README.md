# Inglês Garantido - Landing Page

Landing page moderna e responsiva para o programa "Inglês Garantido", desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## 🔧 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal com fontes
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Hero.tsx            # Seção hero com vídeo
│   ├── HowItWorks.tsx      # Como funciona (3 passos)
│   ├── WhatsAppPractice.tsx # Prática no WhatsApp
│   ├── SocialProof.tsx     # Depoimentos e garantia
│   ├── Footer.tsx          # Rodapé
│   └── ui/
│       ├── Button.tsx      # Componente de botão
│       ├── Card.tsx        # Componente de card
│       └── Container.tsx   # Container responsivo
```

## 🎨 Personalização

### Vídeo do YouTube

Edite o arquivo `components/Hero.tsx` e substitua `SEU_VIDEO_ID` pelo ID do seu vídeo:

```tsx
src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&rel=0&modestbranding=1"
```

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

- **Primary (Azul)**: Botões principais e destaques
- **Accent (Verde-água)**: Elementos de suporte e ícones

### Links de Redes Sociais

Edite o arquivo `components/Footer.tsx` para adicionar os links das suas redes sociais.

## 📱 Responsividade

A landing page é totalmente responsiva, com breakpoints otimizados para:

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com)
2. Conecte seu repositório Git
3. Configure e faça deploy automaticamente

```bash
npm run build
```

## 📄 Licença

Este projeto foi desenvolvido para o programa Inglês Garantido.

## 📞 Contato

WhatsApp: [wa.me/5519992119886](https://wa.me/5519992119886)
