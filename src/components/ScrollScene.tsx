import { useEffect, useRef, type ReactNode } from "react";

/**
 * Cinematic scroll reveal:
 * - When a section enters the viewport it eases in (translateY + slight scale + fade).
 * - Once revealed it stays fully visible and crisp — no shrinking or dimming as it leaves.
 * - While in view, a gentle parallax drift adds depth without hiding content.
 */
export function ScrollScene({
  children,
  className = "",
  intensity = 1,
}: {
  children: ReactNode;
  className?: string;
  /** 0.5 = subtle, 1 = default, 1.5 = dramatic */
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);

  useEffect(() => {
    const outer = ref.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Reveal once on enter
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedRef.current) {
          revealedRef.current = true;
          outer.dataset.revealed = "true";
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(outer);

    // Gentle parallax drift while in view
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below) .. 0 (centered) .. 1 (above)
      const p = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, p));
      const shift = -clamped * 14 * intensity; // px
      inner.style.setProperty("--drift", `${shift.toFixed(2)}px`);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={`scroll-scene ${className}`} data-revealed="false">
      <div ref={innerRef} className="scroll-scene-inner">
        {children}
      </div>
    </div>
  );
}
