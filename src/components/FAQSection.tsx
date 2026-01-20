import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is pilates only for women?',
      answer: "That's a misunderstanding. In fact most of our male clients visibly breathe a sigh of relief when they experience pilates.",
    },
    {
      question: 'Who are your clients?',
      answer: 'Our clients range from young athletes to seniors, professionals to homemakers. Anyone seeking improved flexibility, strength, and overall wellness.',
    },
    {
      question: 'I am not young or flexible. Can I still do pilates?',
      answer: 'Absolutely! Pilates is adaptable to all fitness levels and ages. Our instructors modify exercises to suit your individual needs.',
    },
    {
      question: "You say you've tried to make it affordable, is it true?",
      answer: 'Yes, we have researched extensively to ensure our prices are accessible while maintaining the highest quality instruction.',
    },
    {
      question: 'Is Pilates the same as yoga?',
      answer: 'While both focus on mind-body connection, Pilates emphasizes core strength, alignment, and controlled movements, often using specialized equipment.',
    },
    {
      question: 'Learn importance of Pilates',
      answer: 'Pilates improves posture, builds core strength, increases flexibility, and helps prevent injuries. It is beneficial for rehabilitation and overall wellness.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-sm text-muted-foreground tracking-widest mb-2">TRUSTED BY</p>
            <h2 className="section-title text-3xl md:text-4xl text-brown-dark">
              Frequently<br />Asked Questions
            </h2>
          </div>

          {/* Right Column - FAQ List */}
          <div className="md:col-span-2">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-2 group"
                >
                  <span className="text-foreground font-medium text-lg group-hover:text-brown transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <X className="w-5 h-5 text-brown" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground group-hover:text-brown transition-colors" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 pr-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
