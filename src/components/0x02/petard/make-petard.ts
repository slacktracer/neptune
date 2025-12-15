import type { MakePetard } from "../types/MakePetard";
import type { Petard } from "../types/Petard";

export const makePetard: MakePetard = ({ colour, x, y }) => {
  const petard: Petard = { colour, height: 50, x, y, width: 50 };

  return petard;
};
