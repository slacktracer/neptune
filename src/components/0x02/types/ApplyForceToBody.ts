import type p5 from "p5";

export type ApplyForceToBody = (
  input: {
    body: { acceleration: p5.Vector; mass: number };
    force: p5.Vector;
    p5: typeof p5;
  },
) => void;
