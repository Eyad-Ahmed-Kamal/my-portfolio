export const motionTokens = {
  duration: { fast: 0.18, normal: 0.35, slow: 0.6 },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
    sharp: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  distance: { sm: 8, md: 16, lg: 24 },
};

export const revealContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const revealItem = {
  hidden: { opacity: 0, y: motionTokens.distance.lg },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
  },
};

export const revealItemReduced = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};
