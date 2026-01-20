const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-cream relative overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 mb-8">
        <p className="text-sm text-muted-foreground tracking-widest mb-2">About Us</p>
        <h2 className="about-tagline text-3xl md:text-5xl text-brown-dark">
          MOVE CONFIDENTLY. LIVE FULLY.
        </h2>
      </div>

      {/* Ribbon Section */}
      <div className="relative py-16">
        {/* SVG Ribbon Path */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,200 Q150,100 300,150 T600,180 T900,120 T1200,200"
            stroke="hsl(25 45% 35%)"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Ribbon Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="ribbon-text text-cream-light text-xl md:text-2xl tracking-wider whitespace-nowrap animate-marquee">
            Breathe. Move. Align. &nbsp;&nbsp;&nbsp; Breathe. Move. Align. &nbsp;&nbsp;&nbsp; Breathe. Move. Align. &nbsp;&nbsp;&nbsp; Breathe. Move. Align. &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* Content Box */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-8">
        <div className="bg-cream-light/80 p-8 rounded-lg">
          <p className="text-foreground leading-relaxed mb-6">
            At NUMRATA EXCLUSIVE PILATES STUDIO we aim to take pilates, which is perceived 
            as an unaffordable, elite form of fitness and bring it down from the tower and make it a 
            required form of fitness that is low impact, age proof and fitness level proof. Our aim is 
            that anyone at any age with any lifestyle and any financial background finds it 
            accessible.
          </p>
          <p className="text-foreground leading-relaxed">
            Our youngest student is a 10 year old athlete and our oldest is one who is a free 
            years shy of his 70th birthday. <strong>Pilates is for EVERYONE.</strong>
          </p>
        </div>
      </div>

      {/* Decorative curved line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg className="w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            d="M0,40 Q300,80 600,40 T1200,40"
            stroke="hsl(25 45% 35%)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
