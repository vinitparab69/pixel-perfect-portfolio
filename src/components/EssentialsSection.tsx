import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import reformer1 from '@/assets/reformer-1.jpg';
import reformer2 from '@/assets/reformer-2.jpg';

const EssentialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: reformer1, title: 'The reformer' },
    { image: reformer2, title: 'Studio equipment' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="essentials" className="py-16 px-6 md:px-12 texture-bg bg-cream-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title text-3xl md:text-4xl text-brown-dark leading-tight mb-6">
              Pilates<br />
              Essentials -<br />
              Equipment and Exercises
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn about Pilates equipment and foundational exercises.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-64 md:h-80 object-cover rounded-sm shadow-lg"
              />
              
              {/* Secondary Image (offset) */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-32 md:w-40 h-24 md:h-32 shadow-lg">
                <img
                  src={slides[(currentSlide + 1) % slides.length].image}
                  alt="Next slide preview"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>

            {/* Caption and Controls */}
            <div className="mt-16 flex items-center justify-between">
              <h3 className="section-title text-xl text-brown-dark">
                {slides[currentSlide].title}
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-brown flex items-center justify-center hover:bg-brown hover:text-cream-light transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-brown flex items-center justify-center hover:bg-brown hover:text-cream-light transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
