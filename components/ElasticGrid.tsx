"use client";

import { useEffect, useRef } from "react";

/**
 * Background grid that behaves like a stretched rubber sheet.
 * Each intersection is a damped spring anchored to its rest position;
 * the pointer pushes nearby nodes outward and they snap back on release.
 *
 * Renders to a single canvas, so cost is one draw per frame regardless of
 * node count. Falls back to a static grid when the user prefers reduced motion.
 */
export default function ElasticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const SPACING = 54;      // grid pitch in px
    const RADIUS = 210;      // pointer influence radius
    const PUSH = 30;         // peak displacement
    const STIFFNESS = 0.11;  // spring constant
    const DAMPING = 0.84;    // velocity retention

    type Node = { ox: number; oy: number; x: number; y: number; vx: number; vy: number };

    let nodes: Node[] = [];
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let raf = 0;
    let settled = false;
    const pointer = { x: -9999, y: -9999, active: false, press: 1 };

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / SPACING) + 1;
      rows = Math.ceil(height / SPACING) + 1;
      nodes = new Array(cols * rows);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;
          nodes[r * cols + c] = { ox, oy, x: ox, y: oy, vx: 0, vy: 0 };
        }
      }
    }

    const at = (r: number, c: number) => nodes[r * cols + c];

    function step() {
      let moving = false;
      const r2 = RADIUS * RADIUS;

      for (const n of nodes) {
        let tx = n.ox;
        let ty = n.oy;

        if (pointer.active) {
          const dx = n.ox - pointer.x;
          const dy = n.oy - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2 * 2.5) {
            const falloff = Math.exp(-d2 / r2);
            const d = Math.sqrt(d2) || 1;
            const amount = PUSH * falloff * pointer.press;
            tx += (dx / d) * amount;
            ty += (dy / d) * amount;
          }
        }

        n.vx = (n.vx + (tx - n.x) * STIFFNESS) * DAMPING;
        n.vy = (n.vy + (ty - n.y) * STIFFNESS) * DAMPING;
        n.x += n.vx;
        n.y += n.vy;

        if (!moving && (Math.abs(n.vx) > 0.02 || Math.abs(n.vy) > 0.02)) moving = true;
      }
      settled = !moving && !pointer.active;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Base mesh — one path, one stroke.
      ctx!.beginPath();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const n = at(r, c);
          if (c === 0) ctx!.moveTo(n.x, n.y);
          else ctx!.lineTo(n.x, n.y);
        }
      }
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const n = at(r, c);
          if (r === 0) ctx!.moveTo(n.x, n.y);
          else ctx!.lineTo(n.x, n.y);
        }
      }
      ctx!.strokeStyle = "rgba(255,255,255,0.062)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // Highlight pass — only the few segments the pointer is deforming.
      if (pointer.active) {
        const r2 = RADIUS * RADIUS;
        ctx!.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const n = at(r, c);
            const dx = n.ox - pointer.x;
            const dy = n.oy - pointer.y;
            if (dx * dx + dy * dy > r2) continue;
            if (c + 1 < cols) {
              const right = at(r, c + 1);
              ctx!.moveTo(n.x, n.y);
              ctx!.lineTo(right.x, right.y);
            }
            if (r + 1 < rows) {
              const below = at(r + 1, c);
              ctx!.moveTo(n.x, n.y);
              ctx!.lineTo(below.x, below.y);
            }
          }
        }
        ctx!.strokeStyle = "rgba(34,211,238,0.30)";
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
    }

    function loop() {
      step();
      draw();
      // Idle out once everything has come to rest; the pointer wakes it again.
      if (settled) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    }

    function wake() {
      if (!raf) raf = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      wake();
    }
    function onLeave() {
      pointer.active = false;
      wake();
    }
    function onDown() {
      pointer.press = 2.1; // press harder into the sheet
      wake();
    }
    function onUp() {
      pointer.press = 1;
      wake();
    }
    function onResize() {
      build();
      wake();
    }

    build();
    draw();

    if (reduce) return; // static grid, no listeners, no rAF

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        maskImage:
          "radial-gradient(ellipse 100% 70% at 50% 0%, #000 55%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 100% 70% at 50% 0%, #000 55%, transparent 100%)",
      }}
    />
  );
}
