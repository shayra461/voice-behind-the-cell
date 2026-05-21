import { useEffect } from "react";

/**
 * Global 3D parallax + cinematic depth-scroll engine.
 *
 * Per-element parallax (data-parallax):
 *   data-parallax="<speed>"        e.g. "0.15" — vertical translate intensity
 *   data-parallax-tilt="<deg>"     e.g. "6"    — rotateY/rotateX intensity
 *   data-parallax-scale="<amt>"    e.g. "0.05" — scale-with-scroll intensity
 *   data-parallax-z="<px>"         e.g. "60"   — translateZ depth (3D)
 *
 * Section depth-warp (data-depth-section):
 *   Each tagged section feels like it travels INTO the distance as you scroll
 *   past it, while the next section emerges FROM depth toward the camera.
 *   Add data-depth-section to any <section> wrapper you want to participate.
 *
 * Single rAF loop, IntersectionObserver gated, respects prefers-reduced-motion.
 */
export function useGlobalParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const parallaxNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const sectionNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-depth-section]")
    );
    if (!parallaxNodes.length && !sectionNodes.length) return;

    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) visible.add(el);
          else visible.delete(el);
        }
      },
      { rootMargin: "30% 0px 30% 0px" }
    );

    [...parallaxNodes, ...sectionNodes].forEach((n) => {
      io.observe(n);
      n.style.willChange = "transform, opacity, filter";
      n.style.transformStyle = "preserve-3d";
    });

    // Sections need perspective on their parent for true 3D depth.
    sectionNodes.forEach((n) => {
      const parent = n.parentElement;
      if (parent && !parent.style.perspective) {
        parent.style.perspective = "1800px";
        parent.style.perspectiveOrigin = "50% 50%";
        parent.style.transformStyle = "preserve-3d";
      }
    });

    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight;
      const centerY = vh / 2;

      visible.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        // ── Depth-section warp ─────────────────────────────────
        if (el.hasAttribute("data-depth-section")) {
          // progress: -1 (below, about to enter) … 0 (centered) … 1 (above, leaving)
          const progress = Math.max(
            -1.2,
            Math.min(1.2, (centerY - elCenter) / vh)
          );
          const abs = Math.abs(progress);

          // Coming in from depth (progress < 0): translateZ negative → pull forward as it nears center
          // Going out to depth (progress > 0): translateZ negative + slight tilt back → recedes
          const tz = -abs * 420; // both directions push back
          const ry = progress > 0 ? progress * 6 : 0; // only leaving sections tilt back
          const rx = progress > 0 ? progress * 4 : 0;
          const ty = progress * 40; // subtle vertical drift
          const opacity = 1 - Math.min(0.55, abs * 0.55);
          const blur = Math.min(6, abs * 6);

          el.style.transform =
            `perspective(1800px) translate3d(0, ${ty.toFixed(2)}px, ${tz.toFixed(2)}px) ` +
            `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
          el.style.opacity = opacity.toFixed(3);
          el.style.filter = blur > 0.3 ? `blur(${blur.toFixed(2)}px)` : "";
          return;
        }

        // ── Per-element parallax ───────────────────────────────
        const progress = Math.max(-1.4, Math.min(1.4, (elCenter - centerY) / vh));
        const speed = parseFloat(el.dataset.parallax || "0") || 0;
        const tilt = parseFloat(el.dataset.parallaxTilt || "0") || 0;
        const scale = parseFloat(el.dataset.parallaxScale || "0") || 0;
        const z = parseFloat(el.dataset.parallaxZ || "0") || 0;

        const ty = -progress * vh * speed;
        const ry = progress * tilt;
        const rx = -progress * (tilt * 0.4);
        const sc = 1 + Math.abs(progress) * -scale;

        const needs3d = tilt !== 0 || z !== 0;
        el.style.transform =
          (needs3d ? `perspective(1400px) ` : "") +
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
      [...parallaxNodes, ...sectionNodes].forEach((n) => {
        n.style.transform = "";
        n.style.opacity = "";
        n.style.filter = "";
        n.style.willChange = "";
      });
    };
  }, []);
}
