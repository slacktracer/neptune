import type { IsInsideSquare } from "../0x02/types/IsInsideSquare";

export const isInsideSquare: IsInsideSquare = ({ square, x, y }) => {
  return x >= square.x && x <= square.x + square.width &&
    y >= square.y && y <= square.y + square.height;
};
