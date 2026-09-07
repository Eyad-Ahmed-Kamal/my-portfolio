"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Stagger index — each step delays the reveal by 70ms. */
  delayStep?: number;
  className?: string;
  as?: "div" | "section" | "figure" | "li";
};

/**
 * Client wrapper that reveals server-rendered children on scroll.
 * Keeps the content itself a Server Component — only the wrapper ships JS.
 */
export default function Reveal({ children, delayStep = 0, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : motionTokens.distance.lg }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.15 : motionTokens.duration.normal,
        ease: motionTokens.easing.smooth,
        delay: reduce ? 0 : delayStep * 0.07,
      }}
    >
      {children}
    </MotionTag>
  );
}
