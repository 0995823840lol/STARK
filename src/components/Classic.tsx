import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';

const IMG_72 = 'https://iron-man-site.netlify.app/assets/ironman-72.webp';

export function Classic() {
  const { ref, offset } = useParallax<HTMLDivElement>(-0.1);

  return (
    <section id="section-2" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8b1a1a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#e8c878]/50 mb-12 text-center">
            02 — The Configuration
          </p>
        </Reveal>

        {/* Image showcase */}
        <div ref={ref} className="relative flex items-center justify-center mb-16">
          <div className="relative">
            <img
              src={IMG_72}
              alt="Iron Man in red and gold armor"
              className="max-h-[70vh] w-auto object-contain"
              style={{ transform: `translateY(${offset}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/40 to-transparent pointer-events-none" />
          </div>

          {/* Side arrows */}
          <button
            className="absolute left-0 md:left-12 top-1/2 -translate-y-1/2 text-[#c8a24a]/40 hover:text-[#e8c878] transition-colors duration-300 group"
            aria-label="Previous"
          >
            <ArrowLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 text-[#c8a24a]/40 hover:text-[#e8c878] transition-colors duration-300 group"
            aria-label="Next"
          >
            <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Text */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <Reveal variant="mask">
            <h3 className="font-display text-4xl md:text-6xl text-[#e8e0d6]">THE CLASSIC</h3>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-lg text-[#e8e0d6]/60 font-light leading-relaxed">
              The signature red-and-gold silhouette. Precision plating. A new definition of extraordinary.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-12 bg-[#c8a24a]/40" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c8a24a]/60">Mark III</span>
              <div className="h-px w-12 bg-[#c8a24a]/40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
