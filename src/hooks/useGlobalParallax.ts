import { useEffect } from "react";

/**
 * Global 3D parallax engine.
 *
 * Targets any element with a `data-parallax` attribute:
 *   data-parallax="<speed>"        e.g. "0.15" — vertical translate intensity
 *   data-parallax-tilt="<deg>"     e.g. "6"    — rotateY/rotateX intensity
 *   data-parallax-scale="<amt>"    e.g. "0.05" — scale-with-scroll intensity
 *   data-parallax-z="<px>"         e.g. "60"   — translateZ depth (3D)
 *
 * Single rAF loop, only updates visible elements (IntersectionObserver),
 * respects prefers-reduced-motion.
 */
export function useGlobalParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (!nodes.length) return;

    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) visible.add(el);
          else visible.delete(el);
        }
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    nodes.forEach((n) => {
      io.observe(n);
      n.style.willChange = "transform";
      n.style.transformStyle = "preserve-3d";
    });

    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight;
      const centerY = vh / 2;
      visible.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        // -1 (above viewport) … 0 (centered) … 1 (below viewport)
        const progress = Math.max(-1.4, Math.min(1.4, (elCenter - centerY) / vh));

        const speed = parseFloat(el.dataset.parallax || "0") || 0;
        const tilt = parseFloat(el.dataset.parallaxTilt || "0") || 0;
        const scale = parseFloat(el.dataset.parallaxScale || "0") || 0;
        const z = parseFloat(el.dataset.parallaxZ || "0") || 0;

        const ty = -progress * vh * speed;
        const ry = progress * tilt;
        const rx = -progress * (tilt * 0.4);
        const sc = 1 + Math.abs(progress) * -scale;

        el.style.transform =
          (z ? `perspective(1400px) ` : "") +
          `translate3d(0, ${ty.toFixed(2)}px, ${z}px) ` +
          `rotateY(${ry.toFixed(2)}deg) rotateX(${rx.toFixed(2)}deg) ` +
          `scale(${sc.toFixed(4)})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      nodes.forEach((n) => {
        n.style.transform = "";
        n.style.willChange = "";
      });
    };
  }, []);
}
