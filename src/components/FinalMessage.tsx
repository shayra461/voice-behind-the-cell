import { Reveal } from "@/components/Reveal";

export function FinalMessage() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-foreground/10 bg-ash/40 grain overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blood/5 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-bone space-y-2">
            <span className="block">Remember Their Names.</span>
            <span className="block text-blood">Protect The Living.</span>
            <span className="block">Honor The Lost.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 mx-auto w-16 h-px bg-blood" />
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-12 text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            For support, advocacy resources, donations, volunteer opportunities, or information:
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-8 space-y-2">
            <p className="font-display uppercase text-xl md:text-2xl tracking-tight text-bone">
              Lydia Leos — Voices Behind The Cell
            </p>
            <p className="text-foreground/80 text-base md:text-lg">
              <a href="tel:+12109104817" className="hover:text-blood transition">(210) 910-4817</a>
              <span className="mx-3 text-foreground/30">·</span>
              <a href="mailto:justice@voicesbehindthecell.org" className="hover:text-blood transition">justice@voicesbehindthecell.org</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
