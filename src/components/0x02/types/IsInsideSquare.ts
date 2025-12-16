export type IsInsideSquare = (
  input: {
    square: {
      height: number;
      width: number;
      x: number;
      y: number;
    };
    x: number;
    y: number;
  },
) => boolean;
