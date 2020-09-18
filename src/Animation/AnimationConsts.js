export const pageTransition = {
  in: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: { duration: 2 },
  },
  out: {
    opacity: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 2.5 },
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
    transition: { ease: "easeOut", duration: 2.2 },
  },
};
