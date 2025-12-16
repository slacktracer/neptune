import type p5 from "p5";

import type { Petard } from "./Petard";

export type UpdatePetard = (input: { $: p5; petard: Petard }) => void;
