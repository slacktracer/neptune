import type p5 from "p5";

import type { Petard } from "./Petard";

export type RenderPetard = (input: { $: p5; petard: Petard }) => void;
