import { useEffect, useState } from "react";

/**
 * Documentary HUD overlay — REC indicator, live timecode, framing brackets,
 * scanlines + letterbox. Fixed across the whole site so every section
 * feels like a frame inside a documentary recording.
 */
export function DocHUD() {
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    const start = performance.now();
    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      const h = Math.floor(elapsed / 3600)
        .toString()
        .padStart(2, "0");
      const m = Math.floor((elapsed % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const s = Math.floor(elapsed % 60)
        .toString()
        .padStart(2, "0");
      const f = Math.floor((elapsed * 24) % 24)
        .toString()
        .padStart(2, "0");
      setTc(`${h}:${m}:${s}:${f}`);
    };
    tick();
    const timer = window.setInterval(tick, 250);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {/* Scanlines + light leak — pure ambience */}
      <div className="pointer-events-none fixed inset-0 z-[54] scanlines" aria-hidden />
      <div className="light-leak" aria-hidden />

      {/* Corner framing brackets — viewfinder feel */}
      <div className="pointer-events-none fixed inset-3 md:inset-5 z-[58]" aria-hidden>
        <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-bone/40" />
        <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-bone/40" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-bone/40" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-bone/40" />
      </div>

      {/* REC indicator — top-right under nav */}
      <div className="hidden md:flex pointer-events-none fixed top-7 right-8 z-[59] items-center gap-2.5 px-3 py-1.5 bg-background/85 border border-bone/15 shadow-[0_10px_26px_-18px_oklch(0_0_0_/_90%)]">
        <span className="rec-dot" />
        <span className="text-[10px] uppercase tracking-[0.32em] font-bold text-bone">REC</span>
        <span className="text-[10px] tracking-[0.18em] text-bone/70 tabular-nums">{tc}</span>
      </div>

      {/* Bottom-left HUD — film stock + location */}
      <div className="hidden md:flex pointer-events-none fixed bottom-9 left-7 z-[59] flex-col gap-1 text-[9px] uppercase tracking-[0.32em] text-bone/55">
        <span>VBC · 16mm · 24fps</span>
        <span>San Antonio · Bexar Co.</span>
      </div>

      {/* Bottom-right HUD — frame counter ish */}
      <div className="hidden md:flex pointer-events-none fixed bottom-9 right-8 z-[59] items-center gap-3 text-[9px] uppercase tracking-[0.32em] text-bone/55">
        <span>F · {tc.split(":")[3]}</span>
        <span className="size-1 rounded-full bg-blood" />
        <span>Roll 07</span>
      </div>
    </>
  );
}
