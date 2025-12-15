import type p5 from "p5";

import type { Petard } from "./Petard";

export type MakePetard = (
  input: { colour: p5.Color; x: number; y: number },
) => Petard;
