import heroPilates from '@/assets/hero-pilates.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPilates})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brown-dark/60" />

      {/* Book Class Button */}
      <div className="absolute top-24 left-6 md:left-12 z-10">
        <a href="#contact" className="book-button inline-block text-cream-light border-cream-light hover:bg-cream-light hover:text-brown-dark">
          BOOK CLASS
        </a>
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="hero-title text-cream-light text-5xl md:text-7xl lg:text-8xl leading-tight">
          <span className="block">
            <span className="text-6xl md:text-8xl lg:text-9xl">N</span>UMRATA'S
          </span>
          <span className="block mt-2">EXCLUSIVE PILATES</span>
          <span className="block mt-2">
            <span className="text-6xl md:text-8xl lg:text-9xl">S</span>TUDIO
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
