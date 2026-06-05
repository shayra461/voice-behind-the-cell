import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/95 pt-20 pb-28 md:pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src={logo} alt="Voices Behind The Cell" className="h-24 md:h-32 w-auto opacity-90 mb-6" />
          <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-bone mb-4">
            Voices Behind The Cell
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A community-led campaign demanding transparency, justice, and reform
            for every life lost in Bexar County custody.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="tag-eyebrow mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              Phone ·{" "}
              <a href="tel:+12109104817" className="hover:text-blood transition">
                (210) 910-4817
              </a>
            </li>
            <li>
              Email ·{" "}
              <a href="mailto:justice@voicesbehindthecell.org" className="hover:text-blood transition break-all">
                justice@voicesbehindthecell.org
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="tag-eyebrow mb-5">Follow</div>
          <div className="flex flex-wrap gap-3">
            {["Facebook", "Instagram", "TikTok"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[10px] uppercase tracking-[0.22em] border border-border/80 px-3 py-2 hover:border-blood hover:text-blood transition"
              >
                {s}
              </a>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="text-[10px] uppercase tracking-[0.32em] text-blood font-bold mb-2">
              In Memoriam
            </div>
            <p className="font-editorial italic text-bone text-base leading-snug">
              In Memory of Julian Dena — July 30, 2020
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Voices Behind The Cell · All Rights Reserved</div>
        <div>A Community Justice Campaign · San Antonio, TX</div>
      </div>
    </footer>
  );
}
