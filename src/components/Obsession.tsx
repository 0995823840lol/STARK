import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';

const IMG_49 = 'https://iron-man-site.netlify.app/assets/ironman-49.webp';

export function Obsession() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.08);

  return (
    <section id="section-1" className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Section label */}
      <Reveal>
        <p className="text-xs tracking-[0.3em] uppercase text-[#e8c878]/50 mb-12 text-center">
          01 — The Philosophy
        </p>
      </Reveal>

      <div className="max-w-6xl mx-auto">
        {/* Big heading with mask reveal */}
        <div className="text-center mb-20">
          <Reveal variant="mask">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#e8e0d6]">
              AN OBSESSION.
            </h2>
          </Reveal>
          <Reveal variant="mask" maskDelay={2}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#e8e0d6]">
              IN EVERY <span className="gold-text italic">DETAIL.</span>
            </h2>
          </Reveal>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div ref={ref} className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-sm group">
              <img
                src={IMG_49}
                alt="Iron Man in polished red and gold armor standing with open hands"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ transform: `translateY(${offset}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/60 to-transparent" />
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#c8a24a]/30 rounded-full flex items-center justify-center float-anim pointer-events-none">
              <ArrowUpRight className="text-[#c8a24a]/60" size={28} />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6">
            <Reveal>
              <p className="text-lg md:text-xl text-[#e8e0d6]/70 leading-relaxed font-light">
                From the first spark to the next impossible idea. The suit evolves. The purpose stays.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="h-px w-16 bg-[#c8a24a]/40" />
            </Reveal>

            <Reveal delay={2}>
              <p className="text-sm text-[#e8e0d6]/50 leading-relaxed">
                Every plate, every circuit, every line of code — a refusal to accept the world as it is.
                This is not about perfection. It's about the relentless pursuit of what comes next.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <a
                href="#section-2"
                className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#e8c878] border-b border-[#c8a24a]/40 pb-1 hover:border-[#e8c878] transition-all duration-300"
              >
                The Classic
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
