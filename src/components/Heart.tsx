import { Plus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';

const IMG_78 = 'https://iron-man-site.netlify.app/assets/ironman-78.webp';

export function Heart() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.06);

  return (
    <section id="section-3" className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8a24a]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#e8c878]/50 mb-12 text-center">
            03 — Under the Surface
          </p>
        </Reveal>

        {/* Big heading */}
        <div className="text-center mb-20">
          <Reveal variant="mask">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-[#e8e0d6]">
              THERE'S A HEART
            </h2>
          </Reveal>
          <Reveal variant="mask" maskDelay={2}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-[#e8e0d6]">
              INSIDE THE <span className="gold-text">HARDWARE.</span>
            </h2>
          </Reveal>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div className="space-y-8 order-2 md:order-1">
            <Reveal>
              <p className="text-lg md:text-xl text-[#e8e0d6]/70 font-light italic leading-relaxed">
                Not just a suit of armor.<br />
                A thousand impossible things, working as one.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="h-px w-16 bg-[#c8a24a]/40" />
            </Reveal>

            <Reveal delay={2}>
              <h3 className="font-display text-2xl md:text-3xl gold-text">
                THE HEART OF A HERO.
              </h3>
            </Reveal>

            <Reveal delay={3}>
              <h4 className="text-sm tracking-[0.2em] uppercase text-[#e8c878]/80 font-bold">
                Power. With Purpose.
              </h4>
            </Reveal>

            <Reveal delay={3}>
              <p className="text-sm text-[#e8e0d6]/50 leading-relaxed">
                The brilliant light at the center of the armor. A symbol of reinvention, keeping the man and the machine moving forward.
              </p>
            </Reveal>
          </div>

          {/* Image with reactor glow */}
          <div ref={ref} className="relative order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full reactor-glow pointer-events-none" />

              <img
                src={IMG_78}
                alt="Close view of the illuminated armor chest"
                className="relative max-h-[60vh] w-auto object-contain"
                style={{ transform: `translateY(${offset}px)` }}
              />

              {/* Plus accents */}
              <Plus className="absolute top-4 right-4 text-[#c8a24a]/30" size={20} />
              <Plus className="absolute bottom-8 left-4 text-[#c8a24a]/30" size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
