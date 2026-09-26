import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Obsession } from '@/components/Obsession';
import { Classic } from '@/components/Classic';
import { Heart } from '@/components/Heart';
import { IronMan } from '@/components/IronMan';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';

function App() {
  return (
    <div className="relative bg-[#0a0807] text-[#e8e0d6] min-h-screen">
      <div className="noise-overlay" />
      <Nav />
      <Hero />
      <Marquee items={['PRECISION', 'POWER', 'PURPOSE', 'EVOLUTION', 'INNOVATION', 'RESILIENCE']} />
      <Obsession />
      <Classic />
      <Marquee items={['MARK III', 'ARC REACTOR', 'REPULSORS', 'JARVIS', 'STARK INDUSTRIES']} />
      <Heart />
      <IronMan />
      <Footer />
    </div>
  );
}

export default App;
