import hillsImage from '@/assets/hills-illustration.jpg';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 texture-bg bg-cream-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-brown flex items-center justify-center">
            <span className="text-brown font-display text-xs italic text-center leading-tight">
              PILATES
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="section-title text-4xl text-brown-dark mb-4">
              Contact<br />Us
            </h2>
            <p className="text-muted-foreground">
              Get in touch with us for an enquires and questions.
            </p>

            <div className="mt-8 flex gap-6">
              <a href="#" className="text-brown hover:text-brown-dark transition-colors">
                Instagram
              </a>
              <a href="#" className="text-brown hover:text-brown-dark transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Middle Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">find us on</p>
              <a 
                href="https://share.google/1uXUKQpgvndaSAvIS" 
                className="text-brown underline hover:text-brown-dark"
              >
                https://share.google/1uXUK<br />QpgvndaSAvIS
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">address</p>
              <p className="text-foreground">Address</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">general inquires</p>
              <p className="text-foreground">mail id</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">book your class</p>
              <p className="text-foreground">
                Contact via WhatsApp :<br />
                9321199282
              </p>
            </div>
          </div>
        </div>

        {/* Hills Illustration */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
          <img
            src={hillsImage}
            alt="Peaceful hills illustration"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
