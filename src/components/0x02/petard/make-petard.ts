import type { MakePetard } from "../types/MakePetard";
import type { Petard } from "../types/Petard";

export const makePetard: MakePetard = ({ $, colour, x, y }) => {
  const petard: Petard = {
    acceleration: $.createVector(0, 0),
    colour,
    height: 100,
    mass: 1,
    position: $.createVector(x, y),
    velocity: $.createVector(0, 1),
    width: 100,
  };

  return petard;
};
