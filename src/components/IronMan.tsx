import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';

const IMG_83 = 'https://iron-man-site.netlify.app/assets/ironman-83.webp';

export function IronMan() {
  const { ref, offset } = useParallax<HTMLDivElement>(-0.08);

  return (
    <section id="section-4" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0807] via-[#1a0a0a]/30 to-[#0a0807]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b1a1a]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-[#c8a24a]/10 rounded-full slow-spin pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-[#c8a24a]/5 rounded-full slow-spin pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '60s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Image */}
        <div ref={ref} className="relative flex justify-center mb-12">
          <img
            src={IMG_83}
            alt="Iron Man with both repulsor palms raised"
            className="max-h-[55vh] w-auto object-contain float-anim"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>

        {/* Lines */}
        <div className="space-y-2 mb-10">
          <Reveal>
            <p className="text-xl md:text-2xl text-[#e8e0d6]/60 font-light">
              Not the metal.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xl md:text-2xl text-[#e8e0d6]/60 font-light">
              Not the machine.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-2xl md:text-3xl text-[#e8c878] font-light italic">
              The man who chose to do more.
            </p>
          </Reveal>
        </div>

        {/* Big statement */}
        <Reveal variant="mask" maskDelay={3}>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl gold-text leading-none">
            I AM IRON MAN.
          </h2>
        </Reveal>

        <Reveal delay={3} className="mt-12">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#e8c878] border-b border-[#c8a24a]/40 pb-1 hover:border-[#e8c878] transition-all duration-300"
          >
            Return to the top
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
