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
    // No hover on touch, so the lattice would cost frames to no purpose.
    const coarse = !window.matchMedia("(pointer: fine)").matches;
    if (coarse) return;

    // The sheet is grabbed from empty space only. Anything that carries text or
    // takes input keeps its own pointer behaviour, so selecting a paragraph is
    // just a selection — previously every press here set user-select:none on
    // <body> and made the whole page uncopyable.
    const INTERACTIVE =
      "a, button, input, textarea, select, [role=dialog], p, h1, h2, h3, h4, h5, h6," +
      " li, code, pre, span, strong, em, figcaption, label, svg, img, table, figure";

    const SPACING = 54;           // grid pitch in px

    // Hovering only nudges the sheet aside.
    const HOVER_RADIUS = 185;
    const HOVER_PUSH = 16;

    // Grabbing hauls it along, up to the point where it gives.
    const GRAB_RADIUS = 320;
    const MAX_STRETCH = 190;

    // Viscous while held, springy once released — that is what reads as rubber.
    const STIFF_DRAG = 0.042;
    const DAMP_DRAG = 0.8;
    const STIFF_FREE = 0.075;
    const DAMP_FREE = 0.915;

    type Node = { ox: number; oy: number; x: number; y: number; vx: number; vy: number };

    let nodes: Node[] = [];
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let raf = 0;
    let settled = false;
    const pointer = { x: -9999, y: -9999, inside: false };
    const grab = { active: false, ox: 0, oy: 0, dx: 0, dy: 0 };

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
      const stiff = grab.active ? STIFF_DRAG : STIFF_FREE;
      const damp = grab.active ? DAMP_DRAG : DAMP_FREE;
      const gr2 = GRAB_RADIUS * GRAB_RADIUS;
      const hr2 = HOVER_RADIUS * HOVER_RADIUS;

      // Past MAX_STRETCH the sheet stops following and starts slipping.
      let dragX = grab.dx;
      let dragY = grab.dy;
      const pull = Math.hypot(dragX, dragY);
      if (pull > MAX_STRETCH) {
        const k = MAX_STRETCH / pull;
        dragX *= k;
        dragY *= k;
      }

      let moving = false;

      for (const n of nodes) {
        let tx = n.ox;
        let ty = n.oy;

        if (grab.active) {
          // Held: nodes near the grab point travel with the pointer.
          const dx = n.ox - grab.ox;
          const dy = n.oy - grab.oy;
          const d2 = dx * dx + dy * dy;
          if (d2 < gr2 * 3) {
            const falloff = Math.exp(-d2 / gr2);
            tx += dragX * falloff;
            ty += dragY * falloff;
          }
        } else if (pointer.inside) {
          // Free: a light shove away from the cursor.
          const dx = n.ox - pointer.x;
          const dy = n.oy - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < hr2 * 3) {
            const falloff = Math.exp(-d2 / hr2);
            const d = Math.sqrt(d2) || 1;
            tx += (dx / d) * HOVER_PUSH * falloff;
            ty += (dy / d) * HOVER_PUSH * falloff;
          }
        }

        n.vx = (n.vx + (tx - n.x) * stiff) * damp;
        n.vy = (n.vy + (ty - n.y) * stiff) * damp;
        n.x += n.vx;
        n.y += n.vy;

        if (!moving) {
          const off = Math.abs(n.x - n.ox) + Math.abs(n.y - n.oy);
          if (Math.abs(n.vx) > 0.015 || Math.abs(n.vy) > 0.015 || off > 0.4) moving = true;
        }
      }

      settled = !moving && !grab.active && !pointer.inside;
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
      ctx!.strokeStyle = "rgba(245,241,234,0.085)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // Highlight pass — only the few segments the pointer is deforming.
      if (grab.active || pointer.inside) {
        const hx = grab.active ? grab.ox : pointer.x;
        const hy = grab.active ? grab.oy : pointer.y;
        const hotR = grab.active ? GRAB_RADIUS : HOVER_RADIUS;
        const r2 = hotR * hotR;
        ctx!.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const n = at(r, c);
            const dx = n.ox - hx;
            const dy = n.oy - hy;
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
        ctx!.strokeStyle = grab.active ? "rgba(57,135,229,0.5)" : "rgba(57,135,229,0.28)";
        ctx!.lineWidth = grab.active ? 1.25 : 1;
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
      pointer.inside = true;
      if (grab.active) {
        grab.dx = e.clientX - grab.ox;
        grab.dy = e.clientY - grab.oy;
      }
      wake();
    }

    function onDown(e: PointerEvent) {
      // Real controls keep their clicks; the sheet is grabbed from empty space.
      // e.target is not always an Element (window, text nodes), so probe first.
      const el = e.target as Element | null;
      if (el && typeof el.closest === "function" && el.closest(INTERACTIVE)) return;
      grab.active = true;
      grab.ox = e.clientX;
      grab.oy = e.clientY;
      grab.dx = 0;
      grab.dy = 0;
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
      wake();
    }

    function onUp() {
      if (!grab.active) return;
      grab.active = false;
      grab.dx = 0;
      grab.dy = 0;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      wake();
    }

    function onLeave() {
      pointer.inside = false;
      onUp();
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
    window.addEventListener("pointercancel", onUp, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
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
