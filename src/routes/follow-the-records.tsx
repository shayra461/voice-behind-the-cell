import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FinalMessage } from "@/components/FinalMessage";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/follow-the-records")({
  component: FollowTheRecords,
  head: () => ({
    meta: [
      { title: "Follow The Records — Voices Behind The Cell" },
      { name: "description", content: "Trace the trail of records created when a death occurs in custody — from RFID welfare checks to outside investigations." },
      { property: "og:title", content: "Follow The Records — Voices Behind The Cell" },
      { property: "og:description", content: "Understand the documents, logs and reports families must navigate after a custodial death." },
    ],
    links: [
      { rel: "canonical", href: "/follow-the-records" },
    ],
  }),
});

const records: { title: string; body: string }[] = [
  { title: "RFID Welfare Checks", body: "Electronic scans recording when officers physically check on individuals in custody. Logs reveal whether required rounds actually occurred." },
  { title: "Officer Round Logs", body: "Written or digital entries documenting officer presence, observations, and timing during each housing-unit round." },
  { title: "Medical Records", body: "Clinic visits, medication administration, sick-call requests, mental-health notes, and provider assessments compiled while in custody." },
  { title: "Incident Reports", body: "Narrative accounts written by detention staff describing any unusual event — use of force, altercations, medical emergencies, or deaths." },
  { title: "Emergency Response Reports", body: "Documentation from EMS, fire, or jail medical responders detailing the response timeline, interventions performed, and patient condition." },
  { title: "Medical Examiner Records", body: "Autopsy findings, toxicology, cause and manner of death determinations issued by the county medical examiner." },
  { title: "Internal Reviews", body: "Jail or sheriff's office administrative reviews evaluating policy compliance, staff conduct, and procedural adherence." },
  { title: "Outside Investigations", body: "Independent inquiries by external agencies, oversight bodies, or attorneys retained by the family." },
];

const flow = [
  "Housing Unit",
  "Medical Event",
  "Emergency Response",
  "Documentation",
  "Investigation",
  "Family Seeks Answers",
];

function FollowTheRecords() {
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
              <span className="tag-eyebrow">Transparency Series</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-display uppercase text-[clamp(3rem,9vw,8.5rem)] leading-[0.86] tracking-tight text-bone">
              Follow<br />The <span className="text-blood">Records.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
              Every death in custody leaves a paper trail. Understanding which records exist —
              and who controls them — is the first step toward accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Records grid */}
      <section className="relative py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-blood" />
              <span className="tag-eyebrow">The Paper Trail</span>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] text-bone mb-16 md:mb-20 max-w-4xl">
              The documents that<br />tell the <span className="text-blood">story.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {records.map((r, i) => (
              <Reveal key={r.title}>
                <article className="group h-full p-8 md:p-10 border border-border/70 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-blood transition-all duration-500">
                  <div className="flex items-baseline gap-5 mb-5">
                    <span className="font-display text-3xl text-blood leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <div className="h-px flex-1 bg-border/80 group-hover:bg-blood/60 transition-colors" />
                  </div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl text-bone leading-tight mb-4 tracking-tight">{r.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{r.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow chart */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 border-t border-border/60 bg-foreground/[0.02] grain">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-10 bg-blood" />
              <span className="tag-eyebrow">The Pipeline</span>
              <span className="h-px w-10 bg-blood" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] text-bone text-center mb-6">
              The chain of <span className="text-blood">events.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-foreground/75 text-lg max-w-2xl mx-auto text-center mb-16 md:mb-20 leading-relaxed">
              From a routine housing assignment to a family demanding the truth — this is the
              path every record must travel.
            </p>
          </Reveal>

          <div className="flex flex-col items-center">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center w-full">
                <Reveal>
                  <div className="w-full max-w-md border border-border/80 bg-background px-8 py-7 text-center hover:border-blood hover:scale-[1.02] transition-all duration-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood block mb-3">Step {String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display uppercase text-2xl md:text-3xl text-bone tracking-tight">{step}</span>
                  </div>
                </Reveal>
                {i < flow.length - 1 && (
                  <Reveal>
                    <div className="flex flex-col items-center py-4" aria-hidden="true">
                      <div className="w-px h-10 bg-gradient-to-b from-blood/80 to-blood/20" />
                      <svg width="18" height="18" viewBox="0 0 16 16" className="text-blood -mt-1">
                        <path d="M8 14 L2 6 L14 6 Z" fill="currentColor" transform="rotate(180 8 8)" />
                      </svg>
                    </div>
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 border-t border-border/60 overflow-hidden grain vignette">
        <div className="absolute inset-0 bg-blood/[0.05] mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center">
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

      <FinalMessage />
      <Footer />
    </div>
  );
}
