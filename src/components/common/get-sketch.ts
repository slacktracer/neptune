export const getSketch = async ({ node }: { node: HTMLDivElement }) => {
  const { default: p5 } = await import("p5");

  const sketch = new p5(() => {}, node);

  return { p5, sketch };
};
