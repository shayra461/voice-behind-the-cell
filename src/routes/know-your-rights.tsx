import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-foreground/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-foreground/60 mb-6">Transparency Series</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Know Your Rights <em className="italic text-foreground/80">As A Family</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
              After a death in custody, families have the right to request critical records and documentation. Understanding these rights is the first step toward accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Records Families Should Consider Requesting</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-foreground/70 mb-12 md:mb-16 max-w-2xl">
              These documents can help families understand what happened, identify gaps in care, and pursue accountability.
            </p>
          </Reveal>
          <div className="space-y-4">
            {checklist.map((item, i) => (
              <Reveal key={item} delay={i < 4 ? 1 : 2}>
                <div className="flex items-start gap-5 p-5 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/25 transition-all duration-500">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded border-2 border-blood flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-blood">
                      <path d="M2 6 L5 9 L10 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-display tracking-tight">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-foreground/10 bg-foreground/[0.03]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-6">Need Help Requesting Records?</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-foreground/75 text-lg mb-2">Lydia Leos — Voices Behind The Cell</p>
            <p className="text-foreground/70">
              <a href="tel:+12109104817" className="underline underline-offset-4 hover:text-foreground">(210) 910-4817</a>
              <span className="mx-3 text-foreground/30">·</span>
              <a href="mailto:justice@voicesbehindthecell.org" className="underline underline-offset-4 hover:text-foreground">justice@voicesbehindthecell.org</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 bg-blood text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-blood via-blood to-blood/90 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-white/70 mb-6">Support The Movement</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
              Together We Are Louder Than Any Single Voice
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              If you would like to donate, volunteer, sponsor events, or support Voices Behind The Cell advocacy efforts, please contact:
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="space-y-3">
              <p className="text-white font-semibold text-lg">Lydia Leos — Founder</p>
              <p className="text-white/80">
                <a href="tel:+12109104817" className="underline underline-offset-4 hover:text-white">(210) 910-4817</a>
                <span className="mx-3 text-white/40">·</span>
                <a href="mailto:justice@voicesbehindthecell.org" className="underline underline-offset-4 hover:text-white">justice@voicesbehindthecell.org</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-t border-foreground/10 text-center">
        <Reveal>
          <Link to="/" className="inline-block px-8 py-3 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors text-xs uppercase tracking-[0.22em] font-semibold">
            ← Back to Home
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
