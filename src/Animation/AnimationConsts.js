export const pageTransition = {
  in: {
    opacity: [0, 0, 0.5, 1, 1, 1],
    scale: [0, 0, 0.5, 1, 1.2, 1],
    transition: { duration: 4 },
  },
  out: {
    opacity: 0,
    scale: 0,
    transition: { ease: "easeOut", duration: 0 },
  },
};

export const homeTransition = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0,
    transition: { ease: "easeOut", duration: 4.5 },
  },
};
