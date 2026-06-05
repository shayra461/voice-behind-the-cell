import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
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
  { title: "Internal Reviews", body: "Jail or sheriff’s office administrative reviews evaluating policy compliance, staff conduct, and procedural adherence." },
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-foreground/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-foreground/60 mb-6">Transparency Series</p>
          </Reveal>
          <Reveal >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Follow The <em className="italic text-foreground/80">Records</em>
            </h1>
          </Reveal>
          <Reveal >
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
              Every death in custody leaves a paper trail. Understanding which records exist — and who controls them — is the first step toward accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Records grid */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16">The Documents That Tell The Story</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {records.map((r, i) => (
              <Reveal key={r.title} >
                <article className="group h-full p-7 md:p-9 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/25 transition-all duration-500">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-xs text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-xl md:text-2xl">{r.title}</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{r.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow chart */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-foreground/10 bg-foreground/[0.03]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-4">The Chain Of Events</h2>
          </Reveal>
          <Reveal >
            <p className="text-foreground/70 mb-12 md:mb-16 max-w-2xl">
              From a routine housing assignment to a family demanding the truth — this is the path every record must travel.
            </p>
          </Reveal>

          <div className="flex flex-col items-center gap-0">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center w-full">
                <Reveal >
                  <div className="relative w-full max-w-md">
                    <div className="rounded-xl border-2 border-foreground/20 bg-background px-8 py-6 text-center shadow-lg hover:border-foreground/50 hover:scale-[1.02] transition-all duration-500">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 block mb-2">Step {String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-xl md:text-2xl">{step}</span>
                    </div>
                  </div>
                </Reveal>
                {i < flow.length - 1 && (
                  <Reveal >
                    <div className="flex flex-col items-center py-4" aria-hidden="true">
                      <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-foreground/10" />
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-foreground/50 -mt-1">
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
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-foreground/10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-6">Need help requesting records?</h2>
          </Reveal>
          <Reveal >
            <p className="text-foreground/75 text-lg mb-2">Lydia Leos — Voices Behind The Cell</p>
            <p className="text-foreground/70">
              <a href="tel:+12109104817" className="underline underline-offset-4 hover:text-foreground">(210) 910-4817</a>
              <span className="mx-3 text-foreground/30">·</span>
              <a href="mailto:justice@voicesbehindthecell.org" className="underline underline-offset-4 hover:text-foreground">justice@voicesbehindthecell.org</a>
            </p>
          </Reveal>
          <Reveal >
            <Link to="/" className="inline-block mt-10 px-8 py-3 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors">
              ← Back to Home
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
