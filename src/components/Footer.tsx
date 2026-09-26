import { Reveal } from '@/components/Reveal';

export function Footer() {
  return (
    <footer className="relative border-t border-[#c8a24a]/10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Disclaimer */}
        <Reveal>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm text-[#e8e0d6]/40 leading-relaxed max-w-2xl mx-auto">
              An independent fan tribute.<br />
              Iron Man and related characters belong to Marvel.
            </p>
          </div>
        </Reveal>

        {/* Selected configuration */}
        <Reveal delay={1}>
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a24a]/40">Selected Configuration</span>
            <h3 className="font-display text-3xl text-[#e8e0d6]">THE CLASSIC</h3>
            <p className="text-xs text-[#e8e0d6]/40 max-w-md text-center leading-relaxed">
              A curated design tribute to the fictional technology of Iron Man. Configuration names are editorial labels for this archive.
            </p>
          </div>
        </Reveal>

        <div className="h-px w-full bg-[#c8a24a]/10 my-12" />

        {/* Credits */}
        <Reveal delay={2}>
          <div className="text-center space-y-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c8a24a]/50 mb-4">
              Made of Inspiration
            </h4>
            <p className="text-xs text-[#e8e0d6]/30 max-w-xl mx-auto leading-relaxed">
              Independent, noncommercial Iron Man fan concept. Not affiliated with Marvel or Disney.
            </p>
            <p className="text-xs text-[#e8e0d6]/30 max-w-xl mx-auto leading-relaxed">
              Character artwork from the PNGimg Iron Man collection (images 78, 89, 72, and 83), converted to WebP. Provider's license: CC BY-NC 4.0. Character rights remain with their respective owners.
            </p>
            <p className="text-xs text-[#e8e0d6]/30 max-w-xl mx-auto leading-relaxed">
              Typography: Anton & DM Sans (SIL Open Font License). Interface icons: Solar via Iconify (CC BY 4.0).
            </p>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg tracking-widest text-[#e8c878]">
            STARK<span className="text-[#e8e0d6]">ARCHIVE</span>
          </span>
          <span className="text-xs text-[#e8e0d6]/30 tracking-widest uppercase">
            A Tribute · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
