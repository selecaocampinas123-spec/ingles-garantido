import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhatsAppPractice from '@/components/WhatsAppPractice';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatsAppPractice />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
