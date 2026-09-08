"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motionTokens } from "@/lib/motion";

export type LightboxImage = {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  // Portalling to <body> is not cosmetic here. The lightbox is rendered inside
  // the project card, and that card carries backdrop-blur — an ancestor with a
  // backdrop-filter becomes the containing block for position:fixed, so the
  // dialog was being pinned to the card instead of the viewport and any page
  // taller than the card ran off the bottom.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = useReducedMotion();
  const open = index !== null;
  const current = open ? images[index] : null;

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      onNavigate((index + step + images.length) % images.length);
    },
    [index, images.length, onNavigate]
  );

  // Escape to close, arrows to navigate, Tab trapped inside the panel
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return onClose();
      if (e.key === "ArrowRight") return go(1);
      if (e.key === "ArrowLeft") return go(-1);
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, go]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Move focus into the panel on open
  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("button")?.focus();
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — enlarged report page`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ground/95 backdrop-blur-sm p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionTokens.duration.fast }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            className="relative flex max-h-full w-full max-w-[1400px] flex-col"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.97, y: 0 }}
            transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 mb-3" onClick={(e) => e.stopPropagation()}>
              <p className="font-mono text-xs sm:text-sm text-ink">
                {current.title}
                <span className="text-ink-muted ml-2">
                  {index + 1} / {images.length}
                </span>
                <span className="hidden sm:inline text-ink-muted ml-3 opacity-70">
                  click anywhere outside to close
                </span>
              </p>
              <button
                onClick={onClose}
                aria-label="Close enlarged view"
                className="p-2 rounded-lg border border-rule-strong bg-white/[0.04] text-ink hover:bg-white/[0.1] hover:border-rule-strong transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/*
              The page has to fit the viewport, not just its width. This box
              takes the height left over after the header and the dialog's own
              padding, and the image is clamped on both axes — a replaced
              element under max-width and max-height keeps its aspect ratio, so
              a wide report page letterboxes instead of running off-screen.
            */}
            <div
              className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-rule-strong bg-ground"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 1400px) 100vw, 1400px"
                /*
                  Sized against the viewport, not against the parent. As a flex
                  item the image gets min-height:auto and refuses to shrink below
                  its intrinsic height, and a percentage max-height does not
                  resolve against a flex-determined parent — so `max-h-full`
                  alone left it overflowing. svh keeps it inside the small
                  viewport, which is the one that survives mobile browser chrome.
                  The subtracted space covers the dialog padding and the header.
                */
                className="h-auto w-auto max-w-full object-contain max-h-[calc(100svh-7rem)] sm:max-h-[calc(100svh-10rem)]"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                  aria-label="Previous report page"
                  className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full border-2 border-ink/45 bg-ground/95 text-ink shadow-[0_8px_24px_-6px_rgba(0,0,0,0.9)] hover:bg-white/20 hover:border-ink hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-data-strong"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                  aria-label="Next report page"
                  className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full border-2 border-ink/45 bg-ground/95 text-ink shadow-[0_8px_24px_-6px_rgba(0,0,0,0.9)] hover:bg-white/20 hover:border-ink hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-data-strong"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
