import type p5 from "p5";

export type Petard = {
  acceleration: p5.Vector;
  colour: p5.Color;
  height: number;
  mass: number;
  position: p5.Vector;
  velocity: p5.Vector;
  width: number;
};
