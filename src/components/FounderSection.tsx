import founderImage from '@/assets/founder.jpg';

const FounderSection = () => {
  return (
    <section id="founder" className="py-16 bg-brown-dark relative overflow-hidden">
      {/* Marquee Text Background */}
      <div className="absolute top-4 left-0 right-0 opacity-20 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-cream-light text-sm tracking-widest">
            MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER &nbsp;
          </span>
          <span className="text-cream-light text-sm tracking-widest">
            MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER &nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-cream-light">
            <h2 className="section-title text-4xl md:text-5xl mb-8">
              Meet<br />the<br />Founder
            </h2>

            <div className="space-y-6 text-cream-light/90 leading-relaxed">
              <p>
                Numrata's Exclusive Pilates Studio became a possibility after our founder Numrata was injured in a road 
                accident on a freeway in the United States. After days of hospitalization and months of chiropractic sessions 
                the pain persisted. Steroids were suggested which had risks that Numrata did not want to take.
              </p>
              <p>
                When someone suggested Pilates, Numrata tried and found relief when she was able to manage pain. As days 
                passed the pain went away. Numrata had to take a loan against her home, yet she persevered and signed up 
                for certification. Her aim was to make Pilates accessible. When she decided to establish her studio in India she 
                had over 15 years of experience as a Pilates instructor.
              </p>
              <p>
                She researched free structures in Mumbai, Thane and Navi Mumbai and made certain that her fees came in 
                lower than most of them. The intention was to reverse pain and to also pay it forward.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Vertical Marquee Text */}
            <div className="absolute -right-4 top-0 bottom-0 w-8 overflow-hidden opacity-30">
              <div className="writing-mode-vertical text-cream-light text-xs tracking-widest whitespace-nowrap">
                MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER
              </div>
            </div>

            <div className="relative">
              <div className="border-4 border-cream-light p-2 inline-block">
                <img
                  src={founderImage}
                  alt="Numrata - Founder"
                  className="w-full max-w-sm grayscale"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-cream-light font-display text-xl italic">Numrata</p>
                <p className="text-cream-light/70 text-sm">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-4 left-0 right-0 opacity-20 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-cream-light text-sm tracking-widest">
            MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER &nbsp;
          </span>
          <span className="text-cream-light text-sm tracking-widest">
            MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER MEET THE FOUNDER &nbsp;
          </span>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
