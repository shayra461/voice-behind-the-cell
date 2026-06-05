import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FinalMessage } from "@/components/FinalMessage";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/know-your-rights")({
  component: KnowYourRights,
  head: () => ({
    meta: [
      { title: "Know Your Rights As A Family — Voices Behind The Cell" },
      { name: "description", content: "Families have the right to request incident reports, medical records, autopsy reports, and more after a death in custody." },
      { property: "og:title", content: "Know Your Rights As A Family — Voices Behind The Cell" },
      { property: "og:description", content: "Understand the records and reports families are entitled to request following a custodial death." },
    ],
    links: [
      { rel: "canonical", href: "/know-your-rights" },
    ],
  }),
});

const checklist: string[] = [
  "Incident Reports",
  "Medical Records",
  "Autopsy Reports",
  "RFID Guard Tour Records",
  "Welfare Check Logs",
  "Surveillance Preservation",
  "Emergency Medical Records",
  "Investigation Reports",
];

function KnowYourRights() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden grain vignette border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute inset-0 bg-blood/[0.04] mix-blend-overlay" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-blood" />
              <span className="tag-eyebrow">Family Rights</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-display uppercase text-[clamp(3rem,9vw,8.5rem)] leading-[0.86] tracking-tight text-bone">
              Know Your<br /><span className="text-blood">Rights.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
              After a death in custody, families have the right to request critical records and
              documentation. Understanding these rights is the first step toward accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Checklist */}
      <section className="relative py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-blood" />
              <span className="tag-eyebrow">Records Checklist</span>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] text-bone mb-6 max-w-4xl">
              Documents families<br />should <span className="text-blood">request.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-foreground/75 text-lg mb-14 md:mb-20 max-w-2xl leading-relaxed">
              These records can help families understand what happened, identify gaps in care,
              and pursue accountability.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {checklist.map((item, i) => (
              <Reveal key={item}>
                <div className="group flex items-center gap-5 p-6 border border-border/70 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-blood transition-all duration-500">
                  <div className="shrink-0 w-7 h-7 border-2 border-blood flex items-center justify-center group-hover:bg-blood transition-colors">
                    <svg width="14" height="14" viewBox="0 0 12 12" className="text-blood group-hover:text-primary-foreground transition-colors">
                      <path d="M2 6 L5 9 L10 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-display uppercase text-xl md:text-2xl text-bone tracking-tight">{item}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 border-t border-border/60 bg-foreground/[0.02] grain">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-blood" />
              <span className="tag-eyebrow">We Can Help</span>
              <span className="h-px w-10 bg-blood" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] text-bone mb-8">
              Need help requesting<br /><span className="text-blood">records?</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-foreground/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Lydia Leos — Voices Behind The Cell
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+12109104817" className="inline-flex items-center gap-3 bg-blood text-primary-foreground px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition glow-blood pulse-glow">
                <span className="size-2 rounded-full bg-white animate-pulse" /> (210) 910-4817
              </a>
              <a href="mailto:justice@voicesbehindthecell.org" className="inline-flex items-center gap-3 border border-foreground/40 text-foreground px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-foreground/5 hover:border-blood hover:text-blood transition">
                Email Lydia
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 bg-blood text-primary-foreground overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-br from-blood via-blood to-blood/85 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-white/70" />
              <span className="tag-eyebrow text-white/90">Support The Movement</span>
              <span className="h-px w-10 bg-white/70" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.86] tracking-tight mb-10">
              Together we are<br />louder than any<br />single voice.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              If you would like to donate, volunteer, sponsor events, or support Voices Behind
              The Cell advocacy efforts, please contact:
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display uppercase text-2xl md:text-3xl text-white tracking-tight mb-6">Lydia Leos — Founder</p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:justice@voicesbehindthecell.org" className="inline-flex items-center gap-3 bg-white text-blood px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition glow-blood pulse-glow">
                <span className="size-2 rounded-full bg-blood animate-pulse" /> Donate Now
              </a>
              <a href="tel:+12109104817" className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition">
                <span className="size-2 rounded-full bg-blood animate-pulse" /> (210) 910-4817
              </a>
              <a href="mailto:justice@voicesbehindthecell.org" className="inline-flex items-center gap-3 border-2 border-white/80 text-white px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-blood transition">
                Email Lydia
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalMessage />
      <Footer />
    </div>
  );
}
