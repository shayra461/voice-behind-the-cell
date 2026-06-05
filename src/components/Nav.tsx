import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const items = [
  { hash: "story", label: "Story" },
  { hash: "timeline", label: "Timeline" },
  { hash: "awareness", label: "Awareness" },
  { hash: "issue", label: "The Issue" },
  { hash: "action", label: "Action" },
  { hash: "involved", label: "Get Involved" },
];

function HashLink({
  hash,
  className,
  children,
  onClick,
}: {
  hash: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") {
    return (
      <a
        href={`#${hash}`}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to="/" hash={hash} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between gap-4">
          <HashLink hash="top" className="flex items-center gap-3 group shrink-0">
            <img src={logo} alt="Voices Behind The Cell" className="h-14 md:h-20 w-auto" />
          </HashLink>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-end">
            {items.map((i) => (
              <HashLink key={i.hash} hash={i.hash} className="whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors relative group">
                {i.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood group-hover:w-full transition-all duration-300" />
              </HashLink>
            ))}
            <Link to="/follow-the-records" className="whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors relative group">
              Follow The Records
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/know-your-rights" className="whitespace-nowrap text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors relative group">
              Know Your Rights
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
          <HashLink hash="action" className="hidden md:inline-flex shrink-0 whitespace-nowrap items-center gap-2 bg-blood text-primary-foreground px-4 xl:px-5 py-2.5 text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.22em] font-semibold hover:brightness-110 transition pulse-glow">
            <span className="size-1.5 rounded-full bg-white animate-pulse" /> Take Action
          </HashLink>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
            <div className="space-y-1.5">
              <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-7 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60">
            <div className="px-6 py-6 flex flex-col gap-5">
              {items.map((i) => (
                <HashLink key={i.hash} hash={i.hash} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">{i.label}</HashLink>
              ))}
              <Link to="/follow-the-records" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">Follow The Records</Link>
              <Link to="/know-your-rights" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">Know Your Rights</Link>
            </div>
          </div>
        )}
      </header>
      {/* Mobile sticky CTA */}
      <HashLink hash="action" className="md:hidden fixed bottom-4 inset-x-4 z-50 bg-blood text-primary-foreground text-center py-4 text-xs uppercase tracking-[0.28em] font-bold shadow-2xl glow-blood">
        Sign the Petition
      </HashLink>
    </>
  );
}
