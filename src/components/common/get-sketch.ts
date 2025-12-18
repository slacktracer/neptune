import p5 from "p5";

export const getSketch = ({ node }: { node: HTMLDivElement }) => {
  const sketch = new p5(() => {}, node);

  return sketch;
};
