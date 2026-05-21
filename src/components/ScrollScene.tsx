import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps a section and applies a cinematic scroll-driven zoom + fade.
 * As the section enters the viewport it scales up from 0.9 → 1 and fades in,
 * then as it leaves it gently scales down to 0.95 and dims — like a camera
 * passing through a scene.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: 0 when element just entering from bottom, 0.5 centered, 1 leaving top
      const center = rect.top + rect.height / 2;
      const p = 1 - center / vh; // ~ -0.5..1.5
      const clamped = Math.max(-0.4, Math.min(1.4, p));

      // bell-curve scale: peaks at 1 when centered
      const dist = Math.abs(clamped - 0.5);
      const scale = 1 - dist * 0.18 * intensity;
      const opacity = 1 - dist * 0.55 * intensity;

      el.style.transform = `scale(${scale.toFixed(3)})`;
      el.style.opacity = `${Math.max(0.35, opacity).toFixed(3)}`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "transform, opacity",
        transformOrigin: "center center",
        transition: "transform 120ms linear, opacity 120ms linear",
      }}
    >
      {children}
    </div>
  );
}
