import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-portrait.jpeg";
import jail from "@/assets/jail-accountability.jpeg";
import council from "@/assets/council-protest.jpeg";
import courthouse from "@/assets/courthouse-rally.jpeg";
import policies from "@/assets/change-policies.jpeg";
import banner from "@/assets/families-banner.jpeg";
import vigil from "@/assets/courthouse-vigil.jpeg";
import circle from "@/assets/community-circle.jpeg";
import flyer from "@/assets/memorial-flyer.jpeg";
import logo from "@/assets/logo.svg";
import emblem from "@/assets/upload-emblem.jpeg";
import stage from "@/assets/upload-stage.jpeg";
import familiesBanner from "@/assets/upload-families-banner.jpeg";
import testimony from "@/assets/upload-testimony.jpeg";
import news from "@/assets/upload-news.jpeg";
import comments from "@/assets/upload-comments.jpeg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Voices Behind The Cell — Justice & Accountability" },
      { name: "description", content: "A digital protest demanding justice, transparency and reform for those who died in custody." },
      { property: "og:title", content: "Voices Behind The Cell" },
      { property: "og:description", content: "He died in custody. We demand answers. Join the movement for justice." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,500&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Index() {
  const y = useParallax();
  return (
    <div id="top" className="relative overflow-x-hidden">
      <Nav />
      <Hero y={y} />
      <Ticker />
      <Story />
      <Timeline />
      <Awareness />
      <Issue />
      <Evidence />
      <Action />
      <Involved />
      <Footer />
    </div>
  );
}

function Hero({ y }: { y: number }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain vignette">
      {/* Atmospheric backdrop — heavily darkened so it never competes with text */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${y * 0.18}px)` }}>
        <img src={hero} alt="" className="w-full h-[120vh] object-cover object-[80%_25%] scale-110 blur-sm opacity-30" />
      </div>
      <div className="absolute inset-0 z-[1] bg-background/85" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-24 w-full min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* TEXT — left 7 cols, fully clear */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-blood" />
                <span className="tag-eyebrow">A Digital Protest · Est. 2020</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="font-display uppercase text-[clamp(3rem,8.4vw,8rem)] leading-[0.85] tracking-tight text-bone">
                Justice<br />
                <span className="text-blood">Behind</span><br />
                The Cell.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 font-editorial italic text-2xl md:text-3xl text-foreground/90 max-w-2xl leading-snug">
                He died in custody. <span className="text-blood not-italic font-semibold">We demand answers.</span>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Join us in holding the system accountable and demanding transparency,
                justice, and reform for every life lost behind the walls of Bexar County Jail.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#action" className="group inline-flex items-center gap-3 bg-blood text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.28em] font-bold hover:brightness-110 transition glow-blood">
                  <span className="size-2 rounded-full bg-white animate-pulse" /> Sign the Petition
                </a>
                <a href="#timeline" className="inline-flex items-center gap-3 border border-border/80 text-foreground px-7 py-4 text-xs uppercase tracking-[0.28em] font-semibold hover:bg-foreground/5 transition">
                  Demand Investigation
                </a>
                <a href="#story" className="inline-flex items-center gap-3 text-foreground/80 px-2 py-4 text-xs uppercase tracking-[0.28em] font-semibold hover:text-blood transition">
                  Share His Story →
                </a>
              </div>
            </Reveal>
          </div>

          {/* PORTRAIT — right 5 cols, fully visible inside its own cinematic frame */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={2}>
              <div className="relative">
                {/* Corner ticks */}
                <div className="absolute -top-3 -left-3 w-6 h-px bg-blood z-20" />
                <div className="absolute -top-3 -left-3 w-px h-6 bg-blood z-20" />
                <div className="absolute -bottom-3 -right-3 w-6 h-px bg-blood z-20" />
                <div className="absolute -bottom-3 -right-3 w-px h-6 bg-blood z-20" />

                <div className="relative aspect-[5/6] overflow-hidden grain border border-border/70 shadow-[var(--shadow-cinematic)]">
                  <img src={hero} alt="A grieving mother holding a phone with her son's photograph" className="w-full h-full object-cover object-[62%_center] ken-burns" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 border border-blood/70 bg-background/60 backdrop-blur text-[9px] uppercase tracking-[0.32em] text-blood font-bold">
                    Case File · 07.20.2020
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[10px] uppercase tracking-[0.32em] text-blood font-bold mb-2">In Memoriam</div>
                    <div className="font-editorial italic text-bone text-base md:text-lg leading-snug">
                      "Because everyone should have a voice — especially the voices behind the cell."
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute -left-8 top-0 bottom-0 flex-col justify-between items-center">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground rotate-180" style={{ writingMode: "vertical-rl" }}>Voices Behind The Cell</span>
                  <span className="size-2 rounded-full bg-blood glow-blood" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 scroll-indicator">
          <div className="w-px h-12 bg-foreground/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const phrases = ["Justice Denied", "No Accountability", "Demand Answers", "Reform Now", "Voices Unheard", "Lives Lost", "Families Shattered"];
  const list = [...phrases, ...phrases, ...phrases];
  return (
    <div className="relative border-y border-border/60 bg-ash overflow-hidden">
      <div className="flex gap-12 py-5 ticker whitespace-nowrap">
        {list.map((p, i) => (
          <span key={i} className="font-display uppercase text-2xl md:text-3xl tracking-wider text-foreground/40 flex items-center gap-12">
            {p} <span className="size-2 rounded-full bg-blood" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden grain shadow-[var(--shadow-cinematic)]">
            <img src={hero} alt="A grieving mother holding a phone with a photograph of her son" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.32em] text-blood font-bold mb-2">A Mother's Memory</div>
              <div className="font-editorial italic text-foreground/95 text-lg leading-snug">"Forever Behind The Cell · July 20, 2020"</div>
            </div>
            <div className="absolute top-6 left-6 w-10 h-px bg-blood" />
            <div className="absolute top-6 left-6 h-10 w-px bg-blood" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden border border-border/70 bg-background/60">
                <img src={emblem} alt="Voices Behind The Cell emblem" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/20 mix-blend-multiply" />
              </div>
              <span className="h-px w-8 bg-blood" />
              <span className="tag-eyebrow">His Story</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] text-bone">
              He was a son.<br />
              A brother.<br />
              <span className="text-blood">A human being.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 space-y-6 text-foreground/85 text-lg leading-relaxed max-w-xl">
              <p>
                Before he was a name on an incident report, he was loved. He had a family
                waiting for him to come home. He had a future the system never let him keep.
              </p>
              <p>
                He walked into a holding cell alive. He never walked out. There were no
                answers given to the family. No investigation. No accountability.
              </p>
              <p className="text-foreground font-medium">
                This is not a statistic. This is a person — and his name deserves to be
                spoken until justice is served.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <blockquote className="mt-10 border-l-2 border-blood pl-6 font-editorial italic text-2xl text-bone leading-snug max-w-lg">
              "My heart was ripped from my chest. I need the world to know what happened
              behind those walls."
              <cite className="block mt-4 not-italic text-xs uppercase tracking-[0.28em] text-muted-foreground font-sans">— A grieving mother</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const events = [
  { date: "Detention", title: "Taken Into Custody", body: "Detained at Bexar County Jail. Family expected him home within days. He was healthy. He was alive.", img: jail },
  { date: "Inside", title: "Calls For Help Ignored", body: "Reports describe medical distress, neglected requests, and the deliberate silence of those entrusted with his safety.", img: null },
  { date: "The Incident", title: "Death In Custody", body: "He died behind a cell door that was supposed to protect him. The family was given no clear explanation. No body cam. No witnesses. No accountability.", img: null },
  { date: "Community Response", title: "Families Rise", body: "Mothers, brothers, sisters, neighbors — a movement formed at the courthouse steps refusing to let his name be erased.", img: familiesBanner },
  { date: "Testimony", title: "We Spoke Before the State", body: "Voices Behind The Cell stood before the Texas House Committee on County Affairs — wearing the faces of the dead — and forced legislators to listen.", img: testimony },
  { date: "Investigation Demanded", title: "We Showed Up at Council", body: "We brought photographs of the dead into the council chambers. The city was forced to look.", img: council },
  { date: "Today", title: "Still No Justice", body: "The case remains open in our hearts. The fight continues. Every signature, every share, every protest brings us closer to the truth.", img: null },
];

function Timeline() {
  return (
    <section id="timeline" className="relative py-24 md:py-40 px-6 md:px-10 bg-ash/60 grain">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-blood" />
            <span className="tag-eyebrow">What Happened</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] text-bone max-w-3xl">
            A timeline the system<br /><span className="text-blood">does not want you to read.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-px blood-line" />
          <div className="space-y-16 md:space-y-24">
            {events.map((e, i) => (
              <Reveal key={i} delay={1}>
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 size-4 rounded-full bg-blood glow-blood ring-4 ring-background z-10" />
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                    <div className="text-[10px] uppercase tracking-[0.32em] text-blood font-bold mb-3">{e.date}</div>
                    <h3 className="font-display uppercase text-3xl md:text-4xl text-bone mb-4 leading-tight">{e.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{e.body}</p>
                  </div>
                  <div className="hidden md:block w-1/2 px-10">
                    {e.img && (
                      <div className="relative aspect-[4/3] overflow-hidden grain border border-border/60 shadow-[var(--shadow-cinematic)]">
                        <img src={e.img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-background/30 mix-blend-multiply" />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Awareness() {
  const gallery = [
    { src: courthouse, label: "Courthouse Rally", cls: "md:col-span-2 md:row-span-2 aspect-square" },
    { src: stage, label: "Speaking Truth Nationally", cls: "aspect-[4/5]" },
    { src: testimony, label: "Testifying at the Capitol", cls: "aspect-[4/5]" },
    { src: familiesBanner, label: "Names We Refuse to Forget", cls: "md:col-span-2 aspect-[16/10]" },
    { src: policies, label: "Change Jail Policies", cls: "aspect-[4/5]" },
    { src: council, label: "Council Chambers", cls: "aspect-[4/5]" },
    { src: banner, label: "Families United", cls: "md:col-span-2 aspect-[16/9]" },
    { src: vigil, label: "Vigil Outside the Courthouse", cls: "aspect-[3/4]" },
    { src: circle, label: "A Community That Will Not Be Silent", cls: "aspect-[3/4]" },
    { src: flyer, label: "Silent Protest & Memorial", cls: "aspect-[3/4]" },
  ];
  return (
    <section id="awareness" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-blood" />
                <span className="tag-eyebrow">A Living Movement</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] text-bone max-w-3xl">
                This is bigger<br />than one story.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Across San Antonio, families of those who died inside Bexar County Jail
              gather — at courthouses, at council meetings, at memorials — refusing to be silenced.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)]">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <figure className={`group relative overflow-hidden grain border border-border/40 ${g.cls}`}>
                <img src={g.src} alt={g.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-blood font-bold mb-1">Movement</div>
                  <div className="font-editorial italic text-bone text-lg leading-tight">{g.label}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Issue() {
  const stats = [
    { n: "27+", l: "Deaths in Bexar County custody in recent years" },
    { n: "0", l: "Independent investigations completed" },
    { n: "100%", l: "Of families left without real answers" },
  ];
  const failures = [
    { t: "Medical Neglect", b: "Detainees report being denied medication and emergency care until it is far too late." },
    { t: "No Transparency", b: "Footage withheld. Reports redacted. Families forced to fight for every document." },
    { t: "Policy Failure", b: "Jail policies that should protect lives are routinely ignored without consequence." },
    { t: "No Accountability", b: "Officers and officials face no public consequences. Patterns repeat. Families bury more children." },
  ];
  return (
    <section id="issue" className="relative py-24 md:py-40 px-6 md:px-10 bg-ash grain vignette overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-blood" />
            <span className="tag-eyebrow">The Issue</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.88] text-bone max-w-5xl">
            This is <span className="text-blood">not</span> an<br />isolated case.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            It is a pattern. A system. A quiet failure repeating itself behind walls
            taxpayers built, paid for, and trusted. Every name on this page is the
            evidence the institution refuses to publish.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {stats.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="bg-ash p-8 md:p-10 h-full">
                <div className="font-display text-6xl md:text-7xl text-blood leading-none">{s.n}</div>
                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground leading-snug">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 md:gap-10">
          {failures.map((f, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <article className="relative p-8 md:p-10 border-l-2 border-blood bg-background/60 backdrop-blur">
                <div className="font-display uppercase text-2xl md:text-3xl text-bone mb-3">{f.t}</div>
                <div className="text-foreground/75 leading-relaxed">{f.b}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section id="evidence" className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-blood" />
            <span className="tag-eyebrow">Voices of the Community</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.9] text-bone max-w-4xl">
            The proof is in the<br /><span className="text-blood">voices left behind.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 text-foreground/75 max-w-2xl leading-relaxed">
            The local press has reported. Families have testified. Neighbors have grieved
            publicly. The pattern is undeniable — and the record is permanent.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7">
            <figure className="relative aspect-[16/11] overflow-hidden grain border border-border/60 shadow-[var(--shadow-cinematic)] group">
              <img src={news} alt="Local news coverage of custodial cases in San Antonio" className="absolute inset-0 w-full h-full object-cover ken-burns" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-blood font-bold mb-2">In the Press</div>
                <div className="font-editorial italic text-bone text-xl leading-snug max-w-xl">
                  Local reporters keep returning to the same courtrooms — and the same families.
                </div>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="md:col-span-5" delay={1}>
            <figure className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden grain border border-border/60 shadow-[var(--shadow-cinematic)] group">
              <img src={comments} alt="Community comments and condolences shared online" className="absolute inset-0 w-full h-full object-cover object-top ken-burns" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-blood font-bold mb-2">Public Outcry</div>
                <div className="font-editorial italic text-bone text-lg leading-snug">
                  "I also lost a son in Bexar County Jail." — one of hundreds of public testimonies.
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Action() {
  return (
    <section id="action" className="relative py-28 md:py-44 px-6 md:px-10 overflow-hidden grain vignette">
      <div className="absolute inset-0">
        <img src={jail} alt="" className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-blood/10 mix-blend-overlay" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-blood" />
            <span className="tag-eyebrow">Take Action Now</span>
            <span className="h-px w-10 bg-blood" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.86] text-bone">
            Silence is<br /><span className="text-blood">complicity.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Every signature is pressure. Every share is a witness. Every voice is one more
            the system can no longer ignore.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 bg-blood text-primary-foreground px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition glow-blood pulse-glow">
              <span className="size-2 rounded-full bg-white animate-pulse" /> Sign the Petition
            </a>
            <a href="#" className="inline-flex items-center gap-3 border border-foreground/40 text-foreground px-8 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-foreground/5 transition">
              Contact Authorities
            </a>
            <a href="#" className="inline-flex items-center gap-3 border border-foreground/20 text-foreground/85 px-8 py-5 text-xs uppercase tracking-[0.3em] font-semibold hover:text-blood hover:border-blood transition">
              Share the Campaign
            </a>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-16 inline-flex items-center gap-8 px-8 py-5 border border-border/60 bg-background/70 backdrop-blur">
            <div>
              <div className="font-display text-4xl text-blood leading-none">14,287</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1">Supporters</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Goal · 25,000</div>
              <div className="mt-2 w-48 h-1 bg-border overflow-hidden">
                <div className="h-full bg-blood" style={{ width: "57%" }} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Involved() {
  return (
    <section id="involved" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden grain shadow-[var(--shadow-cinematic)]">
              <img src={circle} alt="Community gathered in support" className="w-full h-full object-cover ken-burns" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 font-editorial italic text-bone text-lg">"Together we are louder than any single voice."</div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-3">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-blood" />
              <span className="tag-eyebrow">Get Involved</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.92] text-bone">
              Stand with the<br />families. <span className="text-blood">Join us.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <form className="mt-10 space-y-5 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="w-full bg-background/60 border border-border/80 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-blood focus:outline-none transition" />
                <input type="text" placeholder="Last name" className="w-full bg-background/60 border border-border/80 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-blood focus:outline-none transition" />
              </div>
              <input type="email" placeholder="Email address" className="w-full bg-background/60 border border-border/80 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-blood focus:outline-none transition" />
              <textarea placeholder="How would you like to help? (optional)" rows={3} className="w-full bg-background/60 border border-border/80 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-blood focus:outline-none transition resize-none" />
              <div className="flex flex-wrap gap-3 pt-2">
                {["Volunteer", "Attend a Protest", "Share Updates", "Donate"].map((t) => (
                  <label key={t} className="inline-flex items-center gap-2 border border-border/80 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:border-blood cursor-pointer transition">
                    <input type="checkbox" className="accent-[var(--blood)]" /> {t}
                  </label>
                ))}
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-3 bg-blood text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition glow-blood">
                Join the Movement →
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/95 pt-20 pb-28 md:pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src={logo} alt="Voices Behind The Cell" className="h-24 md:h-32 w-auto opacity-90 mb-6" />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Voices Behind The Cell is a community-led campaign demanding transparency,
            justice, and reform for every life lost in Bexar County custody.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="tag-eyebrow mb-5">Navigate</div>
          <ul className="space-y-3 text-sm">
            {[["#story","His Story"],["#timeline","Timeline"],["#awareness","Awareness"],["#issue","The Issue"],["#evidence","Evidence"],["#action","Take Action"]].map(([h,l]) => (
              <li key={h}><a href={h} className="text-foreground/80 hover:text-blood transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="tag-eyebrow mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>Hotline · <a href="tel:+12108900101" className="hover:text-blood transition">(210) 890-0101</a></li>
            <li>Email · <a href="mailto:justice@voicesbehindthecell.org" className="hover:text-blood transition">justice@voicesbehindthecell.org</a></li>
            <li className="pt-2 flex gap-3">
              {["Facebook","Instagram","TikTok","YouTube"].map((s) => (
                <a key={s} href="#" className="text-[10px] uppercase tracking-[0.22em] border border-border/80 px-3 py-2 hover:border-blood hover:text-blood transition">{s}</a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Voices Behind The Cell · All Rights Reserved</div>
        <div>A Community Justice Campaign · San Antonio, TX</div>
      </div>
    </footer>
  );
}
