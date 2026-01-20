import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EssentialsSection from '@/components/EssentialsSection';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EssentialsSection />
      <AboutSection />
      <FounderSection />
      <ContactSection />
      <FAQSection />
      
      {/* Footer */}
      <footer className="bg-brown-dark py-8 px-6 text-center">
        <p className="text-cream-light/70 text-sm">
          © 2024 Numrata's Exclusive Pilates Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
